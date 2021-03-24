export default `
  <div class="profile-item {{class}}">
    <span class="profile-item__label">{{label}}</span>
    <input type="{{type}}" name="{{name}}" class="profile-item__value" {{#if isDisabled}}disabled{{/if}} value="{{value}}" />
  </div>
`.trim()
