import Handlebars from 'handlebars'
import enterBoxData from './enterBox.data'
import enterBoxTmpl from './enterBox.tmpl'

const render = Handlebars.compile(enterBoxTmpl, { noEscape: true })

export default {
  render,
  data: enterBoxData,
  template: enterBoxTmpl
}
