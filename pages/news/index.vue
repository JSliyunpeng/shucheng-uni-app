<template>
	<view class="content">
		<cl-tabs
			:tab-bars="tabBars"
			:tab-index="tabCurrentIndex"
			@tabChange="tabChange"
			aniType="movExtend"
			type="hang"
			:scale="1.3"
			sliderColor="#FF6F00"
			textColor="#dddddd"
			selectColor="#333333"
			ref="tabs2"
			class="tabs position_f"
			:sliderMargin="0"
		></cl-tabs>

		<swiper class="swiper" :duration="300" @transition="transition" @change="changeCurrent" :current="tabCurrentIndex" @animationfinish="animationfinish">
			<swiper-item>
				<scroll-view @scrolltolower="scrolltolower" :scroll-y="modalName == null" class="page h5_custom_padding" :class="modalName != null ? 'show' : ''">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<view class="text-grey">凯尔</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										<text class="cuIcon-infofill text-red  margin-right-xs"></text>
										我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">
									<view class="text-cut">瓦洛兰之盾-塔里克</view>
									<view class="cu-tag round bg-orange sm">战士</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
						<view class="cu-item ">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-pink"><view class="text-cut">莫甘娜</view></view>
								<view class="text-gray text-sm flex"><view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item grayscale">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
							<view class="content">
								<view>
									<view class="text-cut">伊泽瑞尔</view>
									<view class="cu-tag round bg-orange sm">断开连接...</view>
								</view>
								<view class="text-gray text-sm flex"><view class="text-cut">等我回来一个打十个</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item cur">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
								<view class="cu-tag badge"></view>
							</view>
							<view class="content">
								<view>
									<view class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</view>
									<view class="cu-tag round bg-orange sm">6人</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										伊泽瑞尔：
										<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
										传送中...
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<view class="text-grey">凯尔</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										<text class="cuIcon-infofill text-red  margin-right-xs"></text>
										我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">
									<view class="text-cut">瓦洛兰之盾-塔里克</view>
									<view class="cu-tag round bg-orange sm">战士</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
						<view class="cu-item ">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
							<view class="content">
								<view class="text-pink"><view class="text-cut">莫甘娜</view></view>
								<view class="text-gray text-sm flex"><view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item grayscale">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
							<view class="content">
								<view>
									<view class="text-cut">伊泽瑞尔</view>
									<view class="cu-tag round bg-orange sm">断开连接...</view>
								</view>
								<view class="text-gray text-sm flex"><view class="text-cut">等我回来一个打十个</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item cur">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
								<view class="cu-tag badge"></view>
							</view>
							<view class="content">
								<view>
									<view class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</view>
									<view class="cu-tag round bg-orange sm">6人</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										伊泽瑞尔：
										<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
										传送中...
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<view class="text-grey">凯尔</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										<text class="cuIcon-infofill text-red  margin-right-xs"></text>
										我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">
									<view class="text-cut">瓦洛兰之盾-塔里克</view>
									<view class="cu-tag round bg-orange sm">战士</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
						<view class="cu-item ">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
							<view class="content">
								<view class="text-pink"><view class="text-cut">莫甘娜</view></view>
								<view class="text-gray text-sm flex"><view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item grayscale">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
							<view class="content">
								<view>
									<view class="text-cut">伊泽瑞尔</view>
									<view class="cu-tag round bg-orange sm">断开连接...</view>
								</view>
								<view class="text-gray text-sm flex"><view class="text-cut">等我回来一个打十个</view></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item cur">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
								<view class="cu-tag badge"></view>
							</view>
							<view class="content">
								<view>
									<view class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</view>
									<view class="cu-tag round bg-orange sm">6人</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										伊泽瑞尔：
										<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
										传送中...
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view @scrolltolower="scrolltolower" :scroll-y="modalName == null" class="page h5_custom_padding" :class="modalName != null ? 'show' : ''">
					<!-- 标题卡片模式 -->
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
							<image class="card_book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"> </text> 9999+
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
							<image class="card_book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"> </text> 9999+
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
							<image class="card_book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"> </text> 9999+
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
							<image class="card_book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"> </text> 9999+
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
							<image class="card_book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"> </text> 9999+
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
							<image class="card_book_img" src="../../static/images/day_Selected_img_02.jpg" mode=""></image>
							<view class="card_book_left">
								<view class="card_book_name">我是一只</view>
								<view class="card_book_author">那你 著</view>
							</view>
						</view>
						<template v-slot:footer>
							<view class="flex  p-xs mb-sm justify-center">
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-appreciate text_true"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-comment"> </text> 9999+
									</view>
								</view>
								<view class="flex-sub padding-sm">
									<view class="card_btn">
										<text class="cuIcon-share"> </text> 9999+
									</view>
								</view>
							</view>
						</template>
					</uni-card>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import clTabs from '@/components/cl-tabs/cl-tabs.vue';
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	components: {
		clTabs,
		uniCard
	},
	data() {
		return {
			show_text: '查看全部',
			card_text_show: false,
			tabBars: ['消息', '动态'],
			tabCurrentIndex: -1,
			sysWidth: 0,
			source: 'touch',
			fristTouch: false,
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				},
				{
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				},
				{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				},
				{
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				},
				{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				},
				{
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				},
				{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				},
				{
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				},
				{
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				},
				{
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}
			],
			modalName: null,
			gridCol: 3,
			gridBorder: false,
			menuBorder: false,
			menuArrow: false,
			menuCard: false,
			skin: false,
			listTouchStart: 0,
			listTouchDirection: null
		};
	},
	onLoad() {
		this.sysWidth = uni.getSystemInfoSync().screenWidth;
		//#ifndef H5
		this.fristTouch = true;
		//#endif
	},
	mounted() {
		this.tabCurrentIndex = 1;
	},
	methods: {
		scrolltolower() {
			console.log('111111111111');
		},
		tabChange(e) {
			this.tabCurrentIndex = e;
			console.log(e);
		},
		changeCurrent(e) {
			this.source = e.detail.source;
		},
		transition(e) {
			if (this.source == '') {
			} else {
				if (this.fristTouch) {
					this.$refs.tabs2.move(e.detail.dx - this.tabCurrentIndex * this.sysWidth);
				} else {
					this.$refs.tabs2.move(e.detail.dx);
				}
			}
		},
		animationfinish(e) {
			this.fristTouch = false;
			this.source = 'touch';
			this.tabCurrentIndex = e.detail.current;
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		Gridchange(e) {
			this.gridCol = e.detail.value;
		},
		Gridswitch(e) {
			this.gridBorder = e.detail.value;
		},
		MenuBorder(e) {
			this.menuBorder = e.detail.value;
		},
		MenuArrow(e) {
			this.menuArrow = e.detail.value;
		},
		MenuCard(e) {
			this.menuCard = e.detail.value;
		},
		SwitchSex(e) {
			this.skin = e.detail.value;
		},
		// ListTouch触摸开始
		ListTouchStart(e) {
			this.listTouchStart = e.touches[0].pageX;
		},
		// ListTouch计算方向
		ListTouchMove(e) {
			this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
		},
		// ListTouch计算滚动
		ListTouchEnd(e) {
			if (this.listTouchDirection == 'left') {
				this.modalName = e.currentTarget.dataset.target;
			} else {
				this.modalName = null;
			}
			this.listTouchDirection = null;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	.position_f {
		position: fixed;
		z-index: 999;
		background-color: #ffffff;
	}
}
.swiper {
	height: 100%;
	background-color: #ffffff;
	.page {
		padding-top: 78rpx;
		background-color: #e6e6e6;
	}
	.card_text_hidden {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-left: 70rpx;
	}
	.card_text_show {
		margin-left: 70rpx;
	}
	.uni-card{
		border: none;
		margin-top: 10rpx;
		// .uni-card__header {
		// 	border: none;
		// 	border-bottom: none!important;
		// }
		.uni-card__content {
			border: none;
		}
		.uni-card__footer{
			border: none;
			border-top: 0!important;
		}
	}
	.show_text_all {
		text-align: right;
		background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.card_book {
		margin-left: 70rpx;
		margin-top: 30rpx;
		background-color: #f9f8f8;
		border-radius: 20rpx;
		padding: 30rpx 25rpx;
		.card_book_img {
			display: block;
			float: left;
			width: 70rpx;
			height: 100rpx;
			border-radius: 10rpx;
		}
		.card_book_left {
			float: left;
			padding-left: 24rpx;
			.card_book_name {
				font-size: 34rpx;
				color: #333333;
			}
			.card_book_author {
			}
		}
	}
	.card_btn {
		text-align: center;
		text {
			margin-right: 6rpx;
			font-size: 36rpx;
		}
		.text_true {
			background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
}
.page {
	height: 100vh;
	width: 100vw;
}
.page.show {
	overflow: hidden;
}
.switch-sex::after {
	content: '\e716';
}
.switch-sex::before {
	content: '\e7a9';
}
.switch-music::after {
	content: '\e66a';
}
.switch-music::before {
	content: '\e6db';
}
</style>
