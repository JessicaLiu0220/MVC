import $ from 'jquery'  //引入jquery
import './app1.css'

let $button1 = $("#jia1")
let $button2 = $("#minus1")
let $button3 = $("#mul2")
let $button4 = $("#div2")
let $number = $("#number")
let n = localStorage.getItem("n") //初始化n
$number.text(n || 100)

$button1.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$button3.on('click', () => {
    let n = parseInt($number.text())
    n = n * 2
    localStorage.setItem('n', n)
    $number.text(n)
})
$button4.on('click', () => {
    let n = parseInt($number.text())
    n = n / 2
    localStorage.setItem('n', n)
    $number.text(n)
})