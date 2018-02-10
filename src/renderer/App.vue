<template>
  <div id="app" class="layout">
      <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
      </Layout>
  </div>
</template>

<script>
  import LandingPage from '@/components/LandingPage'

  export default {
    name: 'vue-music',
    components: {
      LandingPage
    }
  }
</script>

<style>
  /* CSS */
    .ivu-card-head{
        -webkit-app-region: drag
    }
  html, body {
      height: 100%;
  }

  #app{
      height: 100%;
  }
  body {
      /*border: 1px solid #000;*/
      /*box-sizing可以取消因为添加border而出现的滚动条*/
      box-sizing: border-box;

  }
  .layout-con{
      height: 100%;
      width: 100%;
  }
  .layout{
      position: relative;
      border-radius: 4px;
      overflow: hidden;
  }
</style>
