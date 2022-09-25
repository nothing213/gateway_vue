import request from '@/utils/request' //引入封装好的 axios 请求

export function submit(url, message) { //登录接口
   
    return request({ //使用封装好的 axios 进行网络请求
        url: '/get_message',
        method: 'post',
        data: { //提交的数据
            url,
            message
        }
    })
}
export function submitlogin(url, message) { //登录接口
   
    return request({ //使用封装好的 axios 进行网络请求
        url: '/mailLogin',
        method: 'post',
        data: { //提交的数据
            url,
            message
        }
    })
}
export function submitusual(url, message,element,result) { //登录接口
   alert("url:"+url+" "+"message:"+message+" "+"element:"+element+" "+"result:"+result)
    return request({ //使用封装好的 axios 进行网络请求
        url: '/get_usual',
        method: 'post',
        data: { //提交的数据
            url,
            message,
            element,
            result
        }
    })
}