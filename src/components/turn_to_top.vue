<template>
    <div>
        <div id="turn_to_top" @click="turn_to_top">返回<br>顶部</div>
    </div>
</template>

<script>
    export default {
        name: "turn_to_top",
        methods: {
            turn_to_top: function () {
                window.scrollTo(1, 0);
                document.getElementById('turn_to_top').style.display = "none"
            },
        },
        mounted() {
            window.addEventListener("scroll", function () {
                //为了保证兼容性，这里取三个值，哪个有值取哪一个
                //scrollTop就是触发滚轮事件时滚轮的已经滚过的高度
                var scrollTop = Number(document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset);
                //   显示返回底部
                if (scrollTop >= 700) {
                    document.getElementById('turn_to_top').style.display = "initial"
                } else {
                    document.getElementById('turn_to_top').style.display = "none";
                }
            })

        }
    }
</script>

<style scoped>
    #turn_to_top {
        display: none;
        position: fixed;
        right: 100px;
        bottom: 100px;
        background: purple;
        border-radius: 5px;
        padding: 10px;
        text-align: center;  
        line-height: 20px;     
        color: #fff;
        width: 46px;
        /*-webkit-transition: all .5s;*/
        /*transition: all .5s;*/
        /*cursor: pointer;*/
        /*透明度，0~1，越小越透明 */
        opacity: 0.8;
    }
</style>