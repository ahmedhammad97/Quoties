import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'


library.add(faQuoteRight)
library.add(faQuoteLeft)
library.add(faLightbulb)

Vue.component('font-awesome-icon', FontAwesomeIcon)
