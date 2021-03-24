import Handlebars from 'handlebars'
import avatarTmpl from './avatar.tmpl'

const render = Handlebars.compile(avatarTmpl, { noEscape: true })

export default {
  render,
  template: avatarTmpl
}
