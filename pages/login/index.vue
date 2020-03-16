<template>
	<view class="content">
		<uni-nav-bar background-color="rgba(255,255,255,0)" color="#fff" right-icon="arrowright" right-text="注册" left-icon="closeempty" @clickLeft="toIndexPage"></uni-nav-bar>
		<view class="welcome_text">欢迎来到</view>
		<view class="welcome_name">啦啦阅读</view>
		<form class="form" @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column clearfix">
				<input class="uni-input" v-model="account" placeholder-style="color:#fff" name="account" placeholder="用户名" @focus="message = ''" />
			</view>
			<view class="uni-form-item uni-column clearfix">
				<input class="uni-input" placeholder-style="color:#fff" v-model="password" :password="showPassword" name="password" placeholder="密码" @focus="message = ''" />
				<text
					class="show_password cuIcon-attention"
					:class="showPassword ? 'cuIcon-attention' : 'cuIcon-attentionforbid'"
					@click.native="showPassword = !showPassword"
				></text>
			</view>
			<view class="login_error" v-if="message">{{ message }}</view>
			<view class="uni-btn-v"><button form-type="submit">登录</button></view>
		</form>
		<image class="other_img" src="../../static/images/login_other_login.jpg" mode=""></image>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import { request, get } from '../../common/request.js';
export default {
	components: { uniNavBar },
	data() {
		return {
			showPassword: true,
			password: 123456,
			account: 'admin',
			message: ''
		};
	},
	methods: {
		/* 登录 */
		formSubmit: function(e) {
			let formdata = e.detail.value; //form表单信息
			/* 登录请求 */
			request.get('/login', formdata).then(res => {
				let result = res[1].data;
				console.log('indexPage then()', result);
				if (result.code == 200) {
					uni.setStorage({
						key: 'sessionKey',
						data: result.token
					});
					this.toIndexPage();
				} else {
					this.message = result.message;
				}
			});
		},
		/* 跳转首页 */
		toIndexPage: function() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	color: #ffffff;
	padding-top: 50rpx;
	background-image: linear-gradient(top, #ffae12, #f07d17);
	.welcome_text {
		margin-top: 170rpx;
		font-size: 30rpx;
		line-height: 50rpx;
		padding-left: 110rpx;
		/* #ifdef MP-WEIXIN */
		margin-top: 100rpx;
		/* #endif */
	}
	.welcome_name {
		font-size: 46rpx;
		padding-left: 110rpx;
	}
	.form {
		display: block;
		padding: 170rpx 110rpx 0;
		/* #ifdef MP-WEIXIN */
		padding: 100rpx 110rpx 0;
		/* #endif */
		.uni-form-item {
			position: relative;
			margin-bottom: 40rpx;
			border-bottom: 1px solid #ffffff;
			.uni-input {
				display: block;
				float: left;
				width: 100%;
			}
			.show_password {
				position: absolute;
				right: 0rpx;
				line-height: 50rpx;
			}
		}
		.login_error {
			color: #ed1c24;
			margin-bottom: 20rpx;
			margin-top: -20rpx;
		}
		.uni-btn-v {
			background-color: #ffffff;
			border-radius: 100rpx;
			overflow: hidden;
			button {
				font-weight: 900;
				background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
	}
	.other_img {
		display: block;
		width: 474rpx;
		height: 42rpx;
		margin: 180rpx auto 60rpx auto;
		/* #ifdef MP-WEIXIN */
		margin: 130rpx auto 60rpx auto;
		/* #endif */
	}
}
</style>
