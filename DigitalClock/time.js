const clock=document.getElementById('clock')


//when we want to run a script for a interval we use setInterval function in JavaScript
setInterval(function(){
    let date=new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString();
},1000)