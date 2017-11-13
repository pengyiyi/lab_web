<template>
        <div>
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div>
                        <el-menu default-active="/" class="el-menu-vertical-demo"  @select="handleSelect">
                            <el-menu-item index="/"><i class="el-icon-message"></i>欢乐时光</el-menu-item>
                            <el-menu-item index="/daily"><i class="el-icon-menu"></i>中心纪实</el-menu-item>
                            <el-menu-item index="/competition"><i class="el-icon-setting"></i>各大赛事</el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <div style="margin-top:10px">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
</template>

<script>
export default {
        methods:{
            handleSelect(key, keyPath){
                switch(key){
                    case '/':
                        this.$router.push('/activities');
                        break;
                    case '/daily':
                        this.$router.push('/activities/daily')
                        break;
                    case '/competition':
                        this.$router.push('/activities/competition')
                        break;
                }
            },
        },
    }
</script>
<style>

</style>
