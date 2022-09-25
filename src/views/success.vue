
<template>

  <div>
   
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="gray"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><a href="http://localhost:8848/nacos" target="_blank">注册中心</a></el-menu-item>
   <el-menu-item index="2"><a href="http://localhost:8002" target="_blank">流程管理</a></el-menu-item>
  <el-menu-item index="3"><a href="http://localhost:8080" target="_blank">流控中心</a></el-menu-item>

 <el-dropdown>
            <i class="el-icon-setting" style="padding-left:1500px;padding-top: 21px" ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{msg}}</span>
</el-menu>
   
   
   

<el-button @click.native.prevent="handleShow">
  查看全部
</el-button>
<el-button @click.native.prevent="add">
  添加
</el-button>
<el-button @click.native.prevent="import_swagger">
  导入
</el-button>
<el-button @click.native.prevent="old_system">
  调用旧系统应用
</el-button>

<!-- <div>
  响应结果:{{responseResult}}
</div> -->
<!-- <router-link target="_blank" :to="{path:'http://localhost:8080',query:{id:'1'}}">新页面打开home页</router-link> -->
 <el-form
        autocomplete="on"
        :model="addForm"
        ref="addForm"
        label-position="left"
      >

    <el-dialog width="550px" title="编辑位置" :visible.sync="editUserFormVisible" append-to-body>
      <!-- <el-form-item prop="id">
            <el-input
                name="id"
                v-model="addForm.id"
                autocomplete="on"
                placeholder="id:" >
            </el-input>
      </el-form-item> -->
             
      <el-form-item prop="apiName">
            <el-input
                name="apiName"
                v-model="addForm.apiName"
                autocomplete="on"
                placeholder="名字:">
            </el-input>
      </el-form-item>

      <el-form-item prop="openApi">
            <el-input
                name="openApi"
                v-model="addForm.openApi"
                autocomplete="on"
                placeholder="openApi:3.0.0"
                v-bind:disabled= true>
              
              </el-input>
      </el-form-item>      

      <el-form-item prop="info">   
            <el-input
                name="info"
                v-model="addForm.info"
                autocomplete="on"
                placeholder="说明:">
              </el-input>
      </el-form-item>

      <el-form-item prop="servers">   
              <el-input
                name="servers"
                v-model="addForm.servers"
                autocomplete="on"
                placeholder="服务器地址:">
              </el-input>
      </el-form-item>   

      <el-form-item prop="method">
              <el-input
                name="method"
                v-model="addForm.methods"
                autocomplete="on"
                placeholder="方式:">
              </el-input>
      </el-form-item>
            
       <el-form-item prop="paths">
                 <el-input
                  name="paths"
                  v-model="addForm.paths"
                  autocomplete="on"
                  placeholder="路径:">
              </el-input>
       </el-form-item>
             
      <el-form-item prop="requestBody">
              <el-input
                name="requestBody"
                v-model="addForm.requestBody"
                autocomplete="on"
                placeholder="请求参数:">
              </el-input>
      </el-form-item>

      <el-form-item prop="responseResult">
                <el-input
                  name="responseResult"
                  v-model="addForm.responseResult"
                  autocomplete="on"
                  placeholder="响应结果:">
                </el-input>
      </el-form-item>

      <el-form-item >   
        <el-button
          style="width: 100%"
          type="primary"
          @click.native.prevent="handleAdd"
        >添加</el-button>
      </el-form-item>
            <el-button @click.native.prevent="handleCanle">
                取消
            </el-button>
    </el-dialog>

 </el-form>



<el-dialog width="100px" title="小弹窗" :visible.sync="loginVisible" append-to-body>
  账号密码错误！
</el-dialog>
  </div>





</template>
<script>
export default {
   name: "show",
  data() {
    // {
    //   sessionStorage.setItem('uesrName',this.$route.query.data);
    // }
    return {
      show_id:"",
      msg: this.$route.query.data,
      name_temp:"",
      responseResult:"",
      editUserFormVisible:false,
      loginVisible:false,
     addForm:{
        id: "",
        name: "",
        openApi: "",
        info: "",
        servers: "",
        methods: "",
        paths: "",
        requestBody: "",
        responseResult: "",
        disabled: true,
      },
      activeIndex: '1',
      activeIndex2: '1',
      
      loading: false,
     
    };
  },
 mounted()
 {
  //  console.log(sessionStorage.getItem("uesrName"))
     this.msg = sessionStorage.getItem("uesrName")
 },
 created()
 {
   var value = sessionStorage.getItem("uesrName")
   if(value === null)
    sessionStorage.setItem("uesrName",this.$route.query.data);
 },
 methods: {
   gateway() {
      this.$router.push({
                  path: "/gateway",
                 })
   },

    handleShow() {
      this.$store.dispatch("Show").then( response =>{
        
        // console.log(response.data)
              this.$router.push({
                  path: "/show",
                   query: { data: response.data}
                   
                 })
      })
    },
    old_system()
    {
          this.$router.push({
                  path: "/oldSystem",
                 })
    },
    handleShowOne(){
      if(this.show_id == "")
      {
        alert("输入为空");
        return;
      }
         this.$store.dispatch("ShowOne",this.show_id).then( response =>{
           let code = response.data.code;
           if(code == 200)
           {
            this.$router.push({
                  path: "/show",
                   query: { data: response.data.data }
                 })
           }
           else{
             this.$router.push({
                  path: "/ShowError",
                   query: { message: response.data.message }
                   
                 })
           }
      })
    },
    handleRun()
    {
  if(this.show_id == "")
      {
        alert("输入为空");
        return;
      }
         this.$store.dispatch("Run",this.show_id).then( response =>{
           let code = response.data.code;
           if(code == 200)
           {
             this.responseResult = response.data.data;
            // this.$router.push({
            //       path: "/success",
                  
            //        query: { data: response.data.data }
            //      })
           }
           else if(code == 404){
              this.responseResult = response.data.message;
            //  this.$router.push({
            //       path: "/ShowError",
            //        query: { message: response.data.message }
                   
            //      })
           }else{
             this.responseResult = response.data.message;
           }
      })
    },
   
     DeleteOne(){
       if(this.show_id == "")
      {
        alert("输入为空");
        return;
      }
         this.$store.dispatch("DeleteOne",this.show_id).then( response =>{
           let code = response.data.code;
           if(code == 200)
           {
            this.$router.push({
                  path: "/show",
                   query: { data: response.data.message }
                 })
           }
           else{
             this.$router.push({
                  path: "/ShowError",
                   query: { message: response.data.message }
                   
                 })
           }
      })
    },
    add(){
      this.editUserFormVisible=true;
    },
    handleCanle()
    {
      this.editUserFormVisible=false;
    },
         
     handleAdd() {

      this.loading = true;
        
          this.$store
            .dispatch("HandleAdd", this.addForm)
            .then(response => {

              this.loading = false;
              let code = response.data.code;
            
              if (code == 200) {
                this.$router.push({
                  path: "/success",
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
    import_swagger()
    {
       if(this.show_id == "")
      {
        alert("输入为空");
        return;
      }
      this.$store
            .dispatch("Import_swagger", this.show_id)
            .then(response => {

              this.loading = false;
              let code = response.data.code;
            
              if (code == 200) {
                  alert("导入成功");
                this.$router.push({
                  path: "/success",
                
                });
                this.editUserFormVisible=false;
              } else {
                this.$router.push({
                  path: "/error",
                 
                });
              }
            })
            .catch(() => {
              this.loading = false;
                this.editUserFormVisible = false;
            });
    },
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    
 }
 
}
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}
 
.login-title {
  text-align: center;
}
 
.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>