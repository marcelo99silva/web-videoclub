// 
<template>
    <v-app>
        <header>
      <MenuBar/>
    </header>
        
        <!-- <h1>cd</h1> -->
        <v-content>
            <v-container class="fill-height " fluid>
                <v-row align='center' justify="center" class="mt-n16">
                    <v-col cols="12" sm="8"  md="8"  >
                        <v-card class="elevation-12 ">
                            <v-window v-model="step">
                               <v-window-item :value="1" >
                                   <v-row>
                                       <v-col cols="12" md="8" >
                                           <v-card-text class="mt-12" >
                                               <h1 class="text-center display-2 teal--text text--darken-3">Entre no VideoClube</h1>
                                               <div class="text-center mt-4 mb-8">
                                                   <v-btn class="mx-2" fab color="#00695C" outlined>
                                                       <v-icon>mdi-gmail</v-icon>
                                                   </v-btn>
                                                   <v-btn class="mx-2" fab color="#00695C" outlined>
                                                       <v-icon>mdi-facebook</v-icon>
                                                   </v-btn>
                                                   <v-btn class="mx-2" fab color="#00695C" outlined>
                                                       <v-icon>mdi-instagram</v-icon>
                                                   </v-btn>
                                               </div>
                                               <!-- <h4 class="text-center mlt-4">Ensure your email for registration</h4> -->
                                               <v-form>
                                                   <v-text-field class="px-16"
                                                   label="Email"
                                                   name="Email"
                                                   v-model='Email'
                                                   type="text"
                                                   color="teal darken-3"/>

                                                   <v-text-field class="px-16"
                                                   label="Password"
                                                   name="Paasword"
                                                   v-model='Password'
                                                   type="password"
                                                   color="teal darken-3"
                                                   @keyup.enter="login()"/>                                                  
                                               </v-form>
                                               <h3 class="text-center mt-3">Esqueceu-se da password?</h3>
                                           </v-card-text>
                                           <div class="text-center mt-3">
                                               <v-btn rounded color="teal darken-3 mb-5" dark @click="login()">Login</v-btn>
                                           </div>
                                       </v-col>
                                       <v-col cols="12" md="4" class="teal darken-3">
                                           <v-card-text class="black--text mt-12">
                                               <h1 class="text-center display-1">Seja bem-vindo !</h1>
                                               <h4 class="text-center mt-7 mb-10">Introduza as suas informações</h4>
                                           </v-card-text>
                                           <div class="text-center">
                                               <v-btn rounded outlined="" dark @click="step++">Criar conta</v-btn>
                                           </div>
                                       </v-col>
                                   </v-row>
                               </v-window-item>
                               <v-window-item :value="2">
                                   <v-row class="fill-height">
                                       <v-col cols="12" md="4" class="teal darken-3">
                                           <v-card-text class="white-text mt-12" >
                                               <h1 class="text-center display-1">Obrigado por nos escolher !</h1>
                                               <h4 class="text-center mt-8 mb-10">Insira as suas informações</h4>
                                           </v-card-text>
                                           <div class="text-center mb-5">
                                               <v-btn rounded outlined  dark @click="step++">Log in</v-btn>
                                           </div>
                                       </v-col>
                                       <v-col cols="12" md="8">
                                           <v-card-text class="mt-12">
                                               <h1 class="text-center display-2 teal--text text--darken-3">Criar Conta</h1>
                                               <div class="text-center mt-4 mb-8">
                                                    <v-btn class="mx-2" fab color="#00695C" outlined>
                                                        <v-icon>mdi-gmail</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="#00695C" outlined>
                                                        <v-icon>mdi-facebook</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="#00695C" outlined>
                                                        <v-icon>mdi-instagram</v-icon>
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
                                                   label="Nacionalidade"
                                                   name="Nacionalidade"
                                                   v-model='NacionalidadeRegisto'
                                                   type="text"
                                                   color="teal darken-3"/>

                                                   <v-text-field class="g2"
                                                   label="Morada"
                                                   name="Morada"
                                                   v-model='MoradaRegisto'
                                                   type="text"
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
        Email: "",
        Password: "",
        NomeRegisto: "",
        UsernameRegisto: "",
        EmailRegisto: "",
        PasswordRegisto: "",
        NacionalidadeRegisto: "",
        MoradaRegisto: ""


    }),
    props: {
        source: String
    },

    components: {
        MenuBar: () => import("../components/MenuBar")
    },
    methods:{
        login: function(){
            if(this.Email.length > 0 && this.Password.length > 0){
                console.log('esta a funcionar');
                axios({
                    method: "post",
                    url: "http://localhost:4000/login",
                    data: {
                        email: this.Email
                    },
                })
                .then( (response) => {
                    console.log(response);
                    if(response.data.length > 0){
                        if( bcrypt.compareSync(this.Password, response.data[0].password) ){
                            this.$session.start()
                            this.$session.set('user', response.data[0].username);
                            this.$session.set('userid', response.data[0].idUser);
                            console.log('login bem')
                            console.log(this.$session.get('user'))
                            window.location = "/"
                        }
                        else{
                            console.log('password errada')
                            this.$toastr.e("Email ou password errado!");
                        }
                    }
                    else{
                        console.log('email errado')
                        this.$toastr.e("Email ou password errado!");
                    }
                   
                })
    
            }else{
                // this.$session.destroy()
                this.$toastr.e("Preencha os campos todos!");
                //console.log(this.$route)
            }

        },

        Registar: function(){
             if(this.NomeRegisto.length > 0 && this.UsernameRegisto.length > 0 && this.EmailRegisto.length > 0 && this.PasswordRegisto.length > 0 && this.NacionalidadeRegisto.length > 0 && this.MoradaRegisto.length > 0){
                console.log('esta a funcionar o registo');
                console.log( bcrypt.hash("teste", 8) );
                //porta do node e nao do vue
                axios({
                    method: "post",
                    url: "http://localhost:4000/registo", 
                data: {
                    nome: this.NomeRegisto,
                    username: this.UsernameRegisto,
                    email: this.EmailRegisto,
                    password: bcrypt.hashSync(this.PasswordRegisto, 8),
                    nacionalidade: this.NacionalidadeRegisto,
                    morada: this.MoradaRegisto,
                },
                }).then(()=>{
                    this.$toastr.Add({
                        timeout: 2000,
                        msg: 'User criado com sucesso!'
                    });

                    this.NomeRegisto= "",
                    this.UsernameRegisto = "",
                    this.EmailRegisto = "",
                    this.PasswordRegisto = "",
                    this.NacionalidadeRegisto = "",
                    this.MoradaRegisto = ""

                    var temporizador = setTimeout(() => {
                        window.location = "/login"
                    }, 2000);
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
                document.title = to.meta.title || 'Login | VideoClube';
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
