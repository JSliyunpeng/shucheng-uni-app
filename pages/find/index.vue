<template>
	<scroll-view scroll-y="true" class="scroll">
		<text class="hot_book_title">热评图书</text>
		<swiper
			class="swiper"
			:indicator-dots="true"
			indicator-color="rgba(254, 117, 19, .3)"
			indicator-active-color="#f18116"
			:autoplay="false"
			:interval="2000"
			:duration="1000"
			:circular="true"
		>
			<swiper-item class="swiper_item">
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_03.jpg" mode=""></image></view>
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image></view>
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image></view>
			</swiper-item>
			<swiper-item class="swiper_item">
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image></view>
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image></view>
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image></view>
			</swiper-item>
			<swiper-item class="swiper_item">
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image></view>
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image></view>
				<view class="swiper_item_box"><image class="swiper_item_img" src="../../static/images/day_Selected_img_03.jpg" mode=""></image></view>
			</swiper-item>
		</swiper>
		<!-- 书友圈 start -->
		<text class="hot_book_title">书友圈</text>
		<view class="Book_circle">
			<view class="Book_circle_list">
				<view class="user clearfix">
					<image class="user_img" src="../../static/images/4_19.jpg" mode=""></image>
					<view class="user_name">
						<text class="name">Lnag文字</text>
						<text class="class">文学 艺术</text>
					</view>
					<view class="btn">关注</view>
				</view>
				<text class="user_introduce">
					包图网成立于2016年，隶属于上海包图网络科技有限公司，是中国人气优质创意内容供给平台。平台联合20w+顶尖设计师、创意工作室以及国内外图库平台，汇集1500w+
				</text>
			</view>
			<view class="Book_circle_list">
				<view class="user clearfix">
					<image class="user_img" src="../../static/images/4_19.jpg" mode=""></image>
					<view class="user_name">
						<text class="name">Lnag文字</text>
						<text class="class">文学 艺术</text>
					</view>
					<view class="btn">关注</view>
				</view>
				<text class="user_introduce">
					包图网成立于2016年，隶属于上海包图网络科技有限公司，是中国人气优质创意内容供给平台。平台联合20w+顶尖设计师、创意工作室以及国内外图库平台，汇集1500w+
				</text>
			</view>
			<view class="Book_circle_list">
				<view class="user clearfix">
					<image class="user_img" src="../../static/images/4_19.jpg" mode=""></image>
					<view class="user_name">
						<text class="name">Lnag文字</text>
						<text class="class">文学 艺术</text>
					</view>
					<view class="btn">关注</view>
				</view>
			</view>
		</view>
		<!-- 书友圈 end -->
		
		<!-- 书友推荐 start -->
		<text class="hot_book_title">书友推荐</text>
		<scroll-view class="recommend" scroll-x="true" >
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
			<view class="recommend-item">
				<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
				<text class="recommend_user_name">Lnag文字</text>
				<view class="btn">关注</view>
			</view>
		</scroll-view>
		<!-- 书友推荐 end -->
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.scroll {
	width: auto;
	padding: 0 10rpx 100rpx;
	.hot_book_title {
		display: block;
		height: 114rpx;
		line-height: 114rpx;
		font-size: 44rpx;
		color: #333333;
	}
	.swiper {
		border-radius: 20rpx;
		overflow: hidden;
		height: 330rpx;
		box-shadow: 0 0 5px rgba($color: #000, $alpha: 0.1);
		margin: 10rpx;
		.swiper_item {
			display: flex;
			width: auto;
			padding: 30rpx 0;
			.swiper_item_box {
				flex: 1;
			}
			.swiper_item_img {
				display: block;
				width: 180rpx;
				height: 250rpx;
				margin: 0 auto;
			}
		}
	}
	.Book_circle {
		border-radius: 20rpx;
		overflow: hidden;
		padding: 20rpx;
		margin: 10rpx;
		box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);
		.Book_circle_list:last-child {
			border: none;
		}
		.Book_circle_list {
			padding-top: 20rpx;
			border-bottom: 1rpx solid #e6e6e6;
			.user {
				position: relative;
				padding-bottom: 20rpx;
				.user_img {
					display: block;
					float: left;
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}
				.user_name {
					float: left;
					padding-left: 24rpx;
					.name {
						font-size: 32rpx;
						color: #333333;
						font-weight: 900;
					}
					.class {
						display: block;
						font-size: 28rpx;
						color: #999999;
					}
				}
				.btn {
					position: absolute;
					right: 0;
					top: 50%;
					margin-top: -25rpx;
					width: 140rpx;
					height: 50rpx;
					line-height: 50rpx;
					border-radius: 25rpx;
					text-align: center;
					font-size: 30rpx;
					color: #ffffff;
					background: -webkit-linear-gradient(top, #ffad12, #ef8a15);
				}
			}
			.user_introduce{
				display: block;
				font-size: 28rpx;
				line-height: 40rpx;
				color: #999999;
				padding-bottom: 30rpx;
			}
		}
	}
	.recommend {
		white-space: nowrap;
		width: auto;
		padding: 0 24rpx;
		.recommend-item:first-child {
			margin-left: 0;
		}
		.recommend-item {
			display: inline-block;
			width: 250rpx;
			border-radius: 20rpx;
			margin:10rpx 24rpx 10px 10px;
			padding : 30rpx 15px;
			box-shadow: 0 0 10rpx rgba($color: #000000, $alpha: .1);
			.recommend_user_img {
				display: block;
				width: 100rpx;
				height: 100rpx;
				margin: 0 auto;
				border-radius: 50%;
			}
			.recommend_user_name {
				display: block;
				font-size: 24rpx;
				padding: 24rpx;
				color: #999999;
				font-weight: 900;
				text-align: center;
			}
			.btn{
				display: block;
				font-size: 24rpx;
				color: #FFFFFF;
				text-align: center;
				padding: 10rpx 0;
				border-radius: 26rpx;
				background: -webkit-linear-gradient(top, #ffad12, #ef8a15);
			}
		}
		
	}
}
</style>
