export default `
  <div class="profile-block">
    {{contentAvatar}}
    {{contentName}}
    {{#if isForm}} <form class="profile-block__form" onsubmit="chat.form.submit(this);return false;">{{/if}}
      <ul class="profile-block__list">
          {{#each contentList}}
          <li class="profile-block__list-item">
            {{this}}
          </li>
          {{/each}}
      </ul>
      <div class="profile-block__actions">
      {{contentActions}}
      </div>
    {{#if isForm}}</form>{{/if}}

  </div>
`.trim()
