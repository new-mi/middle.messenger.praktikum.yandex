import Handlebars from 'handlebars'
import linkData from './link.data'
import linkTmpl from './link.tmpl'

const render = Handlebars.compile(linkTmpl, { noEscape: true })

export default {
  render,
  data: linkData,
  template: linkTmpl
}
