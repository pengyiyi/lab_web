<template>
  <div id="app">
    <Header></Header>
    <div class="main">
    <router-view/>
   </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/footer.vue'
export default {
      components: {Header,Footer},
      data(){
        return{

        }
      },
}
</script>

<style>
html,body{
  margin:0;
  padding: 0;
/*  background-color:#191919;*/
  background:url('./assets/background.jpg') repeat 0px 0px;
  color:white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
  margin-top: 150px;
  min-height: 400px
}
</style>
