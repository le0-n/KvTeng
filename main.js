let a = +prompt(`ax2+bx+c=0\n\na = `)
let b = +prompt(`ax2+bx+c=0\n\nb = `)
let c = +prompt(`ax2+bx+c=0\n\nc = `)

let D = b ** 2 - 4 * a * c

if (D > 0 && a != 0) {
    let DxPlus = ((-b) + Math.sqrt(D)) / 2 * a 
    let DxMinus = ((-b) - Math.sqrt(D)) / 2 * a
    alert(`x1 = ${DxPlus}\tx2 = ${DxMinus}`)
}else if (D == 0) {
    let x0 = (-b) / 2 * a
    alert(`x0 = ${x0}`)
}else if (D < 0) {
    alert(`D < 0, There aren't roots of this equation.`)
}