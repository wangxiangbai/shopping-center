<template>
    <div>
        <div id="goods_list">
            <!--            商品列表-->
            <div class="goods" v-bind:key="index" v-for="(goods,index) in goods_list" @click="to_details(goods.Id)">
                <div class="goods_img_div">
                    <img class="goods_img" :src="goods.img_list_url">
                </div>
                <span><strong>{{goods.title}}</strong></span><br>
                <span style="color: rgb(255,55,0)"><strong>￥{{goods.price}}</strong></span>
                <span style="float: right" v-html="goods.mack"></span>
            </div>
        </div>
        <h5 v-if="goods_list.length===0">没有您要搜索的内容 <span @click="turn_to_back">返回</span></h5>
        <Turn_to_top></Turn_to_top>
    </div>
</template>

<script>
    import axios from 'axios'
    import Turn_to_top from "../components/turn_to_top";

    export default {
        name: "search",
        components: {Turn_to_top},
        data() {
            return {
                goods_list: []
            }
        },
        methods: {
            get_search_goods: function () {
                const self = this;
                axios.get('http://vebcoder.cn/api/search', {
                    params: {word: this.$route.query.word}
                }).then(
                    function (response) {
						console.log(response);
                        self.goods_list = response.data;
                    }
                );
            },
			// 返回上一级页面
            turn_to_back: function () {
                this.$router.back()
            },
			// 进入商品详情页面
			to_details: function(e) {
				this.$router.push('/details/'+e)
			}
        },
        mounted() {
            this.get_search_goods()
        },
        watch: {
            $route: function () {
                this.get_search_goods()
            }
        }
    }
</script>

<style scoped>
    #goods_list {
        width: 1200px;
        position: relative;
        top: 35px;
        margin: 0 auto;
        /*设置内容均匀显示*/
        display: flex;
        justify-content: space-around;
        /*超出一行就换行*/
        flex-wrap: wrap;
    }

    .goods {
        height: 270px;
        width: 215px;
    }

    .goods_img_div {
        width: 100%;
    }

    .goods_img {
        height: 200px;
        margin: 0 auto;
    }
	h5{
		text-align: center;
		position: relative;
		top: 300px;
	}
</style>