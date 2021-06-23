<template>
    <div class="containerMenu">
        <div class="menu2">
            <!-- <nav> -->

           
      <div class="submenu"><a class="butoes2" href="/listaFilmes">Filmes </a></div>
      <div class="submenu"><a class="butoes2" href="/listaSeries">Séries </a></div>
      <!-- <div class="submenu"><a class="butoes2" href="#">Animes </a></div> -->
      <div class="submenu"><a class="butoes2" href="/artistas">Artistas </a></div>
      <div class="submenu2"><a class="butoes2" href="/noticias">Notícias </a></div>
     
  


      <!-- <div class="ff">vf</div>
      <div class="ff">222</div> -->
  <!-- </nav> -->
        </div>
        
    </div>
    
      
      <!-- <div class="menu-item"><a href="#">Login / </a><a href="#">User</a></div> -->
</template>

<script>
export default {
    name: 'MenuBar2'

}
</script>

<style>

.containerMenu {
    /* height: 600px; */
    padding: 0px 10%;
    display:flex;
    align-items: center;
    justify-content: center; 
    margin-top: 30px;
    /* padding-bottom: 100px; */
} 

.menu2{


    /* margin-left: 15px;
    width: 30%; */
    /* width: 100%; */
    display:flex;
    padding: 0px 10px;
    margin-top: 50px;
    border-radius: 50px;
    background-color: #00695C;
    align-items: center;
    justify-content: center; 
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: black;
}

.submenu{
    border-right: 2px solid white;
}

.submenu2{
    padding: 0px 5px ;
}

.submenu, a{  
    padding: 0px 5px ;
    /* color: black; */
}

.butoes2:link, .butoes2:visited { 
  color: white;
  text-decoration: none;
  cursor: pointer;
}

</style>