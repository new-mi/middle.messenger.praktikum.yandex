export default `
  <div class="menu-block {{class}}">
    {{contentButton}}
    <div class="menu-block__wrap">
      <ul class="menu-block__list">
        {{#each contentList}}
          <li class="menu-block__item">
            {{this}}
          </li>
        {{/each}}
      </ul>
    </div>
  </div>
`.trim()
