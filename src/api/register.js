import request from '@/utils/request' //引入封装好的 axios 请求

export function register(userinfo) { //登录接口
    const username = userinfo.username;
    const password = userinfo.password;
    return request({ //使用封装好的 axios 进行网络请求
        url: '/admin/register',
        method: 'post',
        data: { //提交的数据
            username,
            password
        }
    })
}