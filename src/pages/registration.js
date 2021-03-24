import layout from '../layout'
import enterBox from '../components/enterBox'
import enterForm from '../components/enterForm'
import inputGroup from '../components/inputGroup'
import button from "../components/button";
import link from "../components/link";
import {renderInDOM} from "../utils/render";

const enterFormContentMain = ['email', 'login', 'firstName', 'lastName', 'phone', 'password', 'passwordConfirm'].map(dataType => {
  return inputGroup.render({
    ...inputGroup.data[dataType],
    class: 'enter-form__input-group'
  })
}).join('')

const enterFormContentActions = [
  button.render(button.data.registration),
  link.render(link.data.registration)
].join('')

const enterBoxContent = enterForm.render({
  class: 'enter-box__form',
  contentMain: enterFormContentMain,
  contentActions: enterFormContentActions
})

const layoutContent = enterBox.render({
  ...enterBox.data.registration,
  content: enterBoxContent
})

const template = layout.render({
  ...layout.data.enter,
  content: layoutContent
})

renderInDOM(document.querySelector('#app'), template)
