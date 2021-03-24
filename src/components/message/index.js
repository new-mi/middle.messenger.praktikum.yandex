import Handlebars from 'handlebars'
import messageTmpl from './message.tmpl'

const render = Handlebars.compile(messageTmpl, { noEscape: true })

export default {
  render,
  template: messageTmpl
}
