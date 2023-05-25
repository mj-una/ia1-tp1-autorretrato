// martin julio
// 3-4-23
// trabajo practico 1 autorretrato en processing
// informatica aplicada 1 - catedra bedoian
// verison en p5js (25-5-23)


let tt = 0;
let rumbo = true;
let bool = false;

function setup() {
  createCanvas(800, 800);
  frameRate(30);
}

function draw() {

  // responsive
  document.getElementById("cont").style.backgroundColor = "rgb(219, 218, 223)";
  document.getElementById("cont").style.width = "100vw";
  document.getElementById("cont").style.height = "100vh";
  document.getElementById("cont").style.margin = "0";
  document.getElementById("cont").style.padding = "0";
  document.getElementById("cont").style.display = "flex";
  document.getElementById("cont").style.justifyContent = "center";
  document.getElementById("cont").style.alignItems = "center";
  document.getElementById("cont").style.overflow = "hidden";

  if (windowWidth > windowHeight ) {
    document.getElementById("defaultCanvas0").style.height = "96vh";
    document.getElementById("defaultCanvas0").style.width = "96vh";
    document.getElementById("defaultCanvas0").style.margin = "2vh";
  } else {
    document.getElementById("defaultCanvas0").style.height = "96vw";
    document.getElementById("defaultCanvas0").style.width = "96vw";
    document.getElementById("defaultCanvas0").style.margin = "2vw";
  }

  // segun suma
  if (bool) {
   frameRate(12);
  if (tt > 0 && tt < 12) {
    if (rumbo) tt++;
    else tt--;
  } else if (tt <= 0) {
    rumbo = true;
    tt++;
  } else if (tt >= 12) {
    rumbo = false;
    tt--;
  }
  }
  // segun seno (agregado 25-5-23)
  else {
  frameRate(30);
  tt = 6 + sin(frameCount / 12) * 6;
  }

  background(255, 235, 110);

  // ojo 1
  fill(255, 235, 110, 0);
  stroke(90, 250, 250);
  strokeWeight(500);
  ellipse(width / 2, height / 2 - 60, 970, 950 + tt * 1.4);
  ellipse(width / 2, height / 2 - 200, 970, 900 + tt * 1.4);

  // ondas
  strokeWeight(7);
  stroke(50, 240, 200, 255 - tt * 20);
  ellipse(width / 2, 710, 90, 15);
  strokeWeight(6.5);
  stroke(50, 240, 200, 250 - tt * 20);
  ellipse(width / 2, 710, 180, 32);
  strokeWeight(6);
  stroke(50, 240, 200, 245 - tt * 20);
  ellipse(width / 2, 710, 270, 49);
  strokeWeight(5.5);
  stroke(50, 240, 200, 240 - tt * 20);
  ellipse(width / 2, 710, 360, 66);
  strokeWeight(5);
  stroke(50, 240, 200, 235 - tt * 20);
  ellipse(width / 2, 710, 450, 83);
  strokeWeight(4.5);
  stroke(50, 240, 200, 230 - tt * 20);
  ellipse(width / 2, 710, 540, 99);
  strokeWeight(4);
  stroke(50, 240, 200, 225 - tt * 20);
  ellipse(width / 2, 710, 630, 117);
  strokeWeight(3.5);
  stroke(50, 240, 200, 220 - tt * 20);
  ellipse(width / 2, 710, 720, 135);
  strokeWeight(3);
  stroke(50, 240, 200, 215 - tt * 20);
  ellipse(width / 2, 710, 810, 153);
  strokeWeight(2.5);
  stroke(50, 240, 200, 210 - tt * 20);
  ellipse(width / 2, 710, 900, 171);
  strokeWeight(2);
  stroke(50, 240, 200, 210 - tt * 20);
  ellipse(width / 2, 710, 990, 189);
  strokeWeight(1.5);
  stroke(50, 240, 200, 210 - tt * 20);
  ellipse(width / 2, 710, 1080, 207);
  strokeWeight(1);
  stroke(50, 240, 200, 210 - tt * 20);
  ellipse(width / 2, 710, 1170, 225);
  strokeWeight(0.5);
  stroke(50, 240, 200, 210 - tt * 20);
  ellipse(width / 2, 710, 1260, 243);


  // transparencias 1
  noStroke();
  fill(230, 0, 0, 70 - tt * 4);
  triangle(width / 2, 258, 0, 0, 0, 80);
  triangle(width / 2, 258, 0, 160, 0, 240);
  triangle(width / 2, 258, 0, 320, 0, 400);
  triangle(width / 2, 258, 0, 480, 0, 560);
  triangle(width / 2, 258, 0, 640, 0, 720);
  triangle(width / 2, 258, 0, 800, 80, 800);
  triangle(width / 2, 258, 160, 800, 240, 800);
  triangle(width / 2, 258, 320, 800, 400, 800);
  triangle(width / 2, 258, 480, 800, 560, 800);
  triangle(width / 2, 258, 640, 800, 720, 800);
  triangle(width / 2, 258, 800, 800, 800, 720);
  triangle(width / 2, 258, 800, 640, 800, 560);
  triangle(width / 2, 258, 800, 480, 800, 400);
  triangle(width / 2, 258, 800, 320, 800, 240);
  triangle(width / 2, 258, 800, 160, 800, 80);
  triangle(width / 2, 258, 800, 0, 720, 0);
  triangle(width / 2, 258, 640, 0, 560, 0);
  triangle(width / 2, 258, 480, 0, 400, 0);
  triangle(width / 2, 258, 320, 0, 240, 0);
  triangle(width / 2, 258, 160, 0, 80, 0);

  // ojo 2
  noFill();
  strokeWeight(76 - tt);
  strokeCap(ROUND);
  strokeWeight(20);

  stroke(255, 170, 230, 30);
  ellipse(width / 2, 258, 220 + tt * 6.8, 220);
  stroke(255, 170, 230, 38);
  ellipse(width / 2, 258, 220 + tt * 5.6, 220);
  stroke(255, 170, 230, 46);
  ellipse(width / 2, 258, 220 + tt * 4.4, 220);
  stroke(255, 170, 230, 54);
  ellipse(width / 2, 258, 220 + tt * 3.2, 220);
  stroke(255, 170, 230, 72);
  ellipse(width / 2, 258, 220 + tt * 2, 220);

  stroke(90, 250, 250, 50);
  ellipse(width / 2, 258, 220 - tt * 6.8, 220);
  stroke(90, 250, 250, 50);
  ellipse(width / 2, 258, 220 - tt * 5.6, 220);
  stroke(90, 250, 250, 50);
  ellipse(width / 2, 258, 220 - tt * 4.4, 220);
  stroke(90, 250, 250, 70);
  ellipse(width / 2, 258, 220 - tt * 3.2, 220);
  stroke(90, 250, 250, 90);
  ellipse(width / 2, 258, 220 - tt * 2, 220);

  stroke(0);
  ellipse(width / 2, 258, 220 - tt * 0.8, 220);
  circle(width / 2, 258, 220);

  stroke(120, 90, 55, 30);
  ellipse(width / 2, 258, 58, 58 + tt * 4.8);
  stroke(120, 90, 55, 70);
  ellipse(width / 2, 258, 58, 58 + tt * 3.6);
  stroke(120, 90, 55, 110);
  ellipse(width / 2, 258, 58, 57 + tt * 2.4);
  stroke(120, 90, 55, 155);
  ellipse(width / 2, 258, 58, 56 + tt * 1.2);
  stroke(120, 90, 55, 200);
  ellipse(width / 2, 258, 58, 55 + tt);


  // letras
  stroke(0);

  strokeWeight(28);
  strokeCap(SQUARE);
  line(175, 576 - tt / 1.5, 180 + tt / 3, 695 + tt / 4);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(180 + tt / 3, 695 + tt / 4, 140 + tt / 6, 715 + tt / 4);
  line(140 + tt / 6, 715 + tt / 4, 120 - tt / 3, 698 + tt);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(120 - tt / 3, 698 + tt, 125, 666 - tt / 2);

  strokeWeight(13.5);
  line(200 - 4 - tt / 6, 550 - tt * 1.1, 154 - 4 - tt / 6, 522 - tt * 1.1);
  line(153 - 4 - tt / 6, 553 - tt * 1.1, 190 - 4 - tt / 6, 521 - tt * 1.1);

  strokeWeight(25);
  line(227, 645 - tt / 6, 221 - tt / 4, 609 - tt / 3);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(221 - tt / 4, 609 - tt / 3, 252, 601 - tt / 2);
  line(252, 601 - tt / 2, 284 + tt / 4, 606 - tt / 6);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(284 + tt / 4, 606 - tt / 6, 286, 698 + tt / 6);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(286, 698 + tt / 6, 260 - tt / 4, 713 + tt / 2.5);
  line(260 - tt / 4, 713 + tt / 2.5, 232 - tt / 3, 693 - tt / 4);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(232 - tt / 3, 693 - tt / 4, 242 - tt / 3, 661 - tt / 4);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(242 - tt / 3, 661 - tt / 4, 277, 655 - tt / 4);

  strokeWeight(25);
  strokeCap(SQUARE);
  line(334 + tt / 6, 696 + tt / 1.2, 328 - tt / 4, 613 - tt / 4);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(328 - tt / 4, 613 - tt / 4, 360 - tt / 6, 602 - tt / 4);
  line(360 - tt / 6, 602 - tt / 4, 387 - tt / 4, 608 - tt / 4);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(387 - tt / 4, 608 - tt / 4, 379  - tt / 6, 633 + tt / 4);

  line(426 + tt / 6, 648 + tt / 6, 423 - tt / 6, 610 - tt / 4);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(423 - tt / 6, 610 - tt / 4, 446 + tt / 4, 600 - tt / 3);
  line(446 + tt / 4, 600 - tt / 3, 471 + tt / 4, 617 + tt / 6);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(471 + tt / 4, 617 + tt / 6, 473, 701 + tt / 6);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(473, 701 + tt / 6, 437 - tt / 3, 708 + tt / 2);
  line(437 - tt / 3, 708 + tt / 2, 408 - tt / 3, 693 + tt / 2.5);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(408 - tt / 3, 693 + tt / 2.5, 415 - tt / 2.5, 670 - tt / 6);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(415 - tt / 2.5, 670 - tt / 6, 471, 661 + tt / 6);

  strokeWeight(25);
  strokeCap(SQUARE);
  line(514 + tt / 4.5, 584 - tt / 1.5, 521 - tt / 3, 701 + tt / 3);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(521 - tt / 3, 701 + tt / 3, 548 + tt / 3.5, 705 + tt / 2.5);
  line(548 + tt / 3.5, 705 + tt / 2.5, 576 + tt / 3, 695 + tt / 4);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(576 + tt / 3, 695 + tt / 4, 575 - tt / 6, 627 - tt / 4);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(575 - tt / 6, 627 - tt / 4, 546, 622 - tt / 3.5);
  line(546, 622 - tt / 3.5, 518, 637 - tt / 3);

  strokeWeight(25);
  strokeCap(SQUARE);
  line(670 - tt / 4, 671 - tt / 4, 678 + tt / 2, 687 + tt / 2.5);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(678 + tt / 2, 687 + tt / 2.5, 659 + tt / 4, 707 + tt / 1.2);
  line(659 + tt / 4, 707 + tt / 1.2, 624 - tt / 6, 695 + tt / 2.5);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(624 - tt / 6, 695 + tt / 2.5, 613 + tt / 5, 610 - tt / 4);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(613 + tt / 5, 610 - tt / 4, 641 + tt / 2.5, 603 - tt / 3);
  line(641 + tt / 2.5, 603 - tt / 3, 671 + tt / 4, 617 - tt / 4);
  strokeWeight(25);
  strokeCap(SQUARE);
  line(671 + tt / 4, 617 - tt / 4, 665 + tt / 4, 649 - tt / 4);
  strokeWeight(10);
  strokeCap(PROJECT);
  line(665 + tt / 4, 649 - tt / 4, 619, 649 + tt / 4);

  // transparencias 1
  noStroke();
  fill(255, 240, 180, 40 + tt * 5);
  triangle(width / 2, 258, 0, 0, 0, 80);
  triangle(width / 2, 258, 0, 160, 0, 240);
  triangle(width / 2, 258, 0, 320, 0, 400);
  triangle(width / 2, 258, 0, 480, 0, 560);
  triangle(width / 2, 258, 0, 640, 0, 720);
  triangle(width / 2, 258, 0, 800, 80, 800);
  triangle(width / 2, 258, 160, 800, 240, 800);
  triangle(width / 2, 258, 320, 800, 400, 800);
  triangle(width / 2, 258, 480, 800, 560, 800);
  triangle(width / 2, 258, 640, 800, 720, 800);
  triangle(width / 2, 258, 800, 800, 800, 720);
  triangle(width / 2, 258, 800, 640, 800, 560);
  triangle(width / 2, 258, 800, 480, 800, 400);
  triangle(width / 2, 258, 800, 320, 800, 240);
  triangle(width / 2, 258, 800, 160, 800, 80);
  triangle(width / 2, 258, 800, 0, 720, 0);
  triangle(width / 2, 258, 640, 0, 560, 0);
  triangle(width / 2, 258, 480, 0, 400, 0);
  triangle(width / 2, 258, 320, 0, 240, 0);
  triangle(width / 2, 258, 160, 0, 80, 0);

  // ojo 3
  stroke(0);
  strokeWeight(76 - tt);
  strokeCap(ROUND);
  point(width / 2, 258);

  // bolitas
  noStroke();
  fill(255);
  circle(width / 2 + 50, 220, 50 - tt / 2);


  fill(245, 100, 150, tt * 20 );
  circle(width / 2, 105, 25 + tt * 2);
  fill(255, 100, 150, 242 + tt);
  circle(width / 2, 105, tt * 3.8);
  fill (245, 170, 230, 242 + tt);
  circle(width / 2, 105, tt * 2.2);

  fill(245, 100, 150, tt * 20 );
  circle(width / 2 + 125, 145, 10 + tt * 2);
  fill(255, 100, 150, 238 + tt);
  circle(width / 2 + 125, 145, tt * 1.5);

  fill(245, 100, 150, tt * 20 );
  circle(width / 2 - 125, 145, 10 + tt * 2);
  fill(255, 100, 150, 238 + tt);
  circle(width / 2 - 125, 145, tt * 1.5);

  fill(245, 100, 150, tt * 10 );
  circle(width / 2 - 200, 220, 10 + tt);
  fill(255, 100, 150, 238 + tt);
  circle(width / 2 - 200, 220, tt / 2);

  fill(245, 100, 150, tt * 10 );
  circle(width / 2 + 200, 220, 10 + tt);
  fill(255, 100, 150, 238 + tt);
  circle(width / 2 + 200, 220, tt / 2);

  // cejas
  noFill();
  strokeWeight(5);
  stroke(175, 150, 70, tt * 0.1);
  ellipse(width / 2, 570, 560, 910);
  stroke(175, 150, 70, tt * 0.2);
  ellipse(width / 2, 565, 670, 920);
  stroke(175, 150, 70, tt * 0.5);
  ellipse(width / 2, 560, 780, 930);
  stroke(175, 150, 70, tt * 1);
  ellipse(width / 2, 555, 890, 940);
  stroke(175, 150, 70, tt * 1.5);
  ellipse(width / 2, 550, 1000, 950);
  stroke(175, 150, 70, 1 + tt * 2);
  ellipse(width / 2, 545, 1110, 960);
  stroke(175, 150, 70, 10 + tt * 2.5);
  ellipse(width / 2, 540, 1220, 970);
  stroke(175, 150, 70, 20 + tt * 3);
  ellipse(width / 2, 535, 1330, 980);
  stroke(175, 150, 70, 30 + tt * 3.5);
  ellipse(width / 2, 530, 1440, 990);
  stroke(175, 150, 70, 40 + tt * 4);
  ellipse(width / 2, 525, 1550, 1000);
  stroke(175, 150, 70, 50 + tt * 4.5);
  ellipse(width / 2, 520, 1660, 1010);
  stroke(175, 150, 70, 60 + tt * 5);
  ellipse(width / 2, 515, 1770, 1020);
  stroke(175, 150, 70, 70 + tt * 5.5);
  ellipse(width / 2, 510, 1880, 1030);
  stroke(175, 150, 70, 80 + tt * 6);
  ellipse(width / 2, 505, 1990, 1040);
  stroke(175, 150, 70, 90 + tt * 6.5);
  ellipse(width / 2, 500, 2100, 1050);
  stroke(175, 150, 70, 100 + tt * 7);
  ellipse(width / 2, 495, 2210, 1060);
  stroke(175, 150, 70, 110 + tt * 7.5);
  ellipse(width / 2, 490, 2320, 1070);


  // gota
  noStroke();
  fill(255, 120, 140, 20);
  ellipse(width / 2, 506, 70 + tt * 15.5, 70 + tt * 8.8);
  fill(255, 118, 150, 40);
  ellipse(width / 2, 505, 70 + tt * 12, 70 + tt * 7.8);
  fill(255, 116, 160, 60);
  ellipse(width / 2, 504, 70 + tt * 9, 70 + tt * 6.8);
  fill(255, 114, 172, 80);
  ellipse(width / 2, 503, 70 + tt * 6.5, 70 + tt * 5.8);
  fill(255, 112, 184, 130);
  ellipse(width / 2, 502, 70 + tt * 4.5, 70 + tt * 4.8);
  fill(255, 110, 199, 170);
  ellipse(width / 2, 501, 71 + tt * 3, 70 + tt * 3.8);
  fill(255, 108, 222, 200);
  ellipse(width / 2, 500, 72 + tt * 2, 70 + tt * 2.8);

  fill(245, 170, 230);
  ellipse(width / 2, 500, 80, 100);
  triangle(361, 488, 439, 488, 400, 380);
  fill(255);
  ellipse(width / 2, 512, 55, 55);
  stroke(245, 170, 230);
  strokeWeight(66 - tt / 3);
  strokeCap(ROUND);
  point(width / 2, 498);

}

function mousePressed() {
   bool = !bool;
   return false;
}