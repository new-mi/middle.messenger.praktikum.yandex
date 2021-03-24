import Handlebars from 'handlebars'
import iconData from './icon.data'
import iconTmpl from './icon.tmpl'

const render = Handlebars.compile(iconTmpl, { noEscape: true })

export default {
  render,
  data: iconData,
  template: iconTmpl
}
