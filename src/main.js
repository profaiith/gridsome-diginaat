import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/code-highlight.css"
import '~/assets/styles.css'


export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(BootstrapVue);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
