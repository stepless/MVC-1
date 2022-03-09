import './apply3.css';
import $ from 'jquery'

const $square = $('.apply3 .square');

$square.on('mouseover',()=>{
    $square.addClass('select');
}).on('mouseout',()=>{
    $square.removeClass('select');
})