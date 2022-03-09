import './apply2.css'
import $ from 'jquery'


const eventBus = $(window);

const v = {
    html:(index)=>{
        return `<div>
        <ol class="tab-bar">
            <li class="${index===0?'select':''}" data-index="0">1</li>
            <li class="${index===1?'select':''}" data-index="1">2</li>
        </ol>
        <ol class="tab-content">
            <li class="${index===0?'reveal':''}">内容1</li>
            <li class="${index===1?'reveal':''}">内容2</li>
        </ol>
    </div>`},
    el: undefined,
    init: (element) => {
        v.el = $(element);
    },
    render: (index) => {
        if (v.el.children.length !== 0)   v.el.empty();
        $(v.html(index)).appendTo(v.el);
    }
}

const m = {
    data: {
        index :parseInt(localStorage.getItem('index')) || 0
    },
    create(){},
    delete(){},
    update(index){
        Object.assign(m.data,index);
        eventBus.trigger('m:update');
        localStorage.setItem('index',m.data.index.toString());
    },
    get(){}
}

const c = {
    init(element){
        v.init(element);
        v.render(m.data.index);
        c.autoBindEvents();
        eventBus.on('m:update',()=>{
            v.render(m.data.index);
        })
    },
    events : {
        'click .tab-bar li': 'cut'
    },
    cut(e){
        m.update({index:parseInt(e.currentTarget.dataset.index)});
    },
    autoBindEvents(){
        for(let key in c.events) {
            const value =  c[c.events[key]];
            const index = key.indexOf(' ');
            const part1 = key.substr(0,index);
            const part2 = key.substr(index+1);
            v.el.on(part1,part2,value);
        }
    }
}

export default c;
