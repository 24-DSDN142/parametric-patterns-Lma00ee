//your parameter variables go here!
  let circleX = 100
  let circleY = circleX // 100 
  let circleS = circleX-50 // head size, 50

  let bowX = 100
  let bowY = bowX // 100
  let bowS = bowX-95 // bowX=5 
  


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  // pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 180;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 180;

  angleMode(DEGREES)
}

function wallpaper_background() {
  // background(247, 200, 181); //light creamish skin tone colour
  // background(255, 231, 209); //even lighter cream colour, for red checkered pattern
  background(245, 218, 193); //lighter creamy colour


}  

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  //checkered background, transparent  
 noStroke()
 fill (255, 112, 155, 70) //light pink, slightly transparent
//  fill (237, 36, 36, 70) //red of bow 
 rect (25, 0, 35, 200) // left vertical line 
 rect (140, 0, 35, 200) //right vertical line
 rect (0, 30, 200, 35) //top horizontal line
 rect (0, 130, 200, 35) //bottom horizontal line
  
 //DOUBLE BOWS FOR ALL THREE
 //middle bear head 
  bearHead(circleX, circleY); // middle bear head 
  // bow(bowX, bowY); // headbow of middle bear 
  bow (bowX, bowY+50); // neckbow

  // //top left bear head 
  // bearHead (50, 50,) // top left bear head 
  // bow(50, 50); // headbow of top left bear 
  // // bow(50, 100); //neckbow

  // //bottom right bear head
  // bearHead (150, 150); // bottom right bear head 
  // bow (150, 150); //headbow of bottom right bear 
  // // bow (150, 200); //neckbow
  
  //left bow 
  rotate(-20)
  bow(45, 135); 

  //right bow 
  rotate(40)
  bow (145, 65)





}

function bow (bowX, bowY) {
  //right bow 
  beginShape()
  stroke(1);
  fill (237, 36, 36); //red 
  curveVertex (bowX, bowY-25); // bowY=75
  curveVertex (bowX, bowY-25) // bowY=75
  curveVertex (bowX+10, bowY-30);
  curveVertex (bowX+10, bowY-20);
  endShape(CLOSE)
  
  //left bow 
  beginShape()
  curveVertex (bowX, bowY-25); // bowY=75
  curveVertex (bowX, bowY-25); // bowY=75
  curveVertex (bowX-10, bowY-30); // bowX=90, bowY=70
  curveVertex (bowX-10, bowY-20); //bowX=90, bowY=70
  endShape(CLOSE)
  
  //bow circle 
  stroke (1) 
  fill (237, 36, 36); //red 
  circle (bowX, bowY-25, bowS) //bowY=75
  }
function bearHead (circleX, circleY){ 

  let earX = circleX-20 //80, size of ear on x-axis
  let earY = circleY-20 //80, size of ear on y-axis 
  let earS = 20 //ear size

  let noseX = circleX //nose size x-axis
  let noseY = circleY //nose size y-axis 

  let eyeX = circleX-10 //90, eye size on x-axis 
  let eyeY = circleY //eye size on y-axis, 100 
  let eyeS = 5 //eye size 

  // for the blushes, 87, 106, 7, 4, based on left side.  
  let ellipseX = circleX-13 //87, ellipse/blush size on x-axis 
  let ellipseY = circleY +6 //106, ellipse/blush size on y-axis
  let ellipseW = circleS-43 //7, elipse/blush width
  let ellipseH = 4 //elipse/blush height 
  
//ear
stroke(1);
fill (207, 153, 116); //brown of the bear/face
circle (earX, earY, earS) //left ear
circle (earX+40, earY, earS) //right ear, earX=120

//inner ear 
noStroke();
fill (181, 118, 89); //slightly darker brown inner ear 
circle (earX, earY, earS-10) //left ear, earS=10 
circle (earX+40, earY, earS-10) //right ear, earX=120, earS10 

//head  
stroke(1);
fill (207, 153, 116); //brown
circle (circleX, circleY, circleS); // head overlapped body, circleX=100, circleY=100, circleS=50
  
// lighter-coloured rounded nose snout circle 
noStroke();
fill(255, 220, 189); //light beigish creamish brown
circle (noseX, noseY+6, 15) //noseX=100, noseY=106, 15

  // straight nose 
  // stroke(1);
  // line (circleX, circleY, circleX, circleY+5); //straight nose line 100, 100, 100, 105
  // line (circleX, circleY+5,circleX-5, circleY+9); //left nose line 100, 105, 95, 110
  // line (circleX, circleY+5, circleX+5, circleY+9); //right nose line 100, 105, 105, 110

  //curved nose 
//straight nose line for curved nose 
stroke(1);
line (noseX, noseY+3, noseX, noseY+5); //100, 103, 100, 105

//left curved nose line 
beginShape(line)
stroke(1)
fill (255, 220, 189); //light beigish creamish brown, same as nose snout colour
curveVertex (noseX-10,noseY-15); //90, 85
curveVertex(noseX-5, noseY+9); //95, 91
curveVertex (noseX, noseY+5); //100, 105
curveVertex (noseX-10, noseY-10); //90, 90
endShape()

//right curved nose line 
beginShape(line)
stroke(1)
fill (255, 220, 189); //light beigish creamish brown, same as nose snout colour
curveVertex (noseX+10, noseY-15); //110, 85
curveVertex(noseX+5, noseY+9); //105, 109
curveVertex (noseX, noseY+5); //100, 105
curveVertex (noseX+10, noseY-10); //110, 90
endShape()

//curved triangular nose, downwards
beginShape()
stroke(1);
fill (0) //black
curveVertex (noseX, noseY+5) //100, 105
curveVertex (noseX-3, noseY+2) //97, 102
curveVertex (noseX+3, noseY+2) //103, 102
curveVertex (noseX, noseY+5) //100, 105 
endShape(CLOSE)

//circle nose 
// stroke(1);
// fill (255);
// circle (noseX, noseY+3, 4)

//blush
noStroke()
fill(242, 80, 96) //pink 
ellipse (ellipseX, ellipseY, ellipseW, ellipseH) // left, 87, 106, 7, 4 
ellipse (ellipseX+26, ellipseY, ellipseW, ellipseH) // right 113, 106, 7, 4


if (eyeS <= 5) {
// eyes
stroke(1)
fill (0);
circle (eyeX, eyeY, eyeS) //left eye 
circle (eyeX+20, eyeY, eyeS) //right eye, eyeX 110

//white inside of eyes 
noStroke()
fill(255);
circle (eyeX-1, eyeY-1, eyeS-3) //left eye, 89, 99, 2
circle (eyeX+19, eyeY-1, eyeS-3) //right eye, 99, 99, 2
}
else { 
  //closed eyes 
  stroke(1);
  line (eyeX-5, eyeY, eyeX+2, eyeY); //85, 100, 92, 100
  line (eyeX+18, eyeY, eyeX+25, eyeY); //108, 100, 115, 100
}

}













