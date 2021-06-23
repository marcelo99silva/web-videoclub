<template>
 <nav>
      <div class="nomeLoja">
          
          <!-- <router-link v-if="this.$route.params.name === admin" class="butoes" to="/">fwe</router-link> -->
          <router-link class="butoes" to="/">VideoClube</router-link>
          
          <!-- <h3 v-else-if=" this.$route.params == '/admin'" class="user" > ergegre</h3> -->
          <!-- <a class="butoes" href="/">VideoClube</a> -->
          </div>
      <div class="menu-item">
            <div v-if="this.$session.has('user')" class="cart">
                <router-link class="butoes" to="/areaCliente">{{this.$session.get('user')}} <v-icon class="logout" medium color="#B71C1C" @click="logout()"> mdi-logout </v-icon></router-link>
            </div>
          
            <router-link v-else  class="butoes" to="/login">Login / Registar</router-link>
          </div>
  </nav>
</template>

<script>
export default {
    name: 'MenuBar',


    methods:{
        logout: function(){
            this.$session.destroy()
            window.location = "/" 

        }
    }

}

</script>

<style>

nav {
    display:flex;
     /* align-items: center;
    justify-content: center; */
} 

.nomeLoja{
    margin-left: 15px;
    width: 30%;
    font-size: 35px;
    font-weight: bold;
    color: white;
}
.menu-item{
    margin-top: 7px;
    width: 65%;
    text-align: right;
    font-size: 17px ;
    /* display: inline; */
}

.butoes:link, .butoes:visited {
  color: white;
  text-decoration: none;
  /* cursor: pointer; */
}

.user {
    color: white;
   
    

}
.logout{
    margin-left: 10px;
    margin-bottom: 2px;

}

.cart{
    display: block ruby;
}

</style>