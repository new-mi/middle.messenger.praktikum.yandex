const filterChatListItem = (input) => {
  const value = input.value.toLowerCase()
  const $chatListItems = document.querySelectorAll('.chat-list__item')

  $chatListItems.forEach((item) => {
    const name = item.querySelector('.chat-item__name')
    if (name && name.textContent.toLowerCase().indexOf(value) > -1) {
      item.hidden = false
    } else {
      item.hidden = true
    }
  })
}

export default {
  filterChatListItem
}
