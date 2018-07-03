/**
 * Created by wang on 2018/6/1.
 */
(()=> {
    var createdArr = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0]];
    //生成九个不重复的数
    function duijiao() {
        var duijiaoArr = [];
        while (true) {
            var item = Math.floor(Math.random() * 10 + 1);
            if (duijiaoArr.indexOf(item) == -1 && item != 10) {
                duijiaoArr.push(item);
            } else if (duijiaoArr.length == 9) {
                break;
            }
        }
        return duijiaoArr;
    }
    //生成一个一到九的随机数
    function random(){
        while(true){
            var item = Math.floor(Math.random() * 10 + 1);
            if(item!=10){
                break;
            }
        }
        return item;
    }
    //找二维数组的转置
    function zhuanzhi(arr){
        var arrs=[];
        for(var i=0;i<9;i++){
            arrs[i]=[];
        }
        for(var j=0;j<arr.length;j++){
            for(var k=0;k<arr[j].length;k++){
                arrs[k][j]=arr[j][k];
            }
        }
        return arrs;
    }
    //生成三组九个不重复的数
    var duijiao1 = duijiao();
    var duijiao2 = duijiao();
    var duijiao3 = duijiao();
    //将他们插入对角线的三宫
    for (var col = 0; col < 9; col++) {
        for (var row = 0; row < 9; row++) {
            if (col <= 2 && row <= 2) {
                createdArr[col][row] = duijiao1[col*3+row];
            }else if(col<=5&&col>=3&&row<=5&&row>=3){
                createdArr[col][row] = duijiao2[(col-3)*3+row-3]
            }else if(col<=8&&col>=6&&row<=8&&row>=6){
                createdArr[col][row] = duijiao3[(col-3*2)*3+row-3*2]
            }
        }
    }
    //在每一行挨着插数
    function insert(num,arr,row,col){
        var count=0;
        if(arr[row].indexOf(num)==-1){
            for(var j=0;j<arr.length;j++){
                if(arr[j][col]==num){
                    count=1;
                    break;
                }
            }
            if(count==0&&arr[row][col]==0){
                //arr[row][col]=num;
                return true;
            }else{
                return false;
            }
        }else {
            return false;
        }
    }
    function jiancha() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var num = random();
                if (createdArr[i][j] == 0 && insert(num, createdArr, i, j)) {
                    createdArr[i][j] = num;
                }
            }
        }
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if(createdArr[i][j] == 0){
                jiancha();
            }
        }
    }
    console.log(createdArr);
})();