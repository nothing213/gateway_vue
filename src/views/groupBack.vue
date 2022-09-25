<template>
<div >
    <el-button @click="run">hello</el-button>
     <el-button @click="run2">不压</el-button>
     <el-button @click="run3">demo</el-button>
     <el-button @click="run5">test</el-button>
     
    <div  v-for="item in myChart" :key="item.id">
       
           <div :id="item"  style="width:100%;height:500px">
                  
           </div>
    </div>
  
    <!-- <div :id="myChart[0]">

    </div> -->
    <el-button @click="back">返回</el-button>
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
           
            apiName:["hello","test","demo"],


            myChart:["hello","test","demo"],

            data_source:[1,2,3,0,5,0,7,0,1,2],
            
            pass:  [],
            reject:[],

           
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
        // this.myChart.push("hello")
        //  this.myChart.push("test")
        //   this.myChart.push("demo")
        //   this.apiName.push("hello")
        //    this.apiName.push("test")
        //     this.apiName.push("demo")
         
         
                for(var i = 0;i < this.myChart.length;i++)
                    {
                        
                        this.myChart[i] = echarts.init(document.getElementById(this.myChart[i]), 'light'); // 初始化echarts, theme为light\
                        
                        this.echartsOption.title.text = this.apiName[i]
                        this.myChart[i].setOption(this.echartsOption); // echarts设置初始化选项
                        // 每三秒更新实时数据到折线图
                    }
                this.addData()
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
            addData() {
           
            this.date.push(this.getTime(Math.round(new Date().getTime() / 1000)));
            // 重新将数组赋值给echarts选项  
          
            this.echartsOption.xAxis.data = this.date;//横坐标显示时间
               
                var last = this.myChart.length-1;
            
                this.echartsOption.series[0].data = this.pass;//通过
                this.echartsOption.series[1].data = this.reject;//拒绝

                // this.echartsOption.title.text = this.apiName[last]
                   
                //   this.myChart[last].setOption(this.echartsOption);
            for(var i = 0;i<= last;i++)
                  this.echartsOption.title.text = this.apiName[i]
                   
                  this.myChart[i].setOption(this.echartsOption);
            },
            back()
            {
                 this.$router.push({
              path: "/show",
                      })
            },
            run()
            {
                this.pass.push(Math.random(10));
               this.addData()
                
            },
             run2()
            {
                this.pass.push(0);
                  this.addData()
            },
            run3()
            { 
                
             
                  

                setTimeout(()=>{
                        this.run4();   
                },1000)
               console.log(this.myChart)
            },
           
            run4()
            {   
                 for(var i = 0;i < this.myChart.length;i++)
                    {
                      
                        this.myChart[i] = echarts.init(document.getElementById(this.myChart[i]), 'light'); // 初始化echarts, theme为light\
                        
                        this.echartsOption.title.text = this.apiName[i]
                         this.myChart[i].setOption(this.echartsOption); // echarts设置初始化选项
                        // 每三秒更新实时数据到折线图
                    }
           
                this.addData()
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