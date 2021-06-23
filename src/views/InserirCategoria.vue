<template>
  <div class="teste">
    <header>
      <MenuBarAdmin/>
    </header>
      <!-- <h1 class="tituloInserir2" margin="100px">Cfewfw</h1> -->

      <div class="divInserirCategoria">
        <h1 class="tituloInserir" align='center' justify="center" margin="100px">Criar Categoria</h1>
      </div>

      <div class="divInserir">

        <div class="divInserirCol">
       
          <span >Nome: <br></span>
          <input class="inputInserir" type="text" v-model="nomeCategoria">
          <v-btn class="botaoCategoria" color="#009688" @click="criarCategoria()">Criar<v-icon right dark>mdi-cloud-upload</v-icon></v-btn>
        </div>
      </div>

<!-- Div listagem categorias -->
      <div class="divListarCategoria">
        <h1 class="tituloInserir" align='center' justify="center" margin="100px">Lista de Categoria</h1>
      </div>

      <div class="divLista">
        <div class="divListaCol">

          <table class="tableDiv"  ref="tableCategoria1">
          <tr class="table" v-for="x in categorias" :key="x.id" ref="tableCategoria"> 

            <td class="tableTd">
              <span class="spanCategoria">{{x.nome}}</span>
              <v-btn class="botaoEliminar" color="#E53935" @click="EliminarCategoria(x.idCategoria)">Eliminar<v-icon right dark>mdi-delete</v-icon></v-btn>
            </td> 



             <!-- <td class="table"><span>{{x.idCategoria}}</span></td>  -->
          </tr>
          <!-- <tr> 
            <td><span>{{x.idCategoria}}</span></td> 
          </tr> -->
</table>
          <!-- Meter a lista das categorias -->

        </div>
      </div>


  </div>
</template>

<script>
import axios from "axios";
/***********/
// import * as FilePond from 'filepond';
// import 'filepond/dist/filepond.min.css';





export default {
  data() 
  // (
    {
      return{
        nomeCategoria : "",
        categorias: [],
    }
    },
   // ),


    //name: 'InserirArtista',

    components: {
    MenuBarAdmin: () => import("../components/MenuBarAdmin")
  },

  mounted(){
      if(!this.$session.has('admin')){
        window.location = "/admin"
      }

    axios({
      method: "get",
      url: "http://localhost:4000/categoria", 
    })
    .then((response) =>{
      //console.log(response.data);
      this.categorias = response.data;
    });
    // console.log('response')
  },

  methods:{
    criarCategoria: function(){
      if(this.nomeCategoria.length > 0){
        console.log('esta a funcionar o categoria');
        //porta do node e nao do vue
        axios({
          method: "post",
          url: "http://localhost:4000/criaCategoria", 
          data: {
            nomeCategoria: this.nomeCategoria,  
          },
        }).then(()=>{
          this.$toastr.Add({
            timeout: 2000,
            msg: 'Categoria criada'
          });
          this.nomeCategoria= ""
          axios({
            method: "get",
            url: "http://localhost:4000/categoria", 
          })
          .then((response) =>{
            console.log("fvhjnvjnev")
            //console.log(response.data);

            // this.$refs.tableCategoria1.refresh();

            this.categorias = response.data;
            // this.$refs.tableCategoria.refresh();
            //  this.$refs.tableCategoria1.refresh();
          });

            // location.reload()
            // this.$refs.tableCategoria.refresh();
            // this.$refs.tableCategoria1.refresh();
        })
      }else{
        this.$toastr.e("Preencha os campos todos");
        //console.log(categorias)
      }
    },

    EliminarCategoria: function(idCategoria){
      axios({
        method: "post",
        url: "http://localhost:4000/eliminaCategoria", 
          data: {
            id: idCategoria,
          },
    })
    
    .then(()=>{
      this.$toastr.Add({
        timeout: 2000,
        msg: 'Categoria eliminada'
      });
          
      axios({
        method: "get",
        url: "http://localhost:4000/categoria", 
      })
      .then((response) =>{
        console.log("eliminou");
        this.categorias = response.data;
      });
    })














      // ----
    //   axios({
    //   method: "get",
    //   url: "http://localhost:4000/categoria", 
    // })
    // .then((response) =>{
    //   console.log("fvhjnvjnev")
    //   //console.log(response.data);
      
    //   // this.$refs.tableCategoria1.refresh();
      
    //    this.categorias = response.data;
    // });
    }
  },
  
  watch: {
      $route: {
          immediate: true,
          handler(to, from) {
              document.title = to.meta.title || 'Categorias | VideoClube';
          }
      },
  }
  };
</script>



<style>


.teste{
  /* height: 100vh; */
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

.divInserirCategoria{
  /* height: 100px; */
  background-color: #00695C;
  margin: 0px 250px;
  padding-bottom: 10px;
  padding-top: 50px;
  margin-top: 100px;
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

.divInserir{
  border:2px solid #00695C;
  background-color: white;
  /* height: 100px; */
  /* background-color: #00695C; */
  margin: 0px 250px;
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

.divInserirCol{
  display: flex;
  margin: 0px 60px;
  margin-bottom: 30px; 
  justify-content: center;
}

.divListaCol{
  display: flex;
  margin: 0px 60px;
  margin-bottom: 30px; 
  padding-left: 50px; 
}

.inputInserir{
  border-bottom: 1px solid black;
  
  margin-bottom: auto;
  margin-left:20px ;
  width: 450px;
  
}

.inputInserir2{
  border-bottom: 1px solid black;
  margin-top: auto;
  margin-left:20px ;
  width: 300px;
  /* padding-left: 100px; */
  
}
.botaoCategoria{
  /* border: 2px solid black; */
  margin-left: 20px;
}

.botaoEliminar{
  /* margin: auto; */
  width: 60%;
  margin-left: 20px;
  float: right;
}

.tableTd{
  border: 2px solid black;
  min-width: 210px;
}

.tableDiv{
  display: flex;
  flex-wrap: wrap;
  width: 100%;

}

.table{
  height: 60px;
  flex: 0 33%;
}

.spanCategoria{
  padding-left: 10px;
  margin-top: 20px;
}
</style>