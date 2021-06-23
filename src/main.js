import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueSession from 'vue-session'
import VueToast from 'vue-toast-notification';
import VueToastr from "vue-toastr";
// import vueFilePond from 'vue-filepond';

Vue.config.productionTip = false
Vue.use(VueSession)
Vue.use(VueToastr);
Vue.use(VueToast);

new Vue({
  router,
  store,
  vuetify,
  VueSession,
  // vueFilePond,
 // VueToast,
 // VueToast,
  render: h => h(App),

  // mounted() {
  //   // You are able to access plugin from everywhere via this.$toastr
  //   this.$toastr.defaultPosition = "toast-top-left";
  //   // Send message to browser screen
  //   this.$toastr.s(
  //     "This Message From Toastr Plugin\n You can access this plugin : <font color='yellow'>this.$toastr</font>"
  //   );
  // }

}).$mount('#app')
