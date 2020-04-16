<template>
    <div>
        <Goods_types></Goods_types>
        <div id="goods_type_list">

        </div>
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
        <Turn_to_top></Turn_to_top>
    </div>

</template>

<script>
    import axios from 'axios'
    import Goods_types from "../components/goods_types";
    import Turn_to_top from "../components/turn_to_top";
    export default {
        name: "list",
        components: {Turn_to_top, Goods_types},
        data(){
          return{
              goods_list:[]
          }
        },
        methods:{
            get_goods_list: function (e) {
				console.log(e);
                const self=this;
                axios.get('http://vebcoder.cn/api/goodList', {
                    params: e
                }).then(
                    function (response) {
                        // console.log(response.data)
                        self.goods_list=response.data;
                        // this.$forceUpdate()
                    }
                )
            },
			to_details: function(e) {
				console.log(e);
				this.$router.push('/details/'+e)
			}
        },
        mounted() {
            // console.log(this.$route.params.type)

            this.get_goods_list({"type_one":this.$route.params.type})
        },
        watch:{
            $route:function () {
                this.get_goods_list({"type_one":this.$route.params.type})
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
</style>