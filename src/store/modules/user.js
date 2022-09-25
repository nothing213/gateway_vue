import { login } from '@/api/login' //引入登录 api 接口
import { show } from '@/api/show' //引入登录 api 接口
import { showOne } from '@/api/show' //引入登录 api 接口
import { DeleteOne } from '@/api/show'
 import { handleAdd } from '@/api/show'
import { register } from '@/api/register'
 import { run } from '@/api/show'
import {import_swagger} from '@/api/show'
import {submit} from '@/api/oldSystem'
import {submitlogin} from '@/api/oldSystem'
import {submitusual} from '@/api/oldSystem'
 import {handleSave} from '@/api/show'
import {addGroup} from '@/api/show'
import {DeleteGroup} from '@/api/show'
import {DeleteApi} from '@/api/show'
import {FindGroup} from '@/api/show'
import {sendMsg} from '@/api/show'
const user = {
    actions: {
        // 登录
        Login({ commit }, userInfo) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用

            const username = userInfo.username.trim();

            return new Promise((resolve, reject) => { //封装一个 Promise
                login(
                        username,
                        userInfo.password)
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        Show() {
            return new Promise((resolve, reject) => { //封装一个 Promise
                show()
                    .then(response => { //使用 login 接口进行网络请求
                        //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        AddGroup({commit},apiGroupName) {
          

            return new Promise((resolve, reject) => { //封装一个 Promise
                addGroup(apiGroupName)
                    .then(response => { //使用 login 接口进行网络请求
                        //提交一个 mutation，通知状态改变
                        commit('')
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        ShowOne({ commit }, id) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                showOne(
                        id
                    )
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        Run({ commit },api_parm_info) {
          
            const input1 = api_parm_info.PathVariable1;
            const input11 = api_parm_info.PathVariable11;
            const input2 = api_parm_info.PathVariable2;
            const input22 = api_parm_info.PathVariable22;
            const input3= api_parm_info.PathVariable3;
            const input33 = api_parm_info.PathVariable33;
            const apiName = api_parm_info.apiname;
            const paths = api_parm_info.input5;
            var parm_query = api_parm_info.value;
             const parm_query_value = api_parm_info.key;
            const requestBody_json = api_parm_info.json;
            console.log("原始数据：")
            console.log(requestBody_json)
            console.log("json转换成string:")
            const requestBody = JSON.stringify(requestBody_json);
            console.log(requestBody)
            if(parm_query === '' || parm_query === null)
            {
                
                parm_query = ['no_parm'];
                
                // alert("parm是空的"+parm_query);
            }
            return new Promise((resolve, reject) => { //封装一个 Promise
                run(
                    input1,
                    input11,
                    input2,
                    input22,
                    input3,
                    input33,
                    paths,
                    parm_query,
                    parm_query_value,
                    requestBody,
                    apiName
                    )
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        DeleteOne({ commit }, id) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                DeleteOne(
                        id
                    )
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        DeleteGroup({ commit }, value) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                DeleteGroup(
                    value
                    )
                    .then(response => { 
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        DeleteApi({ commit }, id) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                DeleteApi(
                    id
                    )
                    .then(response => { 
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        HandleAdd({ commit },openApiInfo) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
           
            const id = openApiInfo.id;
            const apiName = openApiInfo.apiName;
            const openApi = openApiInfo.openApi;
            const info = openApiInfo.info;
            const servers = openApiInfo.servers;
            const methods = openApiInfo.methods;
            const paths = openApiInfo.paths;
            const requestBody = openApiInfo.requestBody;
            const responseResult = openApiInfo.responseResult;
            const group_api = openApiInfo.group_api;
            const input1 = '';
            const input11 = '';
            const input2 = '';
            const input22 = '';
            const input3 = '';
            const input33 = '';
            const parm_query = ["no_parm"];
            
            return new Promise((resolve, reject) => { //封装一个 Promise
                handleAdd(
                    id,
                    apiName,
                    openApi,
                    info,
                    servers,
                    methods,
                    paths,
                    requestBody,
                    responseResult,
                    group_api,
                    input1,
                    input11,
                    input2,
                    input22,
                    input3,
                    input33,
                    parm_query
                       )
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        Register({ commit }, userInfo) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用 
            return new Promise((resolve, reject) => { //封装一个 Promise
                register(
                    userInfo)
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        Import_swagger({ commit }, path) {
           
            return new Promise((resolve, reject) => { //封装一个 Promise
                import_swagger(
                    path
                    )
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        Submit({ commit }, messageBody) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
            // alert("this is user old");
            // const messagebody = messageBody.trim();
            // alert(messageBody.url+" "+messageBody.message);
            
            return new Promise((resolve, reject) => { //封装一个 Promise
                submit(
                    messageBody.url,
                    messageBody.message)
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        
        SubmitLogin({ commit }, messageBody) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
            
            return new Promise((resolve, reject) => { //封装一个 Promise
                submitlogin(
                    messageBody.url,
                    messageBody.message)
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        SubmitUsual({ commit }, messageBody) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
            
            return new Promise((resolve, reject) => { //封装一个 Promise
                submitusual(
                    messageBody.url,
                    messageBody.message,
                    messageBody.element,
                    messageBody.result)
                    .then(response => { //使用 login 接口进行网络请求
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        HandleSave({ commit },openApiInfo) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
           
            const id = openApiInfo.id;
            const parm_query = openApiInfo.parm_query;
            const apiName = openApiInfo.apiName;
            const openApi = openApiInfo.openApi;
            const info = openApiInfo.info;
            const servers = openApiInfo.servers;
            const methods = openApiInfo.methods;
            const paths = openApiInfo.paths;
            const input2 = openApiInfo.input2
            const input22 = openApiInfo.input22;
            const input1 = openApiInfo.input1;
            const input11 = openApiInfo.input11;
            const input3 = openApiInfo.input3;
            const input33 = openApiInfo.input33;
            const requestBody = openApiInfo.requestBody;
            const responseResult = openApiInfo.responseResult;
            const group_api = openApiInfo.group_api;

             console.log(commit+id+":"+apiName+":"+openApi+":"+info+" "+servers+" "+methods+" "+paths+" "+requestBody+" "+responseResult+" "+group_api+" "+input22+" "+input2+" "+parm_query)
            return new Promise((resolve, reject) => { //封装一个 Promise
                handleSave(
                    id,
                    apiName,
                    openApi,
                    info,
                    servers,
                    methods,
                    paths,
                    requestBody,
                    responseResult,
                    group_api,
                    input1,
                    input11,
                    input2,
                    input22,
                    input3,
                    input33,
                    parm_query
                       )
                    .then(response => { 
                        commit('') //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        FindGroup() {
            
            return new Promise((resolve, reject) => { //封装一个 Promise
                FindGroup()
                    .then(response => { //使用 login 接口进行网络请求
                        //提交一个 mutation，通知状态改变
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        sendMsg({ commit },value){
           
            return new Promise((resolve, reject) => { //封装一个 Promise
                sendMsg(value)
                    .then(response => { 
                        commit('')
                        resolve(response) //将结果封装进 Promise
                    }).catch(error => {
                        reject(error)
                    })
            })  
        }
       
    }
}
export default user