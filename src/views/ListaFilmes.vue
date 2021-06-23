<template>
  <div class="teste">
      <header>
      <MenuBar/>
    </header>
    
    <MenuBar2/>
<!-- <div> -->

    <div>
            <div class="divInfoHeader">
                <h2 class="titulo" align='center' justify="center" margin="100px">Lista de Filmes </h2>
            </div>

     <div class="divInserir">
    <div class="divInfoo"
    v-for="x in filmes"
        v-bind:key="x.nome"
         @click="clicarImagem(x.idFilmeSerie, x.nome)"
        >
        <v-img
      
         :src= x.foto
        class="imagemFilmeComprar"></v-img>

    <div class="fff">
        <div class="divMostarInfo">
            <div>
            <h4 class="inlineInfo">Nome:</h4>
            <span class="spanInfo">{{x.nome}}</span>
            </div>            
        </div>

        <div class="divMostarInfo">
            <div>
            <h4 class="inlineInfo">Categoria:</h4>
             <span class="spanInfo">{{x.nomeCategoria}}</span>
            </div>
        </div>

        <div class="divMostarInfo">
            <div>
            <h4 class="inlineInfo">Duração:</h4>
             <span class="spanInfo">{{x.duracao}}</span>
            </div>
        </div>

        <div class="divMostarInfo">
            <div>
            <h4 class="inlineInfo">Realizador:</h4>
            <span class="spanInfo">{{x.realizador}}</span>
            </div>
        </div>

        <div class="divMostarInfo">
            <div>
            <h4 class="inlineInfo">Elenco:</h4>
             <span class="spanInfo">{{x.elenco}}</span>
            </div>
        </div>

        <div class="divMostarInfo">
            <div>
            <h4 class="inlineInfo">Linguagem:</h4>
             <span class="spanInfo">{{x.linguagem}}</span>
            </div>
        </div>

        <div class="divMostarInfo">
            <div>
            <h4 class="inlineInfo">Imdb:</h4>
             <span class="spanInfo">{{x.imdb}}</span>
            </div>
        </div>
    </div>

    <div class="divcomprar">
            <div>
            <span>Preço:</span>
            <span class="spanInfo2">{{x.preco}} €</span>
            </div>
            <button class="butaoComprar">Comprar<v-icon right style="color: red;">mdi-cart-variant</v-icon></button>
        </div>

        


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
      filmes: [],
    }),

    components: {
    MenuBar: () => import("../components/MenuBar"),
    MenuBar2: () => import("../components/MenuBar2"),
  },

    mounted(){
     axios({
            method: "get",
            url: "http://localhost:4000/filme", 
          })
          .then((response) =>{
            console.log(response.data);
            this.filmes = response.data;
          });
  },



 methods: {
     clicarImagem(idFilme,nomeFilme){

        this.$router.push({
        name: "infoComprarFilme",
        query: { id: idFilme, nome:nomeFilme}
      });
      },
  },
  
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Filmes | VideoClube';
      }
    },
  }

}
</script>



<style>

/* .teste{
  min-height: 100vh;
} */



.tituloInserir{ 
  margin-top: -40px;
}

.divInserir {
  border: 2px solid #00695c;
  background-color: white;
  margin: 0px 250px;
  padding-top: 15px;
  /* display: flex;
  flex-wrap: wrap; */
   margin-bottom: 100px;
   clear: both; 
}

.divInfoo{
      margin: 20px 20px 0 20px; 
      clear: both; 
      overflow: hidden;
      border-bottom: 2px dotted black;
      cursor: pointer;
}

.imagemFilme{
  border: 1px solid black;
}

.imagemFilmeComprar{
    height: 230px;
    width: 210px;
    margin-left: 40px;
    float: left;
    clear:both;
    margin-bottom: 30px;
    border: 1px solid black;

}

.fff{
    overflow:hidden;
    display: inline-table;
}

.divInfoHeader{
    background-color: #00695C;
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 25px;
    margin-top: 100px;
}

.inlineInfo{
    display: inline;
}

.divMostarInfo{
    padding-left: 30px;
    margin-bottom: 12px;
}

.divcomprar{
  float: right;
  overflow:hidden;
    display: inline-table;
    position: relative;
    top: 100px;
    right: 130px;
}

/* .spanInfo{
    padding-left: 5px;
    color: rgb(81, 81, 81);
} */

.spanInfo2{
    padding-left: 5px;
    color: red;
    font-size: 22px;
}
.butaoComprar{
  height: 30px;
  width: 120px;
  margin-top: 10px;
  background-color: #009688;
  border: 2px solid #00695C;
}

/* .inputComprar{
  height: 30px;
  border: 2px solid  #00695C;
  text-align: center;
} */

</style>