<!--
 * @Author: matiastang
 * @Date: 2021-11-11 16:42:28
 * @LastEditors: matiastang
 * @LastEditTime: 2021-11-17 16:59:28
 * @FilePath: /datumwealth-openalpha-front/src/components/menu/Menu.vue
 * @Description: 个人中心-折叠导航
-->
<template>
    <div class="menu">
        <el-collapse class="menu-collapse" v-model="activeNames">
            <el-collapse-item
                v-for="menuItem in menuList"
                :key="menuItem.title"
                class="menu-collapse-item"
                :title="menuItem.title"
                :name="menuItem.name"
            >
                <div
                    v-for="item in menuItem.children"
                    :key="item.title"
                    class="menu-item defaultFont flexRowCenter"
                    @click="pushAction(item.path)"
                    :style="{ background: item.selected ? '#d65928' : '#1c1614' }"
                >
                    {{ item.title }}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from 'vue'
import menuData from './menu'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    name: 'Menu',
    setup() {
        let router = useRouter()
        let route = useRoute()
        let menuList = reactive(menuData)
        let activeNames = ref('')
        // 下级页面选中
        const childrenSelected = (children: { path: string }[], path: string) => {
            for (let i = 0; i < children.length; i++) {
                if (path.startsWith(children[i].path)) {
                    return true
                }
            }
            return false
        }
        // 设置选择项
        const initSelected = (path: string) => {
            for (let i = 0; i < menuList.length; i++) {
                let children = menuList[i].children
                for (let j = 0; j < children.length; j++) {
                    if (children[j].path === path || childrenSelected(children[j].children, path)) {
                        children[j].selected = true
                        if (activeNames.value !== menuList[i].name) {
                            activeNames.value = menuList[i].name
                        }
                    } else {
                        children[j].selected = false
                    }
                }
            }
        }
        // 检测路由变化时更新menu选中状态
        watchEffect(() => initSelected(route.path))
        /**
         * 跳转
         */
        const pushAction = (path: string) => {
            router.push({
                path,
            })
        }
        return {
            menuList,
            activeNames,
            pushAction,
        }
    },
})
</script>

<style lang="scss" scoped>
.menu {
    .menu-collapse {
        .menu-collapse-item {
            ::v-deep(.el-collapse-item__header) {
                width: 100%;
                height: 66px;
                font-size: fontSize(16px);
                color: $themeBgColor;
                line-height: 24px;
                background: #1c1614;
                justify-content: flex-start;
                padding-left: 42px;
                box-sizing: border-box;
                cursor: pointer;
                border-bottom: 0px;
            }
            ::v-deep(.is-active) {
                background: #2e2725;
            }
            ::v-deep(.el-collapse-item__content) {
                padding: 0px;
            }
            ::v-deep(.el-collapse-item__wrap) {
                border-bottom: 0px;
            }
            ::v-deep(.menu-item) {
                width: 100%;
                height: 66px;
                font-size: fontSize(16px);
                color: $themeBgColor;
                line-height: 24px;
                background: #1c1614;
                justify-content: flex-start;
                padding-left: 42px;
                box-sizing: border-box;
                cursor: pointer;
            }
        }
    }
}
</style>
