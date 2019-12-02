<template>
    <div class="team-task">
        <TopNav></TopNav>
        <div class="team-task-info">
            <div class="team-task-left-nav">
                <LeftNav></LeftNav>
            </div>
            <div class="team-task-workspace">
                  <span>团队任务</span>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
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
          date: '2016-05-02',
          name: '王小虎',
          address: '这个是开发任务'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '这个是测试任务'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '这个是项目管理任务'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '会议：项目评审'
        }]
      }
    }
}
</script>

<style lang="scss">
.team-task {
    .team-task-info {
        display: flex;
        flex-direction: row;
        .team-task-left-nav {}
        .team-task-workspace {
            flex:1
        }
    }
}
</style>