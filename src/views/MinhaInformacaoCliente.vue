<template>
    <div class="teste">
        <header><MenuBar/></header>

        <div class="infoAdmin">
            <div class="divInfoHeader">
                <h1 class="titulo" align='center' justify="center" margin="100px">Informação de Conta</h1>
            </div>
            <div align='center' justify='center'>
                <div class="divInfoBody">
                    <div class="divInfoBodyLine">
                        <span>Nome: <br></span>
                        <p v-html="nome" style="margin-left:10px"></p>
                    </div>
                    <div class="divInfoBodyLine">
                        <span>Email: <br></span>
                        <p v-html="email" style="margin-left:10px"></p>
                    </div>
                    <div class="divInfoBodyLine">
                        <span>Morada: <br></span>
                        <p v-html="morada"></p>
                    </div>
                    <v-btn class="botaoEditar" color="#009688" href="/editarMinhaInformacaoCliente">Editar<v-icon right dark>mdi-account-cog</v-icon></v-btn>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'MinhaInformacaoCliente',

    data: () => ({
        infoCliente: [],
        nome: "",
        email: "",
        morada: "",
    }),
    components: {
        MenuBar: () => import("../components/MenuBar")
    },
    mounted(){

        if(!this.$session.has('user')){
            window.location = "/login"
        }
        
        axios({
            method: "post",
            url: "http://localhost:4000/infoCliente",
            data: {
                username: this.$session.get('user')
            },
        })
        .then((response) =>{
            this.Admin = response.data[0];
            this.nome = response.data[0].nome;
            this.email = response.data[0].email;
            this.morada = response.data[0].morada;
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

.botaoEditar{
    margin-left: 20px;
}
</style>