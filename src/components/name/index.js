import Handlebars from 'handlebars'
import nameTmpl from './name.tmpl'

const render = Handlebars.compile(nameTmpl)

export default {
  render,
  template: nameTmpl
}
