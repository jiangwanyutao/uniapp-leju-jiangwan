// 封装要达到的效果与vue项目当中封装的使用保持一致

import baseUrl from "./baseUrl"

function main(config){
  return new Promise((resolve,rejected)=>{
    uni.request({
      url:baseUrl + config.url,
      timeout:5000,
      data:config.data,
      method:config.method,
	    header:{
	  		token:uni.getStorageSync("token")
	        },
      success(res){
        // console.log(res,this)
        resolve(res.data);
       
      }
    })
  })
}

export default main
// main 函数提供了then方法