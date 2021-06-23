<template>
  <div class="teste">
    <header>
      <MenuBarAdmin />
    </header>
    <h1 class="tituloInserir2" margin="100px">Cfewfw</h1>

    <div class="divInserirTitulo">
      <h1 class="tituloInserir" align="center" justify="center" margin="100px">
        Criar Série
      </h1>
    </div>

    <div class="divInserir">
      <div class="divInserirCol">
        <span>Nome: <br /></span>
        <!-- <v-text-field label="Nome do artista" required ></v-text-field> -->
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
          id="temporadaSerie"
          name="temporadaSerie"
          v-model="temporadaSerie"
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
        <!-- <v-text-field label="Nome do artista" required ></v-text-field> -->
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
          id="imdbSerie"
          min="0"
          max="10"
          name="imdbSerie"
          v-model="imdbSerie"
          step=".1"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Foto:<br /></span>
        <input
          class="inputInserir2"
          type="file"
          id="fotoSerie"
          name="fotoSerie"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Preço:<br /></span>
        <input
          class="inputInserirPreco"
          type="number"
          id="precoSerie"
          min="0"
          name="precoSerie"
          v-model="precoSerie"
          step=".01"
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

      <v-btn class="butaoArtista" color="#009688" @click="RegistarSerie()"
        >Criar<v-icon right dark>mdi-cloud-upload</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() // (
  {
    return {
      nomeSerie: "",
      temporadaSerie: "",
      anoSerie: "",
      realizadorSerie: "",
      elencoSerie: "",

      linguagemSerie: "",
      descricaoSerie: "",
      imdbSerie: "",
      fotoSerie: "",
      precoSerie: "",
      categorias: [],
    };
  },

  name: "InserirSerie",

  components: {
    MenuBarAdmin: () => import("../components/MenuBarAdmin"),
  },

  mounted() {

      if(!this.$session.has('admin')){
        window.location = "/admin"
      }

    axios({
      method: "get",
      url: "http://localhost:4000/categoria",
    }).then((response) => {
      this.categorias = response.data;
    });
  },

  methods: {
    RegistarSerie: function() {
      if (
        this.nomeSerie.length > 0 &&
        this.temporadaSerie.length > 0 &&
        this.anoSerie.length > 0 &&
        this.realizadorSerie.length > 0 &&
        this.elencoSerie.length > 0 &&
        this.linguagemSerie.length > 0 &&
        this.descricaoSerie.length > 0 &&
        this.imdbSerie.length > 0 &&
        this.precoSerie.length > 0
      ) {
        var reader = new FileReader();
        reader.readAsDataURL(fotoSerie.files[0]);
        reader.onload = function() {
          this.nomeSerie = nomeSerie.value;
          this.temporadaSerie = temporadaSerie.value;
          this.anoSerie = anoSerie.value;

          this.realizadorSerie = realizadorSerie.value;
          this.elencoSerie = elencoSerie.value;
          this.linguagemSerie = linguagemSerie.value;

          this.descricaoSerie = descricaoSerie.value;
          this.imdbSerie = imdbSerie.value;
          this.categoriaSerie = document.getElementById("select").value;
          this.precoSerie = precoSerie.value;
          this.fotoSerie = reader.result;

          axios({
            method: "post",
            url: "http://localhost:4000/criaSerie",

            data: {
              nomeSerie: this.nomeSerie,
              temporadaSerie: this.temporadaSerie,
              anoSerie: this.anoSerie,
              realizadorSerie: this.realizadorSerie,
              elencoSerie: this.elencoSerie,
              linguagemSerie: this.linguagemSerie,
              descricaoSerie: this.descricaoSerie,
              imdbSerie: this.imdbSerie,
              categoriaSerie: this.categoriaSerie,
              precoSerie: this.precoSerie,
              file: reader.result,
            },
          });
        };
        this.$toastr.Add({
          timeout: 2000,
          msg: "Serie criada",
        });
        setTimeout(function() { 
            window.location = "/painelAdmin"
        }, 2000);
      } else {
        this.$toastr.e("Preencha os campos todos");
      }
    },
  },
  
  watch: {
      $route: {
          immediate: true,
          handler(to, from) {
              document.title = to.meta.title || 'Inserir Série | VideoClube';
          }
      },
  }
};
</script>

<style>
.teste {
  height: 900px;
  background-color: rgb(221, 221, 221);
}

.tituloInserir {
  margin-top: -40px;
}

.tituloInserir2 {
  color: #dddddd;
  margin-bottom: 50px;
  /* color:red; */
  /* background-color:powderblue; */
}

.divInserirTitulo {
  /* height: 100px; */
  background-color: #00695c;
  margin: 0px 250px;
  padding-bottom: 10px;
  padding-top: 50px;
  /* margin-top: 50px; */
  /* padding-bottom: 100px; */
}

.divInserir {
  border: 2px solid #00695c;
  background-color: white;
  /* height: 100px; */
  /* background-color: #00695C; */
  margin: 0px 250px;
  /* padding-bottom: 10px; */
  padding-top: 50px;

  display: flex;
  flex-wrap: wrap;
  /* flex: 0 90%; */
  /* margin-top: 50px; */
  /* padding-bottom: 100px; */
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
  margin-left: 9px;
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
  /* width: 300px; */
  /* padding-left: 100px; */
}

.butaoArtista {
  margin: 0px 180px;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
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

.divInserirColTextarea {
  display: flex;

  margin: 0px 40px 0px 50px;
  margin-bottom: 30px;
  flex: 0 90%;
  /* padding-left: 20px;
    padding-right: 20px; */
  margin-top: 10px;
  margin-right: auto;
}

.spawTextarea {
  /* margin: auto; */
  margin-top: auto;
  margin-bottom: auto;
  /* margin-bottom: 10px; */
  padding-bottom: 20px;
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
</style>
