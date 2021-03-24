import Handlebars from 'handlebars'
import errorData from './error.data'
import errorTmpl from './error.tmpl'

const render = Handlebars.compile(errorTmpl, { noEscape: true })

export default {
  render,
  data: errorData,
  template: errorTmpl
}
