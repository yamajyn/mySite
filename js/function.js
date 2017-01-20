function btnFunction() {
  if (mouseX > canvasX / 2 - btnInterval * 3 / 2 - btn1X / 2 &&
    mouseX < canvasX / 2 - btnInterval * 3 / 2 + btn1X　 / 2 &&
    mouseY > 500 &&
    mouseY < 500 + btn1Y) {
    btnMode[count] = 1;
  } else if (mouseX > canvasX / 2 - btnInterval / 2 - btn1X / 2 &&
    mouseX < canvasX / 2 - btnInterval / 2 + btn1X　 / 2 &&
    mouseY > 500 &&
    mouseY < 500 + btn1Y) {
    btnMode[count] = 2;
  } else if (mouseX > canvasX / 2 + btnInterval / 2 - btn1X / 2 &&
    mouseX < canvasX / 2 + btnInterval / 2 + btn1X　 / 2 &&
    mouseY > 500 &&
    mouseY < 500 + btn1Y) {
    btnMode[count] = 3;
  } else if (mouseX > canvasX / 2 + btnInterval * 3 / 2 - btn1X / 2 &&
    mouseX < canvasX / 2 + btnInterval * 3 / 2 + btn1X　 / 2 &&
    mouseY > 500 &&
    mouseY < 500 + btn1Y) {
    btnMode[count] = 4;
  } else {
    //btnMode[count] =btnMode[count-1] ;
  }
}

function keyFunction(size) {
  if (mouseX > keyX + size / 3 && mouseX < keyX + size * 2 / 3 && mouseY > keyY && mouseY < keyY + size / 3) {
    tenkeyMode = 1;
  } else if (mouseX > keyX + size * 2 / 3 && mouseX < keyX + size && mouseY > keyY + size / 3 && mouseY < keyY + size * 2 / 3) {
    tenkeyMode = 2;
  } else if (mouseX > keyX + size / 3 && mouseX < keyX + size * 2 / 3 && mouseY > keyY + size * 2 / 3 && mouseY < keyY + size) {
    tenkeyMode = 3;
  } else if (mouseX > keyX && mouseX < keyX + size / 3 && mouseY > keyY + size / 3 && mouseY < keyY + size * 2 / 3) {
    tenkeyMode = 4;
  }
}

function zoomFunction(x, y, width, height) {
  if (mouseX > x && mouseX < x + width) {
    if (mouseY > y && mouseY < y + width) {
      zoomMode = 1;
    } else if (mouseY > y + width + 35 && mouseY < y + height) {
      zoomMode = 2;
    }
  } else {
    zoomMode = 0;
  }
}

