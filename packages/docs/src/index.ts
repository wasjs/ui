import { App } from 'vue'
import './scss/index.scss'

import Button from './components/button'

const components = {
  Button
}

function install(Vue: App) {
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }