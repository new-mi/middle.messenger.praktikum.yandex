import Handlebars from 'handlebars'
import menuItemTmpl from './menuItem.tmpl'

const render = Handlebars.compile(menuItemTmpl, { noEscape: true })

export default {
  render,
  template: menuItemTmpl
}
