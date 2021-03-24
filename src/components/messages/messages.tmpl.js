export default `
  <ul class="messages">
  {{#each contentList}}
    <li class="messages__row {{this.class}}">
      {{this.content}}
    </li>
  {{/each}}
  </ul>
`.trim()
