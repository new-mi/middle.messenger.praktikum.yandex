export default `
    <button
      type="{{#if type}}{{type}}{{else}}{{button}}{{/if}}"
      class="button {{class}}"
      {{#if click}} onClick="chat.{{click}}" {{/if}}
    >{{content}}</button>
  `.trim()
