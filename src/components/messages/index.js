import Handlebars from 'handlebars'
import messagesData from './messages.data'
import messagesTmpl from './messages.tmpl'

const render = Handlebars.compile(messagesTmpl, { noEscape: true })

export default {
  render,
  data: messagesData,
  template: messagesTmpl
}
