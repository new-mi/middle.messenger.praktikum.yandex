export default `
  <div class="search">
    <input type="text" class="search__input" oninput="chat.search.filterChatListItem(this)" placeholder=" ">
    <p class="search__placeholder">{{contentIcon}}<span>{{text}}</span></p>
  </div>
`.trim()
