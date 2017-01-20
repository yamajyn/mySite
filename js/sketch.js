var canvasX = 800; //横フレームサイズ
var canvasY = 600; //縦フレームサイズ
var page = 0;
var a = 0,
  b = 0;
var btn1X = 377 / 5,
  btn1Y = 390 / 5; //ボタンサイズ
var btn2X = 369 / 5,
  btn2Y = 372 / 5;
var btnInterval = 120; //ボタン間隔
var btnMode = [];
var keyX = 50,
  keyY = 60,
  keySize = 110;
var tenkeyMode = 0;
var mapX = -500,
  mapY = -500,
  mapWidth = 3941,
  mapHeight = 1535;
var zoomX = 87,
  zoomY = 215,
  zoomWidth = 37,
  zoomHeight = 110;

var zoomMode = 0;
var establishMode = 0;

var selectMode = [];

var pressX = [],
  pressY = [];
var transX = [],
  transY = [];
var x = [],
  y = [];
var structure = [];
var count = 0;

var tmpMillis,tmpMillis2, time = 0,
  tmptime = 0,
  Second = 0,
  Month = 1,
  Year = 1968,
  tmpYear = [];
var yen = 50000;
var price = [];
var profit = [];

var eventMode = 0;
var bonus1 = 1;
var bonus2 = 0;
var bonus3 = 0;
var bonus4 = 1;
var bonusMode = 0;
var centerX, centerY;
var ekimaeX, ekimaeY;
var syutodaiX, syutodaiY;
var hashiX, hashiY;
var points=0;

function setup() {

  var canvas = createCanvas(canvasX, canvasY);
  canvas.parent("p5Canvas");
  background(255, 255, 187);
  //画像のロード
  startbackground = loadImage("./img/startbackground.png");
  rulebackground = loadImage("./img/rule.jpg");
  result = loadImage("./img/result.png");
    //文字
  start = loadImage("./img/start.png");
  rule = loadImage("./img/rule.png");
  gatu = loadImage("./img/gatu.png");
  nen = loadImage("./img/nen.png");
  oku = loadImage("./img/oku.png");
  senman = loadImage("./img/senman.png");
  //ボタン
  house = loadImage("./img/btn-house.png");
  houseon = loadImage("./img/btn-houseon.png");
  road = loadImage("./img/btn-road.png");
  roadon = loadImage("./img/btn-roadon.png");
  tree = loadImage("./img/btn-tree.png");
  treeon = loadImage("./img/btn-treeon.png");
  tsuruhashi = loadImage("./img/btn-tsuruhashi.png");
  tsuruhashion = loadImage("./img/btn-tsuruhashion.png");
  tenkey = loadImage("./img/tenkey.png");
  tenkeyU = loadImage("./img/tenkey-U.png");
  tenkeyR = loadImage("./img/tenkey-R.png");
  tenkeyD = loadImage("./img/tenkey-D.png");
  tenkeyL = loadImage("./img/tenkey-L.png");
  YugiMap = loadImage("./img/map.png");
  zoom = loadImage("./img/zoom.png");
  zoomin = loadImage("./img/zoomin.png");
  zoomout = loadImage("./img/zoomout.png");
  selectbar = loadImage("./img/selectbar.png");
  selectbar2 = loadImage("./img/select.png");

  //建物
  syutodai = loadImage("./img/syutodai.png");
  minka1 = loadImage("./img/minka-1.png");
  minka2 = loadImage("./img/minka-2.png");
  minka3 = loadImage("./img/minka-3.png");
  danchi1 = loadImage("./img/danchi-1.png");
  danchi2 = loadImage("./img/danchi-2.png");
  danchi3 = loadImage("./img/danchi-3.png");
  danchi1s = loadImage("./img/danchis-1.png");
  danchi2s = loadImage("./img/danchis-2.png");
  danchi3s = loadImage("./img/danchis-3.png");
  ikkenya1 = loadImage("./img/ikkenya-1.png");
  ikkenya2 = loadImage("./img/ikkenya-2.png");
  ikkenya3 = loadImage("./img/ikkenya-3.png");
  apartment1 = loadImage("./img/apartment-1.png");
  center = loadImage("./img/toshicenter.png");
  ekimae = loadImage("./img/ekimae.png");
  mituke = loadImage("./img/mituke.png");

  //道路
  road1 = loadImage("./img/road-1.png");
  road2 = loadImage("./img/road-2.png");
  road3 = loadImage("./img/road-3.png");
  road4 = loadImage("./img/road-4.png");
  road5 = loadImage("./img/road-5.png");
  road6 = loadImage("./img/road-6.png");

  //木
  tree1 = loadImage("./img/tree-1.png");
  tree2 = loadImage("./img/tree-2.png");
  tree3 = loadImage("./img/tree-3.png");
  tree4 = loadImage("./img/tree-4.png");

  //イベント
  event1 = loadImage("./img/event1.png");
  event11 = loadImage("./img/event11.png");
  event12 = loadImage("./img/event12.png");
  event2 = loadImage("./img/event2.png");
  event21 = loadImage("./img/event21.png");
  event22 = loadImage("./img/event22.png");
  event3 = loadImage("./img/event3.png");
  event31 = loadImage("./img/event31.png");
  event32 = loadImage("./img/event32.png");
  event4 = loadImage("./img/event4.png");
  event41 = loadImage("./img/event41.png");
  event42 = loadImage("./img/event42.png");
  yes = loadImage("./img/yes.png");
  no = loadImage("./img/no.png");
  
  //リザルト
  check =loadImage("./img/check.png");
  ponmura=loadImage("./img/ponmura.png");
  ponmachi=loadImage("./img/ponmachi.png");
  pontown=loadImage("./img/pontown.png");
  tamatown=loadImage("./img/tamatown.png");
  tamanew=loadImage("./img/tamanew.png");
}

