var realNums = new Array();
var ballList = new Array(); 
var selectBall = new Array();
var delBall = new Array();
$(function(){
	$('select[name=one], select[name=two], select[name=three], select[name=four], select[name=five]').on("change",function(){
		var count = parseInt($('select[name=one]').val())+parseInt($('select[name=two]').val())+parseInt($('select[name=three]').val())+parseInt($('select[name=four]').val())+parseInt($('select[name=five]').val());
		if(count > 6){
			$(this).val(0).selectmenu( "refresh" );;
			CallAndroid.Alert('각 범위의 총 합이6을 넘을 수 없습니다.');
		}
	});
	
	$('#choiceSave').on('click',function(){
		var count = parseInt($('select[name=one]').val())+parseInt($('select[name=two]').val())+parseInt($('select[name=three]').val())+parseInt($('select[name=four]').val())+parseInt($('select[name=five]').val());
		if(count < 6){
			CallAndroid.Alert('각 범위 총 합을 6으로 맞춰 주세요.');
		}else{
			location.href="#home";
			setTimeout(function(){createChoiceBall();},200);
		}
	});
	
	$('#randomSave').on('touchstart',function(e){
		CallAndroid.saveRandomNum(ballList.toString());
		location.href="#home";
		$('#reBall').tap();
		e.preventDefault();
	});
	
	$('#allClear').on('tap',function(e){
		CallAndroid.clearNum();
		e.preventDefault();
	});
	
	$('#delSave').on('touchstart',function(e){
		if(delBall.length==0){
			CallAndroid.Alert('제외할 번호를 선택 하세요.');
		}else{
			CallAndroid.createDelNums(delBall.toString());
			location.href="#home";
		}
		e.preventDefault();
	});
	
	$('#ballList').find('div').on('touchstart',function(e){
		var isNum = false;
		var $obj = $(this);
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
		e.preventDefault();
	});
	
	$('#delballList').find('div').on('touchstart',function(e){
		var isNum = false;
		var $obj = $(this);
		var num = parseInt($obj.attr('num'));
		for(var i = 0 ; i < delBall.length ; i++){
			if(delBall[i] == num){
				isNum = true;
				break;
			}
		}
		if(isNum){
			var index = delBall.indexOf(num);
			if (index > -1) {
				delBall.splice(index, 1);
			}
			$obj.addClass('noMatch');
		}else{
			if(delBall.length == 15){
				CallAndroid.Alert('제외 수는 15개 까지 지정 가능 합니다.');
				return;
			}
			delBall.push(num);
			$obj.removeClass('noMatch');
		}
		e.preventDefault();
	});	
	
	$('#reBall').on('touchstart',function(e){
		var checked = $('#isSame').is(':checked');
		CallAndroid.createRandomBall(checked);
		e.preventDefault();
	});
	
	$('#holdSave').on('touchstart',function(e){
		if(selectBall.length < 6){
			CallAndroid.Alert("6개의 번호를 선택 하세요.");
		}else{
			CallAndroid.saveRandomNum(selectBall.sort(function(a,b){return a - b;}).toString());
			location.href="#home";
		}
		e.preventDefault();
	});

	CallAndroid.getLastGameNum('');
});

function showPop(type){
	if(type == 1){
		selectBall = new Array();
		$('#ballList').find('div').addClass('noMatch');
		$('#holdHref').click();
	}
	else if (type == 2 ) $('#randHref').click();
	else if (type == 3 ) $('#delHref').click();
}

function createRandTable(nums){
	$('#randomTable').html('');
	 ballList = new Array(); 
	for(var i = 0 ; i < nums.length ; i ++){
		var $tr = $('<tr>');
		for(var k = 0 ; k < nums[i].length ; k ++){
			var img = getBall(nums[i][k]);
			 ballList.push(nums[i][k]); 
			var $td = $('<td>',{
				html : $(img).removeClass('noMatch')
			});
			$tr.append($td);
		}
		$('#randomTable').append($tr);
	}
}

