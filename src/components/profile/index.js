import Handlebars from 'handlebars'
import profileTmpl from './profile.tmpl'

const render = Handlebars.compile(profileTmpl, { noEscape: true })

export default {
  render,
  template: profileTmpl
}