function draw() {
  if (page === 0) {
    image(startbackground, 0, 0);
    image(start, 320 - b / 163 * 10, 320 - b / 61 * 10, 163 + b / 163 * 20, 61 + b / 61 * 20);
    image(rule, 320, 370, 163, 61);
    if (b === 0) {
      a = 1;
    } else if (b >= 30) {
      a = -1;
    }
    b = b + a;
  } else if (page == 1) {
    fill(255, 255, 200);
    noStroke();
    rect(0, 0, canvasX, canvasY);
    textSize(10);
    fill(0);
    drawMap();
    buildStructures(pressX, pressY);
    holdStructures();
    select();
    timer(millis() - tmpMillis);
    accounts();
    drawbtn(120);
    drawtenkey(keyX, keyY, keySize);
    event();
    //drawzoombtn(zoomX, zoomY, zoomWidth, zoomHeight);
    tmpMillis2=millis();
  } else if (page == 2) {
    image(rulebackground, 0, 0);
  } else if (page==3){
    fill(255,150);
    image(result,0,0);
    fill(255);
    if(millis()-tmpMillis2>1000){
      if(bonus1<1){
      image(check,470,265,50,50);
      }else{
      image(check,585,265,50,50);
      }
    }
    if(millis()-tmpMillis2>2000){
      if(bonus2>0){
      image(check,470,325,50,50);
      }else{
      image(check,585,325,50,50);
      }
    }
    if(millis()-tmpMillis2>3000){
      if(bonus3>0){
      image(check,470,380,50,50);
      }else{
      image(check,585,380,50,50);
      }
    }
    if(millis()-tmpMillis2>4000){
      if(bonus4>1){
      image(check,470,435,50,50);
      }else{
      image(check,585,435,50,50);
      }
    }
    if(millis()-tmpMillis2>5500){
      if(points===0){
      image(ponmura,550,520,200,50);
      }else if(points==1){
      image(ponmachi,550,520,200,50);
      }else if(points==2){
      image(pontown,550,520,200,50);
      }else if(points==3){
      image(tamatown,550,520,200,50);
      }else if(points==4){
        if(yen>5000000){
      image(tamanew,550,520,200,50);
        }else{
          image(tamatown,550,520,200,50);
        }
      }
    }
    if(millis()-tmpMillis2>6500){
      noStroke();
      fill(0,50);
      rect(0,0,800,600);
    }
  }
}

function mousePressed() {
  drawPage();
  btnFunction();
  keyFunction(keySize);
  selectFunction();

  //zoomFunction(zoomX, zoomY, zoomWidth, zoomHeight);
  if (　mouseY < 500 && mouseX > 200 && page == 1) {
    pressX[count] = mouseX;
    pressY[count] = mouseY;
    if (establishMode == 1 &&yen>-6000000&& eventMode === 0) {
      yen = yen - price[count];
      tmpYear[count] = Year;
      count++;
      if (bonusMode === 0) {
        btnMode[count] = btnMode[count - 1];
        selectMode[count] = selectMode[count - 1];
      } else if(bonusMode>0){
        bonusMode=0;
      }
    }
  }
  if (eventMode > 10) {
    eventMode = 0;
    establishMode = 1;
    if (bonusMode == 1) {
        btnMode[count] = 5;
        selectMode[count] = 8;
    }else if(bonusMode==2){
      btnMode[count] = 5;
      selectMode[count] = 9;
    }else if(bonusMode==3){
      btnMode[count] = 6;
      selectMode[count] = 8;
    }else if(bonusMode==4){
      btnMode[count] = 6;
      selectMode[count] = 9;
    }
  }
  if (eventMode > 0) {
    if (mouseX > 300 && mouseX < 390 && mouseY > 370 && mouseY < 420) {
      if (eventMode == 1) {
        eventMode = 11;
        bonus1 = 9 / 10;
        yen = yen - 25000;
        bonusMode = 1;
        points++;
      } else if (eventMode == 2) {
        eventMode = 21;
        bonus2 = 20000;
        yen = yen - 40000;
        bonusMode=2;
        points++;
      } else if (eventMode == 3) {
        eventMode = 31;
        yen = yen - 6000000;
        bonus3 = 200000;
        bonusMode=3;
        points++;
      } else if (eventMode == 4) {
        eventMode = 41;
        yen = yen - 163000;
        bonus4 = 11 / 10;
        bonusMode=4;
        points++;
      }
    } else if (mouseX > 470 && mouseX < 580 && mouseY > 370 && mouseY < 420) {
      if (eventMode == 1) {
        eventMode = 12;
      } else if (eventMode == 2) {
        eventMode = 22;
      } else if (eventMode == 3) {
        eventMode = 32;
      } else if (eventMode == 4) {
        eventMode = 42;
      }
    }
  }
}

function mouseReleased() {
  tenkeyMode = 0;
  zoomMode = 0;
}

function mouseClicked() {
  if (page == 2) {
    page = 0;
  }
}