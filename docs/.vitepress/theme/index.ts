import DefaultTheme from 'vitepress/theme'
import CustomHome from './components/CustomHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: CustomHome,
}
