<template>
    <div>
        <el-menu default-active="/my-task" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="/my-task">
                <i class="el-icon-menu"></i>
                <span slot="title">我的任务</span>
            </el-menu-item>
            <el-menu-item index="/team-task">
                <i class="el-icon-setting"></i>
                <span slot="title">团队任务</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push(key);
        }
    }
}
</script>