'use strict'
$(function(){
  $(document).on("keydown", function (e) {
    var top=$(".box").css("top");
    var left=$(".box").css("left");

    top=PxParse(top)
    left=PxParse(left)

    console.log(top);
    const myKey = e.originalEvent.keyCode
    if (myKey == 39){
      $(".box").stop().css("transform","rotateY(0deg)").animate({
        left: "+=200px"
      }, 500)
    }
    else if(myKey==13){
        $(".feeding").addClass("feed-active")
        let eagle=($(".box").css("left"));
        eagle=PxParse(eagle)
        let basket=$(".basket").css("left")
  
        // var Myscore=$("<h3></h3>")
        // Myscore.append(".score")
        // for(var i=0;i<Myscore.length;i++){
        //   $(".Myscore").innerHTML = "Myscore: " + score;
        // }

        basket=PxParse(basket)
        setTimeout(() => {
         $(".box").find(".feeding.feed-active").remove()
        let feedDiv=$("<div class='feeding'></div>")
        feedDiv.append("<img width='40' src='img/worm.gif'/>")
        $(".box").append(feedDiv)
          }, 2500);

        if((eagle<=basket+65 && eagle>=basket-65)){
         
          setTimeout(() => {
            $(".box").find(".feeding.feed-active").remove()
            let succesImg=$("<img width='80px' class='scsImg' src='img/clap.gif'/>")
            $(".basket").append(succesImg)
            }, 800);
            setTimeout(() => {
            $(".scsImg").remove()
              
            }, 3000);
        }else{
          setTimeout(() => {
          $(".feeding.feed-active").find("img").attr("src","img/worm2.gif")
          $(".feeding.feed-active").css("left","-100%")
          
        }, 500);
        }

    } 
    else if (myKey == 37) {
      if(left>0){
        $(".box").stop().css("transform","rotateY(-180deg)").animate({
          left: "-=200px"
        }, 500)
      }
   
    } else if (myKey == 40) {
      if(top<50){
        $(".box").stop().animate({
          top: "+=100px"
        }, 500)
      }
      
    }
    else if (myKey == 38) {
      if(top>0){
        $(".box").stop().animate({
          top: "-=100px"
        }, 500)
      }
      }
     
  })
  setInterval(() => {
    AddRainDiv()
    $(".basket").first().remove()
  }, 4000);
}())

function AddRainDiv(){
  const rainDiv=$("<div></div>")
  rainDiv.addClass("basket")
  const width=($(document).outerWidth());
  var rn=Math.floor(Math.random()*(width-150))
  rainDiv.css("left",rn+"px")
  const imgTag=$("<img width='120'/>")
  imgTag.attr("src","img/basket.png")
  rainDiv.append(imgTag)
  $("body").append(rainDiv)
 
}
function PxParse (text){
  return Number(text.slice(0,text.length-2))
}