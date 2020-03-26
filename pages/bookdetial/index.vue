<template>
	<view class="book_detial">
		<!-- 顶部导航 start -->
		<uni-nav-bar class="nav_bar clearfix">
			<view slot="left"><uni-icons type="back" size="24" color="#666" @click="back"></uni-icons></view>
			<view slot="right"><uni-icons type="redo-filled" size="24" color="#666"></uni-icons></view>
		</uni-nav-bar>
		<!-- 顶部导航 end -->

		<!-- 主体 start -->
		<scroll-view class="main" scroll-y="true">
			<!-- 书本详情 start -->
			<view class="book_introduction_box clearfix">
				<view class="book_introduction">
					<image class="book_img" src="../../static/images/4_03.jpg" mode=""></image>
					<view class="book_detial_left_box">
						<view class="book_name">{{ bookName }}</view>
						<view class="book_author">包大包&nbsp;著</view>
						<view class="book_score">
							<uni-rate size="14" value="5"></uni-rate>
							<text class="Book_comment_num">&nbsp;123条评论</text>
						</view>
						<view class="book_price">128包图币</view>
					</view>
				</view>
			</view>
			<!-- 书本详情 end -->

			<!-- 简介start -->
			<view class="paragraph_text_box">
				<view class="paragraph_headings">介绍</view>
				<text class="paragraph_text">
					包图网成立于2016年，隶属于上海包图网络科技有限公司，是中国人气优质创意内容供给平台。平台联合20w+顶尖设计师、创意工作室以及国内外图库平台，汇集1500w+
				</text>
			</view>
			<!-- 简介end -->

			<!-- 书评 start -->
			<view class="book_review">
				<view class="paragraph_headings">书评</view>
				<view class="paragraph_headings_list">
					<uni-card
						:is-full="true"
						title="李浩"
						:is-shadow="false"
						thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"
						extra="12月31日 24:30"
						note="true"
					>
						<view :class="card_text_show ? 'card_text_show' : 'card_text_hidden'">
							那是一个秋意盎然、金风送爽的日子,我和父母一起来到了位于上师大旁的康健园.一踏进公园,一股浓郁的桂香扑鼻而来,泌人心脾,让我心旷神怡,只见一朵朵开得正烈的金色桂花,迎风而立,仿佛在向我招手.我们追着这桂香,走进了清幽的公园.
							<br />
						</view>
						<view class="show_text_all" @click="card_text_show = !card_text_show">{{ show_text }}</view>
						<view class="card_book clearfix">
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"></text>
										9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"></text>
										9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"></text>
										9999+
									</view>
								</view>
							</view>
						</template>
					</uni-card>
					<uni-card
						:is-full="true"
						title="李浩"
						:is-shadow="false"
						thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"
						extra="12月31日 24:30"
						note="true"
					>
						<view :class="card_text_show ? 'card_text_show' : 'card_text_hidden'">
							那是一个秋意盎然、金风送爽的日子,我和父母一起来到了位于上师大旁的康健园.一踏进公园,一股浓郁的桂香扑鼻而来,泌人心脾,让我心旷神怡,只见一朵朵开得正烈的金色桂花,迎风而立,仿佛在向我招手.我们追着这桂香,走进了清幽的公园.
							<br />
						</view>
						<view class="show_text_all" @click="card_text_show = !card_text_show">{{ show_text }}</view>
						<view class="card_book clearfix">
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"></text>
										9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"></text>
										9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"></text>
										9999+
									</view>
								</view>
							</view>
						</template>
					</uni-card>
				</view>
			</view>
			<!-- 书评 end -->

			<!-- 作者其他书籍 start -->
			<view class="paragraph_text_box">
				<view class="paragraph_headings">介绍</view>
				<text class="paragraph_text">作者其他书籍</text>
				<scroll-view class="recommend clearfix" scroll-x="true">
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
					<view class="recommend-item">
						<image class="recommend_user_img" src="../../static/images/4_11.jpg" mode=""></image>
						<text class="recommend_user_name">Lnag文字</text>
					</view>
				</scroll-view>
			</view>
			<!-- 作者其他书籍 end -->
		</scroll-view>

		<!-- 底部按钮 start -->
		<view class="bottom_button_box">
			<view class="add_bookshelf" v-show="!hasBookShelf" @click="dowmloadBook(bookName)">加入书架</view>
			<navigator class="add_bookshelf" v-show="hasBookShelf" open-type="switchTab" url="/pages/bookshelf/index">去书架</navigator>
			<view class="add_bookshelf">试读</view>
			<view class="shop">立即购买</view>
		</view>
		<!-- 底部按钮 end -->

		<uni-popup ref="popup" type="center">
			<view class="popup_content">{{ popupText }}</view>
		</uni-popup>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniRate from '@/components/uni-rate/uni-rate.vue';
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	components: { uniNavBar, uniIcons, uniRate, uniCard, uniPopup },
	data() {
		return {
			bookName: '',
			hasBookShelf: true,
			popupText: '书本已加入书架'
		};
	},
	methods: {
		back() {
			uni.navigateTo();
		},
		hasBook() {
			/* 读取document文件夹 */
			plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, toFile => {
				/* 读取存放书本文件夹的所有文件 */
				var directoryReader = toFile.root.createReader();
				directoryReader.readEntries(
					entries => {
						const bookName = this.bookName + '.txt';
						/* 判断书本是否存在 */
						let hasBook = entries.find(item => {
							return item.name === bookName;
						});
						/* 不存在则下载 */
						if (!hasBook) {
							this.hasBookShelf = false;
						} else if (hasBook.name == bookName) {
							this.hasBookShelf = true;
						}
					},
					err => {
						console.log('读取存放文件夹失败 ' + e.message);
					}
				);
			});
		},
		/* 书本保存到本地 */
		saveBookLocal(tempFilePath, bookName) {
			/* 读取临时存储文件 */
			console.log(tempFilePath);
			plus.io.resolveLocalFileSystemURL(
				tempFilePath,
				entry => {
					/* 读取最终存放文件夹 */
					plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, toFile => {
						/* 从临时文件移动到存储文件夹 */
						entry.moveTo(
							toFile.root,
							bookName,
							entry1 => {
								console.log('书本储存本地成功' + entry1.fullPath);
								this.hasBook();
								this.$refs.popup.open();
								setTimeout(() => {
									this.$refs.popup.close();
								}, 1000);
							},
							err => {
								console.log('书本存储本地失败' + JSON.stringify(e));
							}
						);
					});
				},
				function(e) {
					console.log('读取临时存储文件失败:' + e.message);
				}
			);
		},
		/* 下载书本 */
		dowmloadBook(bookName) {
			console.log(1);
			const bookNameTxt = bookName + '.txt';
			uni.downloadFile({
				/* 书本下载地址 */
				url: 'http://192.168.8.6:80/download/' + bookNameTxt,
				success: res => {
					/* 保存书本到本地 */
					this.saveBookLocal(res.tempFilePath, bookNameTxt);
				},
				fail: res => {
					console.log('下载失败');
				}
			});
		}
	},
	onLoad(e) {
		this.bookName = e.bookName;
	},
	onReady() {
		/* 初始化时判断书本有没有加入到书架 */
		this.hasBook();
	}
};
</script>

