import layout from '../layout'
import aside from '../components/aside'
import main from '../components/main'
import link from '../components/link'
import icon from '../components/icon'
import search from '../components/search'
import chatList from '../components/chatList'
import chatItem from '../components/chatItem'
import avatar from '../components/avatar'
import name from '../components/name'
import { renderInDOM } from '../utils/render';

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

const layoutContent = [
  aside.render({
    class: 'layout__aside',
    contentProfile: asideContentProfile,
    contentSearch: asideContentSearch,
    contentMain: asideContentMain
  }),
  main.render({
    class: 'layout__main',
    isEmpty: true,
    emptyText: 'Выберите чат чтобы отправить сообщение'
  })
].join('')

const template = layout.render({
  ...layout.data.chat,
  content: layoutContent
})

renderInDOM(document.querySelector('#app'), template)
