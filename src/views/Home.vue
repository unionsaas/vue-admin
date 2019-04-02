<template>
    <div id="home">
    <div class="header"></div>
    <el-container>
        <el-aside width="200px">
            <el-menu :default-active="$route.path" @select="handleSelect"
                     @open="handleOpen"
                     @close="handleClose">
                <el-menu-item index="/dashboard">仪表盘</el-menu-item>
                <el-menu-item index="3">项目配置</el-menu-item>
                <el-submenu index="/">
                    <template slot="title">开放平台</template>
                    <el-menu-item index="/appinfo">应用管理</el-menu-item>
                    <el-menu-item index="4-2">项目管理</el-menu-item>
                    <el-menu-item index="4-3">查看日志</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="content">
                <div class="view"><router-view></router-view></div>
            </div>

        </el-main>
    </el-container>
    </div>
</template>
<style>
    html,body,#app,#home,.el-container,.el-menu{height: 100%;}
    .el-container{position: relative; top: -60px;padding-top: 60px;}
    .el-breadcrumb{
        background-color: #eff4f9;
        height: 40px;
        line-height: 40px;
        margin: -20px -20px 20px -20px;
        padding-left: 20px;
    }
</style>

<style scoped>
    .header{height: 60px;background-color: #408be8;}
    .avatar{ height: 60px;background-color: aquamarine;}
    .content{height: 100%; margin: -20px;overflow: hidden;overflow-y: auto;}
    .view{margin: 20px;}
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
            console.log('handleSelect', key, keyPath)
            this.$router.push(key)
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
