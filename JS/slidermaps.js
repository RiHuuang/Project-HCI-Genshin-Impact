var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter + 'mondstadt').checked = true;
    // console.log(document.getElementById('radio' + counter +'mondstadt'));
    console.log(counter+"mond");
    counter++;
    if(counter > 4){
        counter = 1;
    }
    
    
}, 2000)

var counter2=1;
setInterval(function(){
    document.getElementById('radio' + counter2 + 'liyue').checked = true;
    // console.log(document.getElementById('radio' + counter2 +'liyue').checked);
    console.log(counter2 + "liyue");
    counter2++;
    if(counter2 > 4){
        counter2 = 1;
    }
    
    
}, 2000)
var counter3=1;
setInterval(function(){
    document.getElementById('radio' + counter3 + 'inazuma').checked = true;
    // console.log(document.getElementById('radio' + counter3 +'inazuma').checked);
    console.log(counter3 + "inazuma");
    counter3++;
    if(counter3 > 4){
        counter3 = 1;
    }
    
    
}, 2000)
var counter4=1;
setInterval(function(){
    document.getElementById('radio' + counter4 + 'sumeru').checked = true;
    // console.log(document.getElementById('radio' + counter4 +'sumeru').checked);
    console.log(counter4 + "sumeru");
    counter4++;
    if(counter4 > 4){
        counter4 = 1;
    }
    
    
}, 2000)
