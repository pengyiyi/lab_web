<template>
  <footer>
    <div class="left">
      <span>地址:&nbsp;&nbsp;山东威海市文化西路2号哈工大 （威海）研究院2号楼</span> &nbsp;
      <span>邮编:&nbsp;&nbsp;&nbsp;264209</span>&nbsp;
      <span>联系电话:&nbsp;&nbsp;&nbsp;86-0631-5686152</span><br/>
    </div>
    <div class="right">
      <div class="img">
        <img src="../assets/labs/gongfang.png" style="position: relative; left:85%;">
        <img src="../assets/labs/yuming.png" style="position: relative; left:69%;">
        <img src="../assets/labs/yunjisuan.png" style="position:relative;left:53%;">
        <img src="../assets/labs/xunihua.png" style="position:relative; left:37%;">
        <br/>
        <span>&nbsp;©云计算实验室前端组</span>
     </div>
    </div>
  </footer>
</template>

<script>

</script>

<style>
footer{
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
  width:100%;
  z-index: 1000;
  color:white;
}
.left{
  float:left;
  width: 60%;
  font-size: 14px;
}
.right{
  float:left;
  width: 40%;
  font-size: 14px;
}
.left span{
  position: relative;
  top:30px;
  left:5%
}
.right img{
  height:40%;
  width:10%;
}
.img span{
  position:relative;
  bottom:0%;
  left:70%;
}
.img{
  height:100%;
  position:relative;
  right:15%;
}
</style>
