<template>
    <div class="teste">
        <header><MenuBarAdmin/></header>

        <div>
            <div class="divInfoHeader">
                <h2 class="titulo" align='center' justify="center" margin="100px">Série > {{nomeRota}} </h2>
            </div>

     <div class="divInserir">
      <div class="divInserirCol">
        <span>Nome: <br /></span>
        <input
          class="inputInserirNome"
          type="text"
          id="nomeSerie"
          name="nomeSerie"
          v-model="nomeSerie"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Temporadas: <br /></span>
        <input
          class="inputInserirDuracao"
          type="number"
          id="temporadasSerie"
          name="temporadasSerie"
          v-model="temporadasSerie"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Ano: <br /></span>
        <input
          class="inputInserirAno"
          type="number"
          id="anoSerie"
          name="anoSerie"
          v-model="anoSerie"
        />
      </div>

      <div class="divInserirCol">
        <span>Realizador: <br /></span>
        <input
          class="inputInserir"
          type="text"
          id="realizadorSerie"
          name="realizadorSerie"
          v-model="realizadorSerie"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Elenco: <br /></span>
        <input
          class="inputInserirElenco"
          type="text"
          id="elencoSerie"
          name="elencoSerie"
          v-model="elencoSerie"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Linguagem:<br /></span>
        <input
          class="inputInserir"
          type="text"
          id="linguagemSerie"
          name="linguagemSerie"
          v-model="linguagemSerie"
        />
      </div>

      <div class="divInserirCol">
        <span>Categoria: <br /></span>
        <select class="select" name="cars" id="select">
          <!-- <option id="option" ></option> -->
          <option v-for="x in categorias" :key="x.id" id="option">{{
            x.nome
          }}</option>
        </select>
        <!-- <input class="inputInserir" type="text"> -->
      </div>

      <div class="divInserirCol">
        <span> <br />Imdb: <br /></span>
        <input
          class="inputInserirImdb"
          type="number"
          step=".1"
          id="imdbSerie"
          min="0"
          max="10"
          name="imdbSerie"
          v-model="imdbSerie"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Foto:<br /></span>
        <input
          class="inputInserir2"
          type="file"
          id="fotoSerie"
          name="fotoSerie"
          placeholder="erhhgthj"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Preço:<br /></span>
        <input
          class="inputInserirPreco"
          type="number"
          prefix="€"
          step=".01"
          min="0"
          id="precoSerie"
          name="precoSerie"
          v-model="precoSerie"
        />
      </div>

      <div class="divInserirColTextarea">
        <span class="spawTextarea"> <br />Descriçao:<br /></span>
        <textarea
          class="textareaSerie"
          cols="100"
          rows="5"
          id="descricaoSerie"
          name="descricaoSerie"
          v-model="descricaoSerie"
        ></textarea>
      </div>

<div class="divButoes">
      <v-btn class="butaoArtista" color="#009688" @click="editarSerie()">Editar<v-icon right dark>mdi-cloud-upload</v-icon></v-btn>
        <v-btn class="botaoCancelar" color="#E53935" @click="goBack()">Cancelar<v-icon right dark>mdi-keyboard-backspace</v-icon></v-btn>
        </div>
    </div>
            
        </div>
        
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import axios from "axios";
// import bcrypt from 'bcryptjs';

