import './apply3.css';
import $ from 'jquery'

const $square = $('.apply3 .square');
const localKey = localStorage.getItem('apply3.active') === 'yes';
$square.toggleClass('select',localKey);
$square.on('click',()=>{
    if($square.hasClass('select')){
        $square.removeClass('select');
        localStorage.setItem('apply3.active','no');
    }else{
        $square.addClass('select');
        localStorage.setItem('apply3.active','yes');
    }
})