<template>
    <div class="teste">
        <header><MenuBar/></header>

        <div>
            <div class="divInfoHeader">
                <h2 class="titulo" align='center' justify="center" margin="100px">Série > {{nomeRota}} </h2>
            </div>

     <div class="divInserir1">
    <div class="divInfo1">
        <v-img
      
         :src= fotoFilme
        class="imagemFilmeComprar1"></v-img>

    <div class="fff1">
        <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Nome:</h4>
            <span class="spanInfo1">{{nomeFilme}}</span>
            </div>            
        </div>

        <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Categoria:</h4>
             <span class="spanInfo1">{{categoria}}</span>
            </div>
        </div>

         <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Temporadas:</h4>
             <span class="spanInfo1">{{duracaoFilme}}</span>
            </div>
        </div>

        <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Realizador:</h4>
            <span class="spanInfo1">{{realizadorFilme}}</span>
            </div>
        </div>

        <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Elenco:</h4>
             <span class="spanInfo1">{{elencoFilme}}</span>
            </div>
        </div>

        <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Linguagem:</h4>
             <span class="spanInfo1">{{linguagemFilme}}</span>
            </div>
        </div>

        <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Imdb:</h4>
             <span class="spanInfo1">{{imdbFilme}}</span>
            </div>
        </div>

        <div class="divMostarInfo1">
            <div>
            <h4 class="inlineInfo1">Preço:</h4>
             <span class="spanInfo1">{{precoFilme}} €</span>
            </div>
        </div>

    </div>

     <div class="divcomprar">
            <div>
            <button class="butaoComprar1" @click="comprar()">&#160;Comprar&nbsp;</button>
            <input type="number" class="inputComprar" id="inputQuantidade" value="1" min="1"> 
            </div>
        </div>


    </div>
    <div class="divMostrarDescricao">
        <div>
            <h4 class="inlineInfo1">Descricao:</h4>
            <span class="spanInfo1">{{descricaoFilme}}</span>
        </div>
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
        //     // this.Admin = response.data[0];
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
                        precoTotal: this.precoFilme * document.getElementById('inputQuantidade').value,  
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
                    setTimeout(function() { 
                        window.location = "/"
                    }, 2000);
                })
            }  
        }
    },
}
</script>



<style scoped>

.teste{
    min-height: 100vh;
    position: absolute;
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

.divInserir1{
  border: 2px solid #00695c;
  background-color: white;
  margin: 0px 250px;
  padding-top: 50px;
   margin-bottom: 100px;
   clear: both; 
}

/* cccccccccccccc */

.imagemFilmeComprar1{
    height: 250px;
    width: 250px;
    margin-left: 40px;
    float: left;
    clear:both;
    margin-bottom: 30px;
    border: 1px solid black;

}

.divInfo1{
      margin: 20px 20px 0 0; 
      clear: both; 
      overflow: hidden
}

.fff1{
    overflow:hidden;
    display: inline-table;
}

.divMostarInfo1{
    padding-left: 30px;
    margin-bottom: 13px;
}

.divMostrarDescricao{
    margin-left: 50px;
    margin-bottom: 30px;
}

.inlineInfo1{
    display: inline;
}

.spanInfo1{
    padding-left: 5px;
    color: rgb(81, 81, 81);
}

.divcomprar{
    float: right;
    overflow:hidden;
    display: inline-table;
    position: relative;
    top: 180px;
    right: 100px;
}

.butaoComprar1{
  height: 30px;
  width: 100px;
  background-color: #009688;
  border: 2px solid #00695C;
}

.inputComprar{
  height: 30px;
  border: 2px solid  #00695C;
  text-align: center;
}
</style>