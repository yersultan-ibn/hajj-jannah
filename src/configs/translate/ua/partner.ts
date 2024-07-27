export const partner = {
  personalInfo: {
    steps: {
      step1: {
        title: "Крок 1/4",
        description: "Умови угоди"
      },
      step2: {
        title: "Крок 2/4",
        description: "Перевірка документів"
      },
      step3: {
        title: "Крок 3/4",
        description: "Дані про доходи"
      },
      step4: {
        title: "Крок 4/4",
        description: "Підпис документів"
      }
    },
    userInfo: {
      inn: {
        label: 'ІНН',
        placeholder: 'Введіть ІІН тут'
      },
    },
    partnerDocument: {
      title: 'Дані про доходи',
      informationBelow: 'Заповніть будь ласка дані нижче',
      selectEmployment: 'Виберіть тип зайнятості',
      employee: 'Найманий працівник',
      fop: 'ФОП',
      income: 'Дохід',
      incomeDocument: 'Документ про доходи',
      incomeDataLabel: 'Дані про доходи',
      workPlace: 'Місце роботи:',
      fopDeclaration: "Декларація ФОП",
      activityType: "Вид діяльності",
      select: "Вибрати",
      incomeInfo: "Вкажіть дані про доходи",
      quarterly: "Поквартально",
      yearly: "За рік",
      quarterIncome: "Дохід за квартал",
      lastYearIncome: "Дані за останній рік",
      incomeDataSuccess: 'Ви успішно надіслали дані про доходи!',
      incomeDataError: 'Помилка відправлення даних про доходи.',
      incomeDocumentPlaceholder: 'Прикріпіть документ або фото з ДІЯ (форма ОК5/7)',
      unemployed: 'Не працюю'
    },
    waitAutoDealer: {
      underwriter: 'ризиківника',
      dealer: 'дилера',
      creditAdmin: 'кредитного адміністратора',
      partner: 'партнера',
      admin: 'адміна',
      waitResponseFrom: 'Чекайте на відповідь від',
      WAITING: {
        title: 'Проводяться банківські перевірки',
        desc: 'Ми дамо вам знати у вигляді СМС, коли банк закінчить перевірку'
      },
      COMPLETED: {
        title: 'Дякую!',
        desc: 'Дякуємо за приділений час'
      },
      notifyYou: 'Ми повідомимо вам, коли автодилер пройде перевірку банком. Пізніше ви зможете увійти до особистого кабінету за номером телефону та продовжити процес автокредитування.',
      home: 'На головну'
    },
    confirmRules: {
      isPersonalData: {
        first: 'Я погоджуюся на збір та обробку ',
        second: 'Персональних даних ',
        third: 'і ',
        forth: 'Кредитної історії'
      },
      isPublicPerson: {
        first: 'Я не є ',
        second: 'іноземним публічним посадовою особою',
      },
      isForeignAccounts: {
        first: 'На мене не поширюється ',
        second: 'положення «Закону Про податковий контроль іноземних рахунків» у США',
      },
      isFATCA: {
        first: 'Я підтверджую відсутність у мене ',
        second: 'ознак приналежності до FATCA',
      },
      isProductTerms: {
        first: 'Я підтверджую що ознайомився з',
        second: 'Умовами продукту',
      },
      isProductTariffs: {
        first: 'Я погоджуюся з відкриттям рахунку ',
        second: 'Умови та тарифи',
      },
    },
    otp: {
      title: 'Введіть код із SMS',
      codeSent: 'Код відправлений на номер',
      reply: 'Переотправіть код через',
      resendCode: 'Надіслати код повторно',
      successMessage: 'Ви успішно підтвердили ОТП код!'
    },
    partnerOriginalDocuments: {
      title: "Додавання оригінальних документів",
      hiredDocumentLabel: "Довідка з місця роботи",
      hiredDocumentPlaceholder: "Додайте документ",
      additionalDocumentLabel: "Додаткові документи про доходи",
      additionalDocumentPlaceholder: "За бажанням",
      successMessage: "Ви успішно надіслали довідку з місця роботи"
    },
    partnerDiya: {
      title: "Підтвердження даних",
      description: "Підтвердіть свої дані через Dia для успішного завершення",
      document: "Документи",
      passport: "Паспорт громадянина України",
      licence: "Водійське посвідчення",
      sendButton: "Відправити",
      smsMessage: "Ми відправили вам СМС на ваш номер телефону. Перейдіть за посиланням на своєму телефоні в Dia і підтвердіть дію",
      success: "Документи успішно підтверджені",
      successMessage: "Ви успішно підтвердили документи",
      provideDocument: 'Надати документ',
      uploadSuccessMessage: "Ваші водійські права успішно завантажено!",
    },
    documentsContent: {
      title: "Підписання документів",
      description: "Всі документи необхідно підписати з 9:00 до 21:00. Якщо ви не встигли, ви можете підписати документи наступного дня у зазначений час. Документи потрібно підписати в Дія.",
    }
  }
};
