<template>
    <div class="teste">
        <header><MenuBar/></header>
        <!-- <h1 class="h1">Pagina teste Admin</h1> -->

        <div class="divTitulo">
            <h1 class="titulo" align='center' justify="center" margin="100px">Lista de Compras</h1>
        </div>

        <div class="divLista">
            <div class="divListaCol">
                <div class="divCard">
                    <v-card
                        style=" border: 1px solid rgb(98, 98, 98);" 
                        class="cardInicial"
                        v-for="x in compras"
                        v-bind:key="x.idCompra"
                    >
                        <v-card-title>ID Compra: {{x.idCompra}}</v-card-title>
                        <v-card-subtitle>
                            {{x.tipoProduto}}: {{x.nomeProduto}}
                            <br>
                            Preço Total: {{x.precoTotal}}
                            <br>
                            Quantidade: {{x.quantidade}}
                            <br>
                            Data: {{x.data}}
                        </v-card-subtitle>
                    </v-card>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import moment from 'moment'

export default {
    name: 'ComprasCliente',
    data: () => ({
        compras: []
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
            url: "http://localhost:4000/comprasCliente",
            data: {
                username: this.$session.get('userid')
            },
        })
        .then((response) =>{
            this.compras = response.data[0];
            this.compras.forEach(comprasEl => {
                comprasEl.data = moment(comprasEl.data).format('DD MMMM YYYY, H:mm:ss');
                response.data[1].forEach(dataEl =>{
                    if(comprasEl.idProduto == dataEl.idFilmeSerie){
                        comprasEl.nomeProduto = dataEl.nome;
                        if(dataEl.idTipoProduto == 1){
                            comprasEl.tipoProduto = "Filme";
                        }else{
                            comprasEl.tipoProduto = "Série";
                        }
                    }
                });
            });
        });
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Compras | VideoClube';
            }
        },
    }
}


</script>



<style>

.titulo{ 
    margin-top: -40px;
}

.divTitulo{
    background-color: #00695C;
    margin: 0px 250px;
    margin-top: 100px;
    padding-bottom: 10px;
    padding-top: 50px;
}

.divLista{
    border:2px solid #00695C;
    background-color: white;
    margin: 0px 250px;
    padding-bottom: 10px;
    padding-top: 50px;
    margin-bottom: 100px;
}

.divListaCol{
    display: flex;
    margin: 0px 0px;
    margin-bottom: 30px; 
    padding-left: 50px; 
}

.spanCompra{
    padding-left: 10px;
    margin-top: 20px;
}

.cardInicial{
    margin-right: 30px;
    width: 280px;
    flex: 0 30%;
    margin-bottom: 40px;
}

.divCard{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

</style>