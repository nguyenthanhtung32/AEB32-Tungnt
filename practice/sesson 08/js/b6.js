let a = prompt("Nhap gia tri a:");
let b = prompt("Nhap gia tri b:");
function UCLN(a, b) {
  while (a != b) {
    if (a> b) a = a - b;
    else b = b - a;
  }
  return a;
}
console.log('uoc chung lon nhat:',UCLN(a,b));

