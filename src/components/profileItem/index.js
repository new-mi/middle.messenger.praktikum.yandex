import Handlebars from 'handlebars'
import profileItemTmpl from './profileItem.tmpl'

const render = Handlebars.compile(profileItemTmpl, { noEscape: true })

export default {
  render,
  template: profileItemTmpl
}
