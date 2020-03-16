const httpUrl = 'http://192.168.8.6:8000'

export const request = {
	get: function(url, data, header) {
		return uni.request({
			url: httpUrl + url, //请求地址
			data: data, //请求参数
			header: header, //请求头，
			method: 'GET', //请求方式
			timeout: 5000, //超时时间
			dataType: 'json', //对返回数据进行JSON.parse
			responseType: 'text', //设置响应的数据类型。合法值：text、arraybuffer
			sslVerify: false, //验证 ssl 证书
			// success:function(res){
			// 	console.log('request success',res)
			// 	return res
			// },
			// fail:function(err){
			// 	console.log('request fail',err)
			// },
			// complete:function(data){
			// 	console.log('request complete',data)
			// }
		})
	}
}
