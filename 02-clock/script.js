function rotations () {
  const
    now = new Date(),
    secs = now.getSeconds(),
    secsrot = secs*6,
    mins = now.getMinutes(),
    minsrot = mins*6,
    hrs = now.getHours(),
    hrsrot = hrs*30;
  return { h: hrsrot, m: minsrot, s: secsrot };
}

function moveHands() {
  const 
    pos = rotations(),
    hHand = document.getElementById("hr"),
    mHand = document.getElementById("min"),
    sHand = document.getElementById("sec");
  hHand.setAttribute(`transform`, `rotate(${pos.h},50,50)`);
  mHand.setAttribute(`transform`, `rotate(${pos.m},50,50)`);
  sHand.setAttribute(`transform`, `rotate(${pos.s},50,50)`);
}

setInterval(moveHands, 250);