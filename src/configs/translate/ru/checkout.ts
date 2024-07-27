export const checkout = {
  steps: {
    step1: {
      title: "Шаг 1/7",
      description: "Личные данные"
    },
    step2: {
      title: "Шаг 2/7",
      description: "Предварительное предложение"
    },
    step3: {
      title: "Шаг 3/7",
      description: "Выбор продавца"
    },
    step4: {
      title: "Шаг 4/7",
      description: "Добавление оригинальных документов"
    },
    step5: {
      title: "Шаг 5/7",
      description: "Выбор метода оплаты страховки"
    },
    step6: {
      title: "Шаг 6/7",
      description: "Финальное предложение"
    },
    step7: {
      title: "Шаг 7/7",
      description: "Подпись документов"
    },
  },
  personalInfo: {
    userInfo: {
      personalData: 'Личные данные',
      inn: {
        label: 'ИНН',
        placeholder: 'Введите ИНН здесь'
      },
      phoneNumber: {
        label: 'Номер телефона',
        placeholder: '+380 000-00-00-00'
      },
      email: {
        label: 'Email',
        placeholder: 'Адрес почты'
      },
      validation: {
        enterIin: 'Введите ИНН',
        validIin: 'Введите валидный ИНН',
        enterPhoneNumber: 'Укажите номер телефона',
        validEmail: 'Введите валидный адрес электронной почты',
        enterEmail: 'Введите адрес электронной почты',
        longEmail: 'Email должен содержать не более 50 символов'
      }
    },
    gotMarried: {
      married: 'Состою в браке',
      phoneNumber: {
        label: 'Номер телефона партнера',
        placeholder: 'Введите номер телефона',
      },
      marriageCertificate: 'Свидетельство о браке',
      maxSizePdf: 'Файл должен быть в формате PDF и размером не более 5 мб',
    },
    hasChildren: {
      title: 'Есть дети',
      numberOfChildren: 'Количество детей до 18',
      selectQuantity: 'Выберите количество',
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
    acceptDocs: {
      title: "Подтверждение данных",
      desc: "Для предоставления временного доступа Банку к своему паспорту, пожалуйста, подтвердите свои данные через Dia",
      label: "Водительские права",
      docType: "Документ",
      licence: "Водительские права",
      passport: 'Паспорт',
      smsMessage: "Мы отправили вам СМС на ваш номер телефона. Перейдите по ссылке на своем телефоне в Dia и подтвердите действие",
      docConfirmed: "Документы успешно подтверждены",
      noLicense: "У меня нет прав",
      manualUpload: "Загрузить вручную",
      confirmDia: "Подтвердить в Dia",
      successMessage: "Вы успешно отправили запрос на подтверждение документа!",
      uploadSuccessMessage: "Ваши водительские права успешно загружены!",
      skipSuccessMessage: "Загрузка водительских прав успешно пропущена!",
    },
    otp: {
      title: 'Введите код из SMS',
      codeSent: 'Код отправлен на номер',
      reply: 'Переотправить код через',
      resendCode: 'Отправить код повторно',
    },
    salaryInfo: {
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
    },
    steps: {
      step1: {
        title: "Шаг 1/4",
        description: "Личные данные"
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
    preOffer: {
      title: "Заявка предварительно одобрена банком",
      informationBelow: "Пожалуйста, убедитесь в корректности данных",
      successMessage: "Заявка предварительно одобрена банком!",
      loanAmount: "Сумма займа",
      monthlyPayment: "Ежемесячный платеж",
      initialPayment: "Первоначальный взнос",
      autoCost: "Стоимость авто",
      interestRate: "Процентная ставка",
      loanTerm: "Срок кредита",
      years: "лет",
      repaymentScheme: "Метод погашения",
      cascoCost: "Стоимость КАСКО",
      osagoCost: "ОСАГО",
      commission: "Комиссия",
      annuity: "Аннуитет",
      equalShares: "Равными долями",
      repaymentMethod: "Метод погашения",
      creditTerm: "Срок кредита",
      realRate: "Реальная ставка",
      needToArrangeSeparately: "Нужно оформить отдельно",
      vehiclePrice: 'Стоимость авто',
      asPartOfLoan: 'Включить в стоимость кредита',
      separately: 'Оплатить личными средствами',
      changeLoanTerms: 'Изменить условия кредита',
      calculation: {
        changeTerms: "Изменить условия",
        save: "Сохранить"
      }
    },
    selectAuto: {
      sellerData: 'Данные продавца',
      finalDecision: 'Для получения финального решения, необходимо выбрать диллера и после получить соглашение продавца.',
      informSeller: 'Предупредите продавца, что ему придет SMS со ссылкой на подтверждение личности для завершения проверки Банком.',
      sellerPhone: "Номер телефона продавца",
      vinCode: "VIN код авто",
      enterVinCode: "Введите VIN код авто",
      sendSms: "Отправить СМС",
      companyName: "Название компании",
      phoneNumber: "Номер телефона",
      city: "Город",
      selectFromList: "Выберите из списка",
      successMessage: "Успешно",
    },
    waitAutoDealer: {
      underwriter: 'рисковика',
      dealer: 'дилера',
      creditAdmin: 'кредитного администратора',
      partner: 'партнера',
      admin: 'админа',
      waitResponseFrom: 'Ожидайте ответ от',
      notifyYou: 'Мы дадим вам знать, когда автодилер пройдет проверку банка. Позже вы можете войти в личный кабинет через номер телефона, и продолжить процесс автокредитования.',
      SCORING: {
        title: 'Проводятся банковские проверки',
        desc: 'Мы дадим вам знать в виде СМС, когда банк закончит проверку'
      },
      CRED_ADMIN_DOCUMENT_GENERATION: {
        title: 'Ожидайте ответ от кредитного администратора',
        desc: 'Мы дадим вам знать, когда кредитный администратор пройдет проверку банка. Позже вы можете войти в личный кабинет через номер телефона, и продолжить процесс автокредитования'
      },
      WAITING_UNDERWRITER_CABINET: {
        title: 'Ожидайте ответ от рисковика',
        desc: 'Мы дадим вам знать, когда рисковика пройдет проверку банка. Позже вы можете войти в личный кабинет через номер телефона, и продолжить процесс автокредитования'
      },
      WAITING_FILLING_PARTNER_DATA: {
        title: 'Ожидайте ответ от партнера',
        desc: 'Мы дадим вам знать, когда ваш партнер подтвердит введенные вами данные. Позже вы можете войти в личный кабинет через номер телефона, и продолжить процесс автокредитования'
      },
      WAITING_PARTNER_UPLOAD_ORIGINAL_DOCUMENTS: {
        title: 'Ожидаем, когда партнер загрузит документы',
        desc: 'Вышлем вам сообщение на телефон, когда ваш(-а) супруг(-а) загрузит документы. Далее можно будет продолжить процесс с того места, где остановились.'
      },
      BORROWER_WAITING_DIYA_SHARING_TECH_PASSPORT: {
        title: 'Ожидаем, получение тех паспорта авто',
        desc: 'Вышлем вам сообщение на телефон, для подтверждения документа. Далее можно будет продолжить процесс с того места, где остановились.'
      },
      FILLING_DEALER_DATA: {
        title: 'Ожидайте ответ от автодилера',
        desc: 'Мы дадим вам знать, когда автодилер пройдет проверку банка. Позже вы можете войти в личный кабинет через номер телефона, и продолжить процесс автокредитования',
      },
      DEALER_CABINET: {
        title: 'Ожидайте ответ от автодилера',
        desc: 'Мы дадим вам знать, когда автодилер пройдет проверку банка. Позже вы можете войти в личный кабинет через номер телефона, и продолжить процесс автокредитования',
      },
      home: 'На главную'
    },
    errorCase: {
      REJECTED: {
        title: 'Упс..',
        desc: 'К сожалению мы не можем в данный момент одобрить автокредит на текущих условиях. Но мы подготовили для вас альтернативные решения, просим их рассмотреть'
      },
      home: 'Вернуться на главную',
      alternatives: 'Смотреть Альтернативные решения'
    },
    originalDocuments: {
      title: 'Загрузка оригинальных документов',
      hiredLabel: 'Справка с место работы',
      additionalLabel: 'Дополнительные документы о доходах',
      maxSizePdf: 'Файл должен быть в формате PDF и размером не более 5 мб',
      successMessage: 'Вы успешно загрузили документы'
    },
    guarantorInfo: {
      notify: 'Предупредите поручителя, что ему придет SMS со ссылкой на подтверждение личных данных и согласие быть Вашим созаемщиком. Ссылка активна 24 часа.',
      inn: {
        label: 'ИНН',
        placeholder: 'Введите ИНН здесь'
      },
      phoneNumber: {
        label: 'Номер телефона',
        placeholder: '+380 000-00-00-00'
      },
      sendSms: "Отправить SMS",
      smsSent: "SMS отправлено!",
      awaitingAgreement: "Ожидаем получение согласия со-заемщика",
      agreementReceived: "Согласие со-заемщика получено!",
    },
    finalOffer: {
      title: 'Итоговые данные',
      description: 'Вам одобрен кредит на следующих условиях, проверьте все данные перед совершением оплаты первоначального взноса.',
      successMessage: 'Вы успешно подтвердили финальное решение',
      errorMessage: 'Ошибка при подтверждении финального решения',
    },
    documentsContent: {
      title: 'Подписание документов',
      description: 'Все документы необходимо подписать с 9:00 до 21:00. Если Вы не успели, то можете подписать документы на следующий день в указанное время. Документы требуется подписать в Дiа',
      contracts: 'Договоры',
      paymentSchedule: 'График платежей',
      instructions: 'Поручения и распоряжения',
      loanAgreement: 'Договор банковского займа',
      pledgeAgreement: 'Договор залога',
      paymentScheduleTitle: 'График платежей',
      accountOpening: 'Открытие текущего счета',
      paymentOrder: 'Платежное поручение на перевод денег на счет продавца',
      successMessage: 'Документы успешно подписаны',
      errorMessage: 'Ошибка при подписании документов',
    },
    diyaSharingTechPassport: {
      title: 'Нам нужно проверить ваш тех.паспорт',
      description: 'Чтобы удостовериться в вашей личности, мы проверим ваши документы через электронный сервис государственных услуг Dia. Мы не передадим ваши документы третьим лицам.',
      requestingParty: 'Запрашивающая сторона',
      documents: 'Документы',
      bankName: 'SkyBank',
      documentTypes: 'Паспорт и водительские права',
      provideDocuments: 'Предоставить документы',
      smsSent: 'Мы отправили вам СМС на ваш номер телефона. Перейдите по ссылке на своем телефоне в Dia и подтвердите действие.',
      documentsConfirmed: 'Документы успешно подтверждены',
      successMessage: 'Вы успешно подтвердили ваши документы!',
    },
  },
  choiceInsurance: {
    title: 'Выберите метод оплаты страховой',
    cascoCost: "Стоимость КАСКО",
    banksCommission: "Комиссия банка",
    osago: {
      desc: 'Стоимость ОСАГО',
      value: 'Нужно оформить отдельно'
    },
    asPartOfLoan: 'Включить в стоимость кредита',
    separately: 'Оплатить личными средствами',
  },
  paymentOfInsurance: {
    title: 'Выберите страховую компанию',
    toPay: 'К оплате',
    banksCommission: "Комиссия банка",
    casco: {
      title: 'Договор КАСКО',
      cost: 'Стоимость КАСКО',
      desc: 'Просим ознакомиться с документом',
    },
    date: {
      title: 'Дата сделки',
      placeholder: 'Выберите дату из календаря',
      todayButton: 'Сегодня'
    },
    insurance: {
      title: 'Страховая компания',
      placeholder: 'Выберите из списка',
    }
  },
  documents: {
    title: 'Подтверждение данных',
    description: 'Для предоставления временного доступа Банку к своему новому техпаспорту, пожалуйста, подтвердите свои данные через Dia',
    provideDocuments: 'Предоставить документы',
    smsSent: 'Мы отправили вам СМС на ваш номер телефона. Перейдите по ссылке на своем телефоне в Dia и подтвердите действие.',
    documentsConfirmed: 'Документы успешно подтверждены',
    successMessage: 'Вы успешно подтвердили ваши документы!',
    send: 'Отправить',
    name: 'Документы',
    type: 'Новый техпаспорт',
  },
  transactionDate: {
    title: 'Выберите дату сделки',
    rule1: 'Вы можете выбрать текущий день для сделки, если время до 12:00.',
    rule2: 'Если время после 12:00, дата сделки будет назначена на следующий рабочий день.',
    rule3: 'Выбор даты на выходные дни невозможен.',
    label: 'Дата сделки',
    placeholder: 'Выберите дату из календаря',
    todayButton: 'Сегодня'
  }
};