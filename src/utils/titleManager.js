// Утилита для управления title страницы
export const titleManager = {
  baseTitle: 'Искатели профессий | Личный кабинет',
  
  // Обновляет title страницы
  setTitle(pageTitle = '') {
    if (pageTitle) {
      document.title = `${pageTitle} | ${this.baseTitle}`
    } else {
      document.title = this.baseTitle
    }
  },
  
  // Получает title для конкретной страницы
  getPageTitle(routeName) {
    const titles = {
      'login': 'Вход в систему',
      'expert-register': 'Регистрация эксперта',
      'parent-register': 'Регистрация родителя',
      'curator-register': 'Регистрация куратора',
      'email-confirmation': 'Подтверждение email',
      'parent-dashboard': 'Дашборд родителя',
      'parent-competencies': 'Выбор компетенций',
      'parent-my-competencies': 'Мои компетенции',
      'parent-achievements': 'Достижения',
      'mentor-dashboard': 'Дашборд наставника',
      'mentor-participants': 'Участники',
      'mentor-my-certificates': 'Мои сертификаты',
      'mentor-participants-certificates': 'Сертификаты участников',
      'expert-dashboard': 'Дашборд эксперта',
      'expert-competencies': 'Компетенции',
      'expert-participants': 'Участники компетенции',
      'expert-documents': 'Документы компетенции',
      'expert-events': 'События и рассылки',
      'curator-dashboard': 'Дашборд куратора',
      'curator-experts': 'Главные эксперты',
      'curator-documents': 'Документы',
      'curator-venue-info': 'Информация о площадке'
    }
    
    return titles[routeName] || ''
  }
}
