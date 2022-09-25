<template>
    <div>
        hello this is gateway
        <el-button @click.native.prevent="do_get">
        查看
    </el-button>
    </div>

    
</template>

<script>
export default {
  name: "login",
  data() {
   
  },
  methods: {
   
      do_get(){
     
         this.$store.dispatch("Do_get").then( response =>{
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
  }
};
</script>