<style lang="scss" scoped>
.book_detial {
	height: 100%;
	width: 100%;
	/* #ifdef APP-PLUS */
	// padding-top: 50rpx;
	/* #endif */
	.nav_bar {
		position: fixed;
		z-index: 99;
		padding-top: 50rpx;
		background-color: #fff;
	}
	.main {
		padding: 100rpx 25rpx 0;
	}
	.book_introduction_box {
		padding: 80rpx 70rpx;
		.book_img {
			float: left;
			width: 180rpx;
			height: 240rpx;
			border-radius: 10rpx;
			box-shadow: 4rpx 4rpx 8rpx 4rpx #d4d4d4;
		}
		.book_detial_left_box {
			float: left;
			margin-left: 36rpx;
			.book_name {
				font-size: 40rpx;
			}
			.book_author {
				background-image: -webkit-linear-gradient(bottom, #f18017, #feab12);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			.book_score {
				color: #999999;
				height: 106rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.Book_comment_num {
					color: #999999;
					margin-top: -10rpx;
					text-indent: 1em;
				}
			}
			.book_price {
				color: #999;
			}
		}
	}
	.paragraph_text_box {
		.paragraph_headings {
			font-size: 36rpx;
			color: #333;
		}
		.paragraph_text {
			font-size: 28rpx;
			color: #999;
		}
	}
	.book_review {
		margin-top: 30rpx;
		.paragraph_headings {
			font-size: 36rpx;
			color: #333;
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
			margin: 10rpx 24rpx 80px 10px;
			// padding : 30rpx 15px;
			box-shadow: 0 0 10rpx rgba($color: #000000, $alpha: 0.1);
			.recommend_user_img {
				display: block;
				width: 200rpx;
				height: 300rpx;
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
			.btn {
				display: block;
				font-size: 24rpx;
				color: #ffffff;
				text-align: center;
				padding: 10rpx 0;
				border-radius: 26rpx;
				background: -webkit-linear-gradient(top, #ffad12, #ef8a15);
			}
		}
	}
	.bottom_button_box {
		position: fixed;
		bottom: 0;
		display: flex;
		height: 100rpx;
		width: 100%;
		line-height: 100rpx;
		text-align: center;
		font-size: 32rpx;
		background-color: #fff;
		.add_bookshelf {
			flex: 1;
			text-align: center;
			background-image: -webkit-linear-gradient(bottom, #f18017, #feab12);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		.shop {
			flex: 1;
			color: #fff;
			background-image: -webkit-linear-gradient(bottom, #f17e17, #ffad12);
		}
	}
	.popup_content {
		padding: 20rpx;
		border-radius: 20rpx;
		font-size: 16px;
		background-color: #ffffff;
	}
}
</style>
