export const partner = {
  personalInfo: {
    steps: {
      step1: {
        title: "Step 1/4",
        description: "Terms of Agreement"
      },
      step2: {
        title: "Step 2/4",
        description: "Document Verification"
      },
      step3: {
        title: "Step 3/4",
        description: "Income Data"
      },
      step4: {
        title: "Step 4/4",
        description: "Document Signing"
      }
    },
    userInfo: {
      inn: {
        label: 'INN',
        placeholder: 'Enter the INN here'
      },
    },
    partnerDocument: {
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
      unemployed: 'Not working'
    },
    waitAutoDealer: {
      underwriter: 'underwriter',
      dealer: 'dealer',
      creditAdmin: 'credit admin',
      partner: 'partner',
      admin: 'admin',
      waitResponseFrom: 'Wait for a response from',
      WAITING: {
        title: 'Bank audits are conducted',
        desc: 'We will let you know by text message when the bank has completed the check'
      },
      COMPLETED: {
        title: 'Thank you!',
        desc: 'Thank you for your time'
      },
      notifyYou: 'We will notify you when the car dealer has passed the bank check. Later, you can log into your personal account via phone number and continue the car loan process.',
      home: 'Home'
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
    otp: {
      title: 'Enter the code from the SMS',
      codeSent: 'The code has been sent to the number',
      reply: 'Forward the code via',
      resendCode: 'Resend Code',
      successMessage: 'You have successfully confirmed the OTP code'
    },
    partnerOriginalDocuments: {
      title: "Add Original Documents",
      hiredDocumentLabel: "Employment Certificate",
      hiredDocumentPlaceholder: "Attach the document",
      additionalDocumentLabel: "Additional Income Documents",
      additionalDocumentPlaceholder: "Optional",
      successMessage: "You have successfully sent the employment certificate"
    },
    partnerDiya: {
      title: "Data Confirmation",
      description: "Confirm your data through Dia for successful completion",
      document: "Documents",
      passport: "Ukrainian Citizen Passport",
      licence: "Driver's License",
      sendButton: "Send",
      smsMessage: "We have sent you an SMS to your phone number. Follow the link on your phone in Dia and confirm the action",
      success: "Documents successfully confirmed",
      successMessage: "You have successfully confirmed the documents",
      provideDocument: 'Provide documents',
      uploadSuccessMessage: "Your driver's license has been successfully uploaded!",
    },
    documentsContent: {
      title: 'Document Signing',
      description: "All documents must be signed from 9:00 AM to 9:00 PM. If you couldn't make it, you can sign the documents the next day at the specified time. The documents need to be signed in Diya."
    }
  }
};
