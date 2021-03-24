import Handlebars from 'handlebars'
import chatFooterTmpl from './chatFooter.tmpl'

const render = Handlebars.compile(chatFooterTmpl, { noEscape: true })

export default {
  render,
  template: chatFooterTmpl
}
