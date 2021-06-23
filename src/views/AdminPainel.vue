<template>
  <div class="teste">
    <header>
      <MenuBarAdmin/>
    </header>
      <!-- <h1 class="h1">Pagina teste Admin</h1> -->

      <v-container class="container" >
        <v-layout row col wrap >
          
          <v-flex xs12 md4>
            <v-btn class="btnBorder"  block href="/minhaInformacao"  height="130px" style="font-weight: 600 ; font-size:17px">Minha informação</v-btn>
          </v-flex>

          <v-flex xs12 md4>
            <v-btn class="btnBorder" block href="/painelAdminGestao"  height="130px" style="font-weight: 600 ; font-size:17px">Gestão Sistema</v-btn>
          </v-flex>

          <v-flex xs12 md4>
            <v-btn class="btnBorder" block href="/inserirCategoria"  height="130px" style="font-weight: 600 ; font-size:17px">Inserir Categoria</v-btn>
          </v-flex>

          <v-flex xs12 md4>
            <v-btn class="btnBorder"  block href="/painelAdminFilme"  height="130px" style="font-weight: 600 ; font-size:17px">Filmes</v-btn>
          </v-flex>

          <v-flex xs12 md4>
            <v-btn class="btnBorder" block href="/painelAdminSerie"  height="130px" style="font-weight: 600 ; font-size:17px">Séries</v-btn>
          </v-flex>

          <v-flex xs12 md4>
            <v-btn class="btnBorder"  block href="/painelAdminArtista"  height="130px" style="font-weight: 600 ; font-size:17px">Artistas</v-btn>
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
              document.title = to.meta.title || 'Painel Admin | VideoClube';
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