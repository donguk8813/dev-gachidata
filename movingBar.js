window.onload = function(){

    var VBAR = document.querySelectorAll("#grid nav div.vbar")[0];
    var HBAR = document.querySelectorAll("#row header div.hbar")[0];
    var GRID = document.getElementById("grid");
    var ROW = document.getElementById("row");
    var isMoving = false;
    var totalX = document.documentElement.offsetWidth;
    var totalY = document.documentElement.offsetHeight;
    var MIN_X = 200;
    var MAX_X = totalX - 300;
    var MIN_Y = 200;
    var MAX_Y = totalY - 400;
    var x = 0;
    var y = 0;
    
    VBAR.addEventListener("mousedown", function(e){
        isMoving = true;
        x = e.pageX;
    });
    
    HBAR.addEventListener("mousedown", function(e){
        isMoving = true;
        y = e.pageY;
    });
    
    
    window.addEventListener("mousemove", function(e){
        
        if(isMoving){
            if(x != 0){
                console.log(e.pageX);
                var cx = e.pageX;
               
                if(cx < MIN_X){
                    cx = MIN_X;
                }
    
                if(cx > MAX_X){
                    cx = MAX_X;
                }
    
                GRID.style.gridTemplateColumns = cx+"px auto";
                x = e.pageX;
            }else if(y != 0){
                var cy = e.pageY;
                
                if(cy < MIN_Y){
                    cy = MIN_Y;
                }
    
                if(cy > MAX_Y){
                    cy = MAX_Y;
                }
    
                ROW.style.gridTemplateRows = cy+"px auto";
                y = e.pageY;
            }
        }
        
    });
    
    window.addEventListener("mouseup", function(e){
        isMoving = false;
        console.log("x : "+x+" y : "+y);
    });
}

