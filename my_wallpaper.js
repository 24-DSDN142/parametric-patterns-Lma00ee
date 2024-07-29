//your parameter variables go here!
  let circleX = 100
  let circleY = circleX
  let circleS = circleX-50 //head size 

  let bowX = 100
  let bowY = bowX
  let bowS = bowX-95

  //rotated bow?
  // let bowX = 55
  // let bowY = 130
  // let bowS = bowX-50
  

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;

  angleMode(DEGREES)
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  bearHead(circleX, circleY);
  // bearHead (50, 50,)
  // bearHead (150, 150)
  bow(bowX, bowY);

  // rotate(-20)
  // bow(45, 135);

  // rotate(40)
  // bow (145, 65)


}

function bow (bowX, bowY) {
  //right bow 
  // rotate (-20)

  beginShape()
 stroke(1);
  fill (255, 0, 0); //red for now
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
  fill (255, 0, 0);
  circle (bowX, bowY-25, bowS)
  
  }
function bearHead (circleX, circleY){ 
  
  let earX = circleX-20
  let earY = circleY-20
  let earS = 20 //ear size 

  let noseX = circleX
  let noseY = circleY

  let eyeX = circleX-10
  let eyeY = circleY
  let eyeS = 5 //eye size 
  
//ear
stroke(1);
fill (105, 89, 83); //brown 
circle (earX, earY, earS) //left ear
circle (earX+40, earY, earS) //right ear, earX 120

//inner ear 
noStroke();
fill (237, 178, 223); //pink inner ear 
circle (earX, earY, earS-10) //left ear 
circle (earX+40, earY, earS-10) //right ear, earS10 

//head  
  stroke(1);
  fill (105, 89, 83); //brown
  circle (circleX, circleY, circleS); // head overlapped body
  
// nose snout round circle 
 noStroke();
 fill(252, 237, 225);
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
  fill (252, 237, 225);
curveVertex (noseX-10,noseY-15);
curveVertex(noseX-5, noseY+9);
curveVertex (noseX, noseY+5);
curveVertex (noseX-10, noseY-10);
endShape()

//right curved nose line 
beginShape(line)
stroke(1)
fill (252, 237, 225);
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

// //circle nose 
// stroke(1);
// fill (255);
// circle (noseX, noseY+3, 4)

//blush
noStroke()
fill(237, 178, 223)
ellipse (87, 106, 7, 4) // left 
ellipse (113, 106, 7, 4) // right 

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

//closed eyes 
// stroke(1);
// line (85, 100, 90, 100);
// line (110, 100, 115, 100);

}












