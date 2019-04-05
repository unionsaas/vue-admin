<template>
    <div class="app">
        <div class="search">
            <h1><i class="el-icon-search"></i>搜索</h1>
            <div class="s">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="审批人">
                                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="活动区域">
                                <el-select v-model="formInline.region" placeholder="活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="申请编号">
                                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
        <div class="operate">
            <el-row>
                <el-button icon="el-icon-plus" @click="$router.push('/taskAdd')">新增</el-button><el-button>审批</el-button><el-button>批量更新</el-button><el-button>导出Excel</el-button>
                <div style="float: right;">
                <el-button icon="el-icon-search">搜索</el-button>
                </div>
            </el-row>
        </div>
        <div class="table">
            <el-table
                    :data="tableData"
                    stripe
                    ref="multipleTable"
                    style="width: 100%"  :default-sort = "{prop: 'date', order: 'descending'}">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180" sortable>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="130">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<style scoped>
    .search{border: solid 1px #eee;margin-bottom: 15px;}
    .search h1{margin:0;background-color: #f2f6fc;
        font-size: 14px;
        color: #909399;
        height: 40px;
        line-height: 40px;
        font-weight: 700;
        padding-left: 15px;}
    .search h1 i{margin-right: 10px;}
    .search .s{padding: 22px 15px 0 15px;}
    .table{margin: 15px 0;border: solid 1px #eee;}
    .pagination{width: 420px;margin: 20px auto;}

</style>


<script>
export default {
    name: 'AppInfo',
    data() {
        return {
            formInline: {
                user: '',
                region: ''
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods:{
        handleClick(row) {
            console.log(row)
        },
        onSubmit() {
            console.log('submit!')
        },
        addBtnClick(){
            this.$router.push('/taskAdd')
        }
    }
}
</script>
