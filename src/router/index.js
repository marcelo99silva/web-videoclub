import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginRegister.vue')
  },

  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminLogin.vue')
  },

  {
    path: '/painelAdmin',
    name: 'painelAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPainel.vue')
  },

  {
    path: '/painelAdminGestao',
    name: 'painelAdminGestao',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPainelGestaoSistema.vue')
  },

  {
    path: '/inserirArtista',
    name: 'inserirArtista',
    component: () => import(/* webpackChunkName: "about" */ '../views/InserirArtista.vue')
  },

  {
    path: '/inserirCategoria',
    name: 'inserirCategoria',
    component: () => import(/* webpackChunkName: "about" */ '../views/InserirCategoria.vue')
  },

  {
    path: '/inserirSerie',
    name: 'inserirSerie',
    component: () => import(/* webpackChunkName: "about" */ '../views/InserirSerie.vue')
  },

  {
    path: '/inserirFilme',
    name: 'inserirFilme',
    component: () => import(/* webpackChunkName: "about" */ '../views/InserirFilme.vue')
  },

  {
    path: '/minhaInformacao',
    name: 'minhaInformacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/MinhaInformacao.vue')
  },

  {
    path: '/EditarMinhaInformacao',
    name: 'EditarMinhaInformacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarMinhaInformacao.vue')
  },

  {
    path: '/editarRemoverFilme',
    name: 'editarRemoverFilme',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarRemoverFilme.vue')
  },

  {
    path: '/editarFilme',
    name: 'editarFilme',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarFilme.vue')
  },

  {
    path: '/consultarCompras',
    name: 'consultarCompras',
    component: () => import(/* webpackChunkName: "about" */ '../views/consultarCompras.vue')
  },


  {
    path: '/painelAdminFilme',
    name: 'painelAdminFilme',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPainelFilme.vue')
  },

  {
    path: '/painelAdminSerie',
    name: 'painelAdminSerie',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPainelSerie.vue')
  },

  {
    path: '/editarRemoverSerie',
    name: 'editarRemoverSerie',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarRemoverSerie.vue')
  },

  {
    path: '/editarSerie',
    name: 'editarSerie',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarSerie.vue')
  },

  {
    path: '/adminRegister',
    name: 'adminRegister',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminRegister.vue')
  },


  {
    path: '/infoComprarFilme',
    name: 'infoComprarFilme',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoComprarFilme.vue')
  },

  {
    path: '/infoComprarFilmeName',
    name: 'infoComprarFilmeName',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoComprarFilmeName.vue')
  },

  {
    path: '/infoComprarSerieName',
    name: 'infoComprarSerieName',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoComprarSerieName.vue')
  },

  {
    path: '/listaFilmes',
    name: 'listaFilmes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaFilmes.vue')
  },

  {
    path: '/listaSeries',
    name: 'listaSeries',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaSeries.vue')
  },


  {
    path: '/infoComprarSerie',
    name: 'infoComprarSerie',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoComprarSerie.vue')
  },

  {
    path: '/artistas',
    name: 'artistas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artistas.vue')
  },

  {
    path: '/noticias',
    name: 'noticias',
    component: () => import(/* webpackChunkName: "about" */ '../views/listaNoticias.vue')
  },

  {
    path: '/produtoFalta',
    name: 'noticprodutoFaltaias',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProdutoFalta.vue')
  },

  {
    path: '/areaCliente',
    name: 'areaCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/AreaCliente.vue')
  },

  {
    path: '/minhaInformacaoCliente',
    name: 'minhaInformacaoCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/MinhaInformacaoCliente.vue')
  },

  {
    path: '/editarMinhaInformacaoCliente',
    name: 'editarMinhaInformacaoCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarMinhaInformacaoCliente.vue')
  },

  {
    path: '/comprasCliente',
    name: 'comprasCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComprasCliente.vue')
  },

  {
    path: '/painelAdminArtista',
    name: 'painelAdminArtista',
    component: () => import(/* webpackChunkName: "about" */ '../views/PainelAdminArtista.vue')
  },

  {
    path: '/editarRemoverArtistas',
    name: 'editarRemoverArtistas',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarRemoverArtistas.vue')
  },
  
  {
    path: '/editarArtista',
    name: 'editarArtista',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarArtista.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
