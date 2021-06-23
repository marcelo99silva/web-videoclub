<template>
    <div class="FilmesHome">

        <div >
           <div class="divListarFilmes">
        <h2 class="tituloInserir" align='center' justify="center">Filmes</h2>
        <button class="butaoFilme" id="butaoFilmeDestaque" @click="DestaqueFilme()">Destaque</button>
        <!-- <button class="butaoFilme2" id="butaoFilmeVendas" @click="VendaFilme()">Top Vendas</button> -->
        <button class="butaoFilme2" id="butaoFilmeImdb" @click="ImdbFilme()">Mais votados IMDB</button>
        <div class="divSeparador">
         <!-- <img src="../assets/separadorVertical.png" class="imagemSeparador" height="10px"> -->
        
         
        <input type="text" placeholder="Procure um filme" class="inputStyle" name="search" id="search" @keyup.enter="clickEnter()">
          <button type="submit" href="https://www.google.com/" width="30px"  ><i class="fa fa-search"></i></button>
<!-- </div> -->

 </div>


      </div>

      <div class="divLista">
        <div class="divListaCol">

            <div class="divCard">

           <v-card
           :title="x.nome"
           class="cardInicial"
       max-width="170"
        v-for="x in filmes"
    v-bind:key="x.nome"

  @click="clicarImagem(x.idFilmeSerie, x.nome)"

 
  >
    <v-img
     

      :src= "x.foto"
      
      height="200px"
      class="imagemFilme"
    ></v-img>
  </v-card>

  </div>
</div>
</div>
</div>

    <div class="ddd"  style="width:300px ; margin:auto">
      <img src="../assets/separador.png">
    </div>


         <div >
           <div class="divListarSeries">
        <h2 class="tituloInserir" align='center' justify="center">Series</h2>
        <button class="butaoFilme" id="butaoSerieDestaque" @click="DestaqueSerie()">Destaque</button>
        <!-- <button class="butaoFilme2" id="butaoSerieVendas"  @click="VendasSerie()">Top Vendas</button> -->
        <button class="butaoFilme2" id="butaoSerieImdb"  @click="ImdbSerie()">Mais votados IMDB</button>

         <input type="text" placeholder="Procure uma serie" class="inputStyle" name="search" id="search2" @keyup.enter="clickEnter2()">
          <button type="submit"><i class="fa fa-search"></i></button>
        
      </div>

      <div class="divLista2">
        <div class="divListaCol">

            <div class="divCard">

           <v-card

           :title="x.nome"
           class="cardInicial"
       max-width="170"
       v-for="x in series"
    v-bind:key="x.nome"
     @click="clicarImagemSerie(x.idFilmeSerie, x.nome)"

  >
    <v-img
      :src= "x.foto"


      height="200px"
      class="imagemFilme"
    ></v-img>
  </v-card>

  </div>
</div>
</div>
</div>        
</div>
    
      
</template>

