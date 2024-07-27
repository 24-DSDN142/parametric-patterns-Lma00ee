//your parameter variables go here!
  let circleX = 100
  let circleY = 100
  let circleS = 50 //head size 
  

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  bearHead(circleX, circleY, circleS);
  bearHead (50, 50, 50)
  bearHead (150, 150, 50)





}
function bearHead (circleX, circleY, circleS){ 

  let noseX = circleX
  let noseY = noseX
  let earX = circleX-20
  let earY = circleY-20
  let earS = 20 //ear size 
  
  
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
  
  //nose 
  stroke(1);
  line (noseX, noseY, noseX, noseY+5); //straight nose line 100, 100, 100, 105
  line (noseX, noseY+5,noseX-5, noseY+10); //left nose line 100, 105, 95, 110
  line (noseX, noseY+5, noseX+5, noseY+10); //right nose line 100, 105, 105, 110

// eyes
stroke(1)
fill (0);
circle (eyeX, eyeY, eyeS) //left eye 
circle (eyeX+20, eyeY, eyeS) //right eye, eyeX 110

// stroke(1);
// line (85, 100, 90, 100);
// line (110, 100, 115, 100);

}








