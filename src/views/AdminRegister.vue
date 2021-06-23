// 
<template>
    <v-app>
        <header>
      <MenuBarAdmin/>
    </header>
        
        <!-- <h1>cd</h1> -->
        <v-content>
            <v-container class="fill-height mt-8" fluid>
                <v-row align='center' justify="center" class="mt-n16">
                    <v-col cols="12" sm="8"  md="8"  >
                        <v-card class="elevation-12 ">
                            <v-window v-model="step">
                               <v-window-item :value="1">
                                   <v-row class="fill-height">
                                       <v-col cols="12" md="4" class="teal darken-3">
                                           <v-card-text class="white--text mt-12">
                                               <h1 class="text-center display-1">Área do Administrador</h1>
                                                <h5 class="text-center mt-15">Introduza as informações do novo admin</h5>
                                           </v-card-text>
                                           <!-- <div class="text-center mb-5">
                                               <v-btn rounded outlined  dark @click="step++">Log in</v-btn>
                                           </div> -->
                                       </v-col>
                                       <v-col cols="12" md="8">
                                           <v-card-text class="mt-12">
                                               <h1 class="text-center display-2 teal--text text--darken-3">Criar Admin</h1>
                                               <div class="text-center mt-4 mb-8">
                                                   <v-btn class="mx-2" fab color="black" outlined>
                                                       <v-icon>fab fa-facebook-f</v-icon>
                                                   </v-btn>
                                                   <v-btn class="mx-2" fab color="black" outlined>
                                                       <v-icon>fab fa-facebook-f</v-icon>
                                                   </v-btn>
                                                   <v-btn class="mx-2" fab color="black" outlined>
                                                       <v-icon>fab fa-facebook-f</v-icon>
                                                   </v-btn>
                                               </div>
                                               <!-- <h4 class="text-center mt-4">Ensure your email</h4> -->
                                                <v-form class="gg">
                                                   <v-text-field class="g2"
                                                   label="Nome"
                                                   name="Nome"
                                                   v-model='NomeRegisto'
                                                   type="text" 
                                                   color="teal darken-3"/>

                                                   <v-text-field class="g2"
                                                   label="Username"
                                                   name="Userneme"
                                                   v-model='UsernameRegisto'
                                                   type="text"
                                                   color="teal darken-3"/>    

                                                   <v-text-field class="g2"
                                                   label="Email"
                                                   name="Email"
                                                   v-model='EmailRegisto'
                                                   type="text"
                                                   color="teal darken-3"/>

                                                   <v-text-field class="g2"
                                                   label="Password"
                                                   name="Password"
                                                   v-model='PasswordRegisto'
                                                   type="password"
                                                   color="teal darken-3"/>     

                                                   <v-text-field class="g2"
                                                   label="Idade"
                                                   name="Idade"
                                                   v-model='IdadeRegisto'
                                                   type="number"
                                                   color="teal darken-3"/>

                                                   <v-text-field class="g2"
                                                   label="Telemovel"
                                                   name="Telemovel"
                                                   v-model='TelemovelRegisto'
                                                   type="number"
                                                   color="teal darken-3"
                                                   @keyup.enter="Registar()"/>
                                               </v-form>
                                           </v-card-text>

                                           <div class="text-center mb-5">
                                                <v-btn rounded color="teal darken-3" dark @click="Registar()">Criar</v-btn>
                                           </div>

                                       </v-col>
                                    </v-row>      
                               </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col> 
                </v-row>
            </v-container>
        </v-content>
    <!-- </div> -->
    </v-app>
</template>


<script>
import axios from "axios";
import VueToast from 'vue-toast-notification'
import toastr from 'vue-toastr'
import bcrypt from 'bcryptjs';
// import VueSession from 'vue-session'
// var VueSession = require('vue-session',
// vue.use(VueSession)
// Vue.use(VueSession)

// Vue.use(VueToast);

export default {
    data: () => ({
        step: 1,
        // Email: "",
        // Password: "",
        NomeRegisto: "",
        UsernameRegisto: "",
        EmailRegisto: "",
        PasswordRegisto: "",
        IdadeRegisto: "",
        TelemovelRegisto: ""


    }),
    props: {
        source: String
    },

    components: {
        MenuBarAdmin: () => import("../components/MenuBarAdmin")
    },

    mounted(){
      if(!this.$session.has('admin')){
        window.location = "/admin"

      }
  },

    methods:{
        Registar: function(){
             if(this.NomeRegisto.length > 0 && this.UsernameRegisto.length > 0 && this.EmailRegisto.length > 0 && this.PasswordRegisto.length > 0 && this.IdadeRegisto.length > 0 && this.TelemovelRegisto.length > 0){
                console.log('esta a funcionar o registo admin');
                // console.log( bcrypt.hash("teste", 8) );
                //porta do node e nao do vue
                axios({
                    method: "post",
                    url: "http://localhost:4000/registoAdmin", 
                data: {
                    nome: this.NomeRegisto,
                    username: this.UsernameRegisto,
                    email: this.EmailRegisto,
                    password: bcrypt.hashSync(this.PasswordRegisto, 8),
                    idade: this.IdadeRegisto,
                    telemovel: this.TelemovelRegisto,
                },
                })
                
                .then(()=>{
                    this.$toastr.Add({
                        timeout: 2000,
                        msg: 'Admin criado com sucesso!'
                    });

                    this.NomeRegisto= "",
                    this.UsernameRegisto = "",
                    this.EmailRegisto = "",
                    this.PasswordRegisto = "",
                    this.IdadeRegisto = "",
                    this.TelemovelRegisto = ""

                    // var temporizador = setTimeout(() => {
                    //     window.location = "/login"
                    // }, 2000);
                })
            }
            else{
                this.$toastr.e("Preencha os campos todos!");
            }

        }
    },
  
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Registo de Admin | VideoClube';
            }
        },
    }
};

</script>

<style >
.ggg{
    margin-bottom: 100px;
    color: red;
    font-size: 100px;
}
.gg{
    display: flex;
    flex-wrap: wrap;
    flex: 0 70%;
    
}

.g2{
    flex: 0 50%;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
