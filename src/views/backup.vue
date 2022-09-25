<template>
 <div>



  <el-input
  placeholder="请求路径"
  v-model="input10"
  clearable
  >
</el-input>

 <el-input
  v-model="input2"
  clearable
  v-if="flag2"
  >
<template slot="prepend">{{input22}}</template>
</el-input>

<el-input
  v-model="input1"
  clearable
  v-if="flag1"
  >
<template slot="prepend">{{input11}}</template>
</el-input>

<el-input
  v-model="input3"
  clearable
  v-if="flag3"
  >
<template slot="prepend">{{input33}}</template>
</el-input>

 
 
  <h3>this is query parm</h3>
<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="email"
   
  >


<!-- <div style="width:600px">
  
</div> -->
    <!-- <el-input v-model="dynamicValidateForm.email" slot="append" ></el-input> -->
  </el-form-item>

  <el-form-item
    v-for="(parm, index) in dynamicValidateForm.parms"
    :label="'参数' + index"
    :key="parm.key"
    :prop="'parms.' + index + '.value'"
  >
    <el-input v-model="parm.value"   placeholder="请输入内容">
      
        <el-button type="danger" @click.prevent="removeDomain(parm)" slot="append" icon="el-icon-delete" circle></el-button>
    </el-input>
     
  </el-form-item>
  <el-form-item v-if="this.parmFlag">
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
    
    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
  </el-form-item>
  <el-button @click="addDomain">添加query参数</el-button>
</el-form>

  <h4>this is body parms</h4>

 </div>
</template>

<script>
 export default {
    data() {
      return {
        editForm:{
           input10: '',
          input9:'',
          input5:'',

          input1:'',
          input11:'',
          flag1:false,

          input2:'',
          input22:'',
          flag2:false,

          input3:'',
          input33:'',
          flag3:false,
        },

        input10: '',
        input9:'',
        input5:'',

        input1:'',
        input11:'',
        flag1:false,

         input2:'',
        input22:'',
        flag2:false,

         input3:'',
        input33:'',
        flag3:false,

        dynamicValidateForm: {
          parms: [{
            value: ''
          }],
          email: ''
        },
        parmFlag:true
      }
    },
  
    watch:
    {
      input10(newValue)
      {
        var location_start = newValue.search('{'),location_end = newValue.search('}');
        var result_two  = null,result_three=null;
         if(location_start!== -1 && location_end!== -1)
         {
           if(newValue.search('{') < newValue.search('}'))
           {
             //截取{}之间的数据作为path参数
            this.input22 = newValue.slice(location_start+1,location_end)
            this.flag2 = true
             if(newValue.substr(location_end+1) !== '')//判断第一个{参数}结束后有没有第二个参数
             {
               result_two  = newValue.substr(location_end+1);//有的话就截取第二个参数
              //  console.log("two:"+result_two)
            
                if(result_two.search('{') < result_two.search('}'))//第二个参数合法判断
                {

                  this.input11 = result_two.slice(result_two.search('{')+1,result_two.search('}'))
                  this.flag1 = true
                      if(result_two.substr(result_two.search('}')+1) !== '')
                      {
                          result_three = result_two.substr(result_two.search('}')+1)
                          if(result_three.search('{') < result_three.search('}'))
                          {
                            this.input33 = result_three.slice(result_three.search('{')+1,result_three.search('}'))
                            this.flag3 = true
                          }else{
                           this.flag3 = false
                          }
                      }
                }else{
                  this.flag1 = false
                }
             }
           }else{
                 alert("参数不正确")
            }
         }else{
           this.flag2 = false
           this.flag3 = false
           this.flag1 = false
         }
      },
      input2(newValue)
      {
          console.log(newValue)
      }
    },
    methods: {
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.parms.indexOf(item)
        console.log("index:"+index)
        if (index > 0) {
          this.parmFlag = true
          this.dynamicValidateForm.parms.splice(index, 1)
        }
        else if(index === 0)
        {
          this.parmFlag = false
          this.dynamicValidateForm.parms.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.parms.push({
          value: '',
          key: Date.now()
        });
      }
           
    }
 }
</script>

<style>

</style>