

$(document).ready(function(event){


    var x = 0;
    var y = 0;
    var isMoving = false;
    var totalX = $(window).width();
    var totalY = $(window).height();
    var MIN_X = 200;
    var MAX_X = totalX - 300;
    var MIN_Y = 200;
    var MAX_Y = totalY - 400;
    
    console.log(totalX+" "+totalY);
    
    $("div.vbar").mousedown(function(event){
        isMoving = true;
        x = event.pageX;
        console.log(x);
    });
    
    $("div.hbar").mousedown(function(event){
        isMoving = true;
        y = event.pageY;
        console.log("y: "+y);
    })
    
    
    $(window).mousemove(function(event){
        if(isMoving){
            if(x != 0){
                var cx = event.pageX;
                if(cx < MIN_X){
                    cx = MIN_X;
                }
                if(cx > MAX_X){
                    cx = MAX_X;
                }
    
                $("#grid").css({"grid-template-columns": cx+"px auto"});
                x = event.pageX;
            }else if(y != 0){
                var cy = event.pageY;
                if(cy < MIN_Y){
                    cy = MIN_Y;
                }
                if(cy > MAX_Y){
                    cy = MAX_Y;
                }
                
                $("#row").css({"grid-template-rows":cy+"px auto"});
                y = event.pageY;
            }
        
            
        }
    });
    
    $(window).mouseup(function(event){
        isMoving = false;
        x = 0;
        y = 0;
    });
});
