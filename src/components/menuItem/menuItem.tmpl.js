export default `
  <button type="button" class="menu-item {{class}}" {{#if click}}onclick="chat.{{click}}"{{/if}}>
    {{contentIcon}}
    <span class="menu-item__text">{{text}}</span>
  </button>
`.trim()
