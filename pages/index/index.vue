<template>
	<view class="content">
		<view class="top clearfix">
			<!-- 搜索 start -->
			<view class="search_box">
				<view class="search_title">搜索</view>
				<view class="search_input"><text class="search_input_text">书名、作者和出版社</text></view>
				<view class="erweima"></view>
			</view>
			<!-- 搜索 end -->
			<!-- 用户card start -->
			<view class="person">
				<view class="person_detial">
					<view class="person_name">
						包包
						<text class="person_morning">早上好！</text>
						<br />
						<view class="person_week_time">本周阅读时间13小时39分钟</view>
					</view>
				</view>
				<view class="person_isread">
					<image class="person_isread_img" src="../../static/images/4_03.jpg" mode=""></image>
					<view class="person_isread_detial">
						<view class="person_isread_name">包图网伯爵传</view>
						<view class="person_isread_introduce">我们是创意内容的提供者</view>
						<view class="person_isread_time">阅读时长：32小时</view>
					</view>
					<image class="person_isread_Continue" src="../../static/images/4_06.jpg"></image>
				</view>
			</view>
			<!-- 用户card end -->
		</view>

		<view class="main">
			<!-- 精选分类 start -->
			<view class="Selected_classification">
				<view class="Selected_top clearfix">
					<text class="Selected_text_left">精选分类</text>
					<text class="Selected_text_right">全部分类</text>
				</view>
				<view class="Selected_bottom">
					<view class="Selected_lists">
						<image class="Selected_lists_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="Selected_lists_text">女频热书</text>
					</view>
					<view class="Selected_lists">
						<image class="Selected_lists_img" src="../../static/images/4_13.jpg" mode=""></image>
						<text class="Selected_lists_text">男频佳作</text>
					</view>
					<view class="Selected_lists">
						<image class="Selected_lists_img" src="../../static/images/4_15.jpg" mode=""></image>
						<text class="Selected_lists_text">热门影视</text>
					</view>
					<view class="Selected_lists">
						<image class="Selected_lists_img" src="../../static/images/4_17.jpg" mode=""></image>
						<text class="Selected_lists_text">经典中外</text>
					</view>
					<view class="Selected_lists">
						<image class="Selected_lists_img" src="../../static/images/4_19.jpg" mode=""></image>
						<text class="Selected_lists_text">言情小说</text>
					</view>
				</view>
			</view>
			<!-- 精选分类 end -->

			<!-- 每日精选 start -->
			<view class="day_Selected">
				<view class="Selected_top clearfix"><text class="Selected_text_left">每日精选</text></view>
				<view class="day_Selected_bottom h5_custom_padding">
					<view class="day_Selected_lists_box" :style="{ width: scollBoxWidth }" id="scrollBox" ref="scrollBox">
						<view class="day_Selected_lists clearfix" data-index="1" id="scrollList" @click="dowmloadBook('红楼梦')">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游1</text>
							<text class="author">{{ message }}</text>
						</view>
						<view class="day_Selected_lists clearfix" data-index="2" id="scrollList">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游2</text>
							<text class="author">李浩</text>
						</view>
						<view class="day_Selected_lists clearfix" data-index="3" id="scrollList">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游3</text>
							<text class="author">李浩</text>
						</view>
						<view class="day_Selected_lists clearfix" data-index="4" id="scrollList">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游4</text>
							<text class="author">李浩</text>
						</view>
						<view class="day_Selected_lists clearfix" data-index="5" id="scrollList">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游5</text>
							<text class="author">李浩</text>
						</view>
						<view class="day_Selected_lists clearfix" data-index="6" id="scrollList">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游6</text>
							<text class="author">李浩</text>
						</view>
						<view class="day_Selected_lists clearfix" data-index="7" id="scrollList">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游7</text>
							<text class="author">李浩</text>
						</view>
						<view class="day_Selected_lists clearfix" data-index="8" id="scrollList">
							<image class="day_Selected_img" src="../../static/images/day_Selected_img_01.jpg" mode=""></image>
							<text class="book_name">夏日湖光游8</text>
							<text class="author">李浩</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 每日精选 end -->
		</view>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';

// const query = uni.createSelectorQuery().in(this);
export default {
	components: { uniIcons },
	data() {
		return {
			title: 'Hello',
			scollBoxWidth: 0,
			message: 'lihao'
		};
	},
	computed: {
		scollWidth() {
			let scrollListsWidth = 100;
		}
	},
	methods: {
		// 书本保存到本地
		saveBookLocal(savedFilePath, bookName) {
			console.log(savedFilePath)
			/* 读取临时文件 */
			plus.io.resolveLocalFileSystemURL(
				savedFilePath,
				function(entry) {
					/* 读取最终存放文件夹 */
					plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, function(toFile) {
						entry.moveTo(
							toFile.root,
							bookName,
							function(entry1) {
								console.log('书本储存本地成功' + entry1.fullPath);
							},
							function(e) {
								console.log('书本存储本地失败' + JSON.stringify(e));
							}
						);
					});
				},
				function(e) {
					console.log('Resolve file URL failed: ' + e.message);
				}
			);
		},
		/* 从服务器下载书籍 */
		dowmloadBook(bookName) {
			plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, toFile => {
				/* 读取存放文件夹所有的文件 */
				var directoryReader = toFile.root.createReader();
				directoryReader.readEntries(
					entries => {
						bookName = bookName + '.txt';
						/* 判断书本是否存在 */
						let hasBook = entries.find(item => {
							console.log(item.name, bookName);
							return item.name === bookName;
						});
						/* 不存在则下载 */
						if (!hasBook) {
							uni.downloadFile({
								url: 'http://192.168.8.6:80/download/' + bookName,
								success: res => {
									/* 保存书本到本地 */
									this.saveBookLocal(res.tempFilePath, bookName);
								},
								fail: res => {
									console.log('下载失败')
								}
							});
						} else {
							console.log('图书已存在');
						}
					},
					function(e) {
						console.log('读取存放文件夹失败 ' + e.message);
					}
				);
			});
		}
	},
	onLoad() {},
	onReady() {
		const query = uni.createSelectorQuery().in(this);
		let aaa = query.selectAll('#scrollBox');
		let scrollListNum = 8;
		query
			.selectAll('#scrollList')
			.fields({ id: true })
			.exec(function(data) {
				// scrollListNum=data[0].length
			});
		let scrollListsWidth = 200;
		let scrollListsmargin = 24;
		this.scollBoxWidth = scrollListNum * scrollListsWidth + scrollListsmargin * scrollListNum;
		this.scollBoxWidth = uni.upx2px(this.scollBoxWidth) + 'px';
	}
};
</script>

