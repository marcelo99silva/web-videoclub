<template>
    <div class="teste">
        <header><MenuBarAdmin/></header>

        <div>
            <div class="divInfoHeader">
                <h2 class="titulo" align='center' justify="center" margin="100px">Artista > {{nomeRota}} </h2>
            </div>

     <div class="divInserir">
      <div class="divInserirCol">
        <span>Nome: <br /></span>
        <input
          class="inputInserirNome"
          type="text"
          id="nomeArtista"
          name="nomeArtista"
          v-model="nomeArtista"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Nacionalidade:<br /></span>
        <input
          class="inputInserir"
          type="text"
          id="nacionalidade"
          name="nacionalidade"
          v-model="nacionalidade"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Foto:<br /></span>
        <input
          class="inputInserir2"
          type="file"
          id="fotoArtista"
          name="fotoArtista"
          placeholder="erhhgthj"
        />
      </div>

      <div class="divInserirCol">
        <span> <br />Idade:<br /></span>
        <input
          class="inputInserirPreco"
          type="number"
          prefix="€"
          step=".01"
          min="0"
          id="idade"
          name="idade"
          v-model="idade"
        />
      </div>«

<div class="divButoes">
      <v-btn class="butaoArtista" color="#009688" @click="editarArtista()">Editar<v-icon right dark>mdi-cloud-upload</v-icon></v-btn>
        <v-btn class="botaoCancelar" color="#E53935" @click="goBack()">Cancelar<v-icon right dark>mdi-keyboard-backspace</v-icon></v-btn>
        </div>
    </div>
            
        </div>
        
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'EditarArtista',

    data() {
        return {
            id: this.$route.query.id,
            nomeRota: this.$route.query.nome,
            nomeArtista: "",
            nacionalidade: this.nacionalidade,
            file : this.fotoArtista,
            idade: this.idade,
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
            url: "http://localhost:4000/infoArtista?id=" + this.$route.query.id,
        })
        .then((response) =>{
            this.nomeArtista = response.data[0].nome;
            this.nacionalidade = response.data[0].linguagem;
            this.idade = response.data[0].preco;
        });
    },

    methods: {

        goBack(){
            window.location = "/editarRemoverArtistas";
        },

        editarArtista(){
            if(this.nomeArtista.length > 0 &&
                this.nacionalidade.length > 0 &&
                !fotoArtista.files[0] &&
                idade.value.length > 0){

                axios({
                    method: "post",
                    url: "http://localhost:4000/EditarArtista", 
                    data: {
                        nomeArtista: this.nomeArtista,
                        nacionalidade: this.nacionalidade,
                        idade: this.idade,
                        id: this.id,
                    },
                        })
                .then(()=>{
                    this.$router.push({
                    name: "editarArtista",
                    query: { id: this.id, nome:this.nomeArtista}
                    });

                this.$toastr.Add({
                    timeout: 2000,
                    msg: 'Artista editado'
                    });
                    setTimeout(function() { 
                        window.location = "/editarRemoverArtistas"
                    }, 2000);
                })

            }
            else if(fotoArtista.files[0]){
                console.log('existe foto');
                var id = this.id;
                var reader = new FileReader();
                reader.readAsDataURL(fotoArtista.files[0]);
                reader.onload = function() {
                    this.nomeArtista = nomeArtista.value;
                    this.nacionalidade = nacionalidade.value;
                    this.idade = idade.value;
                    this.fotoArtista = reader.result;
                    this.id2 = id;


                    console.log(this.id2);

                    axios({
                        method: "post",
                        url: "http://localhost:4000/EditarArtista",

                        data: {
                            nomeArtista: this.nomeArtista,
                            nacionalidade: this.nacionalidade,
                            idade: this.idade,
                            file: reader.result,
                            id : this.id2,
                        },
                    });
                };

                this.$router.push({
                    name: "editarArtista",
                    query: { id: this.id, nome:this.nomeArtista}
                });

                this.$toastr.Add({
                    timeout: 2000,
                    msg: "Artista editado",
                });

                var temporizador = setTimeout(() => {
                        location.reload()
                }, 2000);
            }
            else{
                this.$toastr.e("Preencha os campos todos");
            }
        }
    },
  
    watch: {
        $route: {
        immediate: true,
        handler(to, from) {
            document.title = to.meta.title || 'Editar Artista | VideoClube';
        }
        },
    }
}
</script>



<style>

.teste{
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