//사용자 선택 볼 생성
function createSelectBall(num){
	
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
		//$('#realNums').append($div);
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
				html : "자동 OR 고정번호를 생성 후 저장하세요."
			});
		$tr.append($td);
		//$('#myNums').append($div);
	}
	
	for(var i = 0 ; i < length ; i ++){
		var $tr = $('<tr>');
		for(var k = 0 ; k < nums[i].length ; k ++){
			var img = getBall(nums[i][k]);
			var $td = $('<td>',{
				html : img
				
			});
			//$('#myNums').append($div);
			$tr.append($td);
			if(k == (nums[i].length-1)){
				var result = checkBall($tr);
				var $td = $('<td>',{
					html : "&nbsp;=&nbsp;"
				});
				//$('#myNums').append($div);
				$tr.append($td);
				
				var $td = $('<td>',{
					html : result
				});
				//$('#myNums').append($div);
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
	
	$('#gameyear').html(year);

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

//ChoiceBall
function createChoiceBall(){
$('#randHref').click();

var choiceBall = new Array();

for(var i = 0 ; i < 5 ; i ++){
	choiceBall[i] = new Array();
	choiceBall[i].contains = function(element) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == element) {
				return true;
			}
		}
		return false;
	}

	var oneCount = parseInt($('select[name=one]').val());
	var twoCount = parseInt($('select[name=two]').val());
	var threeCount = parseInt($('select[name=three]').val());
	var fourCount = parseInt($('select[name=four]').val());
	var fiveCount = parseInt($('select[name=five]').val());

	var isOneCreate = oneCount > 0;
	var istwoCreate = twoCount > 0;
	var isthreeCreate = threeCount > 0;
	var isfourCreate = fourCount > 0;
	var isfiveCreate = fiveCount > 0;	

	var ranNum = Math.floor(Math.random() * 45) +1;
	if(isOneCreate){	
		while(isOneCreate){
			while( choiceBall[i].contains(ranNum) || ranNum > 9 || ranNum < 1){
				ranNum = Math.floor(Math.random() * 9) +1;
			}
			choiceBall[i].push(ranNum);
			if(--oneCount == 0)
				isOneCreate = false;
		}
	}else{
		isOneCreate = !isOneCreate;
	}

	if(istwoCreate){
		while(istwoCreate){
			while( choiceBall[i].contains(ranNum) || ranNum > 19 || ranNum < 10){
				ranNum = Math.floor(Math.random() * 10) + 10;
			}
			choiceBall[i].push(ranNum);
			if(--twoCount == 0)
				istwoCreate = false;
		}
	}else{
		istwoCreate = !istwoCreate;
	}

	if(isthreeCreate){
		while(isthreeCreate){
			while( choiceBall[i].contains(ranNum) || ranNum > 29 || ranNum < 20){
				ranNum = Math.floor(Math.random() * 10) + 20;
			}
			choiceBall[i].push(ranNum);
			if(--threeCount == 0)
				isthreeCreate = false;
		}
	}else{
		isthreeCreate = !isthreeCreate;
	}

	if(isfourCreate){
		while(isfourCreate){
			while( choiceBall[i].contains(ranNum) || ranNum > 39 || ranNum < 30){
				ranNum = Math.floor(Math.random() * 10) + 30;
			}
			choiceBall[i].push(ranNum);
			if(--fourCount == 0)
				isfourCreate = false;
		}
	}else{
		isfourCreate = !isfourCreate;
	}
	if(isfiveCreate){
		while(isfiveCreate){
			while( choiceBall[i].contains(ranNum) || ranNum > 45 || ranNum < 40){
				ranNum = Math.floor(Math.random() * 6) + 40;
			}
			choiceBall[i].push(ranNum);
			if(--fiveCount == 0)
				isfiveCreate = false;
		}
	}else{
		isfiveCreate = !isfiveCreate;
	}
	choiceBall[i].sort(function(a,b){return a - b;});
}

createRandTable(choiceBall);
}
