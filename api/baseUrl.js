var baseUrl;
if(process.env.NODE_ENV === 'development'){  //  'development 本地开发时所处的环境开发环境   production 打包之后的环境生产环境
    console.log('开发环境')
	// baseUrl = "http://localhost"
	baseUrl = "https://leju.bufan.cloud"
}else{
    // console.log('生产环境')
	baseUrl = "https://leju.bufan.cloud"
}
export default baseUrl

// http://localhost