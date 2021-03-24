import Handlebars from 'handlebars'
import profileBlockData from './profileBlock.data'
import profileBlockTmpl from './profileBlock.tmpl'

const render = Handlebars.compile(profileBlockTmpl, { noEscape: true })

export default {
  render,
  data: profileBlockData,
  template: profileBlockTmpl
}
