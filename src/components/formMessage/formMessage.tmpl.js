export default `
  <form class="form-message {{class}}" onsubmit="chat.form.submit(this);return false;">
    <input type="text" name="message" class="form-message__input" placeholder="{{placeholder}}">
    {{contentButton}}
  </form>
`.trim()
