<!--
 * @Author: tangdaoyong
 * @Date: 2023-05-14 16:48:44
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-05-14 17:38:27
 * @Description: HelloWebGPU
-->
<template>
    <div class="page" v-html="text"></div>
</template>
<script setup lang="ts">
// import { GPUSupportedLimits } from '@webgpu/types/dist'
import { ref, onMounted } from 'vue'

const text = ref('')

const initWebGPU = async () => {
    const gpu = navigator.gpu
    if (!gpu) {
        return 'Not support WebGPU'
    }
    const adapter = await gpu.requestAdapter()
    if (!adapter) {
        return 'No adapter found'
    }
    console.log(adapter)
    adapter.features.forEach((value) => {
        console.log(value)
    })
    let text = '<h1>Hello WebGPU</h1>'
    let i: keyof GPUSupportedLimits
    for (i in adapter.limits) text += `<p>${i}:${adapter.limits[i]}</p>`
    return text
}

onMounted(async () => {
    text.value = await initWebGPU()
})
</script>
<style lang="less" scoped>
.page {
    text-align: center;
    color: black;
}
</style>
