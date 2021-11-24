document.getElementById("photo1").addEventListener("click",movePic1)
document.getElementById("photo2").addEventListener("click",movePic2)
document.getElementById("photo3").addEventListener("click",movePic3)
document.getElementById("photo4").addEventListener("click",movePic4)


let tl1=gsap.timeline({paused:true})
let tl2=gsap.timeline({paused:true})
let tl3=gsap.timeline({paused:true})
let tl4=gsap.timeline({paused:true})
let counter=0;
let counter1=0;
let counter2=0;
let counter3=0;

tl1.to(".text1",{opacity:1})
tl2
.to(".photo2",{x:-600})
.to(".photo3",{x:-600},"<")
.to(".photo4",{x:-600},"<")
.to(".photo3",{x:-100},">")
.to(".photo4",{x:-100},"<")
.to(".text2",{opacity:1})

tl3

    .to(".photo2",{x:-600},">")
    .to(".photo3",{x:-550},"<")
    .to(".photo4",{x:-550},"<")
    .to(".photo4",{x:-100},">")
    .to(".text3",{opacity:1})


tl4
.to(".photo2",{x:-600},">")
.to(".photo3",{x:-550},"<")
.to(".photo4",{x:-500},"<")
.to(".text4",{opacity:1})
function movePic1(){
    
    if(counter==0){
        
       
        counter=1;
        tl1.play();
        

 
    }else{
       
       tl1.reverse();
       counter=0;
       
    }

    

}

function movePic2(){
   
    if(counter1==0){
        console.log("girdi2")
        tl2.play();
        console.log(counter1)
        // tl.paused()
       
        counter1=1;
        console.log(counter1)
        
    }else if(counter1==1){
        console.log("girdi")
        tl2.reverse();
        // tl.paused()
        counter1=0;
        console.log(counter1)
        

    }
    

}

function movePic3(){
    console.log("3de here")
   if(counter2==0){
       tl3.play()
    
    counter2=1
   }else{
       tl3.reverse()
       counter2=0;
   }

}

function movePic4(){
    console.log("de here")
    if(counter3==0){
        console.log(counter)
        tl4.play()
        
        counter3=1;
    }else{
        console.log(counter)
        tl4.reverse()
        counter3=0;
    }
   
}



