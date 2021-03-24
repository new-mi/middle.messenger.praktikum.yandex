import Handlebars from 'handlebars'
import enterFormTmpl from './enterForm.tmpl'

const render = Handlebars.compile(enterFormTmpl, { noEscape: true })

export default {
  render,
  template: enterFormTmpl
}
