// import {submit} from '@/api/oldSystem'

// const oldSystem={
//     actions:
//     {
//         Submit({ commit }, messageBody) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用

//             const messagebody = messageBody.trim();
//             alert(messageBody.url+" "+messageBody.message);
            
//             return new Promise((resolve, reject) => { //封装一个 Promise
//                 submit(
//                     messagebody.url,
//                     messagebody.message)
//                     .then(response => { //使用 login 接口进行网络请求
//                         commit('') //提交一个 mutation，通知状态改变
//                         resolve(response) //将结果封装进 Promise
//                     }).catch(error => {
//                         reject(error)
//                     })
//             })
//         },
//     }
// }
// export  {oldSystem}