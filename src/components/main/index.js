import Handlebars from 'handlebars'
import mainTmpl from './main.tmpl'

const render = Handlebars.compile(mainTmpl, { noEscape: true })

export default {
  render,
  template: mainTmpl
}
