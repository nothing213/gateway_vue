<template>
    <div>
     
    百度搜索
        <el-form
              autocomplete="on"
              :model="oldForm"
              ref="oldForm"
              label-position="left"
               style="width: 200px"
            >
            <el-form-item prop="url">
                        <el-input
                            name="url"
                            v-model="oldForm.url"
                            autocomplete="on"
                            placeholder="url:">
                        </el-input>
                  </el-form-item>

                  <el-form-item prop="message">
                        <el-input
                            name="message"
                            v-model="oldForm.message"
                            autocomplete="on"
                            placeholder="message">
                          </el-input>
                  </el-form-item>      
        </el-form>
        
          <el-button
            style="width: 100px"
            type="primary"
            @click.native.prevent="submit"
          >提交</el-button>
    
            <el-button @click.native.prevent="canle">
                取消
            </el-button>
            <br/>
            登陆：
              <el-form
              autocomplete="on"
              :model="loginForm"
              ref="loginForm"
              label-position="left"
               style="width: 200px"
            >
            <el-form-item prop="url">
                        <el-input
                            name="url"
                            v-model="loginForm.url"
                            autocomplete="on"
                            placeholder="url:">
                        </el-input>
                  </el-form-item>

                  <el-form-item prop="message">
                        <el-input
                            name="message"
                            v-model="loginForm.message"
                            autocomplete="on"
                            placeholder="message">
                          </el-input>
                  </el-form-item>      
          </el-form>
           <el-button
            style="width: 100px"
            type="primary"
            @click.native.prevent="submit_login"
          >提交</el-button>
    
            <el-button @click.native.prevent="canle">
                取消
            </el-button>
          <br/>

          通用spider：
         
          <br>
         
          <el-form
              autocomplete="on"
              :model="usualForm"
              ref="usualFoem"
              label-position="left"
               style="width: 200px"
            >
            <el-form-item prop="url">
                        <el-input
                            name="url"
                            v-model="usualForm.url"
                            autocomplete="on"
                            placeholder="url:">
                        </el-input>
                  </el-form-item>

                  <el-form-item prop="message">
                        <el-input
                            name="message"
                            v-model="usualForm.message"
                            autocomplete="on"
                            placeholder="message">
                          </el-input>
                  </el-form-item> 
                   <el-form-item prop="element">
                        <el-input
                            name="element"
                            v-model="usualForm.element"
                            autocomplete="on"
                            placeholder="element">
                          </el-input>
                  </el-form-item> 
                   <el-form-item prop="result">
                        <el-input
                            name="result"
                            v-model="usualForm.result"
                            autocomplete="on"
                            placeholder="result">
                          </el-input>
                  </el-form-item> 

         </el-form>
  <el-button
            style="width: 100px"
            type="primary"
            @click.native.prevent="submit_usual"
          >提交</el-button>
    
            <el-button @click.native.prevent="canle">
                取消
            </el-button>

            显示结果:{{result}}
    </div>
    
</template>
<script>
export default {
     data() {
        return {
          n:"",
          oldForm:{
            url:"",
            message:"",
           
          },
          loginForm:{
            url:"",
            message:""
          },
           usualForm:{
            url:"",
            message:"",
            element:"",
            result:""
          },
           result:""
    };
  },
  methods:
  {
     submit() {
      this.loading = true;
          this.$store
            .dispatch("Submit", this.oldForm)
            .then(response => {
              this.loading = false;
              let code = response.data.code;
      
              if (code == 200) {
               
                this.result= response.data.data 
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
      submit_login() {
      
      this.loading = true;
          this.$store
            .dispatch("SubmitLogin", this.loginForm)
            .then(response => {
              this.loading = false;
              let code = response.data.code;
      
              if (code == 200) {
               
                this.result= response.data.data 
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
    submit_usual()
    {
    this.$store
              .dispatch("SubmitUsual", this.usualForm)
              .then(response => {
                this.loading = false;
                let code = response.data.code;
        
                if (code == 200) {
                
                  this.result= response.data.data 
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
    add()
    {
      this.n++;
    },
    canle()
    {
         this.$router.push({
              path: "/success",
          })
    },
  }
}
</script>