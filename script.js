function loading(){
    const tl=gsap.timeline();

tl.to(".yellow1",{
    top:'-100%',
    duration:0.5,
    delay:0.5,
    ease:"expo.out"
})

tl.from(".yellow2",{
    top:'100%',
    duration:0.5,
    delay:0.5,
    ease:"expo.out"
})

tl.to(".loader h1",{
    color:"black",
    duration:0.1,
    delay:0.1,
})

tl.to(".loader",{
    display:"none"
})
}

loading();


// locomotive

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let page2=document.querySelector(".page2");
let elem=document.querySelectorAll(".element");
elem.forEach(function(e){
    e.addEventListener("mousemove",()=>{
        let bg =e.getAttribute("data-img")
        page2.style.backgroundImage=`url(${bg})`;
        // console.log(bg);
    })
})