import './app2.css'
import $ from 'jquery'
// 监听
let $tabbar = $("#app2 .tab-bar")
let $tabContent = $("#app2 .tab-content")

$tabbar.on("click", "li", (e) => {
    let $li = $(e.currentTarget)
    $li.addClass('slected').siblings().removeClass('slected')
    let index = $li.index()
    console.log(index)
    $tabContent.children()
        .eq(index).addClass('clicked')//给被点击的元素一个clicked类
        .siblings().removeClass('clicked')//点击的同时让li的兄弟元素移除clicked类
})
$tabbar.children().eq(0).trigger('click')
