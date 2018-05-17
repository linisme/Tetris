// 画背景图
// drawing background
function drawingBackgroud() {
    canvas.fillStyle="#BFBFBF";
    for(var x=0;x<10;x++){
        for(var y=0;y<15;y++){
            canvas.fillRect(x*40,40*y,40,40);

        }
    }
    canvas.fillStyle="#FFFFFF";
    for(var x1=0;x1<10;x1++){
        for(var y1=0;y1<15;y1++){
            canvas.fillRect(x1*40+5,y1*40+5,30,30);
        }
    }
    canvas.fillStyle="#BFBFBF";
    for(var x2=0;x2<10;x2++){
        for(var y2=0;y2<15;y2++){
            canvas.fillRect(x2*40+10,y2*40+10,20,20);
        }
    }
}


// 创建点坐标对象
// create coordinate
function coordinate(x,y) {
    var coordinate = new Object;
    coordinate.x=x;
    coordinate.y=y;
    return coordinate;
}

// 画黑色的方块
// drawing black Rect
function drawingBlackRect(point) {
    canvas.fillStyle="#4F4F4F";
    canvas.fillRect(point.x*40,point.y*40,40,40);
    canvas.fillStyle="#FFFFFF";
    canvas.fillRect(point.x*40+5,point.y*40+5,30,30);
    canvas.fillStyle="#4F4F4F";
    canvas.fillRect(point.x*40+10,point.y*40+10,20,20);

}

// 画灰色的方块
// drawing grey Rect
function drawingGreyRect(point) {
    canvas.fillStyle="#BFBFBF";
    canvas.fillRect(point.x*40,point.y*40,40,40);
    canvas.fillStyle="#FFFFFF";
    canvas.fillRect(point.x*40+5,point.y*40+5,30,30);
    canvas.fillStyle="#BFBFBF";
    canvas.fillRect(point.x*40+10,point.y*40+10,20,20);

}

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