export default {
    name: 'EditarSerie',

    data() {
        return {
        id: this.$route.query.id,
        nomeRota: this.$route.query.nome,
        nomeSerie: "",
        temporadasSerie: this.temporadasSerie,
        anoSerie: this.anoSerie,
        realizadorSerie: this.realizadorSerie,
        elencoSerie: this.elencoSerie,
        linguagemSerie: this.linguagemSerie,
        descricaoSerie: this.descricaoSerie,
        imdbSerie: this.imdbSerie,
        file : this.fotoSerie,
        // categoriaSerie: this.categoriaSerie,
        precoSerie: this.precoSerie,
        categorias: [],
 };
  },
    components: {
        MenuBarAdmin: () => import("../components/MenuBarAdmin")
    },
    mounted(){
      if(!this.$session.has('admin')){
        window.location = "/admin"
      }
      
        axios({
            method: "get",
            url: "http://localhost:4000/infoSerie?id=" + this.$route.query.id,
            // data: {
            //     id: this.id,
            // },
        })
        .then((response) =>{
        //     // this.Admin = response.data[0];
            this.nomeSerie = response.data[0].nome;
            this.temporadasSerie = response.data[0].duracao;
            this.anoSerie = response.data[0].anoProducao;
            this.realizadorSerie = response.data[0].realizador;
            this.elencoSerie = response.data[0].elenco;
            this.linguagemSerie = response.data[0].linguagem;
            this.descricaoSerie = response.data[0].descricao;
            this.imdbSerie = response.data[0].imdb;
            this.precoSerie = response.data[0].preco;
        });

         axios({
      method: "get",
      url: "http://localhost:4000/categoria",
    }).then((response) => {
      this.categorias = response.data;
    });
        // console.log(this.$route.query.id);
    },

    methods: {

        goBack(){
            window.location = "/editarRemoverSerie";
        },


        editarSerie(){

          // if(this.f)
             if(this.nomeSerie.length > 0 &&
                  temporadasSerie.value.length > 0 &&
                  anoSerie.value.length > 0 &&
                  this.realizadorSerie.length > 0 &&
                  this.elencoSerie.length > 0 &&
                  this.linguagemSerie.length > 0 &&
                  this.descricaoSerie.length > 0 &&
                  imdbSerie.value.length > 0 &&
                  !fotoSerie.files[0] &&
                  precoSerie.value.length > 0){

        axios({
          method: "post",
          url: "http://localhost:4000/EditarSerie", 
          data: {
            nomeSerie: this.nomeSerie,
            temporadasSerie: this.temporadasSerie,
            anoSerie: this.anoSerie,
            realizadorSerie: this.realizadorSerie,
            elencoSerie: this.elencoSerie,
            linguagemSerie: this.linguagemSerie,
            descricaoSerie: this.descricaoSerie,
            imdbSerie: this.imdbSerie,
            categoriaSerie: document.getElementById("select").value,
            precoSerie: this.precoSerie,
            id: this.id,
          },
        })
        .then(()=>{
          this.$router.push({
            name: "editarSerie",
            query: { id: this.id, nome:this.nomeSerie}
         });

        this.$toastr.Add({
            timeout: 2000,
            msg: 'Serie editado'
          });
        
        var temporizador = setTimeout(() => {
                          location.reload()
                    }, 2000);
        })

      }
      else if(fotoSerie.files[0]){
        console.log('existe foto');
        var id = this.id;
         
          // console.log(id);

        var reader = new FileReader();
        reader.readAsDataURL(fotoSerie.files[0]);
        reader.onload = function() {
          this.nomeSerie = nomeSerie.value;
          this.temporadasSerie = temporadasSerie.value;
          this.anoSerie = anoSerie.value;
          this.realizadorSerie = realizadorSerie.value;
          this.elencoSerie = elencoSerie.value;
          this.linguagemSerie = linguagemSerie.value;
          this.descricaoSerie = descricaoSerie.value;
          this.imdbSerie = imdbSerie.value;
          this.categoriaSerie = document.getElementById("select").value;
          this.precoSerie = precoSerie.value;
          this.fotoSerie = reader.result;
          this.id2 = id;


          console.log(this.id2);

          axios({
            method: "post",
            url: "http://localhost:4000/EditarSerie",

            data: {
              nomeSerie: this.nomeSerie,
              temporadasSerie: this.temporadasSerie,
              anoSerie: this.anoSerie,
              realizadorSerie: this.realizadorSerie,
              elencoSerie: this.elencoSerie,
              linguagemSerie: this.linguagemSerie,
              descricaoSerie: this.descricaoSerie,
              imdbSerie: this.imdbSerie,
              categoriaSerie: this.categoriaSerie,
              precoSerie: this.precoSerie,
              file: reader.result,
              id : this.id2,
            },
          });
        };

        this.$router.push({
            name: "editarSerie",
            query: { id: this.id, nome:this.nomeSerie}
         });

        this.$toastr.Add({
          timeout: 2000,
          msg: "Serie editado",
        });

        var temporizador = setTimeout(() => {
                          location.reload()
                    }, 2000);
      }

      else{
        // console.log(this.id)
        this.$toastr.e("Preencha os campos todos");
      }
        }
    },
  
  watch: {
      $route: {
          immediate: true,
          handler(to, from) {
              document.title = to.meta.title || 'Editar Série | VideoClube';
          }
      },
  }
}
</script>



<style>

.teste{
    /* height: 100vh; */
    /* height: 100%;
    margin: 0;
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
  border: 2px solid #00695c;
  background-color: white;
  margin: 0px 250px;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
   margin-bottom: 100px;
}

.divInserirCol {
  display: flex;

  margin: 0px 40px 0px 50px;
  margin-bottom: 30px;
  flex: 0 40%;
  /* padding-left: 20px;
    padding-right: 20px; */
  margin-top: auto;
  margin-right: auto;
}


.inputInserir {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  flex: 0 80%;
  margin-left: 15px;
  padding-left: 10px;
}

.inputInserirDuracao {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  flex: 0 80%;
  margin-left: 30px;
  padding-left: 10px;
}

.inputInserirImdb {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  flex: 0 80%;
  margin-left: 53px;
  padding-left: 10px;
}

.inputInserirPreco {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  flex: 0 80%;
  margin-left: 50px;
  padding-left: 10px;
}

.inputInserirNome {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  flex: 0 80%;
  margin-left: 39px;
  padding-left: 10px;
}

.inputInserirAno {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  flex: 0 80%;
  margin-left: 50px;
  padding-left: 10px;
}

.inputInserirElenco {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  flex: 0 80%;
  margin-left: 33px;
  padding-left: 10px;
}

.inputInserir2 {
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  margin-left: 50px;
  padding-left: 10px;
}

.select {
  margin-left: 20px;
  border: 1px solid black;
  width: 320px;
  height: 25px;
  text-align-last: center;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #ddd;
}

.textareaSerie {
  border: 1px solid black;
  /* margin-bottom: 40px;
  width: 90%; */

  margin-top: auto;
  flex: 0 100%;
  margin-left: 15px;
  padding-left: 10px;
}

.divButoes{
  margin: auto;
   margin-top: 20px;
  margin-bottom: 50px;

}


.botaoCancelar{
    margin-left: 20px;
}

.divInserirColTextarea {
  display: flex;

  margin: 0px 40px 0px 50px;
  margin-bottom: 30px;
  flex: 0 90%;
  margin-top: 10px;
  margin-right: auto;
}

.spawTextarea {
  margin-top: auto;
  margin-bottom: auto;
  padding-bottom: 20px;
}
</style>