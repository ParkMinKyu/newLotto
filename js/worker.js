onmessage = function(event) {
    // 워커에서의 비동기 작업 수행    
    let startTime = new Date();
    let winNums = createWinNums();
    let userNums = [];
    let historys = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
    let rank = [0,0,0,0,0,0];
    let i = 0;

    while(true){
        i ++ ;
        for(let k = 0 ; k < event.data.buyCount ; k ++){
            userNums = createUserNums([0,0,0,0,0,0]);
            rank = checkGameNums(winNums, userNums, rank, historys, i);
            if( rank[0] == event.data.winStopCount ){
                break;
            }
        }    
        
        if( rank[0] == event.data.winStopCount ){
            break;
        }

        winNums = createWinNums();
    }
    postMessage({winNums: winNums, userNums: userNums, rank: rank, historys: historys});            
    postMessage( (i / 52 ) + ": " +  ((new Date().getTime() - startTime.getTime()) / 1000) + 'sec');            
  };

  createWinNums= function(){
        var winNums = [0,0,0,0,0,0,999];
        var i = 0;
        while(i < 6){
            var num = createRandomNum();
            while(winNums.indexOf(num) != -1){
                num = createRandomNum();
            }
            winNums[i++] = num;
        }
        winNums.sort(function(a,b){return a - b;});
        while(winNums[6] == 999){
            var num = createRandomNum();
            while(winNums.indexOf(num) != -1){
                num = createRandomNum();
            }
            winNums[i++] = num;
        }

        return winNums;
    }

  createUserNums= function(userNums){
    var i = 0;    
    while(i < 6){
        if(userNums[i] != 0){
            i++;
            continue;
        }
        var num = createRandomNum();
        while(userNums.find(v => v == num)){
            num = createRandomNum();
        }
        userNums[i++] = num;
    }
    return userNums.sort(function(a,b){return a - b;});
}

createRandomNum= function(){
    return parseInt((Math.random() *45)+1);
}

checkGameNums= function(winNums, userNums, rank, historys, gameCount){
    var matchCount = 0;        
    for(var i = 0 ; i < winNums.length - 1 ; i ++){
        if(userNums.indexOf(winNums[i]) != -1){
            matchCount++;
        }
    }
    
    switch (matchCount){
        case 3:                 
            rank[4]++;
            pushHistory(historys, userNums, gameCount, 5)
            break;
        case 4:            
            rank[3]++;
            pushHistory(historys, userNums, gameCount, 4)
            break;
        case 5:            
            if(userNums.indexOf(winNums[6]) != -1){
                rank[1]++;
                pushHistory(historys, userNums, gameCount, 2)
                break;
            }
            else{                
                rank[2]++;
                pushHistory(historys, userNums, gameCount, 3)
                postMessage({winNums: winNums, userNums: userNums, rank: rank, historys: historys});
                break;
            }
        case 6:            
            rank[0]++;
            pushHistory(historys, userNums, gameCount, 1)
            break;
        default :
            rank[5]++;
            break;
    }  

    return rank;
}

pushHistory = function(tar, userNums, gameCount, rank){    
    copyArrays(tar[0],userNums);
    tar[0][6] = gameCount;
    tar[0][7] = rank;
    for(var i = tar.length - 1 ; i > 0 ; i --){
        copyArrays(tar[i],tar[i - 1]);
    }
}

copyArrays = function(tar,arr){
    tar[0] = arr[0];
    tar[1] = arr[1];
    tar[2] = arr[2];
    tar[3] = arr[3];
    tar[4] = arr[4];
    tar[5] = arr[5];
    if(tar[6] != arr[6]){
        tar[6] = arr[6]
    }
    if(tar[7] != arr[7]){
        tar[7] = arr[7]
    }
}
