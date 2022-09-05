gsap.from(".left",{
    y:"40",
    opacity:0,
    duration:.5,
})
gsap.from(".right",{

    y:"40",
    opacity:0,
    duration:.5,
    
})
gsap.to(".line1",{
    width:"37%",
    duration:2, 
})
gsap.from(".content",{
    scrollTrigger:{
        scroll:"body",
        trigger:".content",
        // markers:true,
        start:"top 50%",
        end:"bottom 50%",
        // scrub:true
    },
    y:"70",
    duration:0.5,
    opacity:0

})
gsap.from("h4",{
    scrollTrigger:{
        scroll:"body",
        trigger:"h4",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        // scrub:true
    },
    y:"35",
    duration:1
})
gsap.to(".line2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#page4",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        // scrub:true
    },
    width:"75%",
    duration:3,
    ease:"linear"
})
gsap.from(".btxt>h1:nth-child(1)",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#page4",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        // scrub:true
    },
    y:"350",
    duration:1
})
gsap.from(".btxt>h1:nth-child(2)",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#page4",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        // scrub:true
    },
    y:"350",
    duration:1,
    delay:0.5
})
gsap.to(".video2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#page5",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        scrub:true
    },
    y:"-130",
    duration:3
})
gsap.to(".hole1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#page5",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        scrub:true
    },
    y:"-130",
    duration:.5
})
gsap.from(".txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:".txt",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        // scrub:true
    },
    y:"100",
    duration:.5,
    opacity:0
})
gsap.from(".dtxt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#page8",
        // markers:true,
        start:"top 0%",
        end:"bottom 50%",
        scrub:true
    },
    position:"fixed",
    opacity:0,
})
gsap.from(".dtxt",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg3",
        // markers:true,
        start:"top 10%",
        end:"bottom 50%",
        scrub:true
    },
    y:"35",
    duration:1,
    opacity:0
})


gsap.from(".left1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".left1",
        // markers:true,
        start:"top 90%",
        end:"bottom 50%",
        // scrub:true
    },
    y:"50",
    duration:.5,
    opacity:0
})
gsap.from(".right1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".left1",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        // scrub:true
    },
    y:"50",
    duration:.5,
    opacity:0
})
gsap.to(".ball",{
    scrollTrigger:{
        scroll:"body",
        trigger:".ball",
        // markers:true,
        start:"top 60%",
        end:"bottom 50%",
        scrub:true
    },
    y:"-350",
    duration:6,
    backgroundColor:"yellow"
})
document.querySelector("#page2").addEventListener("mousemove",function(dets){
    setTimeout(function(){

        document.querySelector(".cursor").style.left=`${dets.x}px`,
        document.querySelector(".cursor").style.top=`${dets.y}px`
    },100)
    
});

document.querySelector("#page2").addEventListener("mouseover",function(){
    document.querySelector(".cursor").style.backgroundImage="url(https://assets.website-files.com/6205ecdcec584c56193d6121/624e913ad5a78b549657ae48_services_circle-text.svg",
    document.querySelector(".cursor").style.backgroundSize="cover"
    document.querySelector(".cursor").style.backgroundPosition="center"
    document.querySelector(".cursor").style.transform="scale(5)"
});
// document.querySelector("#page2").addEventListener("mouseleave",function(){
//     document.querySelector(".cursor").style.transform="scale(0)",
//     document.querySelector(".cursor").style.backgroundColorColor="black"
    
// });


// document.querySelector("#page8").addEventListener("mousemove",function(dets){
    
//     document.querySelector(".cursora1").style.left=`${dets.x}px`,
//     document.querySelector(".cursora1").style.top=`${dets.y}px`
// });

