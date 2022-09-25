<template>
<div >
    <el-button @click="run">run</el-button>
    <el-button @click="runtest">runtest</el-button>
    <el-button @click="run1">hello</el-button>
   <el-button @click="run3">test2</el-button>
   <el-button @click="run4">demo</el-button>

    <div  v-for="item in apiName" :key="item.id">
       
           <div :id="item"  style="width:100%;height:500px">

           </div>
    </div>
   
    
</div>

</template>

<script>
// import echarts from 'echarts'
const echarts = require('echarts')

export default {
    name: 'DynamicLineChart',
   
    data () {
        return {
        // 实时数据数组
            date: [],
           
            apiName:[],//接受名字
            myChart:[],//新建图表

            // data_source:[[],[],[],[],[],[],[],[],[],[],[],[]],
            
            pass:  [[],[],[],[],[],[],[],[],[],[],[],[]],//通过的数据
            reject:[[],[],[],[],[],[],[],[],[],[],[],[]],//拒绝的数据
           
            // 折线图echarts初始化选项
            echartsOption: {
                legend: {
                data: ['通过', '拒绝'],
                },
                 title: {
                    text: ''
                },
                xAxis: {
                    // name: '时间',
                    nameTextStyle: {
                    fontWeight: 600,
                    fontSize: 18
                    },
                    type: 'category',
                    boundaryGap: false,
                   data: [], // 绑定实时数据数组
                },
                yAxis: {
                    name: this.apiName,
                    nameTextStyle: {
                    fontWeight: 600,
                    fontSize: 18
                    },
                    type: 'value',
                    scale: true,
                    boundaryGap: ['15%', '15%'],
                    axisLabel: {
                    interval: 'auto',
                    formatter: '{value} '
                    }
                },
                tooltip: {
                trigger: 'axis',
                },
                series: [
                    {
                        name:'通过',
                        type:'line',
                        smooth: true,
                        // data: this.yieldRate, // 绑定实时数据数组
                        label: {
                              formatter: ["TEXT NAME"]
                        }
                    },
                    {
                        name:'拒绝',
                        type:'line',
                        smooth: true,
                        data: [], // 绑定实时数据数组
                    },
                    
                ]
            }
        }
    },
    mounted () {
     
           
        },
    methods: {
    // 获取当前时间
            getTime : function() {
            var ts = arguments[0] || 0;
            var t, h, i, s;
            t = ts ? new Date(ts * 1000) : new Date();
            h = t.getHours();
            i = t.getMinutes();
            s = t.getSeconds();
            // 定义时间格式
            return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
            },
            // 添加实时数据
            addData(index,valuepass,valuereject) {
            this.date.push(this.getTime(Math.round(new Date().getTime() / 1000)));
            // 重新将数组赋值给echarts选项  
          
            this.echartsOption.xAxis.data = this.date;//横坐标显示时间
            var last = this.myChart.length-1;
            if(last === -1)
            {
                last = 0
            }
                 this.echartsOption.series[0].data = valuepass;//通过
                this.echartsOption.series[1].data = valuereject;//拒绝

                this.echartsOption.title.text = this.apiName[index]
                   
                  this.myChart[index].setOption(this.echartsOption);
            },
           
            run()
            {
               
                var count = parseInt(Math.random() * (10 - 0 + 1) + 0);
                this.pass[0].push(count)
               this.addData(0,this.pass[0],this.reject[0])
              
            },
              runtest()
            {
               
                var count = parseInt(Math.random() * (10 - 0 + 1) + 0);
                this.pass[1].push(count)

              this.addData(1,this.pass[1],this.reject[1])
              
            },
            run1()
           {   
            
             this.myChart.push("hello")
             this.apiName.push("hello")

             var single = 1;
            var index = this.myChart.length-1;
            for(var i = 0;i < this.apiName.length;i++)
            {
              if(this.apiName[i] === "hello" && index!==i)
                {
                    
                    this.apiName.splice(index,1)
                    single = 0;
                }
              
            }
            if(single === 1)
            {
                    setTimeout(() => {
                     this.run2(index,this.pass[index],this.reject[index])    
                     }, 1000);

                  

            }else{
                   var count = parseInt(Math.random() * (10 - 0 + 1) + 0);
                this.pass[0].push(count)
               this.addData(0,this.pass[0],this.reject[0])
            }
               
           },
           run3()
           {   
            
             this.myChart.push("test2")
                this.apiName.push("test2")

                var index = this.myChart.length-1;
                setTimeout(() => {
                     this.run2(index,this.pass[index],this.reject[index])
                     
                }, 1000);
               
           },
            run4()
           {
               
              
             this.myChart.push("demo")
                this.apiName.push("demo")
                
                setTimeout(() => {
                     this.run2()
                }, 1000);
               
           },
            run2(index,value)
           {
            var last = this.myChart.length-1
            if(this.myChart.length === 0)
            {
                last = 0  
            }
            this.myChart[last] = echarts.init(document.getElementById(this.apiName[last]), 'light'); // 初始化echarts, theme为light\
            this.echartsOption.title.text = this.apiName[last]
            this.myChart[last].setOption(this.echartsOption); // echarts设置初始化选项
            this.addData(index,value)
           }
           
        }
}
</script>
<style>

/* #myChart{ width: 100%;
height: 500px; margin: 0 auto;
}
#hello{ width: 100%;
height: 500px; margin: 0 auto;
} */
</style>