<template>
        <div>
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div>
                        <el-menu default-active="/" class="el-menu-vertical-demo"  @select="handleSelect">
                            <el-menu-item index="/"><i class="el-icon-message"></i>网络攻防技术研究室</el-menu-item>
                            <el-menu-item index="/virtual"><i class="el-icon-setting"></i>虚拟化技术研究室</el-menu-item>
                            <el-menu-item index="/domains"><i class="el-icon-setting"></i>域名体系安全技术研究室</el-menu-item>
                            <el-menu-item index="/yun"><i class="el-icon-menu"></i>云计算技术研究室</el-menu-item>
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
                        this.$router.push('/labs');
                        break;
                    case '/yun':
                        this.$router.push('/labs/yun')
                        break;
                    case '/virtual':
                        this.$router.push('/labs/virtual')
                        break;
                   case '/domains':
                       this.$router.push('/labs/domains')
                       break;
                }
            },
        },
    }
</script>
<style>

</style>
