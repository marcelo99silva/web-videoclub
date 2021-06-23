<template>
    <div class="teste">
        <header><MenuBarAdmin/></header>

        <div class="infoAdmin">
            <div class="divInfoHeader">
                <h1 class="titulo" align='center' justify="center" margin="100px">Informação de Conta</h1>
            </div>
            <div align='center' justify='center'>
                <div class="divInfoBody">
                    <div class="divInfoBodyLine">
                        <span>Nome: <br></span>
                        <p v-html="nome" style="margin-left:30px"></p>
                    </div>
                    <div class="divInfoBodyLine">
                        <span>Email: <br></span>
                        <p v-html="email" style="margin-left:30px"></p>
                    </div>
                    <div class="divInfoBodyLine">
                        <span>Telemóvel: <br></span>
                        <p v-html="telemovel"></p>
                    </div>
                    <v-btn class="botaoEditar" color="#009688" href="/EditarMinhaInformacao">Editar<v-icon right dark>mdi-account-cog</v-icon></v-btn>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import axios from "axios";

export default {
    name: 'Teste',

    data: () => ({
        infoAdmin: [],
        nome: "",
        email: "",
        telemovel: "",
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
        });
    },
  
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Informação de Conta | VideoClube';
            }
        },
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
    /*padding-top: -10px;*/
    /*align=center,
    justify="center",
    margin="100px"*/
}

.divInfoHeader{
    /*height: 100px; */
    background-color: #00695C;
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 50px;
    margin-top: 100px;
    /*padding-bottom: 100px; */
}

.divInfoBody{
    border:2px solid #00695C;
    background-color: white;
    /*height: 100px;*/
    /*background-color: #00695C;*/
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 50px;
    /*margin-top: 50px;*/
    /*padding-bottom: 100px;*/
}

.divInfoBodyLine{
    display: flex;
    margin: 0px 60px;
    margin-bottom: 30px;
}

.divInfoBodyLine span {
    margin-right: 30px;
}

.botaoEditar{
    /* border: 2px solid black; */
    margin-left: 20px;
}
</style>