<template>
    <div>
  <!-- <el-container> -->

      <!-- <el-header> -->
       
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-dem"
          mode="horizontal"
          
          background-color="gray"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1"><a href="http://localhost:8848/nacos" target="_blank">注册中心</a></el-menu-item>
          <el-menu-item index="2"><a href="http://localhost:8002" target="_blank">流程管理</a></el-menu-item>
          <el-menu-item index="3"><a href="http://localhost:8080" target="_blank">流控中心</a></el-menu-item>
          <el-button @click="monitoring()">监控</el-button>
            <el-dropdown>
                <i class="el-icon-setting" style="padding-left:1500px;padding-top: 21px" ></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
             {{userName}}
         </el-menu>
      <!-- </el-header> -->



        <el-container style="height: 900px; border: 1px solid #eee">
        
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
  
            <el-menu :default-openeds="['1', '3']" >
     
            <el-button @click.native.prevent="addGroupForm">
            添加分组
              </el-button>
      <el-submenu :index="item"  v-for="item in group_no_same2" :key="item" >
        <template slot="title" >
          <span>
          {{item}}
          </span>
          <span class="demo2" >
            <el-tooltip class="item" effect="dark" content="添加接口" placement="top">
             <i class="el-icon-plus"  @click="add_api"></i>
           </el-tooltip>
           <el-tooltip class="item" effect="dark" content="删除分组" placement="top">
             <i class="el-icon-minus"  @click="delete_group(item)"></i>
           </el-tooltip>
          </span>
            
          
        
        </template>                                        
        
        <el-menu-item-group  >
            <el-menu-item @click="show_item(item2.id)" 
            
             v-for="item2 in msg" :key="item2.id" v-show="item2.group_api === item">{{item2.apiName}}
               <el-tooltip class="item" effect="dark" content="删除Api" placement="top">
             <i class="el-icon-minus" @click="delete_api(item2.id)"></i>
           </el-tooltip>
            </el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
      
    </el-menu>
          </el-aside>

              <el-dialog title="添加分组" :visible.sync="groupVisible">
                    <el-form >
                      <el-form-item label="分组名称:" :label-width="formLabelWidth">
                        <el-input v-model="groupName" autocomplete="off"></el-input>
                      </el-form-item>
                    
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="groupVisible = false">取 消</el-button>
                      <el-button type="primary" @click="addGroup">确 定</el-button>
                    </div>
            </el-dialog>
    <el-form
      autocomplete="on"
      :model="addForm"
      ref="addForm"
      label-position="left"
    >

    <el-dialog width="550px" title="添加接口" :visible.sync="dialogFormVisible" append-to-body>     
     <el-form 
     :model="ruleForm" 
     status-icon 
     :rules="rules" 
     ref="ruleForm"
      label-width="100px"
       class="demo-ruleForm">
          <el-form-item  label="名字"  prop="apiName">   
              <el-input
              aria-required="true"
                v-model="ruleForm.apiName"
                autocomplete="on"
                placeholder="apiName:">
              </el-input>
      </el-form-item>

      <el-form-item  label="openApi"  prop="openApi">   
              <el-input
             
                v-model="ruleForm.openApi"
                autocomplete="on"
                placeholder="openApi:">
              </el-input>
      </el-form-item>
      <el-form-item  label="info"  prop="info">   
              <el-input
                v-model="ruleForm.info"
                autocomplete="on"
                placeholder="info:">
              </el-input>
      </el-form-item>
      <el-form-item  label="methods" prop="methods"> 
        <el-select 
                
                v-model="ruleForm.methods" 
                placeholder="请选择方式">
                    <el-option
                      v-for="item in methodsOptions"
                      :key="item.id"
                      :value="item.methodsName">
                    </el-option>
                </el-select>    
             
      </el-form-item>
   <el-form-item  label="servers"  prop="servers">   
              <el-input
                v-model="ruleForm.servers"
                autocomplete="on"
                placeholder="服务器地址:">
              </el-input>
      </el-form-item>
