<template>
	<view class="content">
		<uni-nav-bar :fixed="true" :status-bar="true" left-text="书架" right-text="编辑" @clickRight="clickRight"></uni-nav-bar>
		<view class="bookshelf_list_box grid margin-bottom text-center col-3">
			<view class="bookshelf_list" v-for="(bookName, index) in bookNames" :key="index" @click="toRead(bookName)">
				<view class="bookshelf_lists"><image class="book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image></view>
				<text class="book_name">{{ bookName }}</text>
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
		return {
			bookNames: []
		};
	},
	methods: {
		clickRight() {},
		toRead(bookName) {
			uni.navigateTo({
				url: '/pages/read/index?bookName=' + bookName,
				success:function(res){
					console.log(res);
				},
				fail:function(err){
					console.log(res)
				}
			});
		}
	},
	onReady() {
		/* 获取本地书籍列表对象 */
		plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, toFile => {
			/* 读取存放文件夹所有的文件 */
			var directoryReader = toFile.root.createReader();
			directoryReader.readEntries(
				entries => {
					/* 判断书本是否存在 */
					entries.forEach(item => {
						if (item.name.slice(-4) === '.txt') {
							this.bookNames.push(item.name);
						}
					});
				},
				function(e) {
					console.log('读取存放文件夹失败 ' + e.message);
				}
			);
		});
	}
};
</script>

<style lang="scss" scoped>
.content {
	background-color: #ffffff;
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
				box-shadow: 0 0 10rpx rgba($color: #000000, $alpha: 0.1);

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
