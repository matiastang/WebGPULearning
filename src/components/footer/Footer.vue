<!--
 * @Author: your name
 * @Date: 2021-11-03 18:49:04
 * @LastEditTime: 2021-12-29 11:33:38
 * @LastEditors: matiastang
 * @Description: In User Settings Edit
 * @FilePath: /datumwealth-front-scaffold/src/components/footer/Footer.vue
-->
<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-data-source">
                    <div class="footer-title">数据来源</div>
                    <div
                        v-for="item in dataSource"
                        :key="item.title"
                        :class="['footer-text', { 'footer-text-url': item.url !== undefined }]"
                        @click="openAction(item)"
                    >
                        {{ item.title }}
                    </div>
                </div>
                <div class="footer-help-center">
                    <div class="footer-title">帮助中心</div>
                    <div
                        v-for="item in helpCenter"
                        :key="item.title"
                        :class="['footer-text', { 'footer-text-url': item.url !== undefined }]"
                        @click="footerAction(item)"
                    >
                        {{ item.title }}
                    </div>
                </div>
                <div class="footer-about-us">
                    <div class="footer-title">关于我们</div>
                    <div
                        v-for="item in aboutUs"
                        :key="item.title"
                        :class="['footer-text', { 'footer-text-url': item.url !== undefined }]"
                        @click="footerAction(item)"
                    >
                        {{ item.title }}
                    </div>
                </div>
                <div class="footer-contact footer-last-content">
                    <div class="footer-title">联系方式</div>
                    <div v-for="item in contact" :key="item.title" class="footer-text">
                        {{ item.title }}
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-title">
                    Copyright © 成都西筹金融科技有限公司 All Rights Reserved.
                </div>
                <div class="footer-bottom-text">
                    <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
                        蜀ICP备2021002963号-3</a
                    >
                </div>
                <div class="footer-bottom-beian">
                    <a
                        class="footer-bottom-beian-a"
                        target="_blank"
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51019002004363"
                        style="
                            display: inline-block;
                            text-decoration: none;
                            height: 20px;
                            line-height: 20px;
                        "
                        ><img src="static/footer/beian.png" style="float: left" />
                        <p class="footer-bottom-beian-text">川公网安备 51019002004363号</p></a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { FooterData } from './footer'

const route = useRoute()
const router = useRouter()
const dataSource = reactive([
    {
        title: '西筹金融科技',
        url: 'https://www.datumwealth.com',
    },
    {
        title: '况客科技',
        url: 'https://www.qutke.com',
    },
    {
        title: '汇迪投资',
        url: 'http://www.hdinvesting.cn',
    },
])
const helpCenter = reactive([
    {
        title: '登陆注册',
        url: '/help/login',
    },
    {
        title: '测试流程',
        url: '/help/test',
    },
    {
        title: '支付方式',
        url: '/help/pay',
    },
    {
        title: '常见问题',
        url: '/help/issue',
    },
])
const aboutUs = reactive([
    {
        title: '关于我们',
        url: '/about/aboutUs',
    },
    {
        title: '用户协议',
        url: '/about/agreement',
    },
    {
        title: '隐私政策',
        url: '/about/copyright',
    },
    {
        title: '认证服务协议',
        url: '/about/authProtocol',
    },
    {
        title: '意见反馈',
        url: '/about/feedback',
    },
])
const contact = reactive([
    {
        title: '联系电话：010-85794515',
    },
    {
        title: '服务时间：周一至周五 9:00-18:00',
    },
    {
        title: '电子邮箱：service@datumwealth.com',
    },
    {
        title: '工作地址：',
    },
    {
        title: '北京：北京市朝阳区关东店北街1号国安大厦19层',
    },
    {
        title: '成都：成都市高新区天府大道北段1677号交子金融科技中心B座306 ',
    },
])
const openAction = (data: FooterData) => {
    window.open(data.url)
}
/**
 * 点击跳转
 */
const footerAction = (data: FooterData) => {
    if (data.url && !route.path.startsWith(data.url)) {
        router.push({
            path: data.url,
        })
    }
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    min-height: 412px;
    background: #281d19;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer-content {
        width: 100%;
        box-sizing: border-box;
        height: 100%;
        padding: 20px calc(50% - 712px) 30px calc(50% - 712px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .footer-top {
            width: 100%;
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 32px;
            .footer-data-source,
            .footer-help-center,
            .footer-about-us,
            .footer-contact {
                min-width: 150px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                .footer-title {
                    @include defaultFontMedium;
                    width: 100%;
                    font-size: fontSize(14px);
                    color: $themeBgColor;
                    line-height: 20px;
                    margin-bottom: 24px;
                }
                .footer-text {
                    @include defaultFontMedium;
                    @include fontWeight;
                    font-size: fontSize(12px);
                    color: $themeBgColor;
                    line-height: 20px;
                    margin-bottom: 8px;
                    opacity: 0.8;
                    transition: all ease-in-out 200ms;
                }
                .footer-text:hover {
                    font-size: fontSize(14px);
                }
                .footer-text-url {
                    cursor: pointer;
                }
            }
            .footer-last-content {
                min-width: 400px;
                .footer-text:hover {
                    font-size: fontSize(12px);
                }
            }
        }
        .footer-bottom {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-top: 1px solid rgba($color: $themeBgColor, $alpha: 0.2);
            padding-top: 23px;
            opacity: 0.6;
            .footer-bottom-title {
                @include defaultFontMedium;
                font-size: fontSize(12px);
                color: $themeBgColor;
                line-height: 17px;
            }
            .footer-bottom-text {
                @include defaultFontMedium;
                margin-top: 8px;
                font-size: fontSize(12px);
                color: $themeBgColor;
                line-height: 17px;
                a {
                    color: inherit;
                    text-decoration: none;
                }
            }
            .footer-bottom-beian {
                margin-top: 8px;
                .footer-bottom-beian-a {
                    .footer-bottom-beian-text {
                        float: left;
                        font-size: fontSize(12px);
                        color: $themeBgColor;
                        height: 20px;
                        line-height: 20px;
                        margin: 0px 0px 0px 5px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1500px) {
    .footer {
        .footer-content {
            padding: 20px 30px 30px 30px;
        }
    }
}
</style>
