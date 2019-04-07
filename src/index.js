import './css/index.scss'
import './css/media.scss'
import './css/print.scss'
import resume from './雷洪涛-前端工程师.pdf'
import tximg from './image/touxiang.jpg'
import ui from './image/ui.png'
import keyboard from './image/keyboard.png'
import canvas from './image/canvas.png'
import miniprogram from './image/miniprogram.jpg'
import miniprogram2 from './image/miniprogram2.png'
var echarts = require('echarts/lib/echarts');
require("echarts/lib/chart/radar");
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import CanvasNest from 'canvas-nest.js';

tx.src = tximg;
projectOne.src = ui;
projectTwo.src =  miniprogram;
projectThree.src = keyboard;
projectFour.src = canvas;
miniProgram.src = miniprogram2;
var myChart = echarts.init(document.getElementById('skills'));
myChart.setOption({
    textStyle: {
        color: 'rgb(0,0,0)'
    },
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: '技能'
    },
    radar: [
        {
            indicator: [
                { text: 'HTML5', max: 100 },
                { text: 'CSS3', max: 100 },
                { text: 'JavaScript', max: 100 },
                { text: 'Vue', max: 100 }
            ],
            center: ['50%','50%'],
            radius:60
        },

    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [
                {
                    value: [60, 68, 79, 40],
                }
            ]
        },

    ]
});
let popover = document.querySelector('#popover');
let close = document.getElementById('iconclose');
close.addEventListener('click', function () {
    popover.classList.remove('show');
})
let miniProgramScan = document.querySelectorAll('.miniPro a');
miniProgramScan[0].addEventListener('click', function () {
    let popoverClass = popover.classList;
    let index = Array.prototype.indexOf.call(popoverClass, 'show');
    if (index > -1) {
        popover.classList.remove('show');
    }
    else {
        popover.classList.add('show');
    }

})


const config = {
    color: '255,0,0',
    count: 88,
  };
  const element = document.getElementsByTagName('body')
  // Using config rendering effect at 'element'.
  const cn = new CanvasNest(element[0], config);
  
  // destroy
//   cn.destroy();