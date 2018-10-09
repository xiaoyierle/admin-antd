import React,{Component} from 'react';
import {Row,Col,Card,Icon,Tooltip} from 'antd';
import Home from './home';
import '../asset/css/indexpage.css'
class IndexPage extends Component{
    componentDidMount(){
        var echarts = require('echarts');
        var myChart = echarts.init(this.refs['chartone']);
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例',
                show: false
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                show: false
            },
            yAxis: {
                show: false,
                splitNumber: 20
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        var yMax = 500;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        var charttow = echarts.init(this.refs['charttow']);
        charttow.setOption({
            title: {
                text: '特性示例：渐变色 阴影 点击缩放',
                subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
                show: false,
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10,
                show: false
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                },
                show: false
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        })
        var chartthree = echarts.init(this.refs['chartthree']);
        chartthree.setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                show: false,
                splitNumber: 1
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        })

        var chartfour = echarts.init(this.refs['chartfour']);
        chartfour.setOption({
            title: {
                text: '特性示例：渐变色 阴影 点击缩放',
                subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
                show: false,
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10,
                show: false
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                },
                show: false,
                splitNumber: 1
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        })


        var xse = echarts.init(this.refs['xse']);
        xse.setOption({
            title : {
                text: '销售额',
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['销售额']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'销售额',
                    type:'bar',
                    data:[1056.0,241.0, 575.0, 1008.0, 649.0, 652.0, 518.0, 909.0, 764.0, 1161.0, 566.0, 334.0],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },

            ]
        })
    }
    render(){

        return (
            <Home selected='1' defaultOpenKeys='sub1'>
                <div className="top">
                    <Row>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card
                                hoverable
                                style={{padding: '20px 24px 8px'}}
                                bodyStyle={{padding: 0}}
                            >
                                <div className="card-inner">
                                    <div className="card-top">
                                        <div className="metawarp">
                                            <div className="meta">
                                                <span><span>总销售额</span></span>
                                                <span class="meta-icon"><Tooltip title='指标说明'><Icon type="info-circle" theme="outlined" /></Tooltip></span>
                                            </div>
                                            <div className="total">
                                                <span>¥ 126,560</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-content" ref='chartone'></div>
                                    <div className="card-footer">
                                        <div className="field">
                                            <span><span>日销售额</span></span>
                                            <span>￥12,423</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card
                                hoverable
                                style={{padding: '20px 24px 8px'}}
                                bodyStyle={{padding: 0}}
                            >
                                <div className="card-inner">
                                    <div className="card-top">
                                        <div className="metawarp">
                                            <div className="meta">
                                                <span><span>访问量</span></span>
                                                <span class="meta-icon"><Tooltip title='指标说明'><Icon type="info-circle" theme="outlined" /></Tooltip></span>
                                            </div>
                                            <div className="total">
                                                <span>8,846</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-content" ref='charttow'></div>
                                    <div className="card-footer">
                                        <div className="field">
                                            <span><span>日访问量</span></span>
                                            <span>1,234</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card
                                hoverable
                                style={{padding: '20px 24px 8px'}}
                                bodyStyle={{padding: 0}}
                            >
                                <div className="card-inner">
                                    <div className="card-top">
                                        <div className="metawarp">
                                            <div className="meta">
                                                <span><span>支付笔数</span></span>
                                                <span class="meta-icon"><Tooltip title='指标说明'><Icon type="info-circle" theme="outlined" /></Tooltip></span>
                                            </div>
                                            <div className="total">
                                                <span>6,560</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-content" ref='chartthree'></div>
                                    <div className="card-footer">
                                        <div className="field">
                                            <span><span>转化率</span></span>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                            <Card
                                hoverable
                                style={{padding: '20px 24px 8px'}}
                                bodyStyle={{padding: 0}}
                            >
                                <div className="card-inner">
                                    <div className="card-top">
                                        <div className="metawarp">
                                            <div className="meta">
                                                <span><span>运营活动效果</span></span>
                                                <span class="meta-icon"><Tooltip title='指标说明'><Icon type="info-circle" theme="outlined" /></Tooltip></span>
                                            </div>
                                            <div className="total">
                                                <span>78%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-content" ref='chartfour'></div>
                                    <div className="card-footer">
                                        <div className="field">
                                            <span><span>日访问量</span></span>
                                            <span>1,234</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '24px'}}>
                        <Col span={24}>
                            <Card
                                hoverable
                                style={{padding: '20px 24px 8px'}}
                                bodyStyle={{padding: 0}}>
                                <div className="bottom-inner">
                                    <div className='bottom-content' ref='xse'>

                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Home>
        )
    }
}
export default IndexPage;