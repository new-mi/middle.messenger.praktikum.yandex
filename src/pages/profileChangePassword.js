import layout from '../layout'
import profile from '../components/profile'
import profileBlock from '../components/profileBlock'
import profileItem from '../components/profileItem'
import link from '../components/link'
import button from '../components/button'
import icon from '../components/icon'
import avatar from '../components/avatar'
import name from '../components/name'
import {renderInDOM} from "../utils/render";


// profile
const profileBlockContentAvatar = avatar.render({
  class: 'avatar--big profile-block__avatar',
  placeholder: true,
  contentPlaceholder: icon.render(icon.data.fileImageO)
})

const profileBlockContentName = name.render({
  class: 'profile-block__name profile-block__name--hidden',
  text: 'Иван'
})

const profileBlockContentList = profileBlock.data.contentListPassword.map(item => {
  return profileItem.render({
    label: item.label,
    type: item.type,
    name: item.name,
    isDisabled: false,
    value: item.value
  })
})

const profileContentMain = profileBlock.render({
  isForm: true,
  contentAvatar: profileBlockContentAvatar,
  contentName: profileBlockContentName,
  contentList: profileBlockContentList,
  contentActions: button.render(button.data.profileSave)
})


// layout
const layoutContent = profile.render({
  contentButtonBack: link.render({
    ...link.data.profileBackProfile,
    content: icon.render(icon.data.arrowLeft)
  }),
  contentMain: profileContentMain
})

const template = layout.render({
  ...layout.data.profile,
  content: layoutContent
})

renderInDOM(document.querySelector('#app'), template)
