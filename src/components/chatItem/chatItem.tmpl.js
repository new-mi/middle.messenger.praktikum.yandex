export default `
  <a href="{{href}}" class="chat-item" tabindex="1">
    {{contentAvatar}}
    <div class="chat-item__description">
      {{contentName}}
      <span class="chat-item__datetime">{{datetime}}</span>
      <p class="chat-item__last-message">{{lastMessageText}}</p>
      <span class="chat-item__count-new-message" {{#if isCountNewMessageHidden}}hidden{{/if}}>{{countNewMessage}}</span>
    </div>
  </a>
`.trim()