<el-form-item  label="paths" prop="paths">   
              <el-input
                v-model="ruleForm.paths"
                autocomplete="off"
                placeholder="paths:">
              </el-input>
      </el-form-item>

      <el-form-item  label="Body"  prop="requestBody">   
              <el-input
                v-model="ruleForm.requestBody"
                autocomplete="on"
                placeholder="requestBody:">
              </el-input>
      </el-form-item>



       <el-form-item  label="Result"  prop="responseResult">   
              <el-input
                v-model="ruleForm.responseResult"
                autocomplete="on"
                placeholder="responseResult:">
              </el-input>
      </el-form-item>
       <el-form-item  label="group_api" prop="group_api"> 
          <el-select 
                name="group_api"
                v-model="ruleForm.group_api" 
                placeholder="请选择分组">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                     
                      :value="item.apiGroup">
                    </el-option>
                </el-select>    
              
      </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="AddApi">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>

    </el-form>
            <el-button @click="dialogFormVisible = false">
                取消
            </el-button>
    </el-dialog>

</el-form>
  <el-container>
   
    <el-header style=" font-size: 12px" v-show="this.is_api === true  ">
   
      <span @click="look" class="container_header" >查看</span>
       <span @click="edit" class="container_header">编辑</span>
     <span @click="runtime" class="container_header">运行</span>
       
    </el-header>
    
    <el-main v-show="this.flag === 'look'">
      <el-table :data="tableData">
        <el-table-column  prop="id" label="id" width="140" ></el-table-column>
        <el-table-column prop="apiName" label="名字" width="120"></el-table-column>
         <el-table-column  prop="openApi" label="版本" width="120"></el-table-column>
          <el-table-column prop="info" label="说明" width="120"></el-table-column>
           <el-table-column prop="servers" label="服务地址" width="120"></el-table-column>
            <el-table-column prop="methods" label="方式" width="120"></el-table-column>
             <el-table-column  prop="paths" label="路径" width="120"></el-table-column>
             <el-table-column  prop="parm_query" label="请求参数" width="120"></el-table-column>
              <el-table-column prop="requestBody" label="请求体" width="120"></el-table-column>
               <el-table-column prop="responseResult" label="返回结果" width="120"></el-table-column>
        <el-table-column prop="group_api" label="组" ></el-table-column>
      </el-table>
    </el-main>

    <el-main v-show="this.flag === 'monitor'">
        <div >
              <!-- <el-button @click="run">run</el-button>
              <el-button @click="runtest">runtest</el-button>
              <el-button @click="run1">hello</el-button>
            <el-button @click="run3">test2</el-button>
            <el-button @click="run4">demo</el-button> -->
            
              <div  v-for="item in apiName" :key="item.id" style="width:800px;height:600px;">
                
                    <div :id="item"  style="width:800px;height:500px">

                    </div>
              </div>
        
          
      </div>

    </el-main>


      <el-main v-show="this.flag === 'edit'">
        <el-form
          autocomplete="on"
          :model="addForm"
          ref="addForm"
          label-position="left"
          :rules="rules"
          :inline="false"
       >
             
      <el-form-item label="名字" class="edit_item">
            <el-input
                name="apiName"
                v-model="addForm.apiName"
                autocomplete="on"
                placeholder="名字:">
            </el-input>
      </el-form-item>

      <el-form-item label="版本"  class="edit_item">
            <el-input
                name="openApi"
                v-model="addForm.openApi"
                autocomplete="on"
                placeholder="openApi:3.0.0"
                v-bind:disabled= false>
              </el-input>
      </el-form-item>      

      <el-form-item label="说明"  class="edit_item">   
            <el-input
                name="info"
                v-model="addForm.info"
                autocomplete="on"
                placeholder="说明:">
              </el-input>
      </el-form-item>

      <el-form-item label="服务器"  class="edit_item">   
              <el-input
                name="servers"
                v-model="addForm.servers"
                autocomplete="on"
                placeholder="服务器地址:">
              </el-input>
      </el-form-item>   

      <!-- <el-form-item label="方式"  class="edit_item">
              <el-input
                name="method"
                v-model="addForm.methods"
                autocomplete="on"
                placeholder="方式:">
              </el-input>
      </el-form-item> -->

       <el-form-item  label="methods" prop="methods" class="edit_item"> 
        <el-select 
                
                v-model="addForm.methods" 
                placeholder="请选择方式">
                    <el-option
                      v-for="item in methodsOptions"
                      :key="item.id"
                      :value="item.methodsName">
                    </el-option>
                </el-select>    
             
      </el-form-item>

      <!-- <el-form-item label="分组"  class="edit_item">
                <el-input
                  name="group_api"
                  v-model="addForm.group_api"
                  autocomplete="on"
                  placeholder="分组:">
                </el-input>
      </el-form-item> -->

