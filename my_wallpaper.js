//your parameter variables go here!
  let circleX = 100 //circle on x-axis
  let circleY = circleX //circle on y-axis, 100 
  let circleS = circleX-50 //circle/head size, 50

  let bowX = 100 //bow on x-axis
  let bowY = bowX //bow on y-axis, 100
  let bowCircle = 5 //bow circle/middle size

  let pinkbackground = true //pink background with pink checkered pattern, if turned off changes to red checkered pattern + background colour 2 

  let bgcolor1 = ('#f7c8b5') //light pink background colour, swtiches on when pink checkered pattern
  let bgcolor2 = ('#f0ceb1') //lighter cream colour, switches on when red checkered pattern 

  let blush = true //controls if there is blush on the cheeks of bear or not
  let blushpink = ('#f25060') //pink blush (for lighter brown bear )
  let blushred = ('#b51818') //red blush (for darker brown bear)

  let bearfacelightbrown = ('#cf9974') //light brown milk tea colour of the bear 
  let bearfacedarkbrown = ('#8f5935') //darker chocolate brown colour of the bear 

  let innerear1 = ('#b57659') //inner ear colour for light brown bear (lighter)
  let innerear2 = ('#5e361a') //inner ear colour for dark brown bear (darker)
  
  let lightbrownsnout = ('#f7d7ad') //snout colour for light brown bear (lighter)
  let darkbrownsnout = ('#e0a880') //snout colour for dark brown bear (darker)

  let bowRed = ('#d42f2f') //dark red bow colour (better for darker bear)  
  let bowPink = ('#f74561') //pink bow colour (better for lighter bear)
 
  let bearExist = 1 

  let triangularNose = true //controls if bear has an ellipse round nose or triangle nose 

  let eyesOpen = true //controls if bear has open or closed eyes 

  let bearDark = true //controls if the colour of the bear is dark or light

  let bowSwitch = true //controls the colours of the bow/switches them between red and pink!
 
  let bow1 = false
  let bow2 = false
  let bow3 = true
  let bow4 = false

function setup_wallpaper(pWallpaper) {
  // pWallpaper.output_mode(GRID_WALLPAPER);
  // pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 180;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 180;

  angleMode(DEGREES)
}

function wallpaper_background() {
 if (pinkbackground) { 
  background(bgcolor1); 
 }

 else {
background (bgcolor2);
 }

}  

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//checkered background, transparent  
 noStroke()
 if (pinkbackground) {
 fill (255, 112, 133, 70) //light pink, slightly transparent
 }

 else {
fill (237, 36, 36, 70) //red transparent 
 }

 rect (25, 0, 35, 200) // left vertical line 
 rect (140, 0, 35, 200) //right vertical line
 rect (0, 30, 200, 35) //top horizontal line
 rect (0, 130, 200, 35) //bottom horizontal line


  
 if (bearExist == 1) {
 //middle bear head 
  bearHeadDark (circleX, circleY); // middle bear head 
 }

 if (bow1) {
  bow(bowX, bowY); // headbow of middle bear 
 }
 else if (bow2) {
  bow (bowX, bowY+50); // neckbow
 }
 else if (bow3) {
  bow(bowX, bowY); // headbow of middle bear 
  bow (bowX, bowY+50); // neckbow
 }
 else if (bow4) {
 //bows on either side of head 
  //left bow 
  rotate(-20)
  bow(45, 135) 

  //right bow 
  rotate(40)
  bow (145, 65)
 }
else {

}

//

 if (bearExist == 1) {
  //top left bear head 
  bearHeadDark (50, 50) 
 }
  if (bow1) {
  bow(bowX-50, bowY-50); // headbow of middle bear 
 }
 else if (bow2) {
  bow (bowX-50, bowY); // neckbow
 }
 else if (bow3) {
  //both the head and neck bow 
  bow(bowX-50, bowY-50); // headbow of middle bear 
  bow (bowX-50, bowY); // neckbow
 }
 else if (bow4) {
 //bows on either side of head 
  //left bow 
  rotate(-20)
  bow(45, 135) 

  //right bow 
  rotate(40)
  bow (145, 65)
 }
else {


}

 if (bearExist == 1) {
  //bottom right bear head
  bearHeadDark (150, 150); // bottom right bear head 
 }
 if (bow1) {
  bow(bowX+50, bowY+50); // headbow of middle bear 
 }
 else if (bow2) {
  bow (bowX+50, bowY+100); // neckbow
 }
 else if (bow3) {
  //both the head and neck bow 
  bow(bowX+50, bowY+50); // headbow of middle bear 
  bow (bowX+50, bowY+100); // neckbow
 }
 else if (bow4) {
 //bows on either side of head 
  //left bow 
  rotate(-20)
  bow(45, 135) 

  //right bow 
  rotate(40)
  bow (145, 65)
 }
else {


}
  

 if (false) {
  //bows on either side of head 
  //left bow 
  rotate(-20)
  bow(45, 135); 

  //right bow 
  rotate(40)
  bow (145, 65)

  }

}

function bow (bowX, bowY) {
  //right bow 
  beginShape()
  stroke(1);
  if (bowSwitch) {
  fill (bowRed); //red 

  }

  else {
    fill (bowPink);

  }

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
  circle (bowX, bowY-25, bowCircle) //bowY=75

  }

  

