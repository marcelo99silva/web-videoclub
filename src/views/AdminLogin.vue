<template>
    <v-app>
        <header><MenuBarAdmin/></header>
        <!-- <h1>cd</h1> -->
        <v-content>
            <v-container class="fill-height " fluid>
                <v-row align='center' justify="center" class="mt-n16">
                    <v-col cols="12" sm="8"  md="8"  >
                        <v-card class="elevation-12 ">
                            <v-window>
                               <v-window-item :value="1" >
                                   <v-row>
                                       <v-col cols="12" md="8" >
                                           <v-card-text class="mt-12">
                                               <h1 class="text-center display-2 teal--text text--darken-3"> Entre no VideoClube</h1>
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
                                                   v-model='EmailAdmin'
                                                   type="text"
                                                   color="teal darken-3"/>

                                                   <v-text-field class="px-16"
                                                   label="Password"
                                                   name="Paasword"
                                                   v-model='PasswordAdmin'
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
                                           <v-card-text class="white--text mt-12">
                                               <h1 class="text-center display-1">Area do administrador</h1>
                                               <h5 class="text-center mt-15">Introduza as suas informações</h5>
                                           </v-card-text>
                                           <!-- <div class="text-center">
                                              // <v-btn rounded outlined="" dark @click="step++">Sign up</v-btn>
                                           </div> -->
                                       </v-col>
                                   </v-row>
                               </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col> 
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import axios from "axios";
import bcrypt from 'bcryptjs';

export default {
    data: () => ({
        EmailAdmin: "",
        PasswordAdmin: ""


    }),
    components: {
        MenuBarAdmin: () => import("../components/MenuBarAdmin")
    },
    methods:{
        login: function(){
            if(this.EmailAdmin.length > 0 && this.PasswordAdmin.length > 0){
                console.log('esta a funcionar');
                axios({
                    method: "post",
                    url: "http://localhost:4000/loginAdmin", 
                    //headers: {
                    //'content-type': "application/json;charset=utf-8"
                    //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    //},
                    data: {
                        email: this.EmailAdmin
                    },
                })
                .then( (response) => {
                    // console.log(response.data);
                    if(response.data.length > 0){
                        if( bcrypt.compareSync(this.PasswordAdmin, response.data[0].password) ){
                            this.$session.start()
                            this.$session.set('admin', response.data[0].username);
                            console.log('login Admin bem')
                            console.log(this.$session.get('admin'))
                            window.location = "/painelAdmin"
                        }
                        else{
                            console.log('Password Admin errada')
                            this.$toastr.e("Email ou password errado");
                        }
                    }else{
                        console.log('email Admin errado')
                        this.$toastr.e("Email ou password errado");
                    }
                })
    
            }else{
                // this.$session.destroy()
                this.$toastr.e("Preencha os campos todos!");
                // alert('preenche tudo');
                // console.log(this.$route)
            }
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Login Admin | VideoClube';
            }
        },
    },
    
    mounted(){
        if(this.$session.has('admin')){
            window.location = "/painelAdmin"
        }
    },
}
</script>



<style>
/* 
.teste{
  height: 100vh;
  background-color: rgb(221, 221, 221);;
} */

</style>