function holdStructures() {
  if (mouseY < 500 && mouseX > 200 && eventMode === 0) {
    if (btnMode[count] == 1 ) {
      if (Year < 1970) {
        if (selectMode[count] == 1) {
          image(minka1, mouseX - 20, mouseY - 20, 61, 48);
          price[count] = 1000 * bonus1;
          profit[count] = 10;
        } else if (selectMode[count] == 2) {
          image(minka2, mouseX - 20, mouseY - 20, 61, 48);
          price[count] = 1000 * bonus1;
          profit[count] = 10;
        } else if (selectMode[count] == 3) {
          image(minka3, mouseX - 20, mouseY - 20, 61, 48);
          price[count] = 1000 * bonus1;
          profit[count] = 10;
        } else {}
      } else if (Year >= 1970 && Year < 1980) {
        if (selectMode[count] == 1) {
          image(minka1, mouseX - 20, mouseY - 20, 61, 48);
          price[count] = 1000 * bonus1;
          profit[count] = 8;
        } else if (selectMode[count] == 2) {
          image(minka2, mouseX - 20, mouseY - 20, 61, 48);
          price[count] = 1000 * bonus1;
          profit[count] = 8;
        } else if (selectMode[count] == 3) {
          image(minka3, mouseX - 20, mouseY - 20, 61, 48);
          price[count] = 1000 * bonus1;
          profit[count] = 8;
        } else if (selectMode[count] == 4) {
          image(danchi1, mouseX - 20, mouseY - 20, 130, 120);
          price[count] = 10000 * bonus1;
          profit[count] = 200;
        } else if (selectMode[count] == 5) {
          image(danchi2, mouseX - 20, mouseY - 20, 130, 120);
          price[count] = 10000 * bonus1;
          profit[count] = 200;
        } else if (selectMode[count] == 6) {
          image(danchi3, mouseX - 20, mouseY - 20, 130, 120);
          price[count] = 10000 * bonus1;
          profit[count] = 200;
        }
      } else if (Year >= 1980 && Year < 1990) {
        if (selectMode[count] == 1) {
          image(danchi1, mouseX - 20, mouseY - 20, 130, 120);
          price[count] = 8000 * bonus1;
          profit[count] = 180;
        } else if (selectMode[count] == 2) {
          image(danchi2, mouseX - 20, mouseY - 20, 130, 120);
          price[count] = 8000 * bonus1;
          profit[count] = 180;
        } else if (selectMode[count] == 3) {
          image(danchi3, mouseX - 20, mouseY - 20, 130, 120);
          price[count] = 8000 * bonus1;
          profit[count] = 180;
        } else if (selectMode[count] == 4) {
          image(ikkenya1, mouseX - 20, mouseY - 20, 80, 67);
          price[count] = 5000 * bonus1;
          profit[count] = 100;
        } else if (selectMode[count] == 5) {
          image(ikkenya2, mouseX - 20, mouseY - 20, 80, 67);
          price[count] = 5000 * bonus1;
          profit[count] = 100;
        } else if (selectMode[count] == 6) {
          image(ikkenya3, mouseX - 20, mouseY - 20, 80, 67);
          price[count] = 5000 * bonus1;
          profit[count] = 100;
        }
      } else if (Year >= 1990) {
        if (selectMode[count] == 1) {
          image(ikkenya1, mouseX - 20, mouseY - 20, 80, 67);
          price[count] = 5000 * bonus1;
          profit[count] = 100;
        } else if (selectMode[count] == 2) {
          image(ikkenya2, mouseX - 20, mouseY - 20, 80, 67);
          price[count] = 5000 * bonus1;
          profit[count] = 100;
        } else if (selectMode[count] == 3) {
          image(ikkenya3, mouseX - 20, mouseY - 20, 80, 67);
          price[count] = 5000 * bonus1;
          profit[count] = 100;
        } else if (selectMode[count] == 4) {
          image(apartment1, mouseX - 20, mouseY - 20, 136, 151);
          price[count] = 100000 * bonus1;
          profit[count] = 10000;
        }
      }
    } else if (btnMode[count] == 2) {
      if (selectMode[count] == 1) {
        image(road1, mouseX - 20, mouseY - 20, 72, 42);
        price[count] = 1000 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 2) {
        image(road2, mouseX - 20, mouseY - 20, 72, 42);
        price[count] = 1000 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 3) {
        image(road3, mouseX - 20, mouseY - 20, 71, 42);
        price[count] = 1000 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 4) {
        image(road4, mouseX - 20, mouseY - 20, 71, 42);
        price[count] = 1000 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 5) {
        image(road5, mouseX - 20, mouseY - 20, 53, 22);
        price[count] = 1000 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 6) {
        image(road6, mouseX - 20, mouseY - 20, 35, 31);
        price[count] = 1000 * bonus1;
        profit[count] = 0;
      }
    } else if (btnMode[count] == 3) {
      if (selectMode[count] == 1) {
        image(tree1, mouseX - 20, mouseY - 20, 60, 42);
        price[count] = 100 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 2) {
        image(tree2, mouseX - 20, mouseY - 20, 60, 42);
        price[count] = 100 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 3) {
        image(tree3, mouseX - 20, mouseY - 20, 55, 30);
        price[count] = 100 * bonus1;
        profit[count] = 0;
      } else if (selectMode[count] == 4) {
        image(tree4, mouseX - 20, mouseY - 20, 50, 43);
        price[count] = 100 * bonus1;
        profit[count] = 0;
      }
    } else if (btnMode[count] == 5) {
      if (selectMode[count] == 8) {
        image(center, mouseX - 20, mouseY - 20, 80, 100);
        price[count] = 0;
        profit[count] = 0;
      }else if (selectMode[count] == 9) {
        image(ekimae, mouseX - 20, mouseY - 20, 600, 300);
        price[count] = 0;
        profit[count] = 0;
      }
    }else if (btnMode[count] == 6) {
      if (selectMode[count] == 8) {
        image(syutodai, mouseX - 20, mouseY - 20, 164, 119);
        price[count] = 0;
        profit[count] = 0;
      }else if (selectMode[count] == 9) {
        image(mituke, mouseX - 20, mouseY - 20, 180, 110);
        price[count] = 0;
        profit[count] = 0;
      }
    }
  }
}