function bearHeadDark (circleX, circleY){ 

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
if (bearDark) {
fill (bearfacedarkbrown); //same colour/brown of the bear/face


circle (earX, earY, earS) //left ear
circle (earX+40, earY, earS) //right ear, earX=120

//inner ear 
noStroke();
fill (innerear2); //slightly darker brown inner ear 
circle (earX, earY, earS-10) //left ear, earS=10 
circle (earX+40, earY, earS-10) //right ear, earX=120, earS10 

//head  
stroke(1);
fill (bearfacedarkbrown); //brown
circle (circleX, circleY, circleS); // head overlapped body, circleX=100, circleY=100, circleS=50
 
// lighter-coloured rounded nose snout circle 
noStroke();
fill(darkbrownsnout); //dark brown
circle (noseX, noseY+6, 15) //noseX=100, noseY=106, 15


//   curved nose 
// straight nose line for curved nose 
stroke(1);
line (noseX, noseY+3, noseX, noseY+5); //100, 103, 100, 105

//left curved nose line 
beginShape(line)
stroke(1)
fill (darkbrownsnout); //dark brown, same as nose snout colour
curveVertex (noseX-10,noseY-15); //90, 85
curveVertex(noseX-5, noseY+9); //95, 91
curveVertex (noseX, noseY+5); //100, 105
curveVertex (noseX-10, noseY-10); //90, 90
endShape()

//right curved nose line 
beginShape(line)
stroke(1)
fill (darkbrownsnout); //dark brown, same as nose snout colour
curveVertex (noseX+10, noseY-15); //110, 85
curveVertex(noseX+5, noseY+9); //105, 109
curveVertex (noseX, noseY+5); //100, 105
curveVertex (noseX+10, noseY-10); //110, 90
endShape()


if (triangularNose) {
//curved triangular nose, downwards
beginShape()
stroke(1);
fill (0) //black
curveVertex (noseX, noseY+5) //100, 105
curveVertex (noseX-3, noseY+2) //97, 102
curveVertex (noseX+3, noseY+2) //103, 102
curveVertex (noseX, noseY+5) //100, 105 
endShape(CLOSE)

}

else {
//ellipsed nose 
stroke(1);
fill (0); //black 
ellipse (ellipseX+13, ellipseY-2, 6, 3)

}

if (blush){
//blush on cheeks
noStroke()
fill(blushred) //red 
ellipse (ellipseX, ellipseY, ellipseW, ellipseH) // left, 87, 106, 7, 4 
ellipse (ellipseX+26, ellipseY, ellipseW, ellipseH) // right 113, 106, 7, 4

}

else {


}


if (eyesOpen) {
// eyes open 
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

////where light brown bear code starts 

else {

//ear
stroke(1);
fill (bearfacelightbrown); //same colour/brown of the bear/face
circle (earX, earY, earS) //left ear
circle (earX+40, earY, earS) //right ear, earX=120

//inner ear 
noStroke();
fill (innerear1); //slightly darker brown inner ear 
circle (earX, earY, earS-10) //left ear, earS=10 
circle (earX+40, earY, earS-10) //right ear, earX=120, earS10 

//head  
stroke(1);
fill (bearfacelightbrown); //brown
circle (circleX, circleY, circleS); // head overlapped body, circleX=100, circleY=100, circleS=50
 
if (true) {
// lighter-coloured rounded nose snout circle 
noStroke();
fill(lightbrownsnout); //light beigish creamish brown
circle (noseX, noseY+6, 15) //noseX=100, noseY=106, 15

}


//curved nose 
//straight nose line for curved nose 
stroke(1);
line (noseX, noseY+3, noseX, noseY+5); //100, 103, 100, 105

//left curved nose line 
beginShape(line)
stroke(1)
fill (lightbrownsnout); //light beigish creamish brown, same as nose snout colour
curveVertex (noseX-10,noseY-15); //90, 85
curveVertex(noseX-5, noseY+9); //95, 91
curveVertex (noseX, noseY+5); //100, 105
curveVertex (noseX-10, noseY-10); //90, 90
endShape()

//right curved nose line 
beginShape(line)
stroke(1)
fill (lightbrownsnout); //light beigish creamish brown, same as nose snout colour
curveVertex (noseX+10, noseY-15); //110, 85
curveVertex(noseX+5, noseY+9); //105, 109
curveVertex (noseX, noseY+5); //100, 105
curveVertex (noseX+10, noseY-10); //110, 90
endShape()


if (triangularNose) {
//curved triangular nose, downwards
beginShape()
stroke(1);
fill (0) //black
curveVertex (noseX, noseY+5) //100, 105
curveVertex (noseX-3, noseY+2) //97, 102
curveVertex (noseX+3, noseY+2) //103, 102
curveVertex (noseX, noseY+5) //100, 105 
endShape(CLOSE)

}

else {
//ellipsed nose 
stroke(1);
fill (0); //black 
ellipse (ellipseX+13, ellipseY-2, 6, 3)

}

if (blush){
//blush on cheeks
noStroke()
fill(blushpink) //pink 
ellipse (ellipseX, ellipseY, ellipseW, ellipseH) // left, 87, 106, 7, 4 
ellipse (ellipseX+26, ellipseY, ellipseW, ellipseH) // right 113, 106, 7, 4

}

else {
  
}


if (eyesOpen) {
// eyes open 
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

}












