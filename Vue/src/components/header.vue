<template>
  <div>
    <header>
      <el-row>
        <el-col :offset="2" :span="5">
          <img src="../assets/school.png" style="height:80px">
        </el-col>
        <el-col :offset="1" :span="12">
          <img src="../assets/nist.png" style="height:40px">
          <img src="../assets/nistlittle.png" style="width:50%;height:30px;position:relative;left:30%">
        </el-col>
      </el-row>
    <el-row style="background:#11344E">
     <el-col :span="5">
       <div>
           <p>&nbsp;&nbsp;&nbsp;&nbsp;NIST</p>
        </div>
     </el-col>
     <el-col :span="12":offset="2">
          <el-menu :default-active="activeIndex" class="header" mode="horizontal" @select="handleSelect" :active-text-color="changecolor" style="background:#11344E;">
            <el-menu-item index="/"  style="background:#11344E;color:white">首页</el-menu-item>
            <el-menu-item index="/intro"  style="background:#11344E;color:white">中心介绍</el-menu-item>
            <el-menu-item index="/labs"  style="background:#11344E;color:white">组织机构</el-menu-item>
            <el-menu-item index="/tea"  style="background:#11344E;color:white">师资队伍</el-menu-item>
            <el-menu-item index="/projects"  style="background:#11344E;color:white">科研项目</el-menu-item>
            <el-menu-item index="/activities"  style="background:#11344E;color:white">中心活动</el-menu-item>
          </el-menu>

     </el-col>
     <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
   </el-row>
 </header>
</div>
</template>

<script>
export default {
  data () {
    return {
        activeIndex:'/',
        changecolor:"#0EBEFF"
    }
  },
  methods: {
    handleSelect(key, keyPath){
        switch(key){
            case '/':
              this.$router.push('/');
              this.changecolor="#0EBEFF"
              break;
            case '/tea':
              this.$router.push('/teachers');
              this.changecolor="pink";
              break;
            case '/intro':
                this.$router.push('/intro');
                this.changecolor="#ffd04b"
                break;
            case '/labs':
                this.$router.push('/labs');
                this.changecolor="#47CF73";
                break;
            case '/projects':
                this.$router.push('/projects');
                this.changecolor="#AE63E4";
                break;
            case '/activities':
                this.$router.push('/activities');
                this.changecolor="#FF6666";
                break;
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
	z-index: 1000;
  width:100%;
  position: absolute;
  top:0;
}
header p{
  font-family:Broadway;
  font-style:italic;
  color:#09668A;
  font-size: large;
}
header img{
  width:100%;
  height:100%
}
</style>
