function drawPage() {
  if (page === 0) {
    if (mouseX > 320 && mouseX < 480 && mouseY > 320 && mouseY < 380) {
      page = 1;
      tmpMillis = millis();
    }else if(mouseX > 320 && mouseX < 480 && mouseY > 380 && mouseY < 440) {
      page = 2;
    }
  }
}

function drawbtn(btnInterval) {
  if (btnMode[count] === 1) {
    image(houseon, canvasX / 2 - btnInterval * 3 / 2 - btn2X / 2, 503, btn2X, btn2Y);
    image(road, canvasX / 2 - btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(tree, canvasX / 2 + btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(tsuruhashi, canvasX / 2 + btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
  } else if (btnMode[count] === 2) {
    image(house, canvasX / 2 - btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(roadon, canvasX / 2 - btnInterval / 2 - btn2X / 2, 503, btn2X, btn2Y);
    image(tree, canvasX / 2 + btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(tsuruhashi, canvasX / 2 + btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
  } else if (btnMode[count] === 3) {
    image(house, canvasX / 2 - btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(road, canvasX / 2 - btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(treeon, canvasX / 2 + btnInterval / 2 - btn2X / 2, 503, btn2X, btn2Y);
    image(tsuruhashi, canvasX / 2 + btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
  } else if (btnMode[count] === 4) {
    image(house, canvasX / 2 - btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(road, canvasX / 2 - btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(tree, canvasX / 2 + btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(tsuruhashion, canvasX / 2 + btnInterval * 3 / 2 - btn2X / 2, 503, btn2X, btn2Y);
  } else {
    image(house, canvasX / 2 - btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(road, canvasX / 2 - btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(tree, canvasX / 2 + btnInterval / 2 - btn1X / 2, 500, btn1X, btn1Y);
    image(tsuruhashi, canvasX / 2 + btnInterval * 3 / 2 - btn1X / 2, 500, btn1X, btn1Y);
  }
}

function drawtenkey(x, y, size) {
  if (tenkeyMode === 0) {
    image(tenkey, x, y, size, size);
  } else if (tenkeyMode == 1) {
    image(tenkeyU, x, y, size, size);
  } else if (tenkeyMode == 2) {
    image(tenkeyR, x, y, size, size);
  } else if (tenkeyMode == 3) {
    image(tenkeyD, x, y, size, size);
  } else if (tenkeyMode == 4) {
    image(tenkeyL, x, y, size, size);
  }
}

function drawMap() {
  if (tenkeyMode == 1) {
    mapY = mapY + 10;
  } else if (tenkeyMode == 2) {
    mapX = mapX - 10;
  } else if (tenkeyMode == 3) {
    mapY = mapY - 10;
  } else if (tenkeyMode == 4) {
    mapX = mapX + 10;
  }

  if (zoomMode == 1) {
    mapWidth = mapWidth + mapWidth / 100;
    mapHeight = mapHeight + mapHeight / 100;
    mapX = mapX - mapWidth / 200;
    mapY = mapY - mapHeight / 200;
  } else if (zoomMode == 2) {
    mapWidth = mapWidth - mapWidth / 100;
    mapHeight = mapHeight - mapHeight / 100;
    mapX = mapX + mapWidth / 200;
    mapY = mapY + mapHeight / 200;
  }
  image(YugiMap, mapX, mapY, mapWidth, mapHeight);
}

function drawzoombtn(x, y, width, height) {
  if (zoomMode === 0) {
    image(zoom, x, y, width, height);
  } else if (zoomMode == 1) {
    image(zoomin, x, y, width, height);
  } else if (zoomMode == 2) {
    image(zoomout, x, y, width, height);
  }
}