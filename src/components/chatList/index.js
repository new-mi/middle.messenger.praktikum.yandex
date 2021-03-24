import Handlebars from 'handlebars'
import chatListData from './chatList.data'
import chatListTmpl from './chatList.tmpl'

const render = Handlebars.compile(chatListTmpl, { noEscape: true })

export default {
  render,
  data: chatListData,
  template: chatListTmpl
}
