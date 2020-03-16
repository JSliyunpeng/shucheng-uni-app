<template>
	<view class="content">
		<uni-nav-bar :fixed="true" :status-bar="true" color="#999999" left-text="个人中心" right-icon="gear" @clickLeft="clickLeft" @clickRight="clickRight"></uni-nav-bar>
		<!-- 用户信息 start -->
		<view class="user_card clearfix">
			<image class="user_img" src="../../static/images/my_avatar.jpg" mode=""></image>
			<view class="user_detial_box">
				<view class="user_name">李浩李浩李浩李浩</view>
				<view class="user_autograph">签名签名！！！！！！</view>
			</view>
			<view class="user_to_detial"><text class="cuIcon-right"></text></view>
		</view>
		<!-- 用户信息 end -->

		<!-- 包图币，关注，粉丝，书评 start -->
		<view class="num_box">
			<view class="num_lists">
				<view class="num">123456</view>
				<view class="num_name">Q书币</view>
			</view>
			<view class="num_lists">
				<view class="num">123456</view>
				<view class="num_name">关注</view>
			</view>
			<view class="num_lists">
				<view class="num">123456</view>
				<view class="num_name">粉丝</view>
			</view>
			<view class="num_lists">
				<view class="num">123456</view>
				<view class="num_name">书评</view>
			</view>
		</view>
		<!-- 包图币，关注，粉丝，书评 end -->

		<!-- 阅读历史 start -->
		<view class="read_history_tilte">阅读历史</view>
		<scroll-view class="read_history" scroll-x="true">
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
			<image class="read_history_list" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
		</scroll-view>
		<!-- 阅读历史 end -->

		<!-- 底部列表 strat -->
		<uni-list>
		    <uni-list-item title="读书排行榜" thumb="../../static/images/my-ranking.jpg"></uni-list-item>
		</uni-list>
		<uni-list>
		    <uni-list-item title="读书笔记" thumb="../../static/images/my_note.jpg"></uni-list-item>
		</uni-list>
		<uni-list>
		    <uni-list-item title="书单" thumb="../../static/images/my_book_list.jpg"></uni-list-item>
		</uni-list>
		<!-- 底部列表 end -->
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
export default {
	components: {
		uniNavBar,
		uniList,
		uniListItem
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.content {
	
	.user_card {
		position: relative;
		padding:80rpx 24rpx 24rpx;
		.user_img {
			display: block;
			float: left;
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			overflow: hidden;
		}
		.user_detial_box {
			float: left;
			margin-left: 40rpx;
			.user_name {
				font-size: 44rpx;
				line-height: 80rpx;
				color: #333333;
			}
			.user_autograph {
				font-size: 30rpx;
				color: #999999;
			}
		}
		.user_to_detial {
			position: absolute;
			top: 50%;
			margin-top: -10rpx;
			right: 24rpx;
			color: 999999;
		}
	}
	.num_box {
		display: flex;
		padding: 24rpx;
		.num_lists:first-child {
			border-left: 0;
		}
		.num_lists {
			flex: 1;
			text-align: center;
			border-left: 1rpx solid #999999;
			.num {
				font-size: 36rpx;
				background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			.num_name {
				font-size: 24rpx;
				color: #999999;
			}
		}
	}
	/* 阅读历史 start */
	.read_history_tilte {
		padding: 24rpx;
		font-size: 36rpx;
		color: #333333;
	}
	.read_history {
		width: auto;
		white-space: nowrap;
		margin: 0 24rpx 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
		.read_history_list {
			display: inline-block;
			width: 200rpx;
			height: 280rpx;
			margin-right: 24rpx;
			border-radius: 20rpx;
		}
	}
	/* 阅读历史 end */
}
</style>
