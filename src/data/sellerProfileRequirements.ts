export type SellerQuestionType =
  | 'text'
  | 'email'
  | 'tel'
  | 'select'
  | 'textarea'
  | 'checkbox'

export type SellerQuestionCondition = {
  field: string
  values: string[]
}

export interface SellerQuestion {
  id: string
  section: string
  label: string
  description?: string
  type: SellerQuestionType
  required: boolean
  options?: string[]
  condition?: SellerQuestionCondition
}

export const sellerSections = [
  {
    id: 'personal',
    title: '01 — Personal Profile',
    description: 'Basic information about the person using the marketplace account.',
  },
  {
    id: 'business',
    title: '02 — Business / Organization',
    description: 'Business or organization information where applicable.',
  },
  {
    id: 'experience',
    title: '03 — Seller Experience',
    description: 'Relevant technology development, ownership, selling and commercialization experience.',
  },
  {
    id: 'communication',
    title: '08 — Communication & Availability',
    description: 'Preferred communication method and marketplace contact availability.',
  },
  {
    id: 'declaration',
    title: '09 — Declaration',
    description: 'Confirmation of accuracy, authority and disclosure obligations.',
  }
] as const

export const sellerQuestions: SellerQuestion[] = [
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
    id: 'sellerType',
    section: 'business',
    label: 'Seller Type',
    type: 'select',
    required: true,
    options: [
      'Individual',
      'Business',
      'Technology Company',
      'Manufacturer',
      'Research / Academic',
      'Organization',
      'Authorized Representative',
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
    id: 'legalEntityType',
    section: 'business',
    label: 'Legal Entity Type',
    type: 'select',
    required: false,
    options: [
      'Individual / Sole Proprietor',
      'Partnership',
      'Private Company',
      'Public Company',
      'Organization / Institution',
      'Other',
    ],
  },
  {
    id: 'registrationCountry',
    section: 'business',
    label: 'Registration / Incorporation Country',
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
    id: 'businessWebsite',
    section: 'business',
    label: 'Business / Organization Website',
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
    label: 'Relevant Technology Development / Ownership Experience',
    type: 'textarea',
    required: true,
  },
  {
    id: 'previousSales',
    section: 'experience',
    label: 'Previous Technology Sales / Licensing Experience',
    type: 'select',
    required: true,
    options: ['Yes', 'No', 'Limited / Indirect'],
  },
  {
    id: 'commercializationExperience',
    section: 'experience',
    label: 'Previous Technology Commercialization Experience',
    type: 'textarea',
    required: false,
  },
  {
    id: 'targetMarkets',
    section: 'experience',
    label: 'Target Markets / Industries',
    type: 'textarea',
    required: true,
  },
  {
    id: 'preferredContactMethod',
    section: 'communication',
    label: 'Preferred Contact Method',
    type: 'select',
    required: true,
    options: ['Email', 'Phone', 'Marketplace Messaging', 'Multiple Options'],
  },
  {
    id: 'availability',
    section: 'communication',
    label: 'Contact Availability',
    type: 'textarea',
    required: false,
  },
  {
    id: 'dataProcessingAcknowledgement',
    section: 'declaration',
    label: 'I understand that verification information will be requested only where applicable and handled according to TechFoundX privacy, security and verification requirements.',
    type: 'checkbox',
    required: true,
  },
  {
    id: 'thirdPartyDisclosureAcknowledgement',
    section: 'declaration',
    label: 'I understand that relevant third-party, open-source, licensing and other rights information must be disclosed for any technology I submit.',
    type: 'checkbox',
    required: true,
  },
  {
    id: 'ownershipDeclaration',
    section: 'declaration',
    label: 'I understand that I must have the necessary authority for any technology I later submit to the TechFoundX marketplace.',
    type: 'checkbox',
    required: true,
  },
  {
    id: 'accuracyDeclaration',
    section: 'declaration',
    label: 'I confirm that the information provided is accurate to the best of my knowledge.',
    type: 'checkbox',
    required: true,
  }
]
