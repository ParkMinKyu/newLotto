var realNums = new Array();
var ballList = new Array(); 
var selectBall = new Array();
$(function(){
	
	$(document).on('pagechange',function(data,obj){
		if(obj.absUrl == 'http://parkminkyu.github.io/newLotto/myLotto.html#comment'){
			getComment();
		}
		
	});
	
	$('#insertBtn').on('tap',function(){
			
		if($('input[id=comment]').val() == '' || $('input[id=comment]').length > 100){
			CallAndroid.Alert("빈 내용이나 100 글자 이상은 등록 할 수 없습니다..");
			$('input[id=comment]').focus();
		}else{
			$.base64.utf8encode = true;
			//var message = $.base64.btoa($('input[id=comment]').val())
			var message = encodeURI(encodeURIComponent($('input[id=comment]').val()));
			$.getJSON("http://syeon0727.cafe24.com:10005/uriel/lotto/insertComment.do?callback=?&comment="+message,function(data){
				$('input[id=comment]').val('');
				getComment();
			});
		}
	});
	
	
	$('#reBall').on('tap',function(){
		$('#randomTable').html('');
		ballList = new Array(); 
		for(var i = 1 ; i <= 5 ; i ++){
			ballList.push(randomBall());
		}
		for(var i = 0 ; i < ballList.length ; i ++){
			var $tr = $('<tr>');
			for(var k = 0 ; k < ballList[i].length ; k ++){
				var img = getBall(ballList[i][k]);
				var $td = $('<td>',{
					html : $(img).removeClass('noMatch')
				});
				$tr.append($td);
			}
			$('#randomTable').append($tr);
		}
	});
	
	$('#randomSave').on('tap',function(){
		CallAndroid.saveRandomNum(ballList.toString());
		location.href="#home";
		$('#reBall').tap();
	});
	
	$('#holdSave').on('tap',function(){
		if(selectBall.length < 6){
			CallAndroid.Alert("6개의 번호를 선택 하세요.");
		}else{
			CallAndroid.holdRandomNum(selectBall.sort(function(a,b){return a - b;}).toString());
			location.href="#home";
		}
	});
	
	$('#allClear').on('tap',function(){
		CallAndroid.clearNum();
	});
	
	$('#callCamera').on('tap',function(){
		CallAndroid.callCamera();
	});
	
	$('#reBall').tap();
	CallAndroid.getLastGameNum('');
	//setRealNums([4,6,11,22,35,44,33]);
	//setMyNums([[4,6,11,22,35,44],[4,6,11,22,33,44],[4,6,11,22,35,41],[4,6,11,22,32,41],[4,6,10,22,32,41],[3,5,11,22,32,41]]);
	//createSelectBall();
});

//덧글 불러오기
function getComment(){
	$.getJSON("http://syeon0727.cafe24.com:10005/uriel/lotto/getComment.do?callback=?",function(data){
			var $target = $('div[id=comment] > div[data-role=content] > ul');
			$target.find('li').remove();
			for(var i = 0 ; i < data.length ; i ++){
				$.base64.utf8encode = true;
				var date = new Date(data[i].regtime.time);
				var message = decodeURI(data[i].comment);
				message = message.replace(new RegExp('\\+','g'),' ');
				message = message.replace(new RegExp('\\<','g'),'&lt;');
				message = message.replace(new RegExp('\\>','g'),'&gt;');
				var $li = $('<li>',{
					html : "<p style='white-space: initial;font-size: 14px;text-overflow: initial;word-break: break-all;'>"+message +"<br><span style='font-weight:bold;float:right;'>( "+ date.getFullYear() + "년 " + (date.getMonth()+1)+"월 "+ date.getDate()+"일"+" )</span></p>"
				});
				$target.append($li);
			}
			$target.listview();
			$target.listview('refresh');
		});
}

//사용자 선택 볼 생성
function createSelectBall(){
	$('#ballList').find('tr').remove();
	selectBall = new Array();
	var num = 1;
	for(var i = 0 ; i < 9 ; i ++){
		var $tr = $('<tr>');
		for(var k = 0 ; k < 5 ; k ++){
			var img = getBall(num);
			var $td = $('<td>',{
				html : img,
				tap : function(){
					var isNum = false;
					var $obj = $(this).find('div');
					var num = parseInt($obj.attr('num'));
					for(var i = 0 ; i < selectBall.length ; i++){
						if(selectBall[i] == num){
							isNum = true;
							break;
						}
					}
					if(isNum){
						var index = selectBall.indexOf(num);
						if (index > -1) {
							selectBall.splice(index, 1);
						}
						$obj.addClass('noMatch');
					}else{
						if(selectBall.length == 6){
							CallAndroid.Alert('6 개의 번호를 선택 하셨습니다. 저장버튼을 눌러 번호를 저장하세요.');
							return;
						}
						selectBall.push(num);
						$obj.removeClass('noMatch');
					}
				}
			});
			$tr.append($td);
			num++;
		}
		$('#ballList').append($tr);
	}
}

