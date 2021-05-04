import $ from "jquery";
import {gsap} from "gsap";
//import the plugins
import GSDevTools from "gsap/GSDevTools";

//register plugins
gsap.registerPlugin(GSDevTools);

$(document).ready(function(){



  GSDevTools.create();

  var tl = gsap.timeline({id:"timeline"});
  var redBox = $('.red-box');
  var blueBox = $('.blue-box');
  var orangeBox = $('.orange-box');
  var boxArray = [redBox, blueBox, orangeBox];

  //Wrap Utility
  var color = gsap.utils.wrap(["green","black", "blue"]);
  var myX = gsap.utils.wrap([25,100, 200]);

  console.log('Page loaded');
  tl.to(blueBox ,{y:0});
  tl.to(boxArray, {duration:1, id:"colorchange", backgroundColor:color, x:myX, stagger:0.5});
  tl.to(blueBox ,{rotation:200, borderRadius:"100px"});
  tl.to(blueBox ,{duration:0.75, scale:3, yoyo:true, repeat:1, ease:"back.out(6)"})
  tl.to(blueBox ,{duration:0.5, y:2000})
  tl.fromTo(blueBox ,{y:-2000}, {duration:0.5, y:0})



});//ready END