document.querySelector(".first").addEventListener("mouseover",function(){
    gsap.to(".layer11",{
        x:"-100%",
        duration:.2
    })
    gsap.to(".layer12",{
        x:"100%",
        duration:.2
    })
    gsap.to(".ae",{
        x:"200%",
        opacity:1,
    })
    gsap.to(".af",{
        
        opacity:0
    })
    document.querySelector(".x").style.color="black"
    document.querySelector(".video4").style.opacity="0"
    document.querySelector(".video5").style.opacity="0"
    document.querySelector(".mg5").style.display="none"
    document.querySelector(".video3").style.opacity="1"

    gsap.to(".layer41",{
        x:"-100%",
        duration:.3
    })
    gsap.to(".layer42",{
        x:"100%",
        duration:.3
    })

})
document.querySelector(".first").addEventListener("mouseout",function(){
    gsap.to(".layer11",{
        x:"0%",
        duration:0.2
    })
    gsap.to(".layer12",{
        x:"0%",
        duration:.2
    })
    gsap.to(".af",{
        x:"200%",
        opacity:2
    })
    gsap.to(".ae",{

        opacity:0
    })

    document.querySelector(".x").style.color="white"
    document.querySelector(".mg5").style.display="initial"

    
    gsap.to(".layer41",{
        x:"0%",
        duration:.03
    })
    gsap.to(".layer42",{
        x:"0%",
        duration:.03
    })
})
document.querySelector(".sec").addEventListener("mouseover",function(){
    gsap.to(".layer21",{
        x:"-100%",
        duration:.2
    })
    gsap.to(".layer22",{
        x:"100%",
        duration:.2
    })
    gsap.to(".ae1",{
        x:"200%",
        opacity:1,
    })
    gsap.to(".af1",{
        
        opacity:0
    })
    document.querySelector(".y").style.color="black"
    document.querySelector(".video3").style.opacity="0"
    document.querySelector(".video4").style.opacity="1"
    document.querySelector(".video5").style.opacity="0"
    document.querySelector(".mg5").style.display="none"




    gsap.to(".layer41",{
        x:"-100%",
        duration:.3
    })
    gsap.to(".layer42",{
        x:"100%",
        duration:.3
    })
    

})
document.querySelector(".sec").addEventListener("mouseout",function(){
    gsap.to(".layer21",{
        x:"0%",
        duration:0.2
    })
    gsap.to(".layer22",{
        x:"0%",
        duration:.2
    })
    gsap.to(".af1",{
        x:"200%",
        opacity:1
    })
    gsap.to(".ae1",{

        opacity:0
    })

    document.querySelector(".y").style.color="white"
    document.querySelector(".mg5").style.display="initial"



       
    gsap.to(".layer41",{
        x:"0%",
        duration:.03
    })
    gsap.to(".layer42",{
        x:"0%",
        duration:.03
    })
})
document.querySelector(".third").addEventListener("mouseover",function(){
    gsap.to(".layer31",{
        x:"-100%",
        duration:.2
    })
    gsap.to(".layer32",{
        x:"100%",
        duration:.2
    })
    gsap.to(".ae2",{
        x:"200%",
        opacity:1,
    })
    gsap.to(".af2",{
        
        opacity:0
    })
    document.querySelector(".z").style.color="black"
    document.querySelector(".video5").style.opacity="1"
    document.querySelector(".video3").style.opacity="0"
    document.querySelector(".video4").style.opacity="0"
    document.querySelector(".mg5").style.display="none"






    gsap.to(".layer41",{
        x:"-100%",
        duration:.3
    })
    gsap.to(".layer42",{
        x:"100%",
        duration:.3
    })


})
document.querySelector(".third").addEventListener("mouseout",function(){
    gsap.to(".layer31",{
        x:"0%",
        duration:0.2
    })
    gsap.to(".layer32",{
        x:"0%",
        duration:.2
    })
    gsap.to(".af2",{
        x:"200%",
        opacity:1
    })
    gsap.to(".ae2",{

        opacity:0
    })

    document.querySelector(".z").style.color="white"
    document.querySelector(".mg5").style.display="initial"

       
    gsap.to(".layer41",{
        x:"0%",
        duration:.03
    })
    gsap.to(".layer42",{
        x:"0%",
        duration:.03
    })
})
document.querySelector(".fourth").addEventListener("mouseover",function(){
    gsap.to(".layer41",{
        x:"-100%",
        duration:.2
    })
    gsap.to(".layer42",{
        x:"100%",
        duration:.2
    })
    
    // document.querySelector(".z").style.color="black"

})
document.querySelector(".fourth").addEventListener("mouseout",function(){
   
    document.querySelector(".mg5").style.display="none"
 
})