function buildStructures() {
  for (i = 0; i < count + 1; i++) {
    if (mouseIsPressed === true) {
      establishMode = 1;
    }
    if (i < count) {
      if (tenkeyMode == 1) {
        transY[i] = transY[i] + 10;
      } else if (tenkeyMode == 2) {
        transX[i] = transX[i] - 10;
      } else if (tenkeyMode == 3) {
        transY[i] = transY[i] - 10;
      } else if (tenkeyMode == 4) {
        transX[i] = transX[i] + 10;
      }
      x[i] = pressX[i] - 20 + transX[i];
      y[i] = pressY[i] - 20 + transY[i];
      if (btnMode[i] == 1) {
        if (selectMode[i] == 1) {
          if (tmpYear[i] < 1980) {
            structure[i] = image(minka1, x[i], y[i], 61, 48);
          } else if (tmpYear[i] >= 1980 && tmpYear[i] < 1990) {
            structure[i] = image(danchi1, x[i], y[i], 130, 120);
          } else if (tmpYear[i] >= 1990) {
            structure[i] = image(ikkenya1, x[i], y[i], 80, 67);
          }
        } else if (selectMode[i] == 2) {
          if (tmpYear[i] < 1980) {
            structure[i] = image(minka2, x[i], y[i], 61, 48);
          } else if (tmpYear[i] >= 1980 && tmpYear[i] < 1990) {
            structure[i] = image(danchi2, x[i], y[i], 130, 120);
          } else if (tmpYear[i] >= 1990 ) {
            structure[i] = image(ikkenya2, x[i], y[i], 80, 67);
          }
        } else if (selectMode[i] == 3) {
          if (tmpYear[i] < 1980) {
            structure[i] = image(minka3, x[i], y[i], 61, 48);
          } else if (tmpYear[i] >= 1980 && tmpYear[i] < 1990) {
            structure[i] = image(danchi3, x[i], y[i], 130, 120);
          } else if (tmpYear[i] >= 1990 ) {
            structure[i] = image(ikkenya3, x[i], y[i], 80, 67);
          }
        } else if (selectMode[i] == 4) {
          if (tmpYear[i] >= 1970 && tmpYear[i] < 1980) {
            structure[i] = image(danchi1, x[i], y[i], 130, 120);
          } else if (tmpYear[i] >= 1980 && tmpYear[i] < 1990) {
            structure[i] = image(ikkenya1, x[i], y[i], 80, 67);
          } else if (tmpYear[i] >= 1990 && tmpYear[i] < 2015) {
            structure[i] = image(apartment1, x[i], y[i], 136, 151);
          }
        } else if (selectMode[i] == 5) {
          if (tmpYear[i] >= 1970 && tmpYear[i] < 1980) {
            structure[i] = image(danchi2, x[i], y[i], 130, 120);
          } else if (tmpYear[i] >= 1980 && tmpYear[i] < 1990) {
            structure[i] = image(ikkenya2, x[i], y[i], 80, 67);
          }

        } else if (selectMode[i] == 6) {
          if (tmpYear[i] >= 1970 && tmpYear[i] < 1980) {
            structure[i] = image(danchi3, x[i], y[i], 130, 120);
          } else if (tmpYear[i] >= 1980 && tmpYear[i] < 1990) {
            structure[i] = image(ikkenya3, x[i], y[i], 80, 67);
          }
        }
      } else if (btnMode[i] == 2) {
        if (selectMode[i] == 1) {
          structure[i] = image(road1, x[i], y[i], 72, 42);
        } else if (selectMode[i] == 2) {
          structure[i] = image(road2, x[i], y[i], 72, 42);
        } else if (selectMode[i] == 3) {
          structure[i] = image(road3, x[i], y[i], 71, 42);
        } else if (selectMode[i] == 4) {
          structure[i] = image(road4, x[i], y[i], 71, 42);
        } else if (selectMode[i] == 5) {
          structure[i] = image(road5, x[i], y[i], 53, 23);
        } else if (selectMode[i] == 6) {
          structure[i] = image(road6, x[i], y[i], 35, 31);
        }
      } else if (btnMode[i] == 3) {
        if (selectMode[i] == 1) {
          structure[i] = image(tree1, x[i], y[i], 60, 40);
        } else if (selectMode[i] == 2) {
          structure[i] = image(tree2, x[i], y[i], 60, 40);
        } else if (selectMode[i] == 3) {
          structure[i] = image(tree3, x[i], y[i], 55, 30);
        } else if (selectMode[i] == 4) {
          structure[i] = image(tree4, x[i], y[i], 50, 43);
        }
      }else if (btnMode[i] == 5) {
        if (selectMode[i] == 8) {
          structure[i] = image(center, x[i], y[i], 80, 100);
        } else if (selectMode[i] == 9) {
          structure[i] = image(ekimae, x[i], y[i], 600, 300);
        }
      }else if (btnMode[i] == 6) {
        if (selectMode[i] == 8) {
          structure[i] = image(syutodai, x[i], y[i], 164, 119);
        } else if (selectMode[i] == 9) {
          structure[i] = image(mituke, x[i], y[i], 180, 110);
        }
      }
    } else {
      transX[i] = 0;
      transY[i] = 0;
    }
  }
}

