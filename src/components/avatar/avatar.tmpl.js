export default `
  <div class="avatar {{class}}">
    {{#if imageSrc}}<img src="{{imageSrc}}" />{{/if}}
    {{#if overlay}}<span class="avatar__overlay">{{contentOverlay}}</span>{{/if}}
    {{#if placeholder}}
    <div class="avatar__placeholder">
      {{contentPlaceholder}}
    </div>
    {{/if}}
  </div>
`.trim()