document.querySelector(".footer1").addEventListener("mouseover",function(){
    gsap.to(".lay11",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay12",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f1").style.color="black"
})
document.querySelector(".footer1").addEventListener("mouseout",function(){
    gsap.to(".lay11",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay12",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f1").style.color="white"
})
document.querySelector(".footer2").addEventListener("mouseover",function(){
    gsap.to(".lay21",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay22",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f2").style.color="black"
})
document.querySelector(".footer2").addEventListener("mouseout",function(){
    gsap.to(".lay21",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay22",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f2").style.color="white"
})
document.querySelector(".footer3").addEventListener("mouseover",function(){
    gsap.to(".lay31",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay32",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f3").style.color="black"
})
document.querySelector(".footer3").addEventListener("mouseout",function(){
    gsap.to(".lay31",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay32",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f3").style.color="white"
})
document.querySelector(".footer4").addEventListener("mouseover",function(){
    gsap.to(".lay41",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay42",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f4").style.color="black"
})
document.querySelector(".footer4").addEventListener("mouseout",function(){
    gsap.to(".lay41",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay42",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f4").style.color="white"
})
document.querySelector(".footer5").addEventListener("mouseover",function(){
    gsap.to(".lay51",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay52",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f5").style.color="black"
})
document.querySelector(".footer5").addEventListener("mouseout",function(){
    gsap.to(".lay51",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay52",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f5").style.color="white"
})
document.querySelector(".footer6").addEventListener("mouseover",function(){
    gsap.to(".lay61",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay62",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f6").style.color="black"
})
document.querySelector(".footer6").addEventListener("mouseout",function(){
    gsap.to(".lay61",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay62",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f6").style.color="white"
})
document.querySelector(".footer7").addEventListener("mouseover",function(){
    gsap.to(".lay71",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay72",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f7").style.color="black"
})
document.querySelector(".footer7").addEventListener("mouseout",function(){
    gsap.to(".lay71",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay72",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f7").style.color="white"
})
document.querySelector(".footer8").addEventListener("mouseover",function(){
    gsap.to(".lay81",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay82",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f8").style.color="black"
})
document.querySelector(".footer8").addEventListener("mouseout",function(){
    gsap.to(".lay81",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay82",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f8").style.color="white"
})
document.querySelector(".footer9").addEventListener("mouseover",function(){
    gsap.to(".lay91",{
        y:"-100%",
        duration:.2
    })
    gsap.to(".lay92",{
        y:"100%",
        duration:.2
    })
    document.querySelector(".f9").style.color="black"
})
document.querySelector(".footer9").addEventListener("mouseout",function(){
    gsap.to(".lay91",{
        y:"0%",
        duration:.2
    })
    gsap.to(".lay92",{
        y:"0%",
        duration:.2
    })
    document.querySelector(".f9").style.color="white"
})

document.querySelector(".circle1").addEventListener("mouseover",function(){
    gsap.to(".l1",{
        y:"-100%",
        duration:.2
    })

    gsap.to(".l11",{
        y:"100%",
        duration:.2

    })
    document.querySelector(".t").style.color = "black"

})
document.querySelector(".circle1").addEventListener("mouseout",function(){
    gsap.to(".l1",{
        y:"0%",
        duration:.2
    })

    gsap.to(".l11",{
        y:"0%",
        duration:.2

    })
    document.querySelector(".t").style.color = "white"
})
document.querySelector(".circle2").addEventListener("mouseover",function(){
    gsap.to(".l2",{
        y:"-100%",
        duration:.2
    })

    gsap.to(".l22",{
        y:"100%",
        duration:.2

    })
    document.querySelector(".l").style.color = "black"

})
document.querySelector(".circle2").addEventListener("mouseout",function(){
    gsap.to(".l2",{
        y:"0%",
        duration:.2
    })

    gsap.to(".l22",{
        y:"0%",
        duration:.2

    })
    document.querySelector(".l").style.color = "white"
})
document.querySelector(".circle3").addEventListener("mouseover",function(){
    gsap.to(".l3",{
        y:"-100%",
        duration:.2
    })

    gsap.to(".l33",{
        y:"100%",
        duration:.2

    })
    document.querySelector(".y1").style.color = "black"

})
document.querySelector(".circle3").addEventListener("mouseout",function(){
    gsap.to(".l3",{
        y:"0%",
        duration:.2
    })

    gsap.to(".l33",{
        y:"0%",
        duration:.2

    })
    document.querySelector(".y1").style.color = "white"
})
document.querySelector(".circle4").addEventListener("mouseover",function(){
    gsap.to(".l4",{
        y:"-100%",
        duration:.2
    })

    gsap.to(".l44",{
        y:"100%",
        duration:.2

    })
    document.querySelector(".i").style.color = "black"

})
document.querySelector(".circle4").addEventListener("mouseout",function(){
    gsap.to(".l4",{
        y:"0%",
        duration:.2
    })

    gsap.to(".l44",{
        y:"0%",
        duration:.2

    })
    document.querySelector(".i").style.color = "white"
})
