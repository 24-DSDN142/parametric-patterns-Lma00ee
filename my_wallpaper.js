//your parameter variables go here!
  let circleX = 100
  let circleY = circleX //100 
  let circleS = circleX-50 //head size, 50

  let bowX = 100
  let bowY = bowX //100
  let bowS = bowX-95 // 5 


  //rotated bow?
  // let bowX = 55
  // let bowY = 130
  // let bowS = bowX-50
  

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

  angleMode(DEGREES)
}

function wallpaper_background() {
  background(247, 200, 181); //light creamish skin tone colour

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  //checkered background, transparent  
 noStroke()
 fill (255, 112, 155, 70) //light pink, slightly transparent
 rect (25, 0, 35, 200) // left vertical line 
 rect (140, 0, 35, 200) //right vertical line
 rect (0, 30, 200, 35) //top horizontal line
 rect (0, 130, 200, 35) //bottom horizontal line
  
 //DOUBLE BOWS FOR ALL THREE
 //middle bear head 
  bearHead(circleX, circleY); // middle bear head 
  // bow(bowX, bowY); // headbow of middle bear 
  bow (bowX, bowY+50); // neckbow

  //top left bear head 
  bearHead (50, 50,) // top left bear head 
  bow(50, 50); // headbow of top left bear 
  // bow(50, 100); //neckbow

  //bottom right bear head
  bearHead (150, 150); // bottom right bear head 
  bow (150, 150); //bow on top of head
  // bow (150, 200); //neckbow
  
  // rotate(-20)
  // bow(45, 135);

  // rotate(40)
  // bow (145, 65)





}

function bow (bowX, bowY) {
  //right bow 
  beginShape()
  stroke(1);
  fill (237, 36, 36); //red for now
  curveVertex (bowX, bowY-25);
  curveVertex (bowX, bowY-25)
  curveVertex (bowX+10, bowY-30);
  curveVertex (bowX+10, bowY-20);
  endShape(CLOSE)
  
  //left bow 
  beginShape()
  curveVertex (bowX, bowY-25);
  curveVertex (bowX, bowY-25);
  curveVertex (bowX-10, bowY-30);
  curveVertex (bowX-10, bowY-20);
  endShape(CLOSE)
  
  //bow circle 
  stroke (1)
  fill (237, 36, 36);
  circle (bowX, bowY-25, bowS)
  
  }
function bearHead (circleX, circleY){ 

  let earX = circleX-20
  let earY = circleY-20
  let earS = 20 //ear size, 80 

  let noseX = circleX
  let noseY = circleY

  let eyeX = circleX-10 //90 
  let eyeY = circleY
  let eyeS = 5 //eye size 

  // for the blushes 
  let ellipseX = circleX-13
  let ellipseY = circleY +6
  let ellipseW = circleS -43 
  let ellipseH = 4
  
//ear
stroke(1);
fill (207, 153, 116); //brown of the bear/face
circle (earX, earY, earS) //left ear
circle (earX+40, earY, earS) //right ear, earX 120

//inner ear 
noStroke();
fill (181, 118, 89); //slightly darker brown inner ear 
circle (earX, earY, earS-10) //left ear 
circle (earX+40, earY, earS-10) //right ear, earS10 

//head  
stroke(1);
fill (207, 153, 116); //brown
circle (circleX, circleY, circleS); // head overlapped body
  
// lighter-coloured rounded nose snout circle 
noStroke();
fill(255, 220, 189); //light beigish creamish brown
circle (noseX, noseY+6, 15) 

  // straight nose 
  // stroke(1);
  // line (circleX, circleY, circleX, circleY+5); //straight nose line 100, 100, 100, 105
  // line (circleX, circleY+5,circleX-5, circleY+9); //left nose line 100, 105, 95, 110
  // line (circleX, circleY+5, circleX+5, circleY+9); //right nose line 100, 105, 105, 110

  //curved nose 
//straight nose line for curved nose 
stroke(1);
line (noseX, noseY+3, noseX, noseY+5);

//left curved nose line 
beginShape(line)
stroke(1)
fill (255, 220, 189); //light beigish creamish brown, same as nose snout colour
curveVertex (noseX-10,noseY-15);
curveVertex(noseX-5, noseY+9);
curveVertex (noseX, noseY+5);
curveVertex (noseX-10, noseY-10);
endShape()

//right curved nose line 
beginShape(line)
stroke(1)
fill (255, 220, 189); //light beigish creamish brown, same as nose snout colour
curveVertex (noseX+10, noseY-15);
curveVertex(noseX+5, noseY+9);
curveVertex (noseX, noseY+5);
curveVertex (noseX+10, noseY-10);
endShape()

//curved triangular nose
beginShape()
stroke(1);
fill (0)
curveVertex (noseX, noseY+5)
curveVertex (noseX-3, noseY+2)
curveVertex (noseX+3, noseY+2)
curveVertex (noseX, noseY+5)
endShape(CLOSE)

//circle nose 
// stroke(1);
// fill (255);
// circle (noseX, noseY+3, 4)

//blush
noStroke()
fill(242, 90, 110) //pink 
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
circle (eyeX-1, eyeY-1, eyeS-3)
circle (eyeX+19, eyeY-1, eyeS-3) //right eye, eyeX 11
}
else { 
  //closed eyes 
  stroke(1);
  line (eyeX-5, eyeY, eyeX+2, eyeY); //85, 100, 92, 100
  line (eyeX+18, eyeY, eyeX+25, eyeY); //108, 100, 115, 100
}

}













