//功能：画实心圆
//参数：圆心坐标，半径，精确度，背景颜色
function SolidCircle(cx, cy, r, p, color) {
  var s = 1 / (r / p);
  for (var i = 0; i < Math.PI * 2; i += s) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.sin(i) * r + cx + "px";
    div.style.top = Math.cos(i) * r + cy + "px";
    div.style.width = p + "px";
    div.style.height = p + "px";
    div.style.backgroundColor = color;
    document.body.appendChild(div);
  }
}
// 坐标轴
function drawCoordinate(x,y,c) {
  var baseLineX = document.createElement('div');
  baseLineX.style.position = "absolute";
  baseLineX.style.left = 0;
  baseLineX.style.zIndex = 9999;
  baseLineX.style.top = x + 'px';
  baseLineX.style.fontSize = '1px';
  baseLineX.style.height = '1px';
  baseLineX.style.width = '100%';
  baseLineX.style.overflow = 'hidden'
  baseLineX.style.backgroundColor = c;
  document.body.appendChild(baseLineX);
  var baseLineY = document.createElement('div');
  baseLineY.style.position = "absolute";
  baseLineY.style.left = y + 'px';
  baseLineY.style.top = 0;
  baseLineY.style.zIndex = 9999;
  baseLineY.style.fontSize = '1px';
  baseLineY.style.height = '100%';
  baseLineY.style.width = '1px';
  baseLineY.style.overflow = 'hidden'
  baseLineY.style.backgroundColor = c;
  document.body.appendChild(baseLineY);
}