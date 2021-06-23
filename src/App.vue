<template>
  <div id="app">
    <!-- <header>
      <MenuBar/>
    </header> -->

    <!-- <div class="container">
      <MenuBar2/>
    </div> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'
import MenuBar2 from './components/MenuBar2'

export default {
  name: 'app',
  components: {
    MenuBar,
    MenuBar2
  }
}
</script>

<style>

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header{
  width: 100vw;
  background-color: rgb(53, 52, 52);
  padding: 20px 25px;
}

.container{
  background-color: rgb(221, 221, 221);
  /* margin-bottom: 100px; */
}

/* body{
  height: 100%;
} */

#app{
  height: 100%;
  /* width: auto; */
  /* height: 100; */
  background-color: rgb(221, 221, 221);
  overflow: hidden;
  margin: auto;
}

/* body{
  height: 100%;
} */

</style>
