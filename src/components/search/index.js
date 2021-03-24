import Handlebars from 'handlebars'
import searchTmpl from './search.tmpl'

const render = Handlebars.compile(searchTmpl, { noEscape: true })

export default {
  render,
  template: searchTmpl
}
