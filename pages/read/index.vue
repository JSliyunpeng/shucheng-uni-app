<template>
	<view class="read">
		<view class="">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</view>
		<rich-text :space="nbsp" :nodes="text1"></rich-text>
	</view>
</template>

<script>
export default {
	data() {
		return { text1: null };
	},
	methods: {
		initBook() {
			/* 读取存放书本文件夹的所有文件 */
			plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, fs => {
				fs.root.getFile(
					'红楼梦.txt',
					{ create: false },
					fileEntry => {
						fileEntry.file(file => {
							var fileReader = new plus.io.FileReader();
							fileReader.readAsText(file, 'GBK');
							fileReader.onloadend = evt => {
								// console.log(evt.target.result);
								this.text1 = evt.target.result;
								console.log(this.text1)
							};
						});
					},
					function(err) {
						console.log('err', err);
					}
				);
			});
		}
	},
	onLoad(e) {
		console.log(e.bookName);
		this.bookName = e.bookName;
	},
	onReady() {
		this.initBook()
	}
};
</script>

<style lang="scss" scoped>
	.read {
		padding-top: 50rpx;
		background-color: skyblue;
	}
</style>
