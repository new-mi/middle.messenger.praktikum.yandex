import layout from '../layout'
import profile from '../components/profile'
import profileBlock from '../components/profileBlock'
import profileItem from '../components/profileItem'
import link from '../components/link'
import icon from '../components/icon'
import button from '../components/button'
import avatar from '../components/avatar'
import name from '../components/name'
import profileActionsList from '../components/profileActionsList'
import {renderInDOM} from "../utils/render";


// profile
const profileBlockContentAvatar = button.render({
  ...button.data.avatar,
  content: avatar.render({
    class: 'avatar--big',
    overlay: true,
    placeholder: true,
    contentOverlay: 'Поменять аватар',
    contentPlaceholder: icon.render(icon.data.fileImageO)
  })
})

const profileBlockContentName = name.render({
  class: 'profile-block__name',
  text: 'Иван'
})

const profileBlockContentList = profileBlock.data.contentList.map(item => {
  return profileItem.render({
    label: item.label,
    type: item.type,
    isDisabled: true,
    value: item.value
  })
})

const profileBlockContentActions = profileActionsList.render({
  contentList: [link.data.profileChangeData, link.data.profileChangePassword, link.data.profileExit].map(item => {
    return link.render(item)
  })
})

const profileContentMain = profileBlock.render({
  contentAvatar: profileBlockContentAvatar,
  contentName: profileBlockContentName,
  contentList: profileBlockContentList,
  contentActions: profileBlockContentActions
})


// layout
const layoutContent = profile.render({
  contentButtonBack: link.render({
    ...link.data.profileBack,
    content: icon.render(icon.data.arrowLeft)
  }),
  contentMain: profileContentMain
})

const template = layout.render({
  ...layout.data.profile,
  content: layoutContent
})

renderInDOM(document.querySelector('#app'), template)
