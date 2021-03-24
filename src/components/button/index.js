import Handlebars from 'handlebars'
import buttonData from './button.data'
import buttonTmpl from './button.tmpl'

const render = Handlebars.compile(buttonTmpl, { noEscape: true })

export default {
  render,
  data: buttonData,
  template: buttonTmpl
}

