import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'
import router from './router/'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import Select2 from 'vue3-select2-component'


//----------------------------------------------------
//import adminlte styles
//----------------------------------------------------
//Font Awesome
import '../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css'
//DataTables
import '../node_modules/admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css'
import '../node_modules/admin-lte/plugins/datatables-select/css/select.bootstrap4.min.css'
import '../node_modules/admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'
import '../node_modules/admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css'
import '../node_modules/admin-lte/plugins/datatables-fixedcolumns/css/fixedColumns.bootstrap4.min.css'
//iCheck for checkboxes and radio inputs
import '../node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
//Select2
import '../node_modules/select2/dist/css/select2.min.css'
//import '../node_modules/admin-lte/plugins/select2/css/select2.min.css'
import '../node_modules/admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'
//Bootstrap4 Duallistbox
import '../node_modules/admin-lte/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css'
//Theme style
import '../node_modules/admin-lte/dist/css/adminlte.min.css'
//Toastr
import '../node_modules/admin-lte/plugins/toastr/toastr.min.css'

//----------------------------------------------------
//import adminlte scripts
//----------------------------------------------------
//jQuery
import "../node_modules/admin-lte/plugins/jquery/jquery.min.js"
//Bootstrap 4
import "../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
//Bootstrap4 Duallistbox
import "../node_modules/admin-lte/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"
//AdminLTE App
import "../node_modules/admin-lte/dist/js/adminlte.min.js"
//InputMask
import "../node_modules/admin-lte/plugins/inputmask/jquery.inputmask.min.js"
//Toastr
import "../node_modules/admin-lte/plugins/toastr/toastr.min.js"
//Select2日本語化
import '../node_modules/select2/dist/js/i18n/ja.js'

const app = createApp(App)
app.use(router)
app.component('Datepicker', Datepicker)
app.component('Select2', Select2)
app.mount('#app')

