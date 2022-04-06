var currTime = 0
function testCntdown(){
    console.log("testCntdown() started");
    currTime = 50
    for(var i = 0; i <= 10; i++){
        console.log(i);
        setTimeout(function(){
            document.getElementById("blastOffText").innerHTML = currTime;
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML = "Blastoff!";
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
}