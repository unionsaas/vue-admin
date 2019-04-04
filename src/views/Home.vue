<template>
    <div id="home">
    <div class="header">
        <div class="el-menu-header-left"><img src="../assets/umqlogo.png" class="logo"></div>
        <el-menu class="el-menu-header-right" mode="horizontal" @select="handleSelect"  @open="handleOpen" background-color="#408be8" text-color="#fff" active-text-color="#ffd04b">
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
        <el-aside width="">
            <el-menu :default-active="$route.path" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse" class="el-menu-vertical">
                <el-menu-item index="aside-btn" class="aside-btn"><i class="el-icon-menu"></i> </el-menu-item>
                <el-menu-item index="/dashboard"><i class="el-icon-menu"></i> <span>仪表盘</span></el-menu-item>
                <el-menu-item index="3"><i class="el-icon-menu"></i> <span>项目配置</span></el-menu-item>
                <el-submenu index="/">
                    <template slot="title"><i class="el-icon-menu"></i> <span>开发平台</span></template>
                    <el-menu-item index="/appinfo">表格页面</el-menu-item>
                    <el-menu-item index="4-2">项目管理</el-menu-item>
                    <el-menu-item index="4-3">查看日志</el-menu-item>
                </el-submenu>
                <el-submenu index="">
                    <template slot="title"><i class="el-icon-menu"></i> <span>计划任务</span></template>
                    <el-menu-item index="/appinfo">任务管理</el-menu-item>
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
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 200px;
    }

    /* #408be8*/ /*#545c64*/
    .header{height: 60px;background-color:#408be8;position: relative;z-index: 99999;}
    .el-menu-header-left{ float: left;}
    .el-menu-header-right{ float: right; }
    .avatar{ height: 60px;background-color: aquamarine;}
    .content{height: 100%; margin: -20px;overflow: hidden;overflow-y: auto;}
    .view{margin: 20px;}

    .aside-btn{ height: 40px;line-height: 40px;text-align: center; background: #eff4f9;color:#606266; }

    .logo{height: 40px;width: 100px;margin: 10px 0 0 20px;}

</style>

<script>

export default {
    name: 'home',
    data() {
        return {
            isCollapse:false, //侧边收缩
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            if(key=='aside-btn'){
                this.isCollapse = !this.isCollapse
                return;
            }
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
