import './apply2.css'
import $ from 'jquery'


const $tabBar = $('.apply2 .tab-bar');
const $tabContent = $('.apply2 .tab-content');

$tabBar.on('click','li',(e)=>{
    let $li = $(e.currentTarget);
    $li.addClass('select')
    .siblings().removeClass('select');
    $tabContent.children()
    .eq($li.index()).addClass('reveal')
    .siblings().removeClass('reveal');
})
$tabBar.children().eq(0).trigger('click');