//당첨번호 셋팅
function setRealNums(nums){
	$('#realNums').find('tr').remove();
	realNums = new Array();
	var $tr = $('<tr>');
	for(var i = 0 ; i < nums.length ; i ++){
		var img = getBall(nums[i]);
		if(i == 6){
			var $th = $('<th>',{
				html : "&nbsp;+&nbsp;"
			});
			$tr.append($th);
		}
		var $th = $('<th>',{
			html : $(img).removeClass('noMatch')
		});
		realNums.push(nums[i]);
		$tr.append($th);
	}
	$('#realNums').append($tr);
}

//내 번호 당첨 확인
function setMyNums(nums){
	var length = nums.length;
	$('#myNums').find('tr').remove();
	
	if(length == 0){
		var $tr = $('<tr>');
		var $td = $('<td>',{
                                css : {width:'240px'},
				html : "번호를 생성 후 저장하세요."
			});
		$tr.append($td);
		$('#myNums').append($tr);
	}
	
	for(var i = 0 ; i < length ; i ++){
		var $tr = $('<tr>');
		for(var k = 0 ; k < nums[i].length ; k ++){
			var img = getBall(nums[i][k]);
			var $td = $('<td>',{
				html : img
			});
			$tr.append($td);
			if(k == (nums[i].length-1)){
				var result = checkBall($tr);
				var $td = $('<td>',{
					html : "&nbsp;=&nbsp;"
				});
				$tr.append($td);
				
				var $td = $('<td>',{
					html : result
				});
				$tr.append($td);
			}
		}
		$('#myNums').append($tr);
	}
}

//공 Object 리턴
function getBall(num){
	if(num >= 40){
		return "<div class='ball1 noMatch' num='"+num+"'>"+num+"</div>";
	}else if(num >= 30){
		return "<div class='ball2 noMatch' num='"+num+"'>"+num+"</div>";
	}else if(num >= 20){
		return "<div class='ball3 noMatch' num='"+num+"'>"+num+"</div>";
	}else if(num >= 10){
		return "<div class='ball4 noMatch' num='"+num+"'>"+num+"</div>";
	}else if(num > 0){
		return "<div class='ball5 noMatch' num='"+num+"'>"+num+"</div>";
	}
}

//랜덤 번호 생성
function randomBall(){
	var length = 6;
	var ballList = new Array();
	
	for(var i = 0 ; i < length ; i ++){
		var num = parseInt(Math.random()*45)+1;
		if(i>0 && isNum(ballList,num)){
			i--;
		}else{
			ballList.push(num);
		}
	}
	return ballList.sort(function(a,b){
		return a - b;
	});
}

//중복 생성 확인
function isNum(list,num){
	var isSame = $('#isSame').is(':checked');
	for(var i = 0 ; i < list.length ; i ++ ){
		if(list[i] == num){
			return true;
		}else{
			if(isSame){
				for(var k = 0 ; k < ballList.length ; k ++){
					for(var j = 0 ; j < ballList[k].length ; j++){
						if(ballList[k][j] == num){
							return true;
						}
	
					}
				}
			}
		}
	}
}

//당첨 확인
function checkBall($obj){
	var $myNums = $obj.find('div');
	var checkCount = 0;
	for(var i = 0 ; i < realNums.length ; i ++){
		for(var k = 0 ; k < $myNums.length ; k ++ ){
			var obj = $myNums[k];
			var num = parseInt($(obj).attr("num"));
			if(realNums[i] == num){
				if(i == (realNums.length-1)){
					if(checkCount >=5 ){
						checkCount+=2;
						$(obj).css('opacity','0.4');
					}
				}else{
					checkCount++;
					$(obj).removeClass('noMatch');
				}
				break;
			}
		}
	}
	
	switch(checkCount){
		case 7 : 
			return "2등";
		case 6 : 
			return "1등";
		case 5 : 
			return "3등";
		case 4 : 
			return "4등";
		case 3 : 
			return "5등";
		default : 
			return "꽝~";
	}
}

//당첨 회차 생성
function setMatchNums(num){
	
	var year = num.split(";")[0];
	var num = parseInt(num.split(";")[1]);
	
	$('#gameyear').text(year);

	var onum = parseInt($($('#matchNums').find('option')[0]).attr('value'));
	
	$('#matchNums').find('option').remove();

	for(var i = (onum?onum:num) ; i > 0 ; i --){
		var $option = $('<option>',{
			value : i,
			text : i + " 회"
		});
		$('#matchNums').append($option);
		if(i == num){
			$option.attr("selected",true);
		}
	}
	
	$('#matchNums').selectmenu( "refresh" );
	
	$('#matchNums').die().live('change',function(){
		CallAndroid.getLastGameNum($(this).val());
	});

}
