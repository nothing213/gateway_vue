import request from '@/utils/request' //引入封装好的 axios 请求
// import user from '../store/modules/user'

export function show() { //登录接口
    return request({ //使用封装好的 axios 进行网络请求
        url: 'findAllApi',
        method: 'get',
        data: { //提交的数据

        }
    })
}
export function FindGroup() { //登录接口
    return request({ //使用封装好的 axios 进行网络请求
        url: 'findAllGroup',
        method: 'get',
        data: { //提交的数据

        }
    })
}
export function addGroup(apiGroup) { //登录接口
  
    return request({ //使用封装好的 axios 进行网络请求
        url: 'addApiGroup',
        method: 'post',
        data: { //提交的数据
          
            apiGroup
        }
    })
}
export function showOne(id) { //登录接口
    // var temp = parseInt(id);
    return request({ //使用封装好的 axios 进行网络请求
        url: 'consumer/payment/getOne',
        method: 'post',
        data: { //提交的数据
            id
        }
    })
}
export function run( 
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
    ) { 
    // var temp = parseInt(id);
    
    return request({ //使用封装好的 axios 进行网络请求
        url: 'complete',
        method: 'post',
        data: { //提交的数据
            
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
        }
    })
}
export function import_swagger(path) { 
    // var temp = parseInt(id);
    
    return request({ //使用封装好的 axios 进行网络请求
        url: 'import_swagger',
        method: 'post',
        data: { //提交的数据
            path
        }
    })
}
export function DeleteOne(id) {
    // var temp = parseInt(id);
    return request({ //使用封装好的 axios 进行网络请求
        url: 'consumer/payment/delete',
        method: 'post',
        data: { //提交的数据
            id
        }
    })
}
//删除分组
export function DeleteGroup(apiGroup) { 
    return request({ //使用封装好的 axios 进行网络请求
        url: 'deleteApiGroup',
        method: 'post',
        data: { //提交的数据
            apiGroup
        }
    })
}
export function DeleteApi(id) { 
    return request({ //使用封装好的 axios 进行网络请求
        url: 'deleteApi',
        method: 'post',
        data: { //提交的数据
            id
        }
    })
}
//新增api
export function handleAdd(id,
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
    parm_query) 
    {
    // alert(id+" "+apiName+" "+openApi+" "+info+" "+servers+" "+methods+" "+paths+" "+requestBody+" "+responseResult);
    return request({ //使用封装好的 axios 进行网络请求
        url: '/insertApi',
        method: 'post',
        data: { //提交的数据
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
        }
    })
}
//更新api
export function handleSave(id,
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
    parm_query) 
    {
    //   alert(id+" "+apiName+" "+openApi+" "+info+" "+servers+" "+methods+" "+paths+" "+requestBody+" "+responseResult+" "+group_api);
    return request({ //使用封装好的 axios 进行网络请求
        url: '/saveApi',
        method: 'post',
        data: { //提交的数据
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
        }
    })
}
export function sendMsg(value){
    return request({ //使用封装好的 axios 进行网络请求
        url: '/sendMsg',
        method: 'post',
        data: { //提交的数据
            value
        }
    })
}