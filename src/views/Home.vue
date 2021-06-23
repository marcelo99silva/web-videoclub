<template>
  <div class="home">
    <header><MenuBar/></header>

    <MenuBar2/>

    <div  class="filme"><FilmeHome/></div>
  </div>
</template>

<script>


export default {
  name: 'Home',

  components: {
    MenuBar: () => import("../components/MenuBar"),
    MenuBar2: () => import("../components/MenuBar2"),
    FilmeHome: () => import("../components/FilmeHome")
  },
  
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Bem Vindo | VideoClube';
      }
    },
  }
}
</script>

<style>

.home{
  min-height: 100vh;
  /* height: 100%; */
  background-color: rgb(221, 221, 221);
}

/* .filme{
  height: 100vh;
  margin-top: 100px;
  padding-bottom: 100px;

} */

</style>


