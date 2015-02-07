//The magic code to add show/hide custom event triggers

$(document).ready(function() 

{        
            $curtainopen = false;
        
            $(".rope").click(function(){
                $(this).blur();
                if ($curtainopen == false){ 
                    $(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
                    $(".leftcurtain").stop().animate({width:'60px'}, 2000 );
                    $(".rightcurtain").stop().animate({width:'60px'},2000 );
                    $curtainopen = true;
                }else{
                    $(this).stop().animate({top: '-40px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
                    $(".leftcurtain").stop().animate({width:'50%'}, 2000 );
                    $(".rightcurtain").stop().animate({width:'51%'}, 2000 );
                    $curtainopen = false;
                }
                return false;
            });
    
    $('#Personal_Info').effect("bounce", { direction:'left', times:5 }, 300);
    $('#Skills_Icon').effect("bounce", { direction:'right', times:5 }, 300);
    $('#About_icon').effect("bounce", { direction:'down', times:5 }, 300);
    $('#Work_icon').effect("bounce", { direction:'down', times:5 }, 300);
    $("Skills_Icon").toggle("blind");
    $('#image_display').hide();
    $('#Personal_data').hide();
    $('#skills_data').hide();
    $('#aboutPage_data').hide();
    $('#work_data').hide();
    $('#Banner').hide();
    $('#audio').hide();

    $("#Skills_Icon").click(function(){
    $('#Skills_Icon').hide();
    $('#Personal_Info').hide();
    $('#Work_icon').hide();
    $('#About_icon').hide();
    $('#tableContainer').hide();
    $('#image_display').show();
    $('#skills_data').show();
    $('#Banner').show();
    $('#Banner').append('<h1>SKILLS & EXPERTICE</h1>');
   });  //done SKills_Icon

   
    $("#Personal_Info").click(function(){
    $('#Skills_Icon').hide();
    $('#Personal_Info').hide();
    $('#Work_icon').hide();
    $('#About_icon').hide();
    $('#tableContainer').hide();
    $('#image_display').show();
    $('#Personal_data').show();
    $('#Banner').show();
    $('#Banner').append('<h1>PERSONAL INFORMATION</h1');
    $('#audio').show();
  });  //done Personal_Info
    $("#Work_icon").click(function(){
    $('#Skills_Icon').hide();
    $('#Personal_Info').hide();
    $('#Work_icon').hide();
    $('#About_icon').hide();
    $('#tableContainer').hide();
    $('#image_display').show();
    $('#display_div').show();
    $('#work_data').show();
    $('#Banner').show();
    $('#Banner').append('<h1>PROFESSIONAL EXPERIECNE</h1>');
   });  //done Work_icon
   $("#About_icon").click(function(){
    $('#Skills_Icon').hide();
    $('#Personal_Info').hide();
    $('#Work_icon').hide();
    $('#About_icon').hide();
    $('#tableContainer').hide();
    $('#image_display').show();
    $('#aboutPage_data').show();
    $('#Banner').show();
    $('#Banner').append('<h1>ABOUT THIS PAGE</h1>');
   });  //done About_icon
   $("#image_display").click(function(){
   	$('#tableContainer').show();
    $('#Skills_Icon').show();
    $('#Personal_Info').show();
    $('#Work_icon').show();
    $('#About_icon').show();
    $('#image_display').hide();
    $('#Personal_data').hide();
    $('#skills_data').hide();
    $('#aboutPage_data').hide();
    $('#work_data').hide();
    $('#Banner').empty();
    $('#audio').hide();
   }); //done Profile_pic
});  //done ready

    
   