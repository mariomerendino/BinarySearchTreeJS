var t;
function setup(){
    t = new Tree();

    createCanvas(600, 600);
}
function drawAdd(){
    var num = parseInt(document.getElementById("textBox").value);
    if(Number.isInteger(num)){
        t.addNode(num);
        drawCircle(num);
    }
    
}
function draw(){
    //background(0);
}
function drawCircle(num){
    var maxNodes = Math.pow(2,t.depth) - 1;
    var circleDimension = 40;
    if(t.depth == 1){
        ellipse(width/2, circleDimension, circleDimension, circleDimension);
        text(num, (width/2)-4, circleDimension+4)
        fill(255);
    }
    else{
        if(maxNodes == 3){
            ellipse(width/3, 3*circleDimension, circleDimension, circleDimension);
            //text(num, (width/2)-4, circleDimension+4)
            fill(255);
            ellipse(2*(width/3), 3*circleDimension, circleDimension, circleDimension);
            //text(num, (width/2)-4, circleDimension+4)
            fill(255);
        }
        if(maxNodes == 7){
            ellipse(width/5, 6*circleDimension, circleDimension, circleDimension);
            //text(num, (width/2)-4, circleDimension+4)
            fill(255);
            ellipse(2*(width/5), 6*circleDimension, circleDimension, circleDimension);
            //text(num, (width/2)-4, circleDimension+4)
            fill(255);
            ellipse(3*(width/5), 6*circleDimension, circleDimension, circleDimension);
            //text(num, (width/2)-4, circleDimension+4)
            fill(255);
            ellipse(4*(width/5), 6*circleDimension, circleDimension, circleDimension);
            //text(num, (width/2)-4, circleDimension+4)
            fill(255);
        }
        if(maxNodes == 15){

        }
        if(maxNodes == 31){

        }
    }


}
