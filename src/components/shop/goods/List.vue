<template>
    <div>
        <!-- 面包屑导航 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
            </div>
        </div>
        <!-- 页面头部-分类列表轮播图 -->
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                                <!--此处声明下面可重复循环-->

                                <li v-for="item in goodsList.catelist" :key='item.id'>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>

                                            <span v-for="suitem in item.subcates" :key='suitem.id'>{{suitem.title}}&nbsp;&nbsp;</span>

                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <router-link to="" v-for="subitem in item.subcates" :key="subitem.id">{{ subitem.title }}&nbsp;</router-link>

                                            </dd>
                                        </dl>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <!--/类别菜单-->

                    <!--幻灯片 -轮播图  -->
                    <div class="left-705">
                        <el-carousel  height="340px" >
                            <el-carousel-item v-for="item in goodsList.sliderlist" :key="item.id">
                                <img :src="item.img_url" :alt="item.title"  height="100%" >
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->

                    <!-- 侧边栏-推荐商品列表 抽取为公共组件 -->
                    <app-adide :list="goodsList.toplist"></app-adide>

                </div>
            </div>
        </div>

        <!-- 页面主体 -商品列表预览 抽取为子组件-->
        <list-main></list-main>
    </div>
</template>

<script>
import appAdide from "./subcom/CommonAside.vue";
import listMain from "./subcom/ListMain.vue";
export default {
  components: {
      appAdide,
      listMain
  },
  data() {
    return {
      goodsList: {
        catelist: [],
        sliderlist: [],
        toplist: []
      }
    };
  },
  methods: {
    getGoodsList() {
      this.$http.get(this.$api.goodsTop).then(res => {
        if (res.data.status == 0) {
          this.goodsList = res.data.message;
        }
      });
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>

<style scoped>

</style>