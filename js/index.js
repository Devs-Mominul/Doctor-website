
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
new VenoBox({
  selector: ".my-video-links",
  maxWidth:"80%",
});
new VenoBox({
  selector: ".my-image-links",

});
$(window).scroll(function (){
  var minar=$(this).scrollTop();
  if( minar > 20){
    $(".back2_top").fadeIn()
  }
  else{
    $(".back2_top").fadeOut()
  }
})
  
  
  
  





  $(".back2_top").click(function(){
    $("html , body").animate(
      {
        scrollTop:0,
  
     },1000);
  })
  $("#preload").delay(500).fadeOut(1000)
  $(document).ready(function(){
    $( "#tabs" ).tabs();
    $( "#tabsa" ).tabs();
  })
  
  
  
  


  
  
  
  
  

  
  
  
  
  

  
  


  
  






// 
// 
// $(".back2_top").click(function(){
  // $("html , body").animate(
    // {
      // scrollTop:0,
// 
  // },2000);
// })
// 
// 
// 








