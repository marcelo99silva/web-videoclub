<template>
  <div class="teste">
    <header>
      <MenuBarAdmin/>
    </header>
      <h1 class="tituloInserir2" margin="100px">Cfewfw</h1>

      <div class="divInserirTitulo">
        <h1 class="tituloInserir" align='center' justify="center" margin="100px">Criar Artista</h1>
      </div>


 <!-- <form action="#" id="form1"> -->
      <div class="divInserir">
     
        <div class="divInserirCol">
       
        <span >Nome: <br></span>
        <!-- <v-text-field label="Nome do artista" required ></v-text-field> -->
        <input class="inputInserirNome" type="text" id="nomeArtista"  name="nomeArtista" v-model="nomeArtista"  >
        </div>
 

        <div class="divInserirCol">
         <span> <br>Idade:  <br></span>
        <input class="inputInserir" type="number" id="idadeArtista" min="0" nome="idadeArtista" v-model="idadeArtista">
        </div>

        <div class="divInserirCol">
         <span> <br>Nacionalidade:  <br></span>
        <input class="inputInserir" type="text" id="nacionalidadeArtista" nome="nacionalidadeArtista" v-model="nacionalidadeArtista">
        </div>
        
        <div class="divInserirCol">
         <span > <br>Foto: <br></span>
        <input class="inputInserir2" type="file" id="fotoArtista" ref="fotoArtista" name="fotoArtista" >
        </div>

        <v-btn class="butaoArtista" color="#009688" @click="RegistarArtista">Criar<v-icon right dark>mdi-cloud-upload</v-icon></v-btn>


      </div>
      <!-- </form> -->
  </div>
    
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import axios from "axios";
import FormData from 'form-data'

/***********/
// import * as FilePond from 'filepond';
// import 'filepond/dist/filepond.min.css';





export default {
    name: 'InserirArtista',

    data: () => {
      return{
      nomeArtista: "",
      idadeArtista: "",
      nacionalidadeArtista: "",
      fotoArtista: "",
      // foto64 : "",
   }
    },

    components: {
    MenuBarAdmin: () => import("../components/MenuBarAdmin")
  },

  mounted(){
      if(!this.$session.has('admin')){
        window.location = "/admin"
      }
  },

  methods: {
   RegistarArtista: function(){
       if(this.nomeArtista.length > 0 && this.idadeArtista.length > 0 && this.nacionalidadeArtista.length > 0 ){
      // console.log(nomeArtista.value);


      // function getBase64() {
      var reader = new FileReader();
      reader.readAsDataURL(fotoArtista.files[0]);
      reader.onload = function () {
        //  console.log(reader.result);
        //  console.log(nomeArtista.value);
        this.nomeArtista = nomeArtista.value;
        this.idadeArtista = idadeArtista.value;
        this.nacionalidadeArtista = nacionalidadeArtista.value;
        this.fotoArtista = reader.result;

        axios({
            method: "post",
            url: "http://localhost:4000/criaArtista", 
            data: {
              nomeArtista: this.nomeArtista,
              idadeArtista: this.idadeArtista,
              nacionalidadeArtista: this.nacionalidadeArtista,
              file: reader.result,
            },
        })
      };

          this.$toastr.Add({
              timeout: 2000,
              msg: 'Artista criado com sucesso!'
          });
          setTimeout(function() { 
              window.location = "/painelAdmin"
          }, 2000);
      }
      else{
          this.$toastr.e("Preencha os campos todos");
          //alert('preenche tudo registo');
      }
    }
  },
  
  watch: {
      $route: {
          immediate: true,
          handler(to, from) {
              document.title = to.meta.title || 'Inserir Artista | VideoClube';
          }
      },
  }
};
</script>



<style>

.teste{
  height: 900px;
  background-color: rgb(221, 221, 221);
}

.tituloInserir{ 
  /* padding-top: -10px ; */
  margin-top: -40px;
    
    /* align=center,
     justify="center",
      margin="100px" */

}

.tituloInserir2{
  color: #dddddd;
  margin-bottom: 50px;
  /* color:red; */
  /* background-color:powderblue; */
}

.divInserirTitulo{
  /* height: 100px; */
  background-color: #00695C;
  margin: 0px 250px;
  padding-bottom: 10px;
  padding-top: 50px;
  /* margin-top: 50px; */
  /* padding-bottom: 100px; */
}

.divInserir{
  border:2px solid #00695C;
  background-color: white;
  margin: 0px 250px;
  padding-bottom: 10px;
  padding-top: 50px;

  display: flex;
  flex-wrap: wrap;
}

.divInserirCol{
  display: flex;
  margin: 0px 40px 0px 50px;
  margin-bottom: 30px; 
  margin-top: auto;
  margin-right: auto;
  flex: 0 40%;
}

.inputInserir{
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  margin-left:20px ;
  width: 300px;
  padding-left: 10px;
  
}

.inputInserirNome{
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  margin-left:72px ;
  width: 300px;
  padding-left: 10px;
  
}
.inputInserir2{
  outline: none;
  border-bottom: 1px solid black;
  margin-top: auto;
  margin-left:20px ;
  width: 300px;
  padding-left: 10px;
  /* padding-left: 100px; */
  
}

.butaoArtista{
  margin: 0px 180px;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}
</style>