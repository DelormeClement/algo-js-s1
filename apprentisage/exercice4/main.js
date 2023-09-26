var a = 3

while (a < 9) {
    console.log(a)
    a++
    if (a == 8) {
        break 
    }
    else if (a == 7) {
        continue
    }
}