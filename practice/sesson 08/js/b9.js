let n = prompt ("nhap so nguyen n");
while (n < 2) {
    n = prompt ("nhap so nguyen >= 2");
}
let dem;
let h=0;
let g=n;
for (var i = 2; i <= n; i++) {
    dem=0;
    while (n % i === 0) {
        ++dem;
        n /=i;
    }
    if (dem){ 
        console.log (i); 
        if(dem > 1) console.log("^",dem);
            if(n > i){
                console.log("*");
            }
    } 
}
for (var j = 1; j <= g; j++) {
    if (g % j == 0) {
       h++;
    }
}
console.log(h);
