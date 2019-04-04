import './css/index.scss'
import tximg from './image/touxiang.jpg'
import img from './image/project-1.png'

var echarts = require('echarts/lib/echarts');
require("echarts/lib/chart/radar");
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
tx.src = tximg;
projectOne.src = img;
var myChart = echarts.init(document.getElementById('skills'));
myChart.setOption({
    textStyle: {
        color: 'rgb(0,0,0)'
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
            radius: 80
        },

    ],
    series: [
        {
            type: 'radar',
            //  tooltip: {
            //     trigger: 'item'
            // },
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [
                {
                    value: [60, 73, 85, 40],
                }
            ]
        },

    ]
});