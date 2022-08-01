let w;
let w01;

let first;
let first01;

let second;
let second01;
let second02;

let third;
let third01;

let fourth;
let fourth01;

let fifth;
let fifth01;
let fifth1;
let fifth101;
let fifth2;
let fifth201;

let sixth;
let sixth01;
let sixth1;
let sixth101;

let seventh;
let seventh01;
let seventh1;
let seventh101;
let seventh2;
let seventh201;

let yfirst;
let yfirst01;
let yfirst1;
let yfirst101;

let ysecond;
let ysecond01;
let ysecond1;
let ysecond101;

let ythird;
let ythird01;
let ythird1;
let ythird101;
let ythird2;
let ythird201;

let yfourth;
let yfourth01;
let yfourth1;
let yfourth101;

let yfifth;
let yfifth01;

let ysixth;
let ysixth01;
let ysixth1;
let ysixth101;
let ysixth2;
let ysixth201;

let yseventh;
let yseventh01;

var L=100;

var startX=200;
var startY=330;


let weight;
let traking;
let a;

let tint=80;
  let aa=20;
  let bb=140;
  let cc=125;

function setup() {

  createCanvas(windowWidth, 880).parent('p5');
   let button =createButton("reset sketch");
  button.mousePressed(resetSketch);
  textSize(15);


  weight=createSlider(2, 50,20);
  weight.position(width*0.25, height-35);
  tracking=createSlider(100, 400,140);
  tracking.position(width*0.5, height-35);
  a=createSlider(50, 300,125);
  a.position(width*0.75, height-35);
  // stroke(255, 0, 255);
 
  
  first = createVector(0, 0);
  second = createVector(0, 0);
    w = createVector(0, 0);
  w01=createVector(0, 0);

  first =createVector(0, 0);
  first01=createVector(0, 0);

  second =createVector(0, 0);
  second01=createVector(0, 0);
  second02=createVector(0, 0);

  third =createVector(0, 0);
  third01=createVector(0, 0);

  fourth =createVector(0, 0);
  fourth01=createVector(0, 0);

  fifth =createVector(0, 0);
  fifth01=createVector(0, 0);
  fifth1 =createVector(0, 0);
  fifth101=createVector(0, 0);
  fifth2 = createVector(0, 0);
  fifth201=createVector(0, 0);

  sixth =createVector(0, 0);
  sixth01=createVector(0, 0);
  sixth1 =createVector(0, 0);
  sixth101=createVector(0, 0);

  seventh =createVector(0, 0);
  seventh01=createVector(0, 0);
  seventh1 =createVector(0, 0);
  seventh101=createVector(0, 0);
  seventh2 =createVector(0, 0);
  seventh201=createVector(0, 0);

  //------Y
  yfirst =createVector(0, 0);
  yfirst01=createVector(0, 0);
  yfirst1 =createVector(0, 0);
  yfirst101=createVector(0, 0);

  ysecond =createVector(0, 0);
  ysecond01=createVector(0, 0);
  ysecond1 = createVector(0, 0);
  ysecond101=createVector(0, 0);

  ythird =createVector(0, 0);
  ythird01=createVector(0, 0);
  ythird1 =createVector(0, 0);
  ythird101=createVector(0, 0);
  ythird2 =createVector(0, 0);
  ythird201=createVector(0, 0);

  yfourth =createVector(0, 0);
  yfourth01=createVector(0, 0);
  yfourth1 = createVector(0, 0);
  yfourth101=createVector(0, 0);

  yfifth = createVector(0, 0);
  yfifth01=createVector(0, 0);
  
    ysixth = createVector(0, 0);
  ysixth01=createVector(0, 0);
  ysixth1 =createVector(0, 0);
  ysixth101=createVector(0, 0);
  ysixth2 =createVector(0, 0);
  ysixth201=createVector(0, 0);
  
    yseventh =createVector(0, 0);
  yseventh01=createVector(0, 0);

  textSize(15);
  noStroke();
}

