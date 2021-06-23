<template>
  <div class="teste">
    <header>
      <MenuBarAdmin/>
    </header>
      <!-- <h1 class="h1">Pagina teste Admin</h1> -->

      <v-container class="container" >
        <v-layout row col wrap >
          
          <v-flex xs12 md4>
            <v-btn class="btnBorder"  block href="/adminRegister"  height="200px"  style="font-weight: 600 ; font-size:17px">Inserir Admin</v-btn>
          </v-flex>

          <v-flex xs12 md4>
            <v-btn class="btnBorder" block href="/consultarCompras"  height="200px"  style="font-weight: 600 ; font-size:17px">Gestão de Compras</v-btn>
          </v-flex>

        </v-layout>

      </v-container>
  </div>
</template>

<script>
// import MenuBar from '@/components/MenuBar.vue'
// import MenuBar from '../components/MenuBar'
//import MenuBar from '../components/MenuBar'

export default {
    name: 'AdminPainel',

    components: {
    MenuBarAdmin: () => import("../components/MenuBarAdmin")
  },

  mounted(){
      if(!this.$session.has('admin')){
        window.location = "/admin"

      }
  },
  watch: {
      $route: {
          immediate: true,
          handler(to, from) {
              document.title = to.meta.title || 'Gestão Sistema | VideoClube';
          }
      },
  }
}


</script>



<style>

.teste{
  height: 100vh;
  background-color: rgb(221, 221, 221);;
}

.container{
  margin-top: 150px;
  /* justify-content: center;
  align-items: center; */

}

.btnBorder{
  border: 2px solid black;
}
</style>