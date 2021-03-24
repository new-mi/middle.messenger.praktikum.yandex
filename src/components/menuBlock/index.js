import Handlebars from 'handlebars'
import menuBlockData from './menuBlock.data'
import menuBlockTmpl from './menuBlock.tmpl'

const render = Handlebars.compile(menuBlockTmpl, { noEscape: true })

export default {
  render,
  data: menuBlockData,
  template: menuBlockTmpl
}
