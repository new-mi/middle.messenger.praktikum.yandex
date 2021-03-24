export default {
  classes: {
    datetime: 'messages__row--datetime',
    person: 'messages__row--person',
    my: 'messages__row--my'
  },
  contentList: [
    {
      type: 'datetime',
      datetime: '19 июня'
    },
    {
      type: 'person',
      children: [
        {
          datetime: '11:56',
          content: `<p>
                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
              </p>
              <p>
                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
              </p>`
        },
        {
          isImage: true,
          src: 'https://images.unsplash.com/photo-1584537541185-e2b60c6fe844?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
          datetime: '11:56',
        }
      ]
    },
    {
      type: 'my',
      children: [
        {
          datetime: '11:56',
          content: `<p>Круто!</p>`
        }
      ]
    }
  ]
}
