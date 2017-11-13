<template>
        <div>
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div>
                        <el-menu default-active="/" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
                            <el-menu-item index="/"><i class="el-icon-message"></i>中心新闻</el-menu-item>
                            <el-menu-item index="/details"><i class="el-icon-menu"></i>新闻详情</el-menu-item>
                            <el-menu-item index="/notice"><i class="el-icon-setting"></i>通知</el-menu-item>
                            <el-menu-item index="/noticedetails"><i class="el-icon-setting"></i>通知详情</el-menu-item>
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
                        this.$router.push('/news');
                        break;
                    case '/details':
                        this.$router.push('/news/details')
                        break;
                    case '/notice':
                        this.$router.push('/news/notice')
                        break;
                    case '/noticedetails':
                        this.$router.push('/news/noticedetails')
                        break;
                }
            },
        },
    }
</script>
<style>

</style>
