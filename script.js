function updatClok() {
  let noww = new Date();
  let houre = noww.getHours() - 12;
  let minuts = noww.getMinutes();
  let secnds = noww.getSeconds();

  let timStrng = houre + ":" + minuts + ":" + secnds;
  document.getElementById("clok").innerText = timStrng;
}

// auto updat evry 1 sec
// setInterval(updatClok, 1000);