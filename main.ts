let s = 0
let d = 0
let n = 153
let t = n
while (t > 0) {
    d = t % 10
    t = t / 10
    s = s + d * d * d
}
if (n == s) {
    basic.showIcon(IconNames.Chessboard)
} else {
    basic.showIcon(IconNames.Heart)
}
