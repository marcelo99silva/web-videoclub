<template>
    <div class="teste">
        <header><MenuBarAdmin/></header>
    

        <div class="divListarCategoria">
            <h1 class="tituloInserir" align='center' justify="center" margin="100px">Lista de Artistas</h1>
        </div>
        <div class="divLista">
            <div class="divListaCol">
                <div class="divCard">
                    <v-card
                        style=" border: 1px solid rgb(98, 98, 98);" 
                        class="cardInicial"
                        v-for="x in artistas"
                        v-bind:key="x.idArtista"
                    >
                        <v-img
                            class="imageCard"
                            :src= "x.foto"
                            height="200px"
                        >
                        </v-img>

                        <v-card-title>{{x.nome}}</v-card-title>

                        <v-card-subtitle>
                            Idade: {{x.idade}} <br>
                            Nacionalidade: {{x.nacionalidade}}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn class="butaoEliminar" color="#E53935"  style="color: white; font-size: 12px; margin-right:10px" @click="EliminarFilme(x.idArtista)">Eliminar<v-icon right dark>mdi-delete</v-icon></v-btn>
                            <v-btn class="butaoEliminar" color="#43A047"  style="color: white;  font-size: 12px"  @click="EditarArtista(x.idArtista,x.nome)" >Editar<v-icon right dark>mdi-delete</v-icon></v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-text>
                                    Descrição: {{x.descricao}}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditarRemoverArtistas',

    data: () => ({
        show: false,
        artistas: [],
    }),

    components: {
        MenuBarAdmin: () => import("../components/MenuBarAdmin")
    },

    mounted(){
        if(!this.$session.has('admin')){
            window.location = "/admin"
        }

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
        EliminarFilme: function(idArtista){
            axios({
                method: "post",
                url: "http://localhost:4000/eliminaArtista", 
                data: {
                    id: idArtista,
                },
            })
            .then(()=>{
                this.$toastr.Add({
                    timeout: 2000,
                    msg: 'Artista eliminado'
                });
                axios({
                    method: "get",
                    url: "http://localhost:4000/artista", 
                })
                .then((response) =>{
                    console.log("eliminou")
                    console.log(idArtista);
                    this.artistas = response.data;
                });
            })
        },

        EditarArtista: function(idArtista, nomeArtista){
            this.$router.push({
                name: "editarArtista",
                query: { id: idArtista, nome:nomeArtista}
            });
        }
    },
  
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Lista de Filmes | VideoClube';
            }
        },
    }

}
</script>



<style>


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
  padding-bottom: 10px;
  padding-top: 50px;
  margin-bottom: 100px;

}

.divListaCol{
 display: flex;
 margin: 0px 0px;
 margin-bottom: 30px; 
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
    margin-right: 30px;
    width: 280px;
    flex: 0 30%;
    margin-bottom: 40px;
    
}

.imageCard{
  border-bottom: 1.5px solid black;
}


</style>