 function sliderImg(anything){
           document.querySelector('.slideimg').src=anything;
       }
       function changeColor(color){
           const cr =document.querySelector('.cr');
           const link =document.querySelector('.link');
           const start=document.querySelector('.start');
           cr.style.background =color;
           start.style.color =color;
           link.style.background =color
           
       }
