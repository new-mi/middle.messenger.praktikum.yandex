import Handlebars from 'handlebars'
import chatHeaderTmpl from './chatHeader.tmpl'

const render = Handlebars.compile(chatHeaderTmpl, { noEscape: true })

export default {
  render,
  template: chatHeaderTmpl
}
