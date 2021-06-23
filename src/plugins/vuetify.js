// import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import 'material-design-icons-iconfont/src/material-design-icons'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }
});
