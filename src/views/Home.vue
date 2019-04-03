<template>
    <div id="home">
    <div class="header">
        <el-menu class="el-menu-header-left" mode="horizontal" @select="handleSelect"  @open="handleOpen" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item><i class="el-icon-menu"></i></el-menu-item>
        </el-menu>
        <el-menu class="el-menu-header-right" mode="horizontal" @select="handleSelect"  @open="handleOpen" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-menu-item index="4">消息</el-menu-item>
            <el-menu-item index="3">费用</el-menu-item>
            <el-menu-item index="3">工单</el-menu-item>
            <el-menu-item index="5">个人中心</el-menu-item>
        </el-menu>
    </div>
    <el-container>
        <el-aside width="200px">
            <el-menu :default-active="$route.path" @select="handleSelect"
                     @open="handleOpen"
                     @close="handleClose">
                <el-menu-item index="/dashboard"><i class="el-icon-menu"></i> <span>仪表盘</span></el-menu-item>
                <el-menu-item index="3"><i class="el-icon-menu"></i> <span>项目配置</span></el-menu-item>
                <el-submenu index="/">
                    <template slot="title"><i class="el-icon-menu"></i> <span>开发平台</span></template>
                    <el-menu-item index="/appinfo">表格页面</el-menu-item>
                    <el-menu-item index="4-2">项目管理</el-menu-item>
                    <el-menu-item index="4-3">查看日志</el-menu-item>
                </el-submenu>
                <el-menu-item index="5"><i class="el-icon-setting"></i> <span>设置</span></el-menu-item>
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
    .el-container{position: relative; top: -60px;padding-top: 60px;z-index: 0;}
    .el-breadcrumb{
        background-color: #eff4f9;
        height: 40px;
        line-height: 40px;
        margin: -20px -20px 20px -20px;
        padding-left: 20px;
    }
</style>

<style scoped>
    /*修改EL默认样式*/
    .el-menu.el-menu--horizontal {
         border-bottom: none;
    }

    /* #408be8*/
    .header{height: 60px;background-color:#545c64;position: relative;z-index: 99999;}
    .el-menu-header-left{ float: left;}
    .el-menu-header-right{ float: right; }
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
