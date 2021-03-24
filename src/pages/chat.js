import layout from '../layout'
import aside from '../components/aside'
import main from '../components/main'
import link from '../components/link'
import button from '../components/button'
import icon from '../components/icon'
import search from '../components/search'
import chatList from '../components/chatList'
import chatItem from '../components/chatItem'
import avatar from '../components/avatar'
import name from '../components/name'
import chatHeader from '../components/chatHeader'
import chatFooter from '../components/chatFooter'
import menuBlock from '../components/menuBlock'
import menuItem from '../components/menuItem'
import formMessage from '../components/formMessage'
import messages from '../components/messages'
import message from '../components/message'
import { renderInDOM } from '../utils/render';

// aside
const asideContentProfile = link.render({
  ...link.data.profile,
  content: [
    '<span>Профиль</span>',
    icon.render(icon.data.chevronRight)
  ].join('')
})

const asideContentSearch = search.render({
  contentIcon: icon.render(icon.data.search),
  text: 'Поиск'
})

const chatListContentList = chatList.data.contentList.map(item => {
  const chatItemContentAvatar = avatar.render({
    class: 'chat-item__avatar',
    imageSrc: item.imageSrc
  })

  const chatItemContentName = name.render({
    class: 'chat-item__name',
    text: item.name
  })

  return chatItem.render({
    ...item,
    contentAvatar: chatItemContentAvatar,
    contentName: chatItemContentName
  })
})

const asideContentMain = chatList.render({
  contentList: chatListContentList
});


// chat header
const menuBlockTopContentList = menuBlock.data.contentListTop.map(item => {
  return menuItem.render({
    ...item,
    contentIcon: icon.render({
      class: [icon.data[item.icon].class, 'menu-item__icon'].join(' ')
    }),
  })
})

const chatHeaderContentActions = menuBlock.render({
  class: 'menu-block--bottom-left',
  contentButton: button.render({
    ...button.data.menuBlockButton,
    content: icon.render(icon.data.ellipsisV)
  }),
  contentList: menuBlockTopContentList
})

const mainContentHeader = chatHeader.render({
  contentAvatar: avatar.render({
    class: 'avatar--small chat-header__avatar',
    imageSrc: ''
  }),
  contentName: name.render({
    class: 'chat-header__name',
    text: 'Андрей'
  }),
  contentActions: chatHeaderContentActions
})


// chat main
const messagesContentList = messages.data.contentList.map(item => {
  let messagesContent = ''
  if (item.datetime) {
    messagesContent = `<span>${item.datetime}</span>`
  } else {
    messagesContent = item.children.map(child => {
      let ctx = {}
      ctx.class = `message--${item.type}`
      ctx.contentDatetime = child.datetime
      if (child.isImage) {
        ctx.class += ' message--image'
        ctx.contentMessage = `<img src="${child.src}" />`
      } else {
        ctx.contentMessage = child.content
      }
      return message.render(ctx)
    }).join('')
  }
  return {
    class: messages.data.classes[item.type],
    content: messagesContent
  }
})

const mainContentMain = messages.render({
  contentList: messagesContentList
})


// chat footer
const menuBlockBottomContentList = menuBlock.data.contentListBottom.map(item => {
  return menuItem.render({
    contentIcon: icon.render({
      class: [icon.data[item.icon].class, 'menu-item__icon'].join(' ')
    }),
    text: item.text
  })
})

const chatFooterContentActions = menuBlock.render({
  class: 'menu-block--top-right',
  contentButton: button.render({
    ...button.data.menuBlockButton,
    content: icon.render(icon.data.paperclip)
  }),
  contentList: menuBlockBottomContentList
})

const chatFooterContentFormMessage = formMessage.render({
  placeholder: 'Сообщение',
  contentButton: button.render({
    ...button.data.formMessage,
    content: icon.render(icon.data.arrowRight)
  })
})

const mainContentFooter = chatFooter.render({
  contentActions: chatFooterContentActions,
  contentFormMessage: chatFooterContentFormMessage
})


// layout
const layoutContent = [
  aside.render({
    class: 'layout__aside',
    contentProfile: asideContentProfile,
    contentSearch: asideContentSearch,
    contentMain: asideContentMain
  }),
  main.render({
    class: 'layout__main',
    isEmpty: false,
    contentHeader: mainContentHeader,
    contentMain: mainContentMain,
    contentFooter: mainContentFooter
  })
].join('')

const template = layout.render({
  ...layout.data.chat,
  content: layoutContent
})

renderInDOM(document.querySelector('#app'), template)
