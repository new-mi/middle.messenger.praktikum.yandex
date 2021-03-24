import Handlebars from 'handlebars'
import chatItemTmpl from './chatItem.tmpl'

const render = Handlebars.compile(chatItemTmpl, { noEscape: true })

export default {
  render,
  template: chatItemTmpl
}
