<template>
    <div id="home">
    <div class="header"></div>
    <el-container>
        <el-aside>
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo"
                     @open="handleOpen"
                     @close="handleClose">
                <el-menu-item index="1"><router-link to="/dashboard">仪表盘</router-link></el-menu-item>
                <el-menu-item index="3">项目配置</el-menu-item>
                <el-submenu index="4">
                    <template slot="title">开放平台</template>
                    <el-menu-item index="4-1">应用管理</el-menu-item>
                    <el-menu-item index="4-2">项目管理</el-menu-item>
                    <el-menu-item index="4-3">查看日志</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main style="background-color: aliceblue">
            <router-view></router-view>
        </el-main>
    </el-container>
    </div>
</template>
<style>
    html,body,#app,#home,.el-container{height: 100%;}
    #home{}
    .el-container{position: relative; top: -60px;padding-top: 60px;}
</style>
<style scoped>
    .header{height: 60px;background-color: #408be8;}
    .avatar{ height: 60px;background-color: aquamarine;}
    .router-link-active{    text-decoration: none;color: #303133;}

</style>

<script>

export default {
    name: 'home',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }

}
</script>
