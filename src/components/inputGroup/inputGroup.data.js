export default {
  login: {
    type: 'text',
    label: 'Логин',
    name: 'login',
    placeholder: 'Введите логин',
    errorMessage: 'Неверный логин'
  },
  password: {
    type: 'password',
    label: 'Пароль',
    name: 'password',
    placeholder: 'Введите пароль',
    errorMessage: 'Неверный пароль'
  },
  email: {
    type: 'email',
    label: 'Почта',
    name: 'email',
    placeholder: 'Введите почту',
    errorMessage: 'Неверная почта'
  },
  firstName: {
    type: 'text',
    label: 'Имя',
    name: 'first_name',
    placeholder: 'Введите имя',
    errorMessage: 'Неверное имя'
  },
  lastName: {
    type: 'text',
    label: 'Фамилия',
    name: 'second_name',
    placeholder: 'Введите фамилию',
    errorMessage: 'Неверная фамилия'
  },
  phone: {
    type: 'phone',
    label: 'Телефон',
    name: 'phone',
    placeholder: '+7 (XXX) XXX-XX-XX',
    errorMessage: 'Неверный телефон'
  },
  passwordConfirm: {
    type: 'password',
    label: 'Пароль (еще раз)',
    name: 'password_confirm',
    placeholder: 'Введите пароль еще раз',
    errorMessage: 'Пароли не совпадают'
  }
}