function draw() {
  background(255);
  
  push(); 
  textSize(15);
  noStroke();
  text('Weight', weight.x + weight.width+20, height-20);
  text('Traking', tracking.x + tracking.width+20, height-20);
  text('Ratio', a.x + a.width+20, height-20);
  pop();
  
    let c1=color(0, tint);
  let c2=color(0, tint);
  
  let unit=weight.value();
  let space=tracking.value();
  let ratio=a.value();

  fill(0);





  strokeWeight(unit);
  strokeCap(PROJECT);
  pos=0;

  
    //----------step3---------------
  //-----X
  let xw = map(mouseX, 4*(width/8), 0, 0, 0.1*width);
  let xw01 = map(mouseX, 0, width, 0, 0.1*width);

  let x01 = map(mouseX, 0, width, width*0.6, 0);
  let x0101 = map(mouseX, 0, width, 0, width*-0.13);


  let x02 = map(mouseX, 0, width, width*-0.2, 0);
  let x0201 = map(mouseX, 0, width, 0, width*0.68);
  let x0202 = map(mouseX, 0, width, 0, width*0.48);
  let x03 = map(mouseX, 0, width/2, width*-0.2, 0);
  let x0301 = map(mouseX, 0, width, 0, width*0.08);
  let x04 = map(mouseX, 0, width, width*0.2, 0);
  let x0401 = map(mouseX, 0, width, 0, width*-0.1);

  let x05 = map(mouseX, 0, width, width*-0.6, 0);
  let x0501 = map(mouseX, 0, width, 0, width*0.21);
  let x051 = map(mouseX, 0, width, width*-0.5, 0);
  let x05101 = map(mouseX, 0, width, 0, width*0.17);
  let x052 = map(mouseX, 0, width, width*-0.4, 0);
  let x05201 = map(mouseX, 0, width, 0, width*0.13);

  let x06 = map(mouseX, 0, width, width*0.21, 0);
  let x0601 = map(mouseX, 0, width, 0, width*-0.8);
  let x061 = map(mouseX, 0, width, width*0.18, 0);
  let x06101 = map(mouseX, 0, width, 0, width*-0.6);

  let x07 = map(mouseX, 0, width, width*-0.4, 0);
  let x0701 = map(mouseX, 0, width, 0, width*0.08);
  let x071 = map(mouseX, 0, width, width*-0.35, 0);
  let x07101 = map(mouseX, 0, width, 0, width*0.07);
  let x072 = map(mouseX, 0, width, width*-0.3, 0);
  let x07201 = map(mouseX, 0, width, 0, width*0.06);


  //-----Y
  let y01 = map(mouseY, height, 0, 0, height*0.5);
  let y0101 = map(mouseY, 2*(height/3), 0, 0, height*0.43);
  let y011 = map(mouseY, height, 0, 0, height*0.2);
  let y01101 = map(mouseY, 2*(height/3), 0, 0, height*0.23);

  let y02 = map(mouseY, height, 0, 0, height*-0.02);
  let y0201 = map(mouseY, 2*(height/3), 0, 0, height*0.2);
  let y021 = map(mouseY, height, 0, 0, height*-0.4);
  let y02101 = map(mouseY, 2*(height/3), 0, 0, height*-0.7);

  let y03 = map(mouseY, height, 0, 0, height*0.42);
  let y0301 = map(mouseY, 2*(height/3), 0, 0, height*0.5);
  let y031 = map(mouseY, height, 0, 0, height*-0.01);
  let y03101 = map(mouseY, 2*(height/3), 0, 0, -height*0.1);
  let y032 = map(mouseY, height, 0, 0, height*-0.3);
  let y03201 = map(mouseY, 2*(height/3), 0, 0, height*-0.25);

  let y04 = map(mouseY, height, 0, 0, height*-0.3);
  let y0401 = map(mouseY, 2*(height/3), 0, 0, height*-0.6);
  let y041 = map(mouseY, height, 0, 0, height*0.25);
  let y04101 = map(mouseY, 2*(height/3), 0, 0, height*0.5);

  let y05 = map(mouseY, height, 0, 0, height*-0.1);
  let y0501 = map(mouseY, 2*(height/3), 0, 0, height*-0.9);
  
    let y06 = map(mouseY, height, 0, 0, height*-0.45);
  let y0601 = map(mouseY, 2*(height/3), 0, 0, height*-0.2);
  let y061 = map(mouseY, height, 0, 0, height*0.2);
  let y06101 = map(mouseY, 2*(height/3), 0, 0, height*0.9);
  let y062 = map(mouseY, height, 0, 0, height*-0.1);
  let y06201 = map(mouseY, 2*(height/3), 0, 0, height*-0.6);
  
    let y07 = map(mouseY, height, 0, 0, height*-0.02);
  let y0701 = map(mouseY, 2*(height/3), 0, 0, height*0.2);
  //----------step4---------------
//  if (3*(width/8)<mouseX && mouseX<5*(width/8))
  
    if (0<mouseX && mouseX<5*(width/8)) {

    x01=0;
    x0101=0;
    x02=0;
    x0201=0;
    x0202=0;
    x03=0;
    x0301=0;
    x04=0;
    x0401=0;
    x05=0;
    x0501=0;
    x051=0;
    x05101=0;
    x052=0;
    x05201=0;
    x06=0;
    x0601=0;
    x061=0;
    x06101=0;
    x07=0;
    x0701=0;
    x071=0;
    x07101=0;
    x072=0;
    x07201=0;
  }

  if (4*(width/8)<mouseX && mouseX<5*(width/8)) {
    xw=0;
    xw01=0;
  }

  if (1*(height/3)<mouseY && mouseY<2*(height/3)) {
    y01=0;
    y0101=0;
    y011=0;
    y01101=0;

    y02=0;
    y0201=0;
    y021=0;
    y02101=0;

    y03=0;
    y0301=0;
    y031=0;
    y03101=0;
    y032=0;
    y03201=0;

    y04=0;
    y0401=0;
    y041=0;
    y04101=0;

    y05=0;
    y0501=0;
    
        y06=0;
    y0601=0;
    y061=0;
    y06101=0;
    y062=0;
    y06201=0;
    
        y07=0;
    y0701=0;

  }

  if (mouseY>2*(height/3)) {
    y01=y0101;
    y011=y01101;
    y02=y0201;
    y021=y02101;
    y03=y0301;
    y031=y03101;
    y032=y03201;
    y04=y0401;
    y041=y04101;
    y05=y0501;
       y06=y0601;
    y061=y06101;
    y062=y06201;
     y07=y0701;

  }

  if (mouseX>5*(width/8)) {
    xw=xw01;
    x01=x0101;
    x02=x0202;
    x03=x0301;
    x04=x0401;
    x05=x0501;
    x051=x05101;
    x052=x05201;
    x06=x0601;
    x061=x06101;
    x07=x0701;
    x071=x07101;
    x072=x07201;
    //x02=x0202;
  }
  //  if (0<mouseX)  {
  //  //x01=x0101;
  //  x02=x0202;
  //}

  //----------step5---------------
  
let targetw=createVector(xw, 0);
let targetw01=createVector(xw01, 0);


let target01=createVector(x01, 0);
let target0101=createVector(x0101, 0);

let target02=createVector(x02, 0);
let target0201=createVector(x0201, 0);
let target0202=createVector(x0202, 0);

let target03=createVector(x03, 0);
let target0301=createVector(x0301, 0);

let target04=createVector(x04, 0);
let target0401=createVector(x0401, 0);

let target05=createVector(x05, 0);
let target0501=createVector(x0501, 0);
let target051=createVector(x051, 0);
let target05101=createVector(x05101, 0);
let target052=createVector(x052, 0);
let target05201=createVector(x05201, 0);

let target06=createVector(x06, 0);
let target0601=createVector(x0601, 0);
let target061=createVector(x061, 0);
let target06101=createVector(x06101, 0);

let target07=createVector(x07, 0);
let target0701=createVector(x0701, 0);
let target071=createVector(x071, 0);
let target07101=createVector(x07101, 0);
let target072=createVector(x072, 0);
let target07201=createVector(x07201, 0);

  //----Y
let ytarget01=createVector(y01, 0);
let ytarget0101=createVector(y0101, 0);
let ytarget011=createVector(y011, 0);
let ytarget01101=createVector(y01101, 0);

let ytarget02=createVector(y02, 0);
let ytarget0201=createVector(y0201, 0);
let ytarget021=createVector(y021, 0);
let ytarget02101=createVector(y02101, 0);

let ytarget03=createVector(y03, 0);
let ytarget0301=createVector(y0301, 0);
let ytarget031=createVector(y031, 0);
let ytarget03101=createVector(y03101, 0);
let ytarget032=createVector(y032, 0);
let ytarget03201=createVector(y03201, 0);

let ytarget04=createVector(y04, 0);
let ytarget0401=createVector(y0401, 0);
let ytarget041=createVector(y041, 0);
let ytarget04101=createVector(y04101, 0);
  
  let ytarget05=createVector(y05, 0);
let ytarget0501=createVector(y0501, 0);
  
  let ytarget06=createVector(y06, 0);
let ytarget0601=createVector(y0601, 0);
let ytarget061=createVector(y061, 0);
let ytarget06101=createVector(y06101, 0);
let ytarget062=createVector(y062, 0);
let ytarget06201=createVector(y06201, 0);
  
    let ytarget07=createVector(y07, 0);
let ytarget0701=createVector(y0701, 0);
  
  //----------step6---------------

let speedw=p5.Vector.sub(targetw, w);
  speedw.mult(0.1);
  w.add(speedw);
let speedw01=p5.Vector.sub(targetw01, w01);
  speedw01.mult(0.02);
  first01.add(speedw01);

let speed1=p5.Vector.sub(target01, first);
  speed1.mult(0.1);
  first.add(speed1);

let speed0101=p5.Vector.sub(target0101, first01);
  speed0101.mult(0.02);
  first01.add(speed0101);


let speed2=p5.Vector.sub(target02, second);
  speed2.mult(0.1);
  second.add(speed2);

let speed0201=p5.Vector.sub(target0201, second01);
  speed0201.mult(0.08);
  second01.add(speed0201);

let speed0202=p5.Vector.sub(target0202, second02);
  speed0202.mult(0.05);
  second02.add(speed0202);

let speed3=p5.Vector.sub(target03, third);
  speed3.mult(0.08);
  third.add(speed3);

let speed0301=p5.Vector.sub(target0301, third01);
  speed0301.mult(0.02);
  third01.add(speed0301);

let speed4=p5.Vector.sub(target04, fourth);
  speed4.mult(0.09);
  fourth.add(speed4);

let speed0401=p5.Vector.sub(target0401, fourth01);
  speed0401.mult(0.005);
  fourth01.add(speed0401);

let speed5=p5.Vector.sub(target05, fifth);
  speed5.mult(0.09);
  fifth.add(speed5);

let speed0501=p5.Vector.sub(target0501, fifth01);
  speed0501.mult(0.005);
  fifth01.add(speed0501);

let speed51=p5.Vector.sub(target051, fifth1);
  speed51.mult(0.09);
  fifth1.add(speed51);

let speed05101=p5.Vector.sub(target05101, fifth101);
  speed05101.mult(0.005);
  fifth101.add(speed05101);

let speed52=p5.Vector.sub(target052, fifth2);
  speed52.mult(0.09);
  fifth2.add(speed52);

let speed05201=p5.Vector.sub(target05201, fifth201);
  speed05201.mult(0.005);
  fifth201.add(speed05201);

let speed6=p5.Vector.sub(target06, sixth);
  speed6.mult(0.09);
  sixth.add(speed6);

let speed0601=p5.Vector.sub(target0601, sixth01);
  speed0601.mult(0.005);
  sixth01.add(speed0601);

let speed61=p5.Vector.sub(target061, sixth1);
  speed61.mult(0.09);
  sixth1.add(speed61);

let speed06101=p5.Vector.sub(target06101, sixth101);
  speed06101.mult(0.005);
  sixth101.add(speed06101);


let speed7=p5.Vector.sub(target07, seventh);
  speed7.mult(0.09);
  seventh.add(speed7);

let speed0701=p5.Vector.sub(target0701, seventh01);
  speed0701.mult(0.005);
  seventh01.add(speed0701);

let speed71=p5.Vector.sub(target071, seventh1);
  speed71.mult(0.09);
  seventh1.add(speed71);

let speed07101=p5.Vector.sub(target07101, seventh101);
  speed07101.mult(0.005);
  seventh101.add(speed07101);

let speed72=p5.Vector.sub(target072, seventh2);
  speed72.mult(0.09);
  seventh2.add(speed72);

let speed07201=p5.Vector.sub(target07201, seventh201);
  speed07201.mult(0.005);
  seventh201.add(speed07201);
  


  //------y

let yspeed1=p5.Vector.sub(ytarget01, yfirst);
  yspeed1.mult(0.1);
  yfirst.add(yspeed1);
let yspeed0101=p5.Vector.sub(ytarget0101, yfirst01);
  yspeed0101.mult(0.1);
  yfirst01.add(yspeed0101);

let yspeed11=p5.Vector.sub(ytarget011, yfirst1);
  yspeed11.mult(0.1);
  yfirst1.add(yspeed11);
let yspeed01101=p5.Vector.sub(ytarget01101, yfirst101);
  yspeed01101.mult(0.1);
  yfirst101.add(yspeed01101);


let yspeed2=p5.Vector.sub(ytarget02, ysecond);
  yspeed2.mult(0.1);
  ysecond.add(yspeed2);

let yspeed0201=p5.Vector.sub(ytarget0201, ysecond01);
  yspeed0201.mult(0.1);
  ysecond01.add(yspeed0201);

let yspeed21=p5.Vector.sub(ytarget021, ysecond1);
  yspeed21.mult(0.1);
  ysecond1.add(yspeed21);

let yspeed02101=p5.Vector.sub(ytarget02101, ysecond101);
  yspeed02101.mult(0.1);
  ysecond101.add(yspeed02101);

let yspeed3=p5.Vector.sub(ytarget03, ythird);
  yspeed3.mult(0.1);
  ythird.add(yspeed3);

let yspeed0301=p5.Vector.sub(ytarget0301, ythird01);
  yspeed0301.mult(0.1);
  ythird01.add(yspeed0301);

let yspeed31=p5.Vector.sub(ytarget031, ythird1);
  yspeed31.mult(0.1);
  ythird1.add(yspeed31);

let yspeed03101=p5.Vector.sub(ytarget03101, ythird101);
  yspeed03101.mult(0.1);
  ythird101.add(yspeed03101);

let yspeed32=p5.Vector.sub(ytarget032, ythird2);
  yspeed32.mult(0.1);
  ythird2.add(yspeed32);

let yspeed03201=p5.Vector.sub(ytarget03201, ythird201);
  yspeed03201.mult(0.1);
  ythird201.add(yspeed03201);

let yspeed4=p5.Vector.sub(ytarget04, yfourth);
  yspeed4.mult(0.1);
  yfourth.add(yspeed4);

let yspeed0401=p5.Vector.sub(ytarget0401, yfourth01);
  yspeed0401.mult(0.1);
  yfourth01.add(yspeed0401);

let yspeed41=p5.Vector.sub(ytarget041, yfourth1);
  yspeed41.mult(0.1);
  yfourth1.add(yspeed41);

let yspeed04101=p5.Vector.sub(ytarget04101, yfourth101);
  yspeed04101.mult(0.1);
  yfourth101.add(yspeed04101);
  
  let yspeed5=p5.Vector.sub(ytarget05, yfifth);
  yspeed5.mult(0.1);
  yfifth.add(yspeed5);

let yspeed0501=p5.Vector.sub(ytarget0501, yfifth01);
  yspeed0501.mult(0.1);
  yfifth01.add(yspeed0501);
  
  
  let yspeed6=p5.Vector.sub(ytarget06, ysixth);
  yspeed6.mult(0.1);
  ysixth.add(yspeed6);

let yspeed0601=p5.Vector.sub(ytarget0601, ysixth01);
  yspeed0601.mult(0.1);
  ysixth01.add(yspeed0601);

let yspeed61=p5.Vector.sub(ytarget061, ysixth1);
  yspeed61.mult(0.1);
  ysixth1.add(yspeed61);

let yspeed06101=p5.Vector.sub(ytarget06101, ysixth101);
  yspeed06101.mult(0.1);
  ysixth101.add(yspeed06101);

let yspeed62=p5.Vector.sub(ytarget062, ysixth2);
  yspeed62.mult(0.1);
  ysixth2.add(yspeed62);

let yspeed06201=p5.Vector.sub(ytarget06201, ysixth201);
  yspeed06201.mult(0.1);
  ysixth201.add(yspeed06201);
  
    let yspeed7=p5.Vector.sub(ytarget07, yseventh);
  yspeed7.mult(0.1);
  yseventh.add(yspeed7);

let yspeed0701=p5.Vector.sub(ytarget0701, yseventh01);
  yspeed0701.mult(0.1);
  yseventh01.add(yspeed0701);

  stroke(0);

i=0;
  
    //-----N
  push();
  translate(startX+i*space, startY);
  stroke(c1);
  line(0+first.x, 0, L+first.x, 0);// -
  stroke(c2);
  line(0, 0+yfirst.x, 0, ratio*0.01*L+yfirst.x);// |
  line(L, 0+yfirst1.x, L, ratio*0.01*L+yfirst1.x);// |
  pop();


  //-----O
  push();
  translate(startX+(i+1)*space, startY);
  stroke(c1);
  line(0+second.x, 0, L+second.x, 0); // -
  line(0+second02.x, ratio*0.01*L, L+second02.x, ratio*0.01*L); // -
  stroke(c2);
  line(0, 0+ysecond.x, 0, ratio*0.01*L+ysecond.x); // |
  line(L, 0+ysecond1.x, L, ratio*0.01*L+ysecond1.x); // |
  pop();



  //-----W
  push();
  translate(startX+(i+2+pos)*space+w.x, startY);
  stroke(c1);
  line(0+third.x, ratio*0.01*L, L+third.x, ratio*0.01*L);// -
  stroke(c2);
  line(L/2, 0+ythird.x, L/2, ratio*0.01*L+ythird.x);// |
  line(0, 0+ythird1.x, 0, ratio*0.01*L+ythird1.x);// |
  line(L, 0+ythird2.x, L, ratio*0.01*L+ythird2.x);// |
  pop();

  //-----space
  push();
  translate(startX+(i+3-pos)*space, startY);
  stroke(0, 0);
  line(0, 0, L, 0);
  line(0, ratio*0.01*L, L, ratio*0.01*L);
  line(0, 0, 0, ratio*0.01*L);
  line(L, 0, L, ratio*0.01*L);
  pop();


  //-----H
  push();
  translate(startX+(i+4)*space, startY);
  stroke(c1);
  line(0+fourth.x, ratio*0.01*L/2, L+fourth.x, ratio*0.01*L/2);// -
  stroke(c2);
  line(0, 0+yfourth.x, 0, ratio*0.01*L+yfourth.x);// |
  line(L, 0+yfourth1.x, L, ratio*0.01*L+yfourth1.x);// |
  pop();

  //-----E
  push();
  translate(startX+(i+5)*space, startY);
  stroke(c1);
  line(0+fifth.x, 0, L+fifth.x, 0);// -
  line(0+fifth1.x, ratio*0.01*L/2, L+fifth1.x, ratio*0.01*L/2);// -
  line(0+fifth2.x, ratio*0.01*L, L+fifth2.x, ratio*0.01*L);// -
  stroke(c2);
  line(0, 0+yfifth.x, 0, ratio*0.01*L+yfifth.x);// |
  pop();

  //-----R
  push();
  translate(startX+(i+6)*space, startY);
  stroke(c1);
  line(0+sixth.x, 0, 2*(L/3)+sixth.x, 0);//-
  line(0+sixth1.x, ratio*0.01*L/2, L+sixth1.x, ratio*0.01*L/2);//-
  stroke(c2);
  line(0, 0+ysixth.x, 0, ratio*0.01*L+ysixth.x);//|
  line(2*(L/3), 0+ysixth1.x, 2*(L/3), ratio*0.01*L/2+ysixth1.x);//|
  line(L, ratio*0.01*L/2+ysixth2.x, L, ratio*0.01*L+ysixth2.x);//|
  pop();

  //-----E
  push();
  translate(startX+(i+7)*space, startY);
  stroke(c1);
  line(0+seventh.x, 0, L+seventh.x, 0);//-
  line(0+seventh1.x, ratio*0.01*L/2, L+seventh1.x, ratio*0.01*L/2);//-
  line(0+seventh2.x, ratio*0.01*L, L+seventh2.x, ratio*0.01*L);//-
  stroke(c2);
  line(0, 0+yseventh.x, 0, ratio*0.01*L+yseventh.x);//|
  pop();


}

function keyTyped() {
  if (key === ' ') {

weight.value(20);
  tracking.value(140);
  a.value(125);
  }
}

function resetSketch() {

weight.value(20);
  tracking.value(140);
  a.value(125);
    
  
   


}