<script>
import axios from 'axios'
export default {
    name: 'MenuBar2',

    data: () => ({
      // show: false,
      filmes: [],
      series: [],
    //   image: '',
    }),


    mounted(){
      axios({
            method: "get",
            url: "http://localhost:4000/filmeHome", 
          })
          .then((response) =>{
            console.log(response.data);
            this.filmes = response.data;
          });

     axios({
            method: "get",
            url: "http://localhost:4000/serieHome", 
          })
          .then((response) =>{
            console.log(response.data);
            this.series = response.data;
          });
  },

    methods: {
      clickEnter: function() {
         this.$router.push({
        name: "infoComprarFilmeName",
        query: {nome: document.getElementById('search').value}
      });  
    },

    clickEnter2: function() {
         this.$router.push({
        name: "infoComprarSerieName",
        query: {nome: document.getElementById('search2').value}
      });
    },

      clicarImagem(idFilme,nomeFilme){

        this.$router.push({
        name: "infoComprarFilme",
        query: { id: idFilme, nome:nomeFilme}
      });
      },

      clicarImagemSerie(idFilme,nomeFilme){

        this.$router.push({
        name: "infoComprarSerie",
        query: { id: idFilme, nome:nomeFilme}
      });


      },

      DestaqueFilme: function(){
        document.getElementById('butaoFilmeDestaque').style.color = "#3461E7"
        // document.getElementById('butaoFilmeVendas').style.color= "black"
        document.getElementById('butaoFilmeImdb').style.color= "black"

         axios({
            method: "get",
            url: "http://localhost:4000/filmeHome", 
          })
          .then((response) =>{
            console.log(response.data);
            this.filmes = response.data;
          });
      },

      VendaFilme: function(){
        // document.getElementById('butaoFilmeVendas').style.color= "#3461E7"
        document.getElementById('butaoFilmeDestaque').style.color = "black"
        document.getElementById('butaoFilmeImdb').style.color = "black"
      },

      ImdbFilme: function(){
        document.getElementById('butaoFilmeImdb').style.color= "#3461E7"
        document.getElementById('butaoFilmeDestaque').style.color = "black"
        // document.getElementById('butaoFilmeVendas').style.color= "black"


      axios({
            method: "get",
            url: "http://localhost:4000/filmeHomeImdb", 
          })
          .then((response) =>{
            console.log(response.data);
            this.filmes = response.data;
          });

      },

      DestaqueSerie: function(){
        document.getElementById('butaoSerieDestaque').style.color = "#3461E7"
        // document.getElementById('butaoSerieVendas').style.color= "black"
        document.getElementById('butaoSerieImdb').style.color= "black"

        axios({
            method: "get",
            url: "http://localhost:4000/serieHome", 
          })
          .then((response) =>{
            console.log(response.data);
            this.series = response.data;
          });
      },

      VendasSerie: function(){
        // document.getElementById('butaoSerieVendas').style.color= "#3461E7"
        document.getElementById('butaoSerieDestaque').style.color = "black"
        document.getElementById('butaoSerieImdb').style.color = "black"
      },

      ImdbSerie: function(){
        document.getElementById('butaoSerieImdb').style.color = "#3461E7"
        // document.getElementById('butaoSerieVendas').style.color= "black"
        document.getElementById('butaoSerieDestaque').style.color = "black"


        axios({
            method: "get",
            url: "http://localhost:4000/serieHomeImdb", 
          })
          .then((response) =>{
            console.log(response.data);
            this.series = response.data;
          });
      }



    }

}
</script>

<style>

.separador{
  width: 100%;
height: 2px;
background-image: url(${separador});
clear: both;
margin: 25px 0;
}

.FilmesHome{
  margin-top: -50px;
}

.divLista{
  border:2px solid #00695C;
  background-color: white;
  margin: 0px 250px;
  /* padding-bottom: 10px; */
  padding-top: 30px;
  margin-bottom: 35px;
}

.divLista2{
  border:2px solid #00695C;
  background-color: white;
  margin: 0px 250px;
  /* padding-bottom: 10px; */
  padding-top: 30px;
  margin-bottom: 100px;

}

.divListaCol{
 display: flex;
 /* margin: 0px 0px; */
 /* margin-bottom: 10px;  */
 padding-left: 50px; 
}

.divListarFilmes{
  /* height: 100px; */
  
  background-color: #00695C;
  margin: 0px 250px;
  margin-top: 100px;
  padding-bottom: 10px;
  padding-top: 10px;
  /* margin-top: 50px; */
  /* padding-bottom: 100px; */
}

.divListarSeries{
  /* height: 100px; */
  
  background-color: #00695C;
  margin: 0px 250px;
  margin-top: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  /* margin-top: 50px; */
  /* padding-bottom: 100px; */
}

.tituloInserir{
  display:inline-block;
  padding-left: 30px;
  font-size: 25px;
}

.butaoFilme{
  width: 155px;  
  margin-left: 60px;
  border: 1px rgb(255, 255, 255) solid;
  padding: 8px 10px;
  color: rgb(52, 97, 231);
  border-radius: 10px;
  background-color: rgb(221, 221, 221);
}

.butaoFilme2{
  width: 155px;  
  margin-left: 10px;
  border: 1px white solid;
  padding: 8px 10px;
  border-radius: 10px;
  background-color: rgb(221, 221, 221);
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

.inputStyle{
  float: right;
  border: 1px solid black;
  width: 200px;
  padding: 8px 10px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  /* margin-right: 100px; */
  outline: none
}

.divSeparador{
  display: inline;
  width: 100px;
  height: 50px;
}

.imagemSeparador{
  height: 25px;
  /* margin-bottom: 5px; */
  /* width: 5px; */
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  margin-bottom: 0;
  /* float: right; */
  margin-left: 130px;
}

.imagemFilme{
  border: 1px solid black;
  width: 170px;
}

</style>