$(document).ready(function() 

{ 
    $curtainopen = false;
                
            $(".rope").click(function(){
                $(this).blur(); 
                if ($curtainopen == false){   /*if curtain closed then passes this condition*/
                    $(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
                    $(".leftcurtain").stop().animate({width:'60px'}, 2000 );
                    $(".rightcurtain").stop().animate({width:'60px'},2000 );
                    $curtainopen = true;
                }else{         /* if curtain is closed then will pass this condition*/
                    $(this).stop().animate({top: '-40px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
                    $('.leftcurtain').stop().animate({width:'50%'}, 2000 );
                    $('.rightcurtain').stop().animate({width:'51%'}, 2000 );
                    $curtainopen = false;
                }
                return false;
            });
    $('#home_icon').hide();
    $('#Banner').hide();
    $('#Personal_data').hide();
    $('#skills_data').hide();
    $('#aboutPage_data').hide();
    $('#work_data').hide();
   
/*Function defines the action when clicked on personal information icon*/    
    $('#perInfo_icon').click(function(){
    	$('#Table_Container').hide();
        $('#home_icon').show();
    	$('#Banner').show();
        $('#Banner').append('<h3><strong>PERSONAL INFORMATION</strong></h3>');
        $('#Personal_data').show();
        $('#LeftCurtain').hide();
        $('#RightCurtain').hide();
    });
/*Function defines the action when clicked on Skills icon*/
    $('#skills_icon').click(function(){
        $('#Table_Container').hide();
        $('#home_icon').show();
        $('#Banner').show();
        $('#Banner').append('<h3>SKILLS & EXPERTISE</h3>');
        $('#skills_data').show();
        $('#LeftCurtain').hide();
        $('#RightCurtain').hide()
    });
/*Function defines the action when clicked on Ideas icon*/
    $('#ideas_icon').click(function(){
        $('#Table_Container').hide();
        $('#home_icon').show();
        $('#Banner').show();
        $('#Banner').append('<h3>ABOUT THIS PAGE</h3>');
        $('#aboutPage_data').show();
        $('#LeftCurtain').hide();
        $('#RightCurtain').hide()
    });
/*Function defines the action when clicked on jobs icon*/
    $('#jobs_icon').click(function(){
        $('#Table_Container').hide();
        $('#home_icon').show();
        $('#Banner').show();
        $('#Banner').append('<h3>PROFESSIONAL EXPERIENCE</h3>');
        $('#work_data').show();
        $('#LeftCurtain').hide();
        $('#RightCurtain').hide()
    });
/*Function defines the action when clicked on home icon*/    
    $('#home_icon').click(function(){
       $('#Table_Container').show(); 
       $('#home_icon').hide();
       $('#Banner').empty();
       $('#Banner').hide();
       $('#Personal_data').hide();
       $('#skills_data').hide();
       $('#aboutPage_data').hide();
       $('#work_data').hide();
       $('#LeftCurtain').show();
       $('#RightCurtain').show()
    });
});