export default `
  <div class="input-group {{class}}">
    <label class="input-group__label">
      <input type="{{type}}" name="{{name}}" class="input-group__input" placeholder=" ">
      <span class="input-group__label-span">{{label}}</span>
      <span class="input-group__error-message">{{errorMessage}}</span>
    </label>
  </div>
`.trim()
