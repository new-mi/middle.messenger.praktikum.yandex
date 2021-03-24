export default `
<aside class="aside {{class}}">
  <section class="aside__header">
    {{contentProfile}}
    <div class="aside__search">
      {{contentSearch}}
    </div>
  </section>
  <section class="aside__main">
    <div class="aside__main-inner">
      {{contentMain}}
    </div>
  </section>
</aside>
`.trim()
