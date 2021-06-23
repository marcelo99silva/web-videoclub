<template>
    <div class="testee">
        <header><MenuBar/></header>

        <div>
            <div class="divInfoHeader">
                <h2 class="titulo" align='center' justify="center" margin="100px">Filme > {{nomeRota}} </h2>
            </div>

     <div class="divInserir">
         <div class="procurar">
             <!-- mdiMagnify -->
             <v-icon class="iconProcurar" medium style="color: red;margin-right:0px; font-size: 200px;"> mdi-magnify </v-icon> 
            <h3>Produto nao encontrado</h3>
         </div>
   
    </div>
            
        </div>
        
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import axios from "axios";

export default {
    name: 'InfoComprar',
    titulo: 'nomeRota',
    data() {
        return {
        id: this.$route.query.id,
        nomeRota: this.$route.query.nome,
        nomeFilme: "",
        duracaoFilme: "",
        anoFilme: this.anoFilme,
        realizadorFilme: this.realizadorFilme,
        elencoFilme: this.elencoFilme,
        linguagemFilme: this.linguagemFilme,
        descricaoFilme: this.descricaoFilme,
        imdbFilme: this.imdbFilme,
        fotoFilme : this.fotoFilme,
        categoria: this.categoria,
        precoFilme: this.precoFilme,
 };
  },
    components: {
        MenuBar: () => import("../components/MenuBar")
    },
    mounted(){
        axios({
            method: "get",
            url: "http://localhost:4000/infoFilmeComprar?id=" + this.$route.query.id,
        })
        .then((response) =>{
            this.nomeFilme = response.data[0].nome;
            this.duracaoFilme = response.data[0].duracao;
            this.anoFilme = response.data[0].anoProducao;
            this.realizadorFilme = response.data[0].realizador;
            this.elencoFilme = response.data[0].elenco;
            this.linguagemFilme = response.data[0].linguagem;
            this.descricaoFilme = response.data[0].descricao;
            this.imdbFilme = response.data[0].imdb;
            this.precoFilme = response.data[0].preco;
            this.categoria = response.data[0].nomeCategoria;
            this.fotoFilme = response.data[0].foto;
            document.title = response.data[0].nome + " | VideoClube";
        });
    },

    methods: {

        comprar(){
             if(!this.$session.has('user')){
                 this.$toastr.e("Faça login para comprar"); 
            }else{

        axios({
          method: "post",
          url: "http://localhost:4000/criaCompra", 
          data: {
            precoTotal: this.precoFilme,  
            data: new Date(),
            idProduto: this.$route.query.id,
            quantidade: document.getElementById('inputQuantidade').value,
            idUser:this.$session.get('user'), 
          },
        })
        .then(()=>{
              this.$toastr.Add({
            timeout: 2000,
            msg: 'Compra efectuada'
          });
          document.getElementById('inputQuantidade').value=1
        })
        }        
            }
        }
}
</script>



<style>

.testee{
    height: 100vh;
    /* position: absolute; */
     /* height: 100%; */
  /*  margin: 0;
    bottom: 0; */
    background-color: rgb(221, 221, 221);;
}

.titulo{ 
    margin-top: -35px;
    float: left;
    padding-left: 25px;
}

.divInfoHeader{
    background-color: #00695C;
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 50px;
    margin-top: 100px;
}

.divInserir {
    display: flex;
     justify-content: center;
    align-items: center;
  border: 2px solid #00695c;
  background-color: white;
  margin: 0px 250px;
  padding-top: 50px;
  /* display: flex;
  flex-wrap: wrap; */
   margin-bottom: 100px;
   clear: both; 
}

/* cccccccccccccc */
/* 
.imagemFilmeComprar{
    height: 250px;
    width: 250px;
    margin-left: 40px;
    float: left;
    clear:both;
    margin-bottom: 30px;
    border: 1px solid black;

}

.divInfo{
      margin: 20px 20px 0 0; 
      clear: both; 
      overflow: hidden
}

.fff{
    overflow:hidden;
    display: inline-table;
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
    top: 180px;
    right: 100px;
}

.divMostrarDescricao{
    margin-left: 50px;
    margin-bottom: 30px;
}

.inlineInfo{
    display: inline;
}

.spanInfo{
    padding-left: 5px;
    color: rgb(81, 81, 81);
}

.botaoComprar{
  height: 30px;
  width: 100px;
  background-color: #009688;
  border: 2px solid #00695C;
}

.inputComprar{
  height: 30px;
  border: 2px solid  #00695C;
  text-align: center;
} */

.procurar{
    /* margin: auto; */
    /* justify-content: center;
    align-items: center; */
    margin-bottom: 60px;
    
}

/* .iconProcurar{
    font-size: 210px;
    margin-left: 50px;
    margin-top: 30px;
    margin-bottom: 40px;
} */
</style>