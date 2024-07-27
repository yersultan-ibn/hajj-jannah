export const partner = {
  personalInfo: {
    steps: {
      step1: {
        title: "Шаг 1/4",
        description: "Условия соглашения"
      },
      step2: {
        title: "Шаг 2/4",
        description: "Проверка документов"
      },
      step3: {
        title: "Шаг 3/4",
        description: "Данные о доходах"
      },
      step4: {
        title: "Шаг 4/4",
        description: "Подпись документов"
      }
    },
    userInfo: {
      inn: {
        label: 'ИНН',
        placeholder: 'Введите ИНН здесь'
      },
    },
    partnerDocument: {
      title: 'Данные о доходах',
      informationBelow: 'Заполните пожалуйста данные ниже',
      selectEmployment: 'Выберите тип занятости',
      employee: 'Наемный работник',
      fop: 'ФОП',
      income: 'Доход',
      incomeDocument: 'Документ о доходах',
      incomeDataLabel: 'Данные о доходах',
      workPlace: 'Место работы:',
      fopDeclaration: "Декларация ФОП",
      activityType: "Вид деятельности",
      select: "Выбрать",
      incomeInfo: "Укажите данные о доходах",
      quarterly: "Поквартально",
      yearly: "За год",
      quarterIncome: "Доход за квартал",
      lastYearIncome: "Данные за последний год",
      incomeDataSuccess: 'Вы успешно отправили данные о доходах!',
      incomeDataError: 'Ошибка отправки данных о доходах.',
      incomeDocumentPlaceholder: 'Прикрепите документ либо фото из ДИЯ (форма ОК5/7)',
      unemployed: 'Не работаю'
    },
    waitAutoDealer: {
      underwriter: 'рисковика',
      dealer: 'дилера',
      creditAdmin: 'кредитного администратора',
      partner: 'партнера',
      admin: 'админа',
      waitResponseFrom: 'Ожидайте ответ от',
      notifyYou: 'Мы дадим вам знать, когда автодилер пройдет проверку банка. Позже вы можете войти в личный кабинет через номер телефона, и продолжить процесс автокредитования.',
      WAITING: {
        title: 'Проводятся банковские проверки',
        desc: 'Мы дадим вам знать в виде СМС, когда банк закончит проверку'
      },
      COMPLETED: {
        title: 'Спасибо!',
        desc: 'Благодарим за уделенное время'
      },
      home: 'На главную'
    },
    confirmRules: {
      isPersonalData: {
        first: 'Я соглашаюсь на сбор и обработку ',
        second: 'Персональных данных ',
        third: 'и ',
        forth: 'Кредитной истории'
      },
      isPublicPerson: {
        first: 'Я не являюсь ',
        second: 'иностранным публичным должностным лицом',
      },
      isForeignAccounts: {
        first: 'На меня не распространяется ',
        second: 'положение Закона «О налоговом контроле иностранных счетов» в США',
      },
      isFATCA: {
        first: 'Я подтверждаю отсутствие у меня ',
        second: 'признаков принадлежности к FATCA',
      },
      isProductTerms: {
        first: 'Я подтверждаю что ознакомился с ',
        second: 'Условиями продукта',
      },
      isProductTariffs: {
        first: 'Я ознакомлен с проектом договора и даю согласие на ',
        second: 'открытие счета',
      },
    },
    otp: {
      title: 'Введите код из SMS',
      codeSent: 'Код отправлен на номер',
      reply: 'Переотправить код через',
      resendCode: 'Отправить код повторно',
      successMessage: 'Вы успешно подтвердили ОТП код!'
    },
    partnerOriginalDocuments: {
      title: "Добавление оригинальных документов",
      hiredDocumentLabel: "Справка с места работы",
      hiredDocumentPlaceholder: "Приложите документ",
      additionalDocumentLabel: "Дополнительные документы о доходах",
      additionalDocumentPlaceholder: "По желанию",
      successMessage: "Вы успешно отправили справку с места работы"
    },
    partnerDiya: {
      title: "Подтверждение данных",
      description: "Подтвердите свои данные через Dia для успешного прохождения",
      document: "Документы",
      passport: "Паспорт гражданина Украины",
      licence: "Водительские права",
      sendButton: "Отправить",
      smsMessage: "Мы отправили вам СМС на ваш номер телефона. Перейдите по ссылке на своем телефоне в Dia и подтвердите действие",
      success: "Документы успешно подтверждены",
      successMessage: "Вы успешно подтвердили документы",
      provideDocument: 'Предоставить документ',
      uploadSuccessMessage:  "Ваши водительские права успешно загружены!",
    },
    documentsContent: {
      title: "Подписание документов",
      description: "Все документы необходимо подписать с 9:00 до 21:00. Если Вы не успели, то можете подписать документы на следующий день в указанное время. Документы требуется подписать в Дiя.",
    }
  }
};
