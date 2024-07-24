//your parameter variables go here!
let circleX = 100
let circleY = 100
let circleS = 50

let feetellipseY = 440 
let feetellipseX = 250 
let feetwidth = 70

let handX = 255
let handY = 320
let handW = 30
let handH = 60

let stomX = 300 
let stomY = 350 
let stomW = 100 
let stomH = 150

let earX = 80
let earY = 80
let earS = 20 

let eyeX = 90
let eyeY = 100
let eyeS = 5


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
  
//ear
stroke(1);
fill (105, 89, 83); //brown 
circle (earX, earY, earS) //left ear
circle (earX+40, earY, earS) //right ear

//pink inner ear 
fill (237, 178, 223); //pink inner ear 
noStroke();
circle (earX, earY, earS-10) //left ear 
circle (earX+40, earY, earS-10) //right ear 

//head  
  fill (105, 89, 83); //brown 
  stroke(1);
  circle (circleX, circleY, circleS); // head overlapped body 
  line (100, 100, 100, 105); //straight nose line
  line (100, 105, 95, 110); //left nose line
  line (100, 105, 105, 110); //right nose line 


//eyes
fill (0);
circle (eyeX, eyeY, eyeS) //left eye 
circle (eyeX+20, eyeY, eyeS) //right eye 
}
