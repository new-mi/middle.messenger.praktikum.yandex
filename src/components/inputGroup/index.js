import Handlebars from 'handlebars'
import inputGroupData from './inputGroup.data'
import inputGroupTmpl from './inputGroup.tmpl'

const render = Handlebars.compile(inputGroupTmpl)

export default {
  render,
  data: inputGroupData,
  template: inputGroupTmpl
}
