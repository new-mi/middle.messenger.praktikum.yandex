export default {
  contentList: [
    {
      label: 'Почта',
      type: 'email',
      name: 'email',
      value: 'pochta@yandex.ru'
    },
    {
      label: 'Логин',
      type: 'text',
      name: 'login',
      value: 'ivanivanov'
    },
    {
      label: 'Имя',
      type: 'text',
      name: 'first_name',
      value: 'Иван'
    },
    {
      label: 'Фамилия',
      type: 'text',
      name: 'second_name',
      value: 'Иванов'
    },
    {
      label: 'Имя в чате',
      type: 'text',
      name: 'display_name',
      value: 'Иван'
    },
    {
      label: 'Телефон',
      type: 'phone',
      name: 'phone',
      value: '+7 (909) 967 30 30'
    }
  ],
  contentListPassword: [
    {
      label: 'Старый пароль',
      type: 'password',
      name: 'old_password',
      value: 'password'
    },
    {
      label: 'Новый пароль',
      type: 'password',
      name: 'new_password',
      value: 'newnewpassword'
    },
    {
      label: 'Повторите новый пароль',
      type: 'password',
      name: 'new_password_confirm',
      value: 'newnewpassword'
    }
  ]
}
