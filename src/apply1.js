import './apply1.css'
import $ from 'jquery'


//显示
const eventBus = $(window);

const v = {
    html: `<div>
    <div class="number">{{number}}</div>
    <button class="add1">+1</button>
    <button class="subtract1">-1</button>
    <button class="multiply1">*2</button>
    <button class="divide1">÷2</button>
    </div>`,
    el: undefined,
    init: (element) => {
        v.el = $(element);
    },
    render: (n) => {
        if (v.el.children.length !== 0)   v.el.empty();
        $(v.html.replace('{{number}}', n)).appendTo(v.el);
    }
}

const m = {
    data: {
        n: localStorage.getItem('n') || 100
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data);
        eventBus.trigger('m:update');
        localStorage.setItem('n',m.data.n);
    },
    get(){}
}

const c = {
    init(element){
        v.init(element);
        v.render(m.data.n);
        c.autoBindEvents();
        eventBus.on('m:update',()=>{
            v.render(m.data.n);
        })
    },
    events : {
        'click .add1' : 'add',
        'click .subtract1':'sub',
        'click .multiply1' : 'multiple',
        'click .divide1' : 'div'
    },
    add(){
        m.update({n:parseInt(m.data.n) + 1});
    },
    sub(){
        m.update({n:m.data.n - 1});
    },
    multiple(){
        m.update({n:m.data.n * 2});
    },
    div(){
        m.update({n:m.data.n / 2});
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
//重要的元素


//数据


//赋值数据


//绑定事件
