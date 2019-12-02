<template>
    <div class="top-nav">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">任务管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="4"><a href="https://github.com/alvn1213/vue-demo" target="_blank">Demo地址</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="scss">
.top-nav{

}
</style>