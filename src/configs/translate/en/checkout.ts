export const checkout = {
  steps: {
    step1: {
      title: "Step 1/7",
      description: "Personal data"
    },
    step2: {
      title: "Step 2/7",
      description: "Preliminary offer"
    },
    step3: {
      title: "Step 3/7",
      description: "Seller's Choice"
    },
    step4: {
      title: "Step 4/7",
      description: "Adding original documents"
    },
    step5: {
      title: "Step 5/7",
      description: "Choosing the insurance payment method"
    },
    step6: {
      title: "Step 6/7",
      description: "Final offer"
    },
    step7: {
      title: "Step 7/7",
      description: "Signature of documents"
    },
  },
  personalInfo: {
    userInfo: {
      personalData: 'Personal data',
      inn: {
        label: 'INN',
        placeholder: 'Enter the INN here'
      },
      phoneNumber: {
        label: 'Phone number',
        placeholder: '+7 (000) 000-00-00'
      },
      email: {
        label: 'Email',
        placeholder: 'Email'
      },
      validation: {
        enterIin: "Enter INN",
        validIin: "Enter a valid INN",
        enterPhoneNumber: "Enter your phone number",
        validEmail: "Enter a valid email address",
        enterEmail: "Enter your email address",
        longEmail: 'Email must be at most 50 characters'
      }
    },
    gotMarried: {
      married: 'Married',
      phoneNumber: {
        label: 'Partner phone number',
        placeholder: 'Enter the phone number',
      },
      marriageCertificate: 'Marriage certificate',
      maxSizePdf: 'The file should be in PDF format and should be no more than 5 mb in size',
    },
    hasChildren: {
      title: 'There are children',
      numberOfChildren: 'Number of children under 18 years of age',
      selectQuantity: 'Select the quantity',
    },
    confirmRules: {
      isPersonalData: {
        first: 'I agree to the collection and processing ',
        second: 'Personal data ',
        third: 'and ',
        forth: 'Credit history'
      },
      isPublicPerson: {
        first: 'I am not ',
        second: 'by a foreign public official',
      },
      isForeignAccounts: {
        first: "It doesn't apply to me ",
        second: 'the provision of the Law "On Tax Control of foreign accounts" in the United States',
      },
      isFATCA: {
        first: 'I confirm that I have no ',
        second: 'signs of belonging to FATCA',
      },
      isProductTerms: {
        first: 'I confirm that I have read the ',
        second: 'Product Terms and Conditions',
      },
      isProductTariffs: {
        first: 'I agree to open an account ',
        second: 'Terms and tariffs',
      },
    },
    acceptDocs: {
      title: "Data Confirmation",
      desc: "To provide the bank with temporary access to your passport, please confirm your details via Dia",
      label: "Driver's License",
      docType: "Document",
      licence: "Driver's License",
      passport: 'Passport',
      smsMessage: "We have sent you an SMS to your phone number. Follow the link on your phone in Dia and confirm the action",
      docConfirmed: "Documents successfully confirmed",
      noLicense: "I don't have a license",
      manualUpload: "Upload manually",
      confirmDia: "Confirm in Dia",
      successMessage: "You have successfully submitted the document confirmation request!",
      uploadSuccessMessage: "Your driver's license has been successfully uploaded!",
      skipSuccessMessage: "Driver's license upload skipped successfully!",
    },
    otp: {
      title: 'Enter the code from the SMS',
      codeSent: 'The code has been sent to the number',
      reply: 'Forward the code via',
      resendCode: 'Resend Code',
    },
    salaryInfo: {
      title: 'Income data',
      informationBelow: 'Please fill in the details below',
      selectEmployment: 'Select the type of employment',
      employee: 'Employee',
      fop: 'FOP',
      income: 'Income',
      incomeDocument: 'Income document',
      incomeDataLabel: 'Income data:',
      workPlace: 'Place of work',
      fopDeclaration: "FOP Declaration",
      activityType: "Type of Activity",
      select: "Select",
      incomeInfo: "Specify Income Information",
      quarterly: "Quarterly",
      yearly: "Yearly",
      quarterIncome: "Income for quarter",
      lastYearIncome: "Income for the last year",
      incomeDataSuccess: 'You have successfully submitted your income data!',
      incomeDataError: 'Error submitting income data.',
      incomeDocumentPlaceholder: 'Attach a document or photo from Diia (form OK5/7)',

    },
    steps: {
      step1: {
        title: "Step 1/4",
        description: "Personal Information"
      },
      step2: {
        title: "Step 2/4",
        description: "Document Verification"
      },
      step3: {
        title: "Step 3/4",
        description: "Income Information"
      },
      step4: {
        title: "Step 4/4",
        description: "Document Signing"
      }
    },
    preOffer: {
      title: 'The application has been preliminarily approved by the bank',
      informationBelow: 'Please make sure that the data is correct',
      successMessage: 'The application has been preliminarily approved by the bank!',
      loanAmount: 'Loan Amount',
      monthlyPayment: 'Monthly Payment',
      initialPayment: 'Initial Payment',
      autoCost: 'Cost of the car',
      interestRate: 'Interest Rate',
      loanTerm: 'Loan Term',
      years: 'years',
      repaymentScheme: 'Repayment Scheme',
      cascoCost: 'CASCO Cost',
      osagoCost: 'OSAGO Cost',
      commission: 'Commission',
      annuity: 'Annuity',
      equalShares: 'Equal Shares',
      repaymentMethod: "Repayment Method",
      creditTerm: "Credit Term",
      realRate: "Real Rate",
      needToArrangeSeparately: "Need to arrange separately",
      vehiclePrice: 'Cost of the car',
      asPartOfLoan: 'Include in the cost of the loan',
      separate: 'Pay with personal funds',
      changeLoanTerms: 'Change loan terms',
      calculation: {
        changeTerms: 'Change the terms',
        save: 'Save'
      }
    },
    selectAuto: {
      sellerData: 'Seller data',
      finalDecision: 'To receive the final decision, you need to select a dealer and then obtain the seller\'s agreement.',
      informSeller: 'Inform the seller that they will receive an SMS with a link to verify their identity to complete the bank\'s verification.',
      sellerPhone: "Seller's phone number",
      vinCode: "VIN code of the car",
      enterVinCode: "Enter VIN code of the car",
      sendSms: "Send SMS",
      companyName: "Company Name",
      phoneNumber: "Phone Number",
      city: "City",
      selectFromList: "Select from list",
      successMessage: "Success",
    },
    waitAutoDealer: {
      underwriter: 'underwriter',
      dealer: 'dealer',
      creditAdmin: 'credit admin',
      partner: 'partner',
      admin: 'admin',
      waitResponseFrom: 'Wait for a response from',
      SCORING: {
        title: 'Bank checks are being carried out',
        desc: 'We will let you know by SMS when the bank completes the verification'
      },
      CRED_ADMIN_DOCUMENT_GENERATION: {
        title: 'Expect a response from the credit administrator',
        desc: 'We will let you know when the credit administrator passes the bank check. Later, you can log into your personal account using your phone number and continue the car loan process'
      },
      WAITING_UNDERWRITER_CABINET: {
        title: 'Expect a response from a risk taker',
        desc: 'We will let you know when the riskier passes the bank check. Later, you can log into your personal account using your phone number and continue the car loan process'
      },
      WAITING_FILLING_PARTNER_DATA: {
        title: 'Expect a response from your partner',
        desc: 'We will let you know when your partner confirms the data you entered. Later, you can log into your personal account using your phone number and continue the car loan process'
      },
      WAITING_PARTNER_UPLOAD_ORIGINAL_DOCUMENTS: {
        title: 'We are waiting for the partner to upload the documents',
        desc: 'We will send you a message on your phone when your spouse downloads the documents. Then you can continue the process from where you left off.'
      },
      FILLING_DEALER_DATA: {
        title: 'Expect a response from the car dealer',
        desc: 'We will let you know when the car dealer passes the bank check. Later, you can log into your personal account using your phone number and continue the car loan process',
      },
      BORROWER_WAITING_DIYA_SHARING_TECH_PASSPORT: {
        title: 'We are waiting for the receipt of a car registration certificate',
        desc: 'We will send you a message on your phone to confirm the document. Then you can continue the process from where you left off.'
      },
      DEALER_CABINET: {
        title: 'Expect a response from the car dealer',
        desc: 'We will let you know when the car dealer passes the bank check. Later, you can log into your personal account using your phone number and continue the car loan process',
      },
      notifyYou: 'We will notify you when the car dealer has passed the bank check. Later, you can log into your personal account via phone number and continue the car loan process.',
      home: 'Home'
    },
    errorCase: {
      REJECTED: {
        title: "Oops..",
        desc: "Unfortunately, we cannot approve the auto loan on the current terms at the moment. However, we have prepared alternative solutions for you, please consider them."
      },
      home: "Return to Home",
      alternatives: "View Alternative Solutions"
    },
    originalDocuments: {
      title: 'Uploading Original Documents',
      hiredLabel: 'Employment Certificate',
      additionalLabel: 'Additional Income Documents',
      maxSizePdf: 'The file must be in PDF format and no larger than 5 MB',
      successMessage: 'You have successfully uploaded the documents'
    },
    guarantorInfo: {
      notify: 'Notify the guarantor that they will receive an SMS with a link to confirm their personal information and consent to be your co-borrower. The link is active for 24 hours.',
      inn: {
        label: 'INN',
        placeholder: 'Enter the INN here'
      },
      phoneNumber: {
        label: 'Phone number',
        placeholder: '+7 (000) 000-00-00'
      },
      sendSms: "Send SMS",
      smsSent: "SMS sent!",
      awaitingAgreement: "Waiting for co-borrower's consent",
      agreementReceived: "Co-borrower's consent received!",
    },
    finalOffer: {
      title: 'Final Details',
      description: 'You have been approved for a loan under the following conditions. Please review all the details before making the initial payment.',
      successMessage: 'You have successfully confirmed the final decision',
      errorMessage: 'Error confirming the final decision',
    },
    documentsContent: {
      title: 'Signing of documents',
      description: 'All documents must be signed from 9:00 to 21:00. If you do not have time, you can sign the documents the next day at the specified time. The documents must be signed in Dia',
      contracts: 'Contracts',
      paymentSchedule: 'Payment Schedule',
      instructions: 'Instructions',
      loanAgreement: 'Loan Agreement',
      pledgeAgreement: 'Pledge Agreement',
      paymentScheduleTitle: 'Payment Schedule',
      accountOpening: 'Account Opening',
      paymentOrder: 'Payment Order to Transfer Money to Seller\'s Account',
      successMessage: 'Documents successfully signed',
      errorMessage: 'Error signing documents',
    },
    diyaSharingTechPassport: {
      title: 'We need to verify your vehicle registration certificate',
      description: 'To verify your identity, we will check your documents through the electronic public services system Dia. We will not share your documents with third parties.',
      requestingParty: 'Requesting Party',
      documents: 'Documents',
      bankName: 'SkyBank',
      documentTypes: 'Passport and Driver\'s License',
      provideDocuments: 'Provide Documents',
      smsSent: 'We have sent an SMS to your phone number. Follow the link on your phone in Dia and confirm the action.',
      documentsConfirmed: 'Documents successfully confirmed',
      successMessage: 'You have successfully confirmed your documents!',
    },
  },
  choiceInsurance: {
    title: 'Choose the insurance payment method',
    cascoCost: "The cost of CASCO",
    banksCommission: "The bank's commission",
    osago: {
      desc: 'The cost of OSAGO',
      value: 'You need to register separately'
    },
    asPartOfLoan: 'Include in the cost of the loan',
    separately: 'Pay with personal funds',
  },
  paymentOfInsurance: {
    title: 'Выбор и оплата страховой',
    date: {
      title: 'Дата сделки',
      placeholder: 'Выберите дату из календаря',
      todayButton: 'Сегодня'
    },
    insurance: {
      title: 'Страховая компания',
      placeholder: 'Выберите из списка',
    }
  }
};
