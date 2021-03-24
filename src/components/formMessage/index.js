import Handlebars from 'handlebars'
import formMessageTmpl from './formMessage.tmpl'

const render = Handlebars.compile(formMessageTmpl, { noEscape: true })

export default {
  render,
  template: formMessageTmpl
}
