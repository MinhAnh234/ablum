let images= document.getElementById("images");
let collect = document.getElementById("collect");
console.log(collect);
images.addEventListener("click",function(){
    collect.className = '';
    images.className = "active"
},false) 
collect.addEventListener("click",function(){
    collect.className = "active"
    images.className = ""
},false) 

let love= document.getElementById("love");

love.addEventListener("click", function(){
    let love_icon = document.getElementById("love_icon");
    love_icon.style.color= "rgba(254, 44, 85, 1)"
})

