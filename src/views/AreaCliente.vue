<template>
  <div class="teste">
    <header>
      <MenuBar/>
    </header>
      <!-- <h1 class="h1">Pagina teste Admin</h1> -->

      <v-container class="container" >
        <v-layout row col wrap >
          
          <v-flex xs12 md4>
            <v-btn class="btnBorder"  block href="/minhaInformacaoCliente"  height="130px" style="font-weight: 600 ; font-size:17px">Minha informação</v-btn>
          </v-flex>

          <v-flex xs12 md4>
            <v-btn class="btnBorder" block href="/comprasCliente"  height="130px" style="font-weight: 600 ; font-size:17px">Minhas Compras</v-btn>
          </v-flex>
        </v-layout>

      </v-container>
  </div>
</template>

<script>

export default {
    name: 'AreaCliente',

    components: {
        MenuBar: () => import("../components/MenuBar")
    },

    mounted(){
        if(!this.$session.has('user')){
            window.location = "/login"
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Área de Cliente | VideoClube';
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