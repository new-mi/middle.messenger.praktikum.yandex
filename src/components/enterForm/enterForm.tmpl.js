export default `
  <form name="enter-form" class="enter-form {{class}}" onsubmit="chat.form.submit(this);return false;">
    {{contentMain}}
    <div class="enter-form__actions">
      {{contentActions}}
    </div>
  </form>
`.trim()
