import './apply1.css'
import $ from 'jquery'

const $add1 = $('.apply1 .add1');
const $subtract1 = $('.apply1 .subtract1');
const $multiply1 = $('.apply1 .multiply1');
const $divide1 = $('.apply1 .divide1');
const $number = $('.apply1 .number')
let n = parseInt(localStorage.getItem('n') || 100);
$number.text(n);
$add1.on('click',()=>{
    n = n + 1;
    localStorage.setItem('n',n);
    $number.text(n);
})
$subtract1.on('click',()=>{
    n -= 1;
    localStorage.setItem('n',n);
    $number.text(n);
})
$multiply1.on('click',()=>{
    n *= 2;
    localStorage.setItem('n',n);
    $number.text(n);
})
$divide1.on('click',()=>{
    n /= 2;
    localStorage.setItem('n',n);
    $number.text(n);
})