function selectFunction() {
  if (mouseX > 40 && mouseX < 170) {
    for (i = 0; i < 7; i++) {
      if (mouseY > 200 + i * 40 && mouseY < 240 + i * 40) {
        selectMode[count] = i + 1;
      } else {
        //selectMode[count]=1;
      }
    }
  }
}

function select() {
  textSize(15);
  for (i = 0; i < 7; i++) {
    if (selectMode[count] == i + 1) {
      image(selectbar2, 40, 200 + i * 40, 150, 40);
    }
  }
  if (btnMode[count] == 1) {
    tint(255, 200, 255, 100);
    image(selectbar, 30, 180, 170, 330);
    tint(255);
    if (Year < 1970) {
      image(minka1, 40, 200, 55, 42);
      image(minka2, 40, 240, 55, 42);
      image(minka3, 40, 280, 55, 42);
      //oku
      //senman
      text("1", 130, 235);
      text("1", 130, 275);
      text("1", 130, 315);
      for (i = 0; i < 3; i++) {
        image(senman, 140, 223 + i * 40, 46, 14);
      }
    } else if (Year >= 1970 && Year < 1980) {
      image(minka1, 40, 200, 55, 42);
      image(minka2, 40, 240, 55, 42);
      image(minka3, 40, 280, 55, 42);
      image(danchi1s, 40, 320, 60, 42);
      image(danchi2s, 40, 360, 60, 42);
      image(danchi3s, 40, 400, 60, 42);
      //oku
      text("1", 100, 355);
      text("1", 100, 395);
      text("1", 100, 435);
      //senman
      text("1", 130, 235);
      text("1", 130, 275);
      text("1", 130, 315);
      text("0", 130, 355);
      text("0", 130, 395);
      text("0", 130, 435);
      for (i = 0; i < 6; i++) {
        image(senman, 140, 223 + i * 40, 46, 14);
        if(i<3)
        image(oku, 110, 343 + i * 40, 20, 14);
      }
    } else if (Year >= 1980 && Year < 1990) {
      image(danchi1s, 40, 200, 60, 42);
      image(danchi2s, 40, 240, 60, 42);
      image(danchi3s, 40, 280, 60, 42);
      image(ikkenya1, 40, 320, 50, 42);
      image(ikkenya2, 40, 360, 50, 42);
      image(ikkenya3, 40, 400, 50, 42);
      //oku
      //senman
      text("8", 130, 235);
      text("8", 130, 275);
      text("8", 130, 315);
      text("5", 130, 355);
      text("5", 130, 395);
      text("5", 130, 435);
      for (i = 0; i < 6; i++) {
        image(senman, 140, 223 + i * 40, 46, 14);
      }
    } else if (Year >= 1990 ) {
      image(ikkenya1, 40, 200, 50, 42);
      image(ikkenya2, 40, 240, 50, 42);
      image(ikkenya3, 40, 280, 50, 42);
      image(apartment1, 40, 320, 42, 42);
      //oku
      text("0", 100, 235);
      text("0", 100, 275);
      text("0", 100, 315);
      text("10", 90, 355);
      //text("0", 100, 395);
      //text("0", 100, 435);
      //senman
      text("5", 130, 235);
      text("5", 130, 275);
      text("5", 130, 315);
      text("0", 130, 355);
      //text("5", 130, 395);
      //text("5", 130, 435);
      for (i = 0; i < 4; i++) {
        image(senman, 140, 223 + i * 40, 46, 14);
        image(oku, 110, 223 + i * 40, 20, 14);
      }
    }
  } else if (btnMode[count] == 2) {
    tint(200, 200, 255, 100);
    image(selectbar, 30, 180, 170, 330);
    tint(255);
    image(road1, 40, 200, 60, 35);
    image(road2, 40, 240, 60, 35);
    image(road3, 40, 280, 60, 35);
    image(road4, 40, 320, 60, 35);
    image(road5, 40, 370, 53, 23);
    image(road6, 45, 410, 35, 31);
    text("1", 130, 235);
    text("1", 130, 275);
    text("1", 130, 315);
    text("1", 130, 355);
    text("1", 130, 395);
    text("1", 130, 435);
    for (i = 0; i < 6; i++) {
        image(senman, 140, 223 + i * 40, 46, 14);
      }
  } else if (btnMode[count] == 3) {
    tint(200, 255, 200, 100);
    image(selectbar, 30, 180, 170, 330);
    tint(255);
    image(tree1, 40, 200, 60, 40);
    image(tree2, 40, 240, 60, 40);
    image(tree3, 40, 280, 55, 30);
    image(tree4, 40, 320, 50, 43);
    text("0.1", 120, 235);
    text("0.1", 120, 275);
    text("0.1", 120, 315);
    text("0.1", 120, 355);
    for (i = 0; i < 4; i++) {
        image(senman, 140, 223 + i * 40, 46, 14);
      }
  }
}

