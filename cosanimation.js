var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imagdev = document.querySelector("#image")


main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out",
    })
})
imagdev.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:2,
    })
})

imagdev.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
    })
})