export default `
  <ul class="profile-actions-list">
    {{#each contentList}}
      <li class="profile-actions-list__item">
         {{this}}
      </li>
    {{/each}}
  </ul>
`.trim()
