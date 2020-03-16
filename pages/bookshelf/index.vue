<template>
	<view class="content">
		<uni-nav-bar  :fixed="true" :status-bar="true"  left-text="书架" right-text="编辑" @clickLeft="clickLeft" @clickRight="clickRight"></uni-nav-bar>
		<view class="bookshelf_list_box grid margin-bottom text-center col-3">
			<view class="bookshelf_list">
				<view class="bookshelf_lists">
					<image class="book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
				</view>
				<text class="book_name">书名</text>
			</view>
			<view class="bookshelf_list">
				<view class="bookshelf_lists">
					<image class="book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
				</view>
				<text class="book_name">书名</text>
			</view>
			<view class="bookshelf_list">
				<view class="bookshelf_lists">
					<image class="book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
				</view>
				<text class="book_name">书名</text>
			</view>
			<view class="bookshelf_list">
				<view class="bookshelf_lists">
					<image class="book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
				</view>
				<text class="book_name">书名</text>
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: {
		uniNavBar
	},
	data() {
		return {};
	},
	methods: {
		clickLeft() {},
		clickRight() {}
	}
};
</script>

<style lang="scss" scoped>
.content {
	background-color: #FFFFFF;
	.bookshelt_navbar {
		position: fixed;
		z-index: 999;
	}
	.bookshelf_list_box {
		// padding-top: 100rpx;
		.bookshelf_list {
			padding-top: 30rpx;
			.bookshelf_lists {
				border-radius: 20rpx;
				margin: 0 12rpx;
				padding: 12rpx;
				box-shadow: 0 0 10rpx rgba($color: #000000, $alpha: .1);
				
				.book_img {
					width: 200rpx;
					height: 280rpx;
					border-radius: 20rpx;
				}
				
			}
			.book_name {
				display: block;
				text-align: center;
				margin-top: 5rpx;
				}
		}
	}
}
</style>
