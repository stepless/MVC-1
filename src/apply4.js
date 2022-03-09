import './apply4.css'
import $ from 'jquery'

const $circle = $('.apply4 .circle');
$circle.on('mouseover',()=>{
    $circle.addClass('select');
}).on('mouseout',()=>{
    $circle.removeClass('select');
})