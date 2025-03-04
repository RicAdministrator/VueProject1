import { createApp } from 'vue'
import App from './App.vue'
import Navigation from './components/Navigation.vue'
import Heroes from './components/Heroes.vue'
import HeroItem from './components/HeroItem.vue'
import HeroesTable from './components/HeroesTable.vue'
import FieldValidation from './components/FieldValidation.vue'
import EnableDisableForm from './components/EnableDisableForm.vue'
import FormBasedOnRole from './components/FormBasedOnRole.vue'
import OtherVueConcepts from './components/OtherVueConcepts.vue'

const app = createApp(App)
app.component('navigation', Navigation)
app.component('heroes', Heroes)
app.component('hero-item', HeroItem)
app.component('heroes-table', HeroesTable)
app.component('field-validation', FieldValidation)
app.component('enable-disable-form', EnableDisableForm)
app.component('form-based-on-role', FormBasedOnRole)
app.component('other-vue-concepts', OtherVueConcepts)
app.mount('#app')
