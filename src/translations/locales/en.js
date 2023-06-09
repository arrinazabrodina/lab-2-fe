const translation = {
  general: {
    save: 'Save',
    cancel: 'Cancel',
    success: 'saved successfully',
    upload: 'Upload',
    add: 'Add',
    uploadSuccess: 'file uploaded successfully',
    uploadFailed: 'file upload failed',
    lastUpdate: 'Latest update: ',
    yes: 'Yes',
    no: 'No',
  },
  timeUnits: {
    selectPlaceholder: 'Select time unit',
  },
  roundingModes: {
    selectPlaceholder: 'Select time unit',
  },
  priceBasis: {
    priceBasis: 'Price basis',
    selectPriceBasis: 'Select price basis',
    PRICE_PER_MG: 'Price per mg',
    PRICE_PER_MONTH: 'Price per month',
    PRICE_PER_PACK: 'Price per pack',
    PRICE_PER_STANDARD_UNIT: 'Price per Standard Unit [SU]',
  },
  namedBlocks: {
    deleteBlock: 'DeleteIcon {{name}} ?',
    updateBlock: 'Updating \'{{name}}\'',
  },
  projects: {
    createProject: 'Create new project',
    updateProject: 'Update project',
    createProjectPlaceholder: 'Enter project name',
    updateProjectPlaceholder: 'Enter project name',
    backBtn: 'Projects ({{name}})',
    assumptions: 'Assumptions',
    simulation: 'Simulation',
    generalSettings: 'General Settings',
  },
  patientVolume: {
    country: 'Country',
    indication: 'Indication',
    subgroup: 'Subgroup',
    export: 'Export',
  },
  treatmentPrice: {
    country: 'Country',
    listPrice: 'List price after mandatory discount',
    mandatoryDiscount: 'Mandatory discount',
  },
  efficacy: {
    KaplanMeierCurve: 'Kaplan Meier Curve',
    addEfficacyMeasure: 'Add efficacy measure',
    patientMetingThreshold: '% patient meeting threshold',
    timeOfAssessment: 'Enter time of assessment',
    assessmentTimeAfterFirstTreatment: 'Time of assessment after first treatment',
    time: 'Time',
    name: 'Name',
    timeUnit: 'Time unit',
    enterMeasureName: 'Enter measure name',
    efficacyByKMCurve: 'Efficacy measure by Kaplan Meier Curve',
    efficacyByTimePoint: 'Efficacy measure by time point',
    efficacyByEvent: 'Efficacy measure by event',
    importExcel: 'Upload from excel',
    exportPdf: 'Export PDF',
    exportExcel: 'Export Excel',
    measureAlreadyExists: 'Measure with the same name already exists',
  },
  simulation: {
    scenarioName: 'Scenario name',
    treatmentName: 'Treatment name',
    country: 'Country',
    lastEditBy: 'Last edit by',
    lastEditDate: 'Last edit date',
    createNewScenario: 'Create new scenario',
    viewAggregatedOutput: 'View aggregated output',
    backBtnTitle: 'Home page ({{name}})',
    actions: 'Actions',
    deleteScenario: 'DeleteIcon {{name}} ?',
    note: 'Note',
    dataIsDifferent: 'data differs from admin default',
    cancel: 'Cancel',
    ok: 'Ok',
    editScenarioName: 'Edit scenario name',
  },
  scenario: {
    tabs: {
      marketSetup: 'Market setup',
      volume: 'Volume',
      comparativeStraightDiscountAgreement: 'Comparative straight discount agreement',
      createModel: 'Create contract models',
      output: 'Output',
    },
    marketSetup: {
      title: 'Please select the market to simulate',
      currency: 'Currency',
      listPrice: 'List price (after mand. discount)',
      listPricePlaceholder: 'Enter list price',
      mandatoryDiscount: 'Do you want to add mandatory discount for reference?',
      levelOfDiscount: 'Level of discount (%):',
      levelDiscountPlaceholder: 'Enter discount',
      listPriceBeforeMandatoryDiscount: 'List price \n (before mand. discount(s)',
    },

    discountAgreement: {
      levelOfDiscount: 'Level of confidential straight discount%',
      levelOfDiscountPlaceholder: 'Enter discount',
      netPrice: 'Net price (based case)',
      listToNet: 'List to net (incl. mand. discounts)',
    },
  },
  models: {
    title: 'Adding a new model',
    placeholder: 'Enter model name',
    color: 'Color',
    createNewModel: 'Create new model',
    addAnotherSetup: 'Add another setup',
    name: 'Name',
    model: {
      straightDiscount: {
        stepName: 'Straight Discount',
        showDiscount: 'Will a confidential straight discount be offered here?',
        levelOfDiscount: 'Level of discount (%)',
        levelOfDiscountPlaceholder: 'Enter level of discount',
        price: 'Price after mand. conf. discounts',
      },
      outcomeBasedModel: {
        selectOptions: {
          OUTCOME_MODEL_NOT_SELECTED: 'None',
          PAYMENT_BY_RESULT: 'Payment by result',
          PER_PATIENT_RISK_SHARING: 'Per patient risk sharing',
        },
        stepName: 'Outcome-based model',
        outcomeBasedModel: 'Outcome-based model',
        patientShareEligible: 'Patient share eligible for outcome-based model',
        upFontFee: 'Up-front fee for infused patients (%)',
        numberOfAdditionalPayment: 'Number of aditional payment',
        efficacyMeasure: 'Efficacy measure',
        followUpPayments: 'Follow up payments',
        amount: 'Amount',
        month: 'Month',
        absoluteValue: 'Absolute value',
        averageValue: 'Average value',
        asp: '{{year}} Year ASP',
        aspTooltip: 'average selling price',
        upFeeAtInfusion: 'Fee at infusion',
        numberOfThresholds: 'Number of rebate thresholds',
        numberOfRebates: 'Number of rebates',
        rebateAmount: 'Rebate amount (%)',
        firstAbsoluteRebate: '1st year absolute rebate',
        firstAverageRebate: '1st year average rebate',
        timeUnitPlaceholder: 'Enter time unit',
      },
      financialBasedModel: {
        selectOptions: {
          FINANCIAL_MODEL_NOT_SELECTED: 'None',
          ANNUITY: 'Annuity',
          BUDGET_CUP_FLAT: 'Budget cap flat',
          BUDGET_CUP_ROLLING: 'Budget cap rolling',
          BUDGET_CUP_VARIABLE: 'Budget cap variable',
          PRICE_VOLUME_AGREEMENT: 'Price volume agreement',
          COST_PER_CAP_PATIENT: 'Cost per cap patient',
        },
        stepName: 'Financial based model',
        financialBasedModel: 'Financial-based agreement:',
        patientShareEligible: 'Patient share eligible for a financial-based agreement',
        annuity: {
          year: 'Year {{year}}',
          total: 'Total',
          pricePayedPerYear: '% of list price paid per year',
          totalShouldBe100: 'Total should be 100%',
          discountRate: 'Discount rate',
        },
        priceVolumeAgreement: {
          numberOfThresholds: 'Number of thresholds',
          thresholds: 'Thresholds',
          pricePayedPerYear: 'Infused patient volume threshold',
          payback: 'Payback (for crossing the volume threshold)',
          priceCut: 'Price cut (applied to following year)',
        },
        budgetCup: {
          rolling: 'Input the rolling budget cap size per year:',
          flat: 'Input the budget cap size per year:',
          budgetCapSize: 'Budget cap size',
          totalShouldBe100: 'Total should be 100%',
        },
        costPerCapPatient: {
          numberOfCosts: 'Number of costs',
          capPerPatient: 'Cap per patient',
          nameOfAdditionalCosts: 'Name of additional costs',
          value: 'Value',
          effectedPatients: '% of affected patients',
          volumeWeighedValue: 'Volume weighted value',
          totalValue: 'Total value',
          totalWightedValue: 'Total weighted value',
          capExceeded: 'Cap exceeded?',
          express: 'Excess (payback)',
        },
      },
    },
  },
  generalSettings: {
    backBtn: 'General Settings',
    discountPlaceholder: 'Enter discount rate',
    costOfCapital: 'Discount rate (cost of capital)%:',
    conversionTitle: 'Adding currency conversion',
    enterCurrency: 'Enter currency',
    baseCurrency: 'Enter FX base currency',
    enterRate: 'Enter rate',
    addCountryTitle: 'Adding country & currency',
    enterCountry: 'Enter country',
    countryAndCurrencyTitle: 'Country & Currency',
    conversationTitle: 'Currency Conversion',
    continentsOrderTitle: 'Continents Order',
    currencyIsDifferentWarning: "The currency is different from the country's currency",
    continentIsDifferentWarning: "The continent is different from the country's continent",
    countryAlreadyExists: 'The country with same name already exists',
    exportPdf: 'Export PDF',
    order: 'Order',
    continent: 'Continent',
    continentPlaceholder: 'Select a continent',
    countryPlaceholder: 'Enter a country',
  },
  generalAssumptions: {
    treatmentName: 'Treatment name',
    treatmentNamePlaceholder: 'Enter treatment name',
    areYouSureYouWantToLeavePage: 'Are you sure you want to leave this page? Data was be lost...',
    roundingMode: 'Rounding result (to nearest {{value}})',
    noRounding: 'Rounding result',
    dataWillNotBeSaved: 'Data will not be saved, are you sure ?',
    selectCountries: 'Select Countries',
    selectedCountries: '{{count}} countries selected',
    fromYear: 'From year',
    toYear: 'To year',
    timeFrame: 'Time frame',
    defaultCurrency: 'Default currency',
    defaultCurrencyPlaceholder: 'Select default currency',
    indicationAndSubgroups: 'Indication & Subgroup',
    addIndication: 'Add indication',
    addSubgroup: 'Add subgroup',
    indicationPlaceholder: 'Enter indication',
    subgroupPlaceholder: 'Enter subgroup',
    priceInLocalCurrency: 'Price in local currency',
  },

  projectErrors: {
    INVALID_PROJECT_ID: 'Project with id {{id}} does not exists',
    INVALID_DISCOUNT: 'Invalid discount in country {{country}}',
    INVALID_PRICE: 'Invalid price in country {{country}}',
    OUTCOME_BASED_MODEL_NOT_SELECTED: '{{cause}}',
    INVALID_INPUT: '{{cause}}',
    FINANCIAL_BASED_MODEL_NOT_SELECTED: '{{cause}}',
    DUPLICATE_VALUE: '{{cause}}',
    WARNING_INVALID_INPUT: '{{cause}}',
  },
  sorting: {
    clickToSortAsc: 'Click to sort ascending',
    clickToSortDesc: 'Click to sort descending',
    clickToCancelSorting: 'Click to cancel sorting',
  },
  output: {
    tabs: {
      revenueWaterfall: 'Revenue waterfall',
      payerPerspective: 'Payer perspective',
      listToNet: 'List to net',
    },
    summary: {
      pricepoint: 'Price point',
      parametersValue: 'Parameters value',
      selectedTherapy: 'Selected therapy:',
      offerSummary: 'Managed entry agreement 1: Offer summary',
      parameters: 'Parameters',
      mandatoryDiscountOf: 'Mandatory discount of',
      aditionalDiscount: 'Aditional discount',
      upfrontApherestsPayment: 'Upfront apherests payment ',
      outcomeBasedAgreement: 'Outcome based agreement',
      financialAgreement: 'Financial agreement',
    },
    listToNet: {
      listToNet: 'Managed entry agreement 1: List-to-net',
      description: `This table considers the agreement without any discounting rates taken into account, 
        values are rounded to the nearest {{value}}`,
      noRounding: `This table considers the agreement without any discounting rates taken into account, 
        values are not rounded`,
      contractModel: 'Contract model',
      average: 'Average',
      confidentialDiscount: 'Confidential discount',
      year: 'Year',
      exManuAfterConfidentialDiscount: 'Net ex-manu #1 (after confidential discount)',
      exManuAfterMandatoryDiscount: 'List ex-manu (after mandatory discount)',
      exManuBeforeMandatoryDiscount: 'Infused List ex-manu (before mandatory discount) volume',
      financialAgreementDiscount: 'Financial agreement discount',
      infusedPatientVolume: 'Infused patient volume',
      listExManuAfterAdditionalOutcomeBased: 'Net ex-manu #2 (after additional outcome-based agreement)',
      mandatoryDiscount: 'Mandatory discount',
      netExManuASP: 'Net ex-manu ASP (after additional financial agreement)',
      outcomeBasedAgreementDiscount: 'Outcome-based agreement discount',
      totalDiscountVsList: 'Total discount vs. list (after mand. discount)',
      pricePoint: 'Price point',
    },
    payerPerspective: {
      payerPerspective: 'Managed entry agreement 1: Payer perspective',
    },
    revenueWaterfall: {
      listToNetDiscount: 'List to net discount',
      finalRevenue: 'Final revenue',
      volume: 'Volume',
      thisScenarioContains: 'This scenario contains...',
    },
  },
  sidebar: {
    home: 'Home',
    generalSettings: 'General Settings',
    logout: 'Logout',
  },
  breadcrumbs: {
    home: 'Home',
    project: 'Project {{name}}',
    simulation: 'Simulation',
    assumptions: 'Assumptions',
  },
};

export default translation;
