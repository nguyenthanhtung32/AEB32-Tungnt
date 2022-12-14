let n = prompt("nhap so lit xang: ");
let a = prompt("nhap gia 1L: ");
let b = prompt("nhap gia 2L: ");
if (2 * a >= b) {
  console.log(parseInt(n / 2) * b + (n % 2) * a);
} else {
  console.log(n * a);
}