<style lang="scss" scoped>
.content {
	.top {
		width: 100%;
		.search_box {
			position: relative;
			z-index: -1;
			height: 330rpx;
			padding: 65rpx 24rpx 0 24rpx;
			background: -webkit-linear-gradient(top, #ffad12, #ef8a15);
			.search_title {
				font-size: 40rpx;
				font-weight: 900;
				color: #fefeff;
			}
			.search_input {
				position: relative;
				height: 62rpx;
				border-bottom: 1rpx solid #fab55b;
				.search_input_text {
					position: absolute;
					top: 50%;
					margin-top: -13rpx;
					font-size: 26rpx;
					color: #fefeff;
				}
			}
			.erweima {
				position: absolute;
				top: 70rpx;
				right: 24rpx;
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				background-image: url('../../static/images/icon_erweima.jpg');
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
		}
		.person {
			width: 700rpx;
			height: 350upx;
			margin: -120rpx auto 0 auto;
			border-radius: 10rpx;
			box-shadow: 0rpx -10rpx 10rpx -5rpx rgba($color: #f1f1f1, $alpha: 0.2), -10rpx 0rpx 10rpx 0rpx rgba($color: #f1f1f1, $alpha: 0.2),
				10rpx 0rpx 10rpx 0rpx rgba($color: #f1f1f1, $alpha: 0.2), 0rpx 10rpx 10rpx 0rpx rgba($color: #cccccc, $alpha: 0.6);
			background-color: #ffffff;
			.person_detial {
				height: 107rpx;
				padding: 0 0 0 36rpx;
				border-bottom: 1rpx solid #edeef0;
				.person_name {
					font-size: 50rpx;
					.person_morning {
						margin-left: 12rpx;
						font-size: 30rpx;
						color: #666666;
					}
					.person_week_time {
						font-size: 26rpx;
						color: #999999;
					}
				}
			}
			.person_isread {
				position: relative;
				.person_isread_img {
					float: left;
					width: 100rpx;
					height: 140rpx;
					margin: 30rpx 40rpx 35rpx;
					border-radius: 10rpx;
					box-shadow: 4rpx 4rpx 8rpx 4rpx #d4d4d4;
				}
				.person_isread_detial {
					padding-top: 45rpx;
					.person_isread_name {
						font-size: 32rpx;
						color: #444444;
					}
					.person_isread_introduce {
						font-size: 24rpx;
						color: #999999;
					}
					.person_isread_time {
						margin-top: 25rpx;
						font-size: 24rpx;
						color: #999999;
						font-weight: bold;
					}
				}
				.person_isread_Continue {
					position: absolute;
					top: 50%;
					right: 60rpx;
					margin-top: -13rpx;
					width: 135rpx;
					height: 26rpx;
					margin-top: 12rpx;
				}
			}
		}
	}
	/* top之下的主体容器 */
	.main {
		width: 100%;
		/* 精选分类 */
		.Selected_classification,
		.day_Selected {
			padding: 40rpx 24rpx 0;
			.Selected_top {
				padding-bottom: 30rpx;
				.Selected_text_left {
					float: left;
					font-size: 36rpx;
					color: #333333;
				}
				.Selected_text_right {
					float: right;
					font-size: 24rpx;
					line-height: 45rpx;
					color: #999999;
				}
			}
			.Selected_bottom {
				display: flex;
				.Selected_lists {
					flex: 1;
					.Selected_lists_img {
						display: block;
						width: 120rpx;
						height: 120rpx;
						margin: 0 auto;
					}
					.Selected_lists_text {
						display: block;
						font-size: 22rpx;
						color: #333333;
						text-align: center;
					}
				}
			}
			.day_Selected_bottom {
				width: 100%;
				overflow: hidden;
				overflow-x: scroll;
				height: 360rpx;
				/* #ifdef H5 */
				height: 480rpx;
				/* #endif */
				.day_Selected_lists_box {
					// width: 3000rpx;
					height: 360rpx;
					padding-bottom: 100rpx;
					.day_Selected_lists {
						float: left;
						margin-right: 24rpx;
						.day_Selected_img {
							display: block;
							width: 200rpx;
							height: 280rpx;
						}
						.book_name {
							display: block;
							font-size: 30rpx;
							color: #333333;
						}
						.author {
							display: block;
							font-size: 24rpx;
							color: #999999;
						}
					}
				}
			}
		}
	}
}
</style>
