export type BuyerQuestionType =
  | 'text'
  | 'email'
  | 'tel'
  | 'select'
  | 'textarea'
  | 'checkbox'

export type BuyerQuestionCondition = {
  field: string
  values: string[]
}

export interface BuyerQuestion {
  id: string
  section: string
  label: string
  description?: string
  type: BuyerQuestionType
  required: boolean
  options?: string[]
  condition?: BuyerQuestionCondition
}

export const buyerSections = [
  {
    id: 'personal',
    title: '01 — Personal Profile',
    description: 'Basic information about the person using the marketplace account.',
  },
  {
    id: 'business',
    title: '02 — Business / Organization',
    description: 'Information about your business or organization when applicable.',
  },
  {
    id: 'experience',
    title: '03 — Buyer Experience',
    description: 'Your relevant technology, business and acquisition experience.',
  },
  {
    id: 'technology',
    title: '04 — Technology Requirement',
    description: 'The technology, system, machinery, equipment or solution you are seeking.',
  },
  {
    id: 'businessNeed',
    title: '05 — Business Need',
    description: 'The problem, objective or opportunity behind your technology requirement.',
  },
  {
    id: 'commercial',
    title: '06 — Commercial / Investment',
    description: 'Commercial intent, budget and investment information.',
  },
  {
    id: 'geography',
    title: '07 — Geography & Timeline',
    description: 'Where and when you intend to use or acquire the technology.',
  },
  {
    id: 'partnership',
    title: '08 — Partnership',
    description: 'Additional collaboration or partnership requirements.',
  },
  {
    id: 'verification',
    title: '09 — Verification',
    description: 'Verification information requested only when applicable.',
  },
  {
    id: 'declaration',
    title: '10 — Declaration',
    description: 'Confirmation of information accuracy and authorization.',
  },
] as const

