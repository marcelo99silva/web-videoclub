<template>
  <div class="teste">
      <header>
      <MenuBar/>
    </header>

    <MenuBar2/>
    
<!-- <div> -->

    <div class="divListarCategoria">
        <h2 class="tituloInserir" align='center' justify="center" margin="100px">Lista de Artistas</h2>
      </div>

       <div class="divLista">
        <div class="divListaCol">

            <div class="divCard">

           <v-card
             v-for="x in artistas"
           :title="x.nome"
           class="cardInicial"
       max-width="170"
      
    v-bind:key="x.nome" 
  >
    <v-img
     

      :src= "x.foto"
      
      height="200px"
      class="imagemFilme"
    ></v-img>
    <h3>{{x.nome}}</h3>
  </v-card>

  </div>
</div>
</div>

      

  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import axios from 'axios'

export default {
    name: 'Teste',

    data: () => ({
      show: false,
      artistas: [],
    }),

    components: {
    MenuBar: () => import("../components/MenuBar"),
    MenuBar2: () => import("../components/MenuBar2"),
  },

    mounted(){
     axios({
            method: "get",
            url: "http://localhost:4000/artista", 
          })
          .then((response) =>{
            console.log(response.data);
            this.artistas = response.data;
          });
  },



 methods: {
  },
  
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Artistas | VideoClube';
      }
    },
  }

}
</script>



<style>

.teste{
  min-height: 100vh;
}


.divInserirCategoria{
  /* height: 100px; */
  background-color: #00695C;
  margin: 0px 250px;
  padding-bottom: 10px;
  padding-top: 50px;
  margin-top: 100px;
}

.tituloInserir{ 
  margin-top: -40px;
}

.divInserir{
  border:2px solid #00695C;
  background-color: white;
  /* height: 100px; */
  /* background-color: #00695C; */
  margin: 0px 250px;
  padding-bottom: 10px;
  padding-top: 50px;
  margin-bottom: 200px;
  /* margin-top: 50px; */
  /* padding-bottom: 100px; */
}

.divListarCategoria{
  /* height: 100px; */
  
  background-color: #00695C;
  margin: 0px 250px;
  margin-top: 100px;
  padding-bottom: 10px;
  padding-top: 50px;
  /* margin-top: 50px; */
  /* padding-bottom: 100px; */
}

.divLista{
  border:2px solid #00695C;
  background-color: white;
  margin: 0px 250px;
  /* padding-bottom: 10px; */
  padding-top: 30px;
  margin-bottom: 35px;
}

.divListaCol{
 display: flex;
 /* margin: 0px 0px; */
 /* margin-bottom: 10px;  */
 padding-left: 50px; 
}

.divInserirCol{
 display: flex;
 margin: 0px 60px;
 margin-bottom: 30px; 
 justify-content: center;
}

.divCard{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.cardInicial{
    margin-right: 15px;
    margin-bottom: 25px;
}

.imageCard{
  border-bottom: 1.5px solid black;
}

.imagemFilme{
  border: 1px solid black;
}

</style>