import request from '@/utils/request' //引入封装好的 axios 请求
export function do_get() { //登录接口

    return request({ //使用封装好的 axios 进行网络请求
        url: 'consumer/payment/do_get',
        method: 'get',
        data: { //提交的数据

        }
    })
}