function timer(time) {
  Second = (time - tmptime);
  if (Second > 500 && eventMode == 0) {
    Month++;
    tmptime = time;
    for (i = 0; i < count; i++) {
      yen = yen + profit[i] * bonus4;
    }
  }
  if (Month > 12) {
    Year++;
    Month = 1;
    yen = yen + bonus2;
  }
  if (Year == 1970 && Month == 1 && eventMode == 0) {
    eventMode = 1;
  } else if (Year == 1988 && Month == 1 && eventMode == 0) {
    eventMode = 2;
  } else if (Year == 1991 && Month == 1 && eventMode == 0) {
    eventMode = 3;
  } else if (Year == 1993 && Month == 1 && eventMode == 0) {
    eventMode = 4;
  } else if (Year == 2015 && Month ==8){
    page=3;
  }
  textSize(40);
  text(Year, 470, 62);
  textAlign(RIGHT);
  text(Month, 695, 62);
  image(nen, 570, 30, 62, 35);
  image(gatu, 690, 30, 62, 35);
  textAlign(LEFT);
}

function accounts() {
  textSize(35);
  textAlign(RIGHT);
  text(int(yen / 10000), 520, 480);
  text(int(yen / 1000) - int(yen / 10000) * 10, 640, 480);
  image(oku, 520, 450, 72, 35);
  image(senman, 640, 450, 118, 35);
  textAlign(LEFT);
}

function event() {
  if (eventMode > 0) {
    if (eventMode == 1) {
      image(event1, 250, 150, 379, 284);
      image(yes, 330, 390, 45, 20);
      image(no, 500, 390, 60, 20);
      establishMode = 0;
      selectMode[count] = 0;
    } else if (eventMode == 11) {
      image(event11, 250, 150, 379, 284);
    } else if (eventMode == 12) {
      image(event12, 250, 150, 379, 284);
    } else if (eventMode == 2) {
      image(event2, 250, 150, 379, 284);
      image(yes, 330, 390, 45, 20);
      image(no, 500, 390, 60, 20);
      establishMode = 0;
      selectMode[count] = 0;
    } else if (eventMode == 21) {
      image(event21, 250, 150, 379, 284);
    } else if (eventMode == 22) {
      image(event22, 250, 150, 379, 284);
    } else if (eventMode == 3) {
      image(event3, 250, 150, 379, 284);
      image(yes, 330, 390, 45, 20);
      image(no, 500, 390, 60, 20);
      establishMode = 0;
      selectMode[count] = 0;
    } else if (eventMode == 31) {
      image(event31, 250, 150, 379, 284);
    } else if (eventMode == 32) {
      image(event32, 250, 150, 379, 284);
    } else if (eventMode == 4) {
      image(event4, 250, 150, 379, 284);
      image(yes, 330, 390, 45, 20);
      image(no, 500, 390, 60, 20);
      establishMode = 0;
      selectMode[count] = 0;
    } else if (eventMode == 41) {
      image(event41, 250, 150, 379, 284);
    } else if (eventMode == 42) {
      image(event42, 250, 150, 379, 284);
    }
  }
}


/*int A[Max];

function partition(int p,int r){
    int tmp;
    int i,j;
    int x;
    x = A[r];
    i = p-1;
    for(j=p; j<r; j++){
        if(A[j]<=x){
            i++;
            tmp=A[i];
            A[i]=A[j];
            A[j]=tmp;
        }
    }
    tmp=A[i+1];
    A[i+1]=A[r];
    A[r]=tmp;
    return i+1;
}

void quickSort(int A[], int p, int r){
    int q;
    if(p<r){
        q = partition(p,r);
        quickSort(A,p,q-1);
        quickSort(A, q+1, r);
    }
}


function main() {
    int n;
    int i;
    scanf("%d",&n);
    for(i=0; i<n; i++) {
    scanf("%d",&A[i]);
    }
    quickSort(A,0,n-1);
    for(i=0; i<n; i++) {
        printf("%d",A[i]);
        if(i<n-1){
            printf(" ");
        }
    }
    printf("\n");
    return 0;
}
*/
