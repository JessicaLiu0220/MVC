import './app3.css'
import $ from 'jquery'

let $square = $('#app3 .square')
$square.on('click', (e) => {
    $square.toggleClass('clicked')//如果没有这个类就加上，如果有就删掉
})