export const buyerQuestions: BuyerQuestion[] = [
  {
    id: 'fullName',
    section: 'personal',
    label: 'Full Name',
    type: 'text',
    required: true,
  },
  {
    id: 'email',
    section: 'personal',
    label: 'Email Address',
    type: 'email',
    required: true,
  },
  {
    id: 'phone',
    section: 'personal',
    label: 'Phone Number',
    type: 'tel',
    required: true,
  },
  {
    id: 'country',
    section: 'personal',
    label: 'Country / Region',
    type: 'text',
    required: true,
  },
  {
    id: 'professionalRole',
    section: 'personal',
    label: 'Professional Role',
    type: 'text',
    required: true,
  },
  {
    id: 'buyerType',
    section: 'business',
    label: 'Buyer Type',
    type: 'select',
    required: true,
    options: [
      'Individual',
      'Business',
      'Organization',
      'Investor',
      'Research / Academic',
      'Other',
    ],
  },
  {
    id: 'businessName',
    section: 'business',
    label: 'Business / Organization Name',
    type: 'text',
    required: false,
  },
  {
    id: 'industry',
    section: 'business',
    label: 'Industry / Business Area',
    type: 'text',
    required: false,
  },
  {
    id: 'businessExperience',
    section: 'business',
    label: 'Relevant Business Experience',
    type: 'textarea',
    required: false,
  },
  {
    id: 'technologyExperience',
    section: 'experience',
    label: 'Relevant Technology Experience',
    type: 'textarea',
    required: true,
  },
  {
    id: 'previousAcquisition',
    section: 'experience',
    label: 'Previous Technology Acquisition Experience',
    type: 'select',
    required: true,
    options: ['Yes', 'No', 'Limited / Indirect'],
  },
  {
    id: 'technologyType',
    section: 'technology',
    label: 'What type of technology are you looking for?',
    type: 'select',
    required: true,
    options: [
      'Software / Digital Technology',
      'Artificial Intelligence',
      'Hardware / IoT',
      'Mechanical Technology',
      'Machinery / Equipment',
      'Industrial Technology',
      'Engineering Solution',
      'Manufacturing Technology',
      'Energy Technology',
      'Other',
    ],
  },
  {
    id: 'technologyRequirement',
    section: 'technology',
    label: 'Describe the technology you are looking for',
    description: 'Provide enough information to understand the required technology or capability.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'application',
    section: 'technology',
    label: 'Intended Application',
    type: 'textarea',
    required: true,
  },
  {
    id: 'technicalRequirements',
    section: 'technology',
    label: 'Technical Requirements',
    type: 'textarea',
    required: true,
  },
  {
    id: 'problemToSolve',
    section: 'businessNeed',
    label: 'What problem or requirement are you trying to solve?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'reasonForSeeking',
    section: 'businessNeed',
    label: 'Why are you seeking this technology?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'expectedOutcome',
    section: 'businessNeed',
    label: 'Expected Business / Technical Outcome',
    type: 'textarea',
    required: true,
  },
  {
    id: 'transactionType',
    section: 'commercial',
    label: 'What type of opportunity are you seeking?',
    type: 'select',
    required: true,
    options: [
      'Purchase',
      'License',
      'Investment',
      'Partnership',
      'Joint Development',
      'Open to Multiple Options',
    ],
  },
  {
    id: 'budgetRange',
    section: 'commercial',
    label: 'Budget / Investment Range',
    type: 'select',
    required: true,
    options: [
      'To be determined',
      'Under USD 10,000',
      'USD 10,000 – 50,000',
      'USD 50,000 – 250,000',
      'USD 250,000 – 1,000,000',
      'Above USD 1,000,000',
    ],
  },
  {
    id: 'investmentReason',
    section: 'commercial',
    label: 'Reason for the Investment / Acquisition',
    type: 'textarea',
    required: true,
  },
  {
    id: 'territory',
    section: 'geography',
    label: 'Intended Territory / Market',
    type: 'text',
    required: true,
  },
  {
    id: 'timeline',
    section: 'geography',
    label: 'Expected Acquisition / Implementation Timeline',
    type: 'select',
    required: true,
    options: [
      'Immediate',
      'Within 3 months',
      '3–6 months',
      '6–12 months',
      'More than 12 months',
      'Exploratory',
    ],
  },
  {
    id: 'partnershipInterest',
    section: 'partnership',
    label: 'Are you also interested in partnership or collaboration?',
    type: 'select',
    required: true,
    options: ['Yes', 'No', 'Possibly'],
  },
  {
    id: 'partnershipRequirement',
    section: 'partnership',
    label: 'What type of partner or collaboration would you require?',
    type: 'textarea',
    required: false,
    condition: {
      field: 'partnershipInterest',
      values: ['Yes', 'Possibly'],
    },
  },
  {
    id: 'identityVerification',
    section: 'verification',
    label: 'Identity verification',
    description: 'Requested only when applicable to the marketplace activity.',
    type: 'checkbox',
    required: false,
  },
  {
    id: 'businessVerification',
    section: 'verification',
    label: 'Business verification',
    description: 'Requested where business verification is applicable.',
    type: 'checkbox',
    required: false,
  },
  {
    id: 'financialVerification',
    section: 'verification',
    label: 'Financial capability verification',
    description: 'May become applicable when an opportunity progresses toward a transaction.',
    type: 'checkbox',
    required: false,
  },
  {
    id: 'identityVerificationMethod',
    section: 'verification',
    label: 'Identity Verification Method',
    description:
      'Identity verification may be required before access to protected information or before certain transactions.',
    type: 'select',
    required: false,
    options: [
      'Not yet required',
      'CNIC',
      'Passport',
      'Other accepted identity document',
    ],
  },
  {
    id: 'phoneVerification',
    section: 'verification',
    label: 'Phone ownership verification',
    description:
      'Phone verification may be completed through a secure verification process.',
    type: 'checkbox',
    required: false,
  },
  {
    id: 'emailVerification',
    section: 'verification',
    label: 'Email ownership verification',
    description:
      'Email verification may be required for account and communication security.',
    type: 'checkbox',
    required: false,
  },
  {
    id: 'businessVerificationStatus',
    section: 'verification',
    label: 'Business verification',
    description:
      'Business registration and authorization evidence may be required when acting on behalf of an organization.',
    type: 'select',
    required: false,
    options: [
      'Not applicable',
      'Not yet required',
      'Business information available',
      'Verification required',
    ],
  },
  {
    id: 'financialVerificationStatus',
    section: 'verification',
    label: 'Financial capability verification',
    description:
      'Financial capability may require appropriate evidence when an acquisition, investment or other qualifying transaction progresses.',
    type: 'select',
    required: false,
    options: [
      'Not yet required',
      'Self-declared',
      'Supporting evidence required',
      'Verification required',
    ],
  },
  {
    id: 'paymentVerificationStatus',
    section: 'verification',
    label: 'Payment verification',
    description:
      'Payment identity and payment method verification may be required before a transaction is processed.',
    type: 'select',
    required: false,
    options: [
      'Not yet required',
      'Not applicable',
      'Verification required',
    ],
  },
  {
    id: 'transactionDueDiligence',
    section: 'verification',
    label: 'Transaction due diligence',
    description:
      'Additional identity, business, financial, ownership or transaction evidence may be required before a qualifying transaction.',
    type: 'checkbox',
    required: false,
  },
  {
    id: 'dataProcessingAcknowledgement',
    section: 'declaration',
    label:
      'I understand that sensitive verification information will be requested only where applicable and handled according to the Tech FounDX privacy, security and verification requirements.',
    type: 'checkbox',
    required: true,
  },
  {
    id: 'thirdPartyDisclosureAcknowledgement',
    section: 'declaration',
    label:
      'I understand that information is not intended for unrelated third-party disclosure, but relevant information may be shared where necessary for an authorized transaction, verification/due-diligence process, legal requirement, or my explicit authorization.',
    type: 'checkbox',
    required: true,
  },
  {
    id: 'declaration',
    section: 'declaration',
    label: 'I confirm that the information provided is accurate to the best of my knowledge.',
    type: 'checkbox',
    required: true,
  },
]
