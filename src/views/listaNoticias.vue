<template>
  <div class="teste">
      <header>
      <MenuBar/>
    </header>

    <MenuBar2/>
    
<!-- <div> -->

    <div class="divListarCategoria">
        <h2 class="tituloInserir" align='center' justify="center" margin="100px">Lista de Notícias</h2>
    </div>

    <div class="divLista">
        <div class="divListaCol">
            <div class="divCard">
                <v-card
                    v-for="x in noticias"
                    :title="x.title"
                    v-bind:key="x.title"
                    class="cardInicial"
                    max-width="220">
                    <v-img
                        :src= "x.urlToImage"
                        height="150px"
                        class="imagemFilme "
                    ></v-img>
                    <v-card-text>{{x.title}}</v-card-text>
                    <v-card-actions>
                        <v-btn :href="x.url" target="_blank" rounded>
                            Saber Mais
                        </v-btn>
                    </v-card-actions>
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
      noticias: [],
    }),

    components: {
        MenuBar: () => import("../components/MenuBar"),
        MenuBar2: () => import("../components/MenuBar2"),
    },

    mounted(){
        axios({
            method: "get",
            url: "http://localhost:4000/noticias",
        }).then((response) =>{
            console.log(response.data);
            this.noticias = response.data;
        });
    },

    methods: {
    },
  
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Notícias | VideoClube';
            }
        },
    }
}
</script>



<style scoped>


.teste{
    min-height: 100vh;
}


.divInserirCategoria{
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
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 50px;
    margin-bottom: 200px;
}

.divListarCategoria{
    background-color: #00695C;
    margin: 0px 250px;
    margin-top: 100px;
    padding-bottom: 10px;
    padding-top: 50px;
}

.divLista{
    border:2px solid #00695C;
    background-color: white;
    margin: 0px 250px;
    padding-top: 30px;
    margin-bottom: 35px;
}

.divListaCol{
    display: flex;
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

.v-card__text{
    font-weight: 600 !important;
    height: 90px !important;
    color: #000 !important;
}

.v-btn{
    margin-left: 45.3px !important;
}
</style>