// 以点origin坐标为中心，顺时针转90度，返回该坐标
// take origin as the origin of coordinate,rotate 90 degrees clockwise，return the coordinate
function rotate(origin,point) {
    var pointC = coordinate(point.x-origin.x,point.y-origin.y);
    var pointD = coordinate(-pointC.y,pointC.x);
    var returnPoint = coordinate(pointD.x+origin.x,pointD.y+origin.y);
    return returnPoint;
}

// 以点origin坐标为中心，逆时针转90度，返回该坐标
// take origin as the origin of coordinate,rotate 90 degrees Anti-clockwise,return the coordinate
function retateAntiClockWise(origin,point){
    var pointA = coordinate(point.x-origin.x,point.y-origin.y);
    var pointB = coordinate(pointA.y,-pointA.x);
    var returnPoint = coordinate(pointB.x+origin.x,pointB.y+origin.y);
    return returnPoint;
}

// 以origin为原点，将shape顺时针旋转90度,返回图形坐标数组
// take origin as origin of coordinate rotate 90 degrees clockwise, return the shape array
function rotateShape(origin,shape) {
    var shapeChange = new Array();

    for(var i in shape){
        drawingGreyRect(shape[i]);
    }
    for(var i in shape){
        var z = rotate(origin,shape[i]);
        drawingBlackRect(z);
        shapeChange.push(z);
    }
    return shapeChange;
}

// 以origin为原点，将shape逆时针旋转90度，返回图形坐标数组
// take origin as origin of coordinate rotate 90 degrees Anti-clockwise, return the shape array
function rotateShapeAnticlockWise(origin,shape) {
    var shapeChange = new Array();

    for(var i in shape){
        drawingGreyRect(shape[i]);
    }
    for(var i in shape){
        var z = retateAntiClockWise(origin,shape[i]);
        drawingBlackRect(z);
        shapeChange.push(z);
    }
    return shapeChange;
}

// 越界图形数组判断
// cross the border judge
function judgeBorder(shape) {
    var returnFlag = false;
    for(var i in shape){
        if(shape[i].x<0 || shape[i].x>=horizontalNum || shape[i].y<0 || shape[i]>=verticalNum){
            returnFlag = true;
        }
    }
    return returnFlag;
}

// 重叠判断
// shape overlap judge
function judgeOverlap(moveRectArea,blackRectArea) {
    debugger;
    var flag = false;
    for(var i in moveRectArea){
        for(var j in blackRectArea){
            if(moveRectArea[i].x == blackRectArea[j].x && moveRectArea[i].y == blackRectArea[j].y){
                flag = true;
            }
        }
    }
    return flag;
}



// 移动方块
// move rect
function moveRect(shape,direction) {
    drawingGreyShape(shape);
    switch (direction) {
        case ("left"):
            for(var i in shape){
                shape[i].x = shape[i].x - 1;
            }
            break;
        case ("right"):
            for(var i in shape){
                shape[i].x = shape[i].x + 1;
            }
            break;
        case ("up"):
            for(var i in shape){
                shape[i].y = shape[i].y - 1;
            }
            break;
        case ("down"):
            for(var i in shape){
                shape[i].y = shape[i].y + 1;
            }
            break;
    }
    drawingBLackShape(shape);
    return shape;

}