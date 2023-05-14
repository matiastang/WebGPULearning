<!--
 * @Author: your name
 * @Date: 2021-10-15 15:54:50
 * @LastEditTime: 2023-05-14 17:11:00
 * @LastEditors: tangdaoyong
 * @Description: In User Settings Edit
 * @FilePath: /datumwealth-front-scaffold/src/App.vue
-->
<template>
    <!-- <div class="title-test">样式测试</div>
    <div id="title-red">样式测试</div> -->
    <!-- 路由出口 -->
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import classes from '@/common/cssModules/index.module.css'

export default defineComponent({
    data() {
        return {}
    },
    setup() {
        onMounted(() => {
            const dom = document.getElementById('title-red')
            if (dom) {
                dom.className = classes.red
            }
        })
        return {}
    },
})
</script>

<style lang="less" scoped>
.title-test {
    color: #themeColors[themecolor];
}
</style>
