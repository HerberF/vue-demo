<template>
    <div class="my-task">
        <TopNav></TopNav>
        <div class="my-task-info">
            <div class="my-task-left-nav">
                <LeftNav></LeftNav>
            </div>
            <div class="my-task-workspace">
                <span>我的任务</span>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="优先级" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="任务">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '../components/common/top-nav'
import LeftNav from '../components/common/left-nav'
export default {
    //添加组件
    components: {
        TopNav,
        LeftNav
    },
    data() {
      return {
        tableData: [{
          date: '2019-05-02',
          name: '优先处理',
          address: '这个是开发任务'
        }, {
          date: '2019-05-04',
          name: '十万火急',
          address: '这个是测试任务'
        }, {
          date: '2019-05-01',
          name: '再看看吧',
          address: '这个是项目管理任务'
        }, {
          date: '2019-05-03',
          name: '优先处理',
          address: '会议：项目评审'
        }]
      }
    }
}
</script>

<style lang="scss">
.my-task {
    .my-task-info {
        display: flex;
        flex-direction: row;
        .my-task-left-nav {}
        .my-task-workspace {
            flex:1
        }
    }
}
</style>