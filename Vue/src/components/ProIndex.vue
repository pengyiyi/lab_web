<template>
        <div>
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div>
                        <el-menu default-active="/" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
                            <el-menu-item index="/"><i class="el-icon-setting"></i>科研项目</el-menu-item>
                            <el-menu-item index="/insearch"><i class="el-icon-message"></i>科学研究</el-menu-item>
                            <el-menu-item index="/cooperate"><i class="el-icon-menu"></i>合作伙伴</el-menu-item>
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
                        this.$router.push('/projects');
                        break;
                    case '/cooperate':
                        this.$router.push('/projects/cooperate')
                        break;
                    case '/insearch':
                        this.$router.push('/projects/insearch')
                        break;
                }
            },
        },
    }
</script>
<style>

</style>
