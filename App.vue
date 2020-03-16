<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
@import 'colorui/main.css';
@import 'colorui/icon.css';
/*每个页面公共css */
body {
	background-color: #ffffff;
}
uni-page-body {
	//解决h5端height:100%失效问题
	height: 100%;
}
page {
	//解决app端,小小程序端height:100%失效问题
	height: 100%;
}
.content {
	//解决支付宝小程序最外层盒子高度,宽度全屏问题
	position: absolute;
	height: 100%;
	width: 100%;
}

.clearfix:after {
	content: '.';
	display: block;
	clear: both;
	visibility: hidden;
	height: 0;
	font-size: 0;
}
::-webkit-scrollbar {
	display: none;
}
/* #ifdef H5 */
.h5_custom_padding{
	padding-bottom: 100rpx;
}
/* #endif */
</style>
