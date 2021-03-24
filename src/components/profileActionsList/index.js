import Handlebars from 'handlebars'
import profileActionsListTmpl from './profileActionsList.tmpl'

const render = Handlebars.compile(profileActionsListTmpl, { noEscape: true })

export default {
  render,
  template: profileActionsListTmpl
}
