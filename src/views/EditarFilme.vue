<template>
    <div class="teste">
        <header><MenuBarAdmin/></header>

        <div>
            <div class="divInfoHeader">
                <h2 class="titulo" align='center' justify="center" margin="100px">Filme > {{nomeRota}} </h2>
            </div>

     <div class="divInserir">
      <div class="divInserirCol">
        <span>Nome: <br /></span>
        <input
          class="inputInserirNome"
          type="text"
          id="nomeFilme"
          name="nomeFilme"
          v-model="nomeFilme"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Duração: <br /></span>
        <input
          class="inputInserirDuracao"
          type="text"
          id="duracaoFilme"
          name="duracaoFilme"
          v-model="duracaoFilme"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Ano: <br /></span>
        <input
          class="inputInserirAno"
          type="number"
          id="anoFilme"
          name="anoFilme"
          v-model="anoFilme"
        />
      </div>

      <div class="divInserirCol">
        <span>Realizador: <br /></span>
        <input
          class="inputInserir"
          type="text"
          id="realizadorFilme"
          name="realizadorFilme"
          v-model="realizadorFilme"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Elenco: <br /></span>
        <input
          class="inputInserirElenco"
          type="text"
          id="elencoFilme"
          name="elencoFilme"
          v-model="elencoFilme"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Linguagem:<br /></span>
        <input
          class="inputInserir"
          type="text"
          id="linguagemFilme"
          name="linguagemFilme"
          v-model="linguagemFilme"
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
          id="imdbFilme"
          min="0"
          max="10"
          name="imdbFilme"
          v-model="imdbFilme"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Foto:<br /></span>
        <input
          class="inputInserir2"
          type="file"
          id="fotoFilme"
          name="fotoFilme"
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
          id="precoFilme"
          name="precoFilme"
          v-model="precoFilme"
        />
      </div>

      <div class="divInserirColTextarea">
        <span class="spawTextarea"> <br />Descrição:<br /></span>
        <textarea
          class="textareaSerie"
          cols="100"
          rows="5"
          id="descricaoFilme"
          name="descricaoFilme"
          v-model="descricaoFilme"
        ></textarea>
      </div>

<div class="divButoes">
      <v-btn class="butaoArtista" color="#009688" @click="editarFilme()">Editar<v-icon right dark>mdi-cloud-upload</v-icon></v-btn>
        <v-btn class="botaoCancelar" color="#E53935" @click="goBack()">Cancelar<v-icon right dark>mdi-keyboard-backspace</v-icon></v-btn>
        </div>
    </div>
            
        </div>
        
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import axios from "axios";

export default {
  name: 'EditarFilme',

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
      file : this.fotoFilme,
      // categoriaFilme: this.categoriaFilme,
      precoFilme: this.precoFilme,
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
      url: "http://localhost:4000/infoFilme?id=" + this.$route.query.id,
      // data: {
      //     id: this.id,
      // },
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
      window.location = "/editarRemoverFilme";
    },


      editarFilme(){

        // if(this.f)
            if(this.nomeFilme.length > 0 &&
                this.duracaoFilme.length > 0 &&
                anoFilme.value.length > 0 &&
                this.realizadorFilme.length > 0 &&
                this.elencoFilme.length > 0 &&
                this.linguagemFilme.length > 0 &&
                this.descricaoFilme.length > 0 &&
                imdbFilme.value.length > 0 &&
                !fotoFilme.files[0] &&
                precoFilme.value.length > 0){

      axios({
        method: "post",
        url: "http://localhost:4000/EditarFilme", 
        data: {
          nomeFilme: this.nomeFilme,
          duracaoFilme: this.duracaoFilme,
          anoFilme: this.anoFilme,
          realizadorFilme: this.realizadorFilme,
          elencoFilme: this.elencoFilme,
          linguagemFilme: this.linguagemFilme,
          descricaoFilme: this.descricaoFilme,
          imdbFilme: this.imdbFilme,
          categoriaFilme: document.getElementById("select").value,
          precoFilme: this.precoFilme,
          id: this.id,
        },
      })
      .then(()=>{
        this.$router.push({
          name: "editarFilme",
          query: { id: this.id, nome:this.nomeFilme}
        });

      this.$toastr.Add({
          timeout: 2000,
          msg: 'Filme editado'
        });
        setTimeout(function() { 
              window.location = "/editarRemoverFilme"
          }, 2000);
      })

    }
    else if(fotoFilme.files[0]){
      console.log('existe foto');
      var id = this.id;
        
        // console.log(id);

      var reader = new FileReader();
      reader.readAsDataURL(fotoFilme.files[0]);
      reader.onload = function() {
        this.nomeFilme = nomeFilme.value;
        this.duracaoFilme = duracaoFilme.value;
        this.anoFilme = anoFilme.value;
        this.realizadorFilme = realizadorFilme.value;
        this.elencoFilme = elencoFilme.value;
        this.linguagemFilme = linguagemFilme.value;
        this.descricaoFilme = descricaoFilme.value;
        this.imdbFilme = imdbFilme.value;
        this.categoriaFilme = document.getElementById("select").value;
        this.precoFilme = precoFilme.value;
        this.fotoFilme = reader.result;
        this.id2 = id;


        console.log(this.id2);

        axios({
          method: "post",
          url: "http://localhost:4000/EditarFilme",

          data: {
            nomeFilme: this.nomeFilme,
            duracaoFilme: this.duracaoFilme,
            anoFilme: this.anoFilme,
            realizadorFilme: this.realizadorFilme,
            elencoFilme: this.elencoFilme,
            linguagemFilme: this.linguagemFilme,
            descricaoFilme: this.descricaoFilme,
            imdbFilme: this.imdbFilme,
            categoriaFilme: this.categoriaFilme,
            precoFilme: this.precoFilme,
            file: reader.result,
            id : this.id2,
          },
        });
      };

      this.$router.push({
          name: "editarFilme",
          query: { id: this.id, nome:this.nomeFilme}
        });

      this.$toastr.Add({
        timeout: 2000,
        msg: "Filme editado",
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
        document.title = to.meta.title || 'Editar Filme | VideoClube';
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