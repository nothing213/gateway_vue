<template>
  <div>
back
  </div>
</template>

<script>
export default {
    data() 
    {
      
         this.$store.dispatch("Show").then( response =>{
        console.log(response.data)
              this.$router.push({
                  path: "/show",
                   query: { data: response.data} 
                 })
      })
       
        return {
            
        }
    },
   
}
</script>

<style>

</style>