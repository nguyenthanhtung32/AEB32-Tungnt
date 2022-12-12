let z = 0;
if (z) {
  console.log(true);
} else {
  console.log(false);
}
switch (2) {
  case 2:
    console.log("Mon");
    break;
  case 3:
    console.log("Tues");
    break;
    case 4:
        console.log('Wed');
        break;
}
//chan-le
let input = prompt('Nhap n')
if(input %2 === 0) {
    console.log(input + " la so chan");
} else {
    console.log(input + " la so le");
}