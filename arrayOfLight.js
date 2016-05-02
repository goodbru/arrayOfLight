function arrayOfLight(num) {
    var light = [];
    for (var i = 0; i <= num; i++) {
        light[i]= i;
    }
    return light
}
console.log(arrayOfLight(5))