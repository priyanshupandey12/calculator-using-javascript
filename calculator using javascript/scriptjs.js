(function(){
     let screen =document.querySelector(".screen")
     let buttons=document.querySelectorAll(".btn")
     let answer=document.querySelector(".btn-green")
     let clean=document.querySelector(".btn-red")



     buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num
            screen.value+=value
        })
     })
       answer.addEventListener("click",function(e){
        if(screen.value =="") {
            screen.value="Please enter"
        }
        else {
            let result=eval(screen.value)
            screen.value=result
        }
       })
       clean.addEventListener("click",function(){
        screen.value=""
       })
     
})()