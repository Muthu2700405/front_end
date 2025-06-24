var emt = document.querySelectorAll('.slider_elements');
var form = document.querySelector('.form');
console.log(emt)
var x=0;
form.addEventListener("click",function(){
    for (var i=0;i<emt.length;i=i+1){
        if (i==x){
            emt[x].style.zIndex=5
            console.log(emt[x])
            x=x+1
        }
        else{
            emt[x].style.zIndex=0
        }
    }
})


