<template>
    <div class="teste">
        <header><MenuBarAdmin/></header>

        <div class="infoAdmin">
            <div class="divInfoHeader">
                <h1 class="titulo" align='center' justify="center" margin="100px">Editar Informação de Conta</h1>
            </div>
            <div align='center' justify='center'>
                <div class="divInfoBody">
                    <div class="divInfoBodyLine">
                        <span>Nome: </span>
                        <input v-model="nome" style="margin-left:30px">
                    </div>
                    <div class="divInfoBodyLine">
                        <span>Email: </span>
                        <input v-model="email" style="margin-left:30px">
                    </div>
                    <div class="divInfoBodyLine">
                        <span>Telemóvel: </span>
                        <input v-model="telemovel">
                    </div>
                    <div class="divInfoBodyLine">
                        <span>Password: </span>
                        <input v-model="passwordForm" type="password" style="margin-left:5px">
                    </div>
                    <div class="DivMudarPassword">
                        <p style="margin-bottom:20px">Se deseja alterar a password preencha os campos seguintes: </p>
                        <div class="divInfoBodyLine">
                            <span>Password Nova: </span>
                            <input v-model="passwordNova1" type="password" style="margin-left:32px">
                        </div>
                        <div class="divInfoBodyLine">
                            <span>Confirmar Password: </span>
                            <input v-model="passwordNova2" type="password"/>
                        </div>
                    </div>
                    <v-btn class="botaoConfirmar" color="#009688" @click="editarInfoAdmin()">Confirmar<v-icon right dark>mdi-account-check</v-icon></v-btn>
                    <v-btn class="botaoCancelar" color="#E53935" @click="goBack()">Cancelar<v-icon right dark>mdi-keyboard-backspace</v-icon></v-btn>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import axios from "axios";
import bcrypt from 'bcryptjs';

export default {
    name: 'Teste',

    data: () => ({
        infoAdmin: [],
        nome: "",
        email: "",
        telemovel: "",
        password: "",
        passwordForm: "",
        passwordNova1: "",
        passwordNova2: "",
    }),
    components: {
        MenuBarAdmin: () => import("../components/MenuBarAdmin")
    },
    
    mounted(){
        if(!this.$session.has('admin')){
        window.location = "/admin"
      }

        axios({
            method: "post",
            url: "http://localhost:4000/infoAdmin",
            data: {
                username: this.$session.get('admin')
            },
        })
        .then((response) =>{
            this.Admin = response.data[0];
            this.nome = response.data[0].nome;
            this.email = response.data[0].email;
            this.telemovel = response.data[0].telemovel;
            this.password = response.data[0].password;
        });
    },
    methods: {
        goBack(){
            window.location = "/MinhaInformacao";
        },
        editarInfoAdmin(){
            if( bcrypt.compareSync(this.passwordForm, this.password) ){
                if(this.passwordNova1 != ""){
                    if(this.passwordNova1 === this.passwordNova2){
                        axios({
                            method: "post",
                            url: "http://localhost:4000/EditarInfoAdmin",
                            data: {
                                username: this.$session.get('admin'),
                                nome: this.nome,
                                email: this.email,
                                telemovel: this.telemovel,
                                password: bcrypt.hashSync(this.passwordNova1, 8),
                            },
                        })
                        .then((response) =>{
                            window.location = "/MinhaInformacao"
                        });
                    }
                    else{
                        console.log('Passwords não coincidem')
                        this.$toastr.e("As passwords não coincidem");
                    }
                }
                else{
                    axios({
                        method: "post",
                        url: "http://localhost:4000/EditarInfoAdmin",
                        data: {
                            username: this.$session.get('admin'),
                            nome: this.nome,
                            email: this.email,
                            telemovel: this.telemovel,
                        },
                    })
                    .then((response) =>{
                        window.location = "/MinhaInformacao"
                    });
                }
            }else{
                console.log('Password Admin errada')
                this.$toastr.e("Password errada");
            }
        }
    }
}
</script>



<style>

.teste{
    height: 100vh;
    background-color: rgb(221, 221, 221);;
}

.titulo{ 
    margin-top: -40px;
}

.divInfoHeader{
    background-color: #00695C;
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 50px;
    margin-top: 100px;
}

.divInfoBody{
    border:2px solid #00695C;
    background-color: white;
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 50px;
}

.divInfoBodyLine{
    display: flex;
    margin: 0px 60px;
    margin-bottom: 30px;
}

.divInfoBodyLine span {
    margin-right: 30px;
}

.botaoConfirmar{
    margin-left: 20px;
}

.botaoCancelar{
    margin-left: 20px;
}


input {
    border-style: solid;
}
</style>