<el-form-item  label="group_api" prop="group_api" class="edit_item"> 
          <el-select 
                name="group_api"
                v-model="addForm.group_api" 
                placeholder="请选择分组">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                     
                      :value="item.apiGroup">
                    </el-option>
                </el-select>    
              
      </el-form-item>

       <el-form-item label="路径"  class="edit_item">
                 <el-input
                  name="paths"
                  v-model="addForm.paths"
                  autocomplete="on"
                  placeholder="路径:">
              </el-input>
       </el-form-item>
             
        <el-form-item class="edit_item" >
               <el-input
                v-model="addForm.input1"
                clearable
                v-if="addForm.flag1"
                >
              <template slot="prepend">{{addForm.input11}}</template>
              </el-input>
       </el-form-item>

         <el-form-item  class="edit_item" >
               <el-input
                v-model="addForm.input2"
                clearable
                v-if="addForm.flag2"
                >
              <template slot="prepend">{{addForm.input22}}</template>
              </el-input>
       </el-form-item>
        <el-form-item  class="edit_item" >
               <el-input
                v-model="addForm.input3"
                clearable
                v-if="addForm.flag3"
                >
              <template slot="prepend">{{addForm.input33}}</template>
              </el-input>
       </el-form-item>

      <el-form-item label="请求参数" class="edit_item">
              <el-input
                name="Body"
                v-model="addForm.requestBody"
                autocomplete="on"
                placeholder="请求参数:">
              </el-input>
      </el-form-item>




      
 <el-button @click="addDomain">添加query参数</el-button>
<!-- <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic"> -->
  <el-form-item
    style="width:300px"
    v-for="(parm, index) in addForm.parms"
    :label="'参数' + index"
    :key="parm.key"
    :prop="'parms.' + index + '.value'"
  >
    <el-input v-model="parm.value"   placeholder="请输入内容">
      
        <el-button type="danger" @click.prevent="removeDomain(parm)" slot="append" icon="el-icon-delete" circle></el-button>
    </el-input>
     
  </el-form-item>
  
<!-- </el-form> -->



      <el-form-item >   
        <el-button
          style="width: 100%"
          type="primary"
          @click.native.prevent="handleSave"
        >保存</el-button>
      </el-form-item>
            <!-- <el-button @click.native.prevent="handleCanle">
                取消
            </el-button> -->
   

 </el-form>


    </el-main>

     <el-main v-show="this.flag === 'runtime' ">
     


<div style="margin-top: 10px">
  

  <el-form
      :v-model="query_parm">
  <el-input v-model="query_parm.apiname" v-if="false"></el-input>
<el-input placeholder="请输入内容" v-model="query_parm.input5" :disabled="true">
   
    <el-input v-model="select" slot="prepend" placeholder="请选择" style="width:120px"></el-input>
    <el-button slot="append" icon="el-icon-search" @click.native.prevent="handleRun"></el-button>
  </el-input>

      <el-form-item
          style="width:300px"
          v-for="(parm, index) in query_parm.value"
         
          :key="index"
        >
        <el-input v-model="query_parm.key[index]"   placeholder="请输入内容" >
          <template slot="prepend">{{parm}}</template>
          
        </el-input>
    
    </el-form-item>
   
   </el-form>
     <el-input v-model="query_parm.PathVariable2"  placeholder="请输入内容" v-if="query_parm.PathVariable22">
      <template slot="prepend">{{query_parm.PathVariable22}}</template>
    </el-input>
 <el-input v-model="query_parm.PathVariable1"  placeholder="请输入内容" v-if="query_parm.PathVariable11">
      <template slot="prepend">{{query_parm.PathVariable11}}</template>
    </el-input>
     <el-input v-model="query_parm.PathVariable3"  placeholder="请输入内容" v-if="query_parm.PathVariable33">
      <template slot="prepend">{{query_parm.PathVariable33}}</template>
    </el-input>

    <!-- <el-input  v-model="query_parm_value"  placeholder="请输入内容">
      <template slot="prepend">{{query_parm}}</template>
    </el-input> -->
     
  
</div>

 <template>
              <div class="jsonEditor" v-if="this.requestBody">
                <vue-json-editor
                v-model="query_parm.json" 
                :mode="'code'"
                 :showBtns="true" 
                lang="zh"
                @json-change="onJsonChange"
                @json-save="onJsonSave" 
                @has-error="onError"></vue-json-editor>
              </div>
            </template>
 
            

   

    <span>
      结果:{{Result}}
    </span>
     
        <!-- <vue-json-editor 
        v-model="json" 
        :showBtns="true" 
        @json-change="onJsonChange">
        </vue-json-editor> -->
     <template>
              <div class="jsonEditor">
                <vue-json-editor
                v-model="query_parm.json_value" 
                :mode="'code'"
                 :showBtns="true" 
                lang="zh"
                @json-change="onJsonChange"
                @json-save="onJsonSave" 
                @has-error="onError"></vue-json-editor>
              </div>
            </template>

    </el-main>
  </el-container>
              </el-container>

  <!-- </el-container> -->
     
    <el-button @click.native.prevent="back">
      返回
    </el-button>


    </div>
</template>
<script>
  import vueJsonEditor from 'vue-json-editor'
  const echarts = require('echarts')
export default {
     
     data() {
     
      var checkApiName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Api名字不能为空'));
        }
        callback()
      };

       var checkOpenApi = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('版本不能为空'));
        }else{
          var temple = this.ruleForm.openApi;
          
          if(temple !== '3.0.0')
          {
            return callback(new Error('只支持openApi3.0.0'))
          }else{
            callback()
          }
        }
      };
      var checkMethods = (rule, value, callback) => {
        if (!value) {
          console.log(value)
          return callback(new Error('方式不能为空'));
        }
        console.log(value)
        callback()
      
      };
      var checkGroup = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('分组不能为空'));
        }
        callback()
      
      };

      var checkServers = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('服务器地址不能为空'));
        }
        callback()
      };
      var checkPaths = (rule,value,callback)=>{
        if(!value)
        {
          return callback(new Error('路径不能为空'))
        }else{
          var temple = this.ruleForm.paths;
          
          if(temple.substring(0,1) !== '/')
          {
            return callback(new Error('路径必须以/开始'))
          }
          else{
            callback()
          }
        }
      };
    return {
       i :1,
       ApiCount:0,//监控api调用的次数
       
      ApiName:'',
      activeIndex: '1',
      activeIndex2: '1',
      dialogFormVisible: false,
      groupVisible:false,
      formGroup:"",
      tableData: [],
      bodyName:"22",
      Result:"",
      servers:"",
      paths:"",
      requestBody:"",
      userName:"",
      msg: this.$route.query.data.data,
      group_api:this.$route.query.data.data,
      group_no_same:this.group_no_same2,
      temple:Array.from(new Set(this.msg)),
      
      json_backup:{},
      input5: '',
      select: '',
      // query_parm:
      // [{
      //   value:''
      //   }],
      query_parm:{
        input5:'',
        value:[],
        key:[],
        apiname:'',
      PathVariable1:'',
      PathVariable11:'',
      PathVariable2:'',
      PathVariable22:'',
      PathVariable3:'',
      PathVariable33:'',
      json:{},
      json_value:{}
      },
     
      query_parm_value:[],
      // name: 'imSelector',
      // props:['title', 'items', 'show', 'value', 'mark'],
      flag:"look",
      is_api:false,
     
      addForm:{
        id: "",
        apiName: "",
        openApi: "",
        info: "",
        servers: "",
        methods: "",
        paths: "",
        requestBody: "",
        responseResult: "",
        group_api: "",
        disabled: true,
         input1:'',
          input11:'',
          flag1:false,

          input2:'',
          input22:'',
          flag2:false,

          input3:'',
          input33:'',
          flag3:false,

          parms: [{
            value: ''
          }],
          parm_query:[],
      
     },
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        groupName:"",
        options:[],//接收api组名
         ruleForm: {
              id: "",
        apiName: "",
        openApi: "",
        info: "",
        servers: "",
        methods: "",
        paths: "",
        requestBody: "",
        responseResult: "",
        group_api: "",
        },
         rules: {
          
          servers:[
            { validator: checkServers, trigger: 'blur' }
          ],
          paths:[
            { validator: checkPaths,trigger:'blur'}
          ],
          apiName:[
            { validator: checkApiName,trigger:'blur'}
          ],
          openApi:[
            { validator: checkOpenApi,trigger:'blur'}
          ],
          methods:[
            { validator: checkMethods,trigger:'blur'}
          ],
          group_api:[
            { validator: checkGroup,trigger: 'blur' }
          ]
        },
        methodsOptions:[{
          id: 1,
          methodsName: 'GET'
        }, {
          id: 2,
          methodsName: 'POST'
        }, {
          id: 3,
          methodsName: 'DELETE'
        }, {
          id: 4,
          methodsName: 'PUT'
        }],
         dynamicValidateForm: {
          parms: [{
            value: ''
          }],
          email: ''
        },
        parmFlag:true,
        //监控部分
       
            apiName:[],//接受名字
            myChart:[],//新建图表

            // data_source:[[],[],[],[],[],[],[],[],[],[],[],[]],
            date:[[],[],[],[],[],[],[],[],[],[],[],[],[]],//监控时间，用于每个api的横坐标
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
                dataZoom: [
                {
                  type: "slider",
                  show: true,
                  xAxisIndex: [0],
                  start: 0,
                  end: 49,
                  realtime: true,
                  textStyle:{
                    color:"#ccd7d7"
                  }
                },
              ],

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
    components:{
    vueJsonEditor
  },
  methods:
  {
       
    back()
    {
         this.$router.push({
              path: "/success",
          })
    },
          show_item(value)
          {  
              
           for (let index = 0; index < this.msg.length; index++) {   
             if(this.msg[index].id === value)
             {
                this.tableData = Array(1).fill(this.msg[index])
                this.query_parm.PathVariable11 = this.tableData[0].input11
                this.query_parm.PathVariable22 = this.tableData[0].input22
                this.query_parm.PathVariable33 = this.tableData[0].input33
                 console.log(this.tableData[0])
                 
                break;
             }   
           }
             this.flag = "look"
             this.is_api = true
             this.Result = ""
            
          },
        
          look()
          {
            this.flag="look"
          },
          runtime()
          {
            this.query_parm.json_value = this.json_backup
            this.query_parm.json = this.json_backup
            this.flag = "runtime"
            this.servers=this.tableData[0].servers
            this.paths = this.tableData[0].paths
            this.methods = this.tableData[0].methods
            this.requestBody = this.tableData[0].requestBody
            this.query_parm.input5 = this.paths
            this.select = this.servers
            this.query_parm.apiname = this.tableData[0].apiName;
            console.log("body:"+this.requestBody)
            if(this.tableData[0].parm_query === '')
            {
              console.log("参数是空")
              this.query_parm.value = '';
            }else if(this.tableData[0].parm_query === null)
            {
              this.query_parm.value = '';
              console.log("没有参数")
            }else {
              console.log(this.tableData[0].parm_query)
              this.query_parm.value = this.tableData[0].parm_query.split(',')
            }
            console.log("-------");

            if(this.tableData[0].requestBody ==='')
            {
                 console.log("body is ''")
                 
            }else if(  this.tableData[0].requestBody === null){
              console.log("body is null")
               
            }else{
                this.query_parm.json =JSON.parse(this.tableData[0].requestBody) ;
            
            }
           
      
    
          //  console.log(this.query_parm)
          },
          edit()
          {
            // console.log(this.tableData[0].id)
            this.addForm.id = this.tableData[0].id
            this.addForm.apiName = this.tableData[0].apiName
            this.addForm.openApi = this.tableData[0].openApi
            this.addForm.info = this.tableData[0].info
            this.addForm.servers = this.tableData[0].servers
            this.addForm.methods = this.tableData[0].methods
            this.addForm.paths = this.tableData[0].paths
            this.addForm.requestBody = this.tableData[0].requestBody
            this.addForm.responseResult = this.tableData[0].responseResult
            this.addForm.group_api = this.tableData[0].group_api
           
           
             this.$store
                .dispatch("FindGroup")
                .then(response => {
                  this.loading = false;
                  let code = response.data.code;            
                  if (code == 200) {
                   console.log(response.data.data)
                   this.options = response.data.data
                  } else {
                   console.log(response.data.message)
                  }
                })
                .catch(() => {
                  this.loading = false;  
                });
            this.flag = "edit"
          },
          handleSave()
          {
              this.loading = true;
              //获取query的参数
                 for (let index = 0; index < this.$refs.addForm.model.parms.length; index++) {
                this.addForm.parm_query[index] = this.$refs.addForm.model.parms[index].value

              }
              console.log(this.addForm.parm_query)
          
              this.$store
                .dispatch("HandleSave", this.addForm)
                .then(response => {

                  this.loading = false;
                  let code = response.data.code;
             
                  if (code == 200) {
                  
                    this.$router.push({
                      path: "/allBack",
                      // query: { data: response.data.data }
                    }); 
                  } else {
                    this.$router.push({
                      path: "/error",
                      //  query: { message: response.data.message }
                    });
                  }
                })
                .catch(() => {
                  this.loading = false;
                  
                });
          },
           handleRun()
          {
           
            // if(this.query_parm.input5 !== null)//判断是否有路径
            // {
            //       this.$store.dispatch("Run",this.query_parm).then( response =>{
                
            //         let code = response.data.code;
            //         if(code == 200)
            //         {
            //           var ResultAnt = response.data.data.split('---')
            //         //ResultAnt[1]为调用的api名字，为了方便统计调用xxxxapi次数
            //           this.Result = ResultAnt[0];
                      
            //           this.query_parm.json_value = response.data;
            //         }
            //         else if(code == 404){
            //             this.Result = response.data.message;
            //           this.query_parm.json_value = response.message;
            //         }else{
            //           this.Result = response.data.message;
            //           this.query_parm.json_value = response.data.message;
            //         }
            //     })
            // }
            
            return new Promise(() => { //封装一个 Promise
                this.$store.dispatch("Run",this.query_parm).then( response =>{
                
                    let code = response.data.code;
                    if(code == 200)
                    {
                      var ResultAnt = response.data.data.split('---')
                    //ResultAnt[1]为调用的api名字，为了方便统计调用xxxxapi次数
                      this.Result = ResultAnt[0];
                      this.ApiCount = this.ApiCount+1;
                      this.ApiName = ResultAnt[1];
                      console.log(this.ApiName+" 次数:"+this.ApiCount)
                      this.query_parm.json_value = response.data;
                    }
                    else if(code == 404){
                        this.Result = response.data.message;
                      this.query_parm.json_value = response.message;
                    }else{
                      this.Result = response.data.message;
                      this.query_parm.json_value = response.data.message;
                    }
                })
                    .then(() => { //使用 login 接口进行网络请求
                      
                       //将结果封装进 Promise
                    }).catch(() => {
                      this.count = 0;
                      
                    })
            })
                
          },
          monitor()
          {
          //  console.log("外面一秒内调用了多少次:"+this.ApiCount)
            var count_temple = this.ApiCount;
            var name_temple = this.ApiName;
            console.log("名字呢"+this.ApiName)
             var single = 1;
            //次数+，时间显示出来，api名字显示出来
               setInterval(()=>{
                  count_temple = this.ApiCount
                  name_temple = this.ApiName
                  // this.date.push(this.getTime(Math.round(new Date().getTime() / 1000)));
                  // console.log(name_temple+"一秒内调用了"+count_temple+"次")
                    single = 1
                            if(this.ApiName !== '')
                            {
                              this.myChart.push(name_temple)
                              this.apiName.push(name_temple)

                                  this.ApiName=''//用完就清空
                                

                             
                              var index = this.apiName.length-1;
                              // console.log("下标"+index+"标志"+single)
                              for(var i = 0;i < this.apiName.length;i++)
                              {
                                if(this.apiName[i] === name_temple && index!==i)
                                  {
                                      //如果发现最新添加的元素下标index和之前已有的i重复了
                                      this.apiName.splice(index,1)//删除最新的index元素,并且替换成之前的下标i进行更新
                                       this.myChart.splice(index,1)
                                      index = i
                                      single = 0;
                                      // console.log("删除之后下标是"+index)
                                      // console.log("删除之后长度是"+this.apiName.length)
                                  }
                                //ant[hello,test,hello]
                              }
                              if(single === 1)
                              {
                                      setTimeout(() => {
                                      this.run2(index,this.pass[index],this.reject[index])    
                                      }, 1000);

                                     this.pass[index].push(count_temple)
                                     this.addData(index,this.pass[index],this.reject[index])
                                     this.ApiCount=0//用完就清空
                                    // console.log("已有标志变成："+single)

                              }else{
                                //当single为0的时候说明该apiname之前push过，所以无需run2（新建图表）直接使用adddata更新数据即可
                                    // var count = parseInt(Math.random() * (10 - 0 + 1) + 0);
                                    // console.log("此时出现已有api运行，所以直接更新数据+标志"+single)
                                  this.pass[index].push(count_temple)
                                this.addData(index,this.pass[index],this.reject[index])
                                this.ApiCount=0//用完就清空
                              }
                            }else{
                               this.ApiCount = 0
                               this.ApiName = ''
                               count_temple = 0
                               name_temple = ''
                              console.log("此时没有运行，应当默认打0进去")

                              

                             
                                 for(var j = 0;j<this.apiName.length;j++)
                                  {
                                    this.pass[j].push(0)
                                    this.reject[j].push(0)

                                    this.addData(j,this.pass[j],this.reject[j]);
                                  }
                              
                             
                            }
                      

                 this.ApiCount = 0
                 this.ApiName = ''
                count_temple = 0
                name_temple = ''
                // console.log("清零之后的name_temple"+name_temple)
               }, 4000)

              clearInterval();
          },
          monitoring()
          {
            this.flag = 'monitor'
                   
          },
           getTime(){
            var ts = arguments[0] || 0;
            var t, h, i, s;
            t = ts ? new Date(ts * 1000) : new Date();
            h = t.getHours();
            i = t.getMinutes();
            s = t.getSeconds();
            // 定义时间格式
            return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
            },
            // 数据改变是触发
        onJsonChange (value) {
          console.log('value:', value)
        },
        // 点击保存时触发
        onJsonSave (value) {
         console.log(value)
         
           this.$store
                .dispatch("sendMsg",this.query_parm.json)
                .then(response => {
                  this.loading = false;
                  let code = response.data.code;            
                  if (code == 200) {
                    console.log("success");
                  } else {
                   console.log(response.data.message)
                  }
                })
                .catch(() => {
                  this.loading = false;  
                });
        },
        onError (value) {
          console.log('value:', value)
          
        },
        add_api()
        {
          this.dialogFormVisible = true
          this.$store
                .dispatch("FindGroup")
                .then(response => {
                  this.loading = false;
                  let code = response.data.code;            
                  if (code == 200) {
                   console.log(response.data.data)
                   this.options = response.data.data
                  } else {
                   console.log(response.data.message)
                  }
                })
                .catch(() => {
                  this.loading = false;  
                });
        },
        delete_group(value)
        {
          if(confirm("确定删除?"))
          {
            this.$store.dispatch("DeleteGroup",value).then( response =>{
                  let code = response.data.code;
                  if(code == 200)
                  {
                    this.$message({
                      message: '删除成功',
                      type: 'success'
                    });
                    this.$router.push({
                        path: "/allBack",
                       
                      }); 
                  }
                  else if(code == 404){
                      alert("未找到该分组")
                  }
                  else{
                    alert("删除失败")
                  }
              })
          } 
        },
        delete_api(id)
        {
          if(confirm("确定删除?"))
              {
                this.$store.dispatch("DeleteApi",id).then( response =>{
                      let code = response.data.code;
                      if(code == 200)
                      {
                        this.$message({
                          message: '删除成功',
                          type: 'success'
                        });
                        this.$router.push({
                            path: "/allBack",
                            // query: { data: response.data.data }
                          }); 
                      }
                      else if(code == 404){
                          alert("未找到该api")
                      }
                      else{
                        alert("删除失败")
                      }
                  })
              } 
        },
        addGroupForm()
        {
          
           this.loading = true;
          this.groupVisible = true;
          
        },
        
        addGroup()
          {
              this.loading = true;
              this.groupVisible = false;
              this.$store
                .dispatch("AddGroup",this.groupName)
                .then(response => {
                  this.loading = false;
                  let code = response.data.code;            
                  if (code == 200) {
                    this.$router.push({
                      path: "/allBack",
                    }); 
                  } else {
                    this.$router.push({
                      path: "/error",
                    });
                  }
                })
                .catch(() => {
                  this.loading = false;  
                });
          },
    AddApi2() {
      this.loading = true;
          this.$store
            .dispatch("HandleAdd", this.addForm)
            .then(response => {

              this.loading = false;
              let code = response.data.code;
            
              if (code == 200) {
                this.$router.push({
                  path: "/allBack",
                  // query: { data: response.data.data }
                });
                this.editUserFormVisible=false;
              } else {
                this.$router.push({
                  path: "/error",
                  // query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
              this.loading = false;
                this.editUserFormVisible = false;
            });
    },
         AddApi() {
       
        this.$refs.ruleForm.validate((valid) => {
          
          if (valid) {
           this.loading = true;
          this.$store
            .dispatch("HandleAdd", this.ruleForm)
            .then(response => {

              this.loading = false;
              let code = response.data.code;
            
              if (code == 200) {
                this.$router.push({
                  path: "/allBack",
                  // query: { data: response.data.data }
                });
                this.editUserFormVisible=false;
              } else {
                this.$router.push({
                  path: "/error",
                  // query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
              this.loading = false;
                this.editUserFormVisible = false;
            });
          
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              
            this.$refs[formName].model.parms.forEach(element => {
              console.log(element.value)
            });
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // resetForm2(formName) {
      //   this.$refs[formName].resetFields();
      // },
      removeDomain(item) {
        var index = this.addForm.parms.indexOf(item)
        if (index !== -1) {
          this.addForm.parms.splice(index, 1)
        }
        
      },
      addDomain() {
        this.addForm.parms.push({
          value: '',
          key: Date.now()
        });
      },
      beforeUnloadHandler(e) {
        e.returnValue = "离开此页面？" // 此处返回任意字符串，不返回null即可，不能修改默认提示内容
      },
        addData(index,valuepass,valuereject) {
            this.date[index].push(this.getTime(Math.round(new Date().getTime() / 1000)));
            // 重新将数组赋值给echarts选项  
          
            this.echartsOption.xAxis.data = this.date[index];//横坐标显示时间
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
             var index = this.myChart.length-1;
                setTimeout(() => {
                     this.run2(index,this.pass[index],this.reject[index])
                    
          }, 1000);
               
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
            run2(index,valuepass,valuereject)
           {
            var last = this.myChart.length-1
            if(this.myChart.length === 0)
            {
                last = 0  
            }
            this.myChart[last] = echarts.init(document.getElementById(this.apiName[last]), 'light'); // 初始化echarts, theme为light\
            this.echartsOption.title.text = this.apiName[last]
            this.myChart[last].setOption(this.echartsOption); // echarts设置初始化选项
            this.addData(index,valuepass,valuereject)
           }
  },
  computed:
  {
       
    group_no_same2(){
    let  new_arr = new Array()
      
      for ( let index = 0; index < this.msg.length; index++) 
      {
           new_arr[index] = this.msg[index].apigroup
          
      }
     return Array.from(new Set(new_arr))//去重
    
    }
  },
   mounted()
 { 
     this.userName = sessionStorage.getItem("uesrName")

      // for(var i = 0;i < this.myChart.length;i++)
      // {
      //   this.myChart[i] = echarts.init(document.getElementById(this.myChart[i]), 'light'); // 初始化echarts, theme为light\
        
      //   this.echartsOption.title.text = this.apiName[i]
      //    this.myChart[i].setOption(this.echartsOption); // echarts设置初始化选项
      //   // 每三秒更新实时数据到折线图
      // }
          
     
 },
 created()
 {
   var value = sessionStorage.getItem("uesrName")
   if(value === null)
    sessionStorage.setItem("uesrName",this.$route.query.data);
    this.monitor()
 },
 watch:
 {
   'addForm.paths'(newValue)
   {
     console.log(newValue)
      var location_start = newValue.search('{'),location_end = newValue.search('}');
         var result_two  = null,result_three=null;
         if(location_start!== -1 && location_end!== -1)
         {
           if(newValue.search('{') < newValue.search('}'))
           {
             //截取{}之间的数据作为path参数
            this.addForm.input11 = newValue.slice(location_start+1,location_end)
            this.addForm.flag1 = true
             if(newValue.substr(location_end+1) !== '')//判断第一个{参数}结束后有没有第二个参数
             {
               result_two  = newValue.substr(location_end+1);//有的话就截取第二个参数
              //  console.log("two:"+result_two)
            
                if(result_two.search('{') < result_two.search('}'))//第二个参数合法判断
                {

                  this.addForm.input22= result_two.slice(result_two.search('{')+1,result_two.search('}'))
                  this.addForm.flag2 = true
                      if(result_two.substr(result_two.search('}')+1) !== '')
                      {
                          result_three = result_two.substr(result_two.search('}')+1)
                          if(result_three.search('{') < result_three.search('}'))
                          {
                            this.addForm.input33 = result_three.slice(result_three.search('{')+1,result_three.search('}'))
                            this.addForm.flag3 = true
                          }else{
                           this.addForm.flag3 = false
                          }
                      }
                }else{
                  this.addForm.flag1 = false
                }
             }
           }else{
                 alert("参数不正确")
            }
         }else{
           this.addForm.flag2 = false
           this.addForm.flag3 = false
           this.addForm.flag1 = false
         }
   }
 }

}
</script>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    width: 100%;
  }
 
  
  .el-aside {
    color: #333;
  }
  .container_header{
    padding-left: 40px;
  }
   .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
    }
     .updateAttributes{
    height: 671px;
    padding: 20px;
     }
     .edit_item{
       width: 180px;
     }
   
</style>