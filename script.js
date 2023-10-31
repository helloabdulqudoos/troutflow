gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.5,
    height : "60px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        merkers : true,
        start : "top -10px",
        end : "top -11px",
        scrub : 1}

})
