import axios from 'axios';

function fetchAvailableList() {
  let list = [];
  axios.get('/api/property').then(function(response) {
    response.data
      .filter(function(property) {
        return property.available === true;
      })
      .forEach(function(available) {
        list.push(available.address);
      });
  });
  return list;
}

const options = fetchAvailableList();

export const queryFields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    noValueError: 'Your Name is required'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    noValueError: 'Your Email is required'
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'phone',
    noValueError: 'Your Phone no. is required'
  },
  {
    label: 'What is it about?',
    name: 'about',
    type: 'textarea',
    noValueError: 'Please tell us what it is about'
  }
]

export const applicationFields = [
  {
    label: 'Address you are applying for',
    name: 'address',
    type: 'select',
    options: options,
    noValueError: 'Please specify Address'
  },
  {
    label: 'Proposed no. of Occupants',
    name: 'occupants',
    type: 'select',
    options: [1, 2, 3, 4, 5, 6],
    noValueError: 'Please specify the no. Of Occupants'
  },
  {
    label: 'Expected move-in date',
    name: 'date',
    type: 'date',
    noValueError: 'Please specify Move-in Date'
  },
  {
    label: 'Do you have a co-applicant?',
    name: 'coApplicant',
    type: 'select',
    options: ['Yes', 'No'],
    noValueError: 'Please specify if you have a Co-Applicant'
  },
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    noValueError: 'Please specify your First Name'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
    noValueError: 'Please specify your Last Name'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    noValueError: 'Please specify your Email address'
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'phone',
    noValueError: 'Please specify your Phone no.'
  },
  {
    label: 'Occupation',
    name: 'occupation',
    type: 'text',
    noValueError: 'Please specify your Occupation'
  },
  {
    label: 'Annual Income',
    name: 'income',
    type: 'select',
    options: ['<25k', '25k-40k', '40k-55k', '55k-70k', '>70k'],
    noValueError: 'Please specify your Income'
  },
  {
    label: 'Name of Employer',
    name: 'employer',
    type: 'text',
    noValueError: 'Please specify your Employer'
  },
  {
    label: 'Credit Score',
    name: 'credit',
    type: 'select',
    options: ['<500', '500-600', '600-700', '>700'],
    noValueError: 'Please specify your Credit score'
  },
  {
    label: 'Have you ever been evicted?',
    name: 'eviction',
    type: 'select',
    options: ['Yes', 'No'],
    noValueError: 'Please specify your Eviction history'
  },
  {
    label: 'Have you ever filed for bankruptcy?',
    name: 'bankruptcy',
    type: 'select',
    options: ['Yes', 'No'],
    noValueError: 'Please specify your Bankruptcy history'
  },
  {
    label: 'Name of Co-applicant',
    name: 'coName',
    type: 'text',
    optional: true,
    noValueError: 'Please specify the Name of your co-applicant'
  },
  {
    label: 'Occupation of Co-applicant',
    name: 'coOccupation',
    type: 'text',
    optional: true,
    noValueError: 'Please specify the Occupation of your co-applicant'
  },
  {
    label: 'Annual Income of Co-applicant',
    name: 'coIncome',
    type: 'select',
    optional: true,
    options: ['<25k', '25k-40k', '40k-55k', '55k-70k', '>70k'],
    noValueError: 'Please specify the Income of your co-applicant'
  },
  {
    label: 'Employer of Co-applicant',
    name: 'coEmployer',
    optional: true,
    type: 'text',
    noValueError: 'Please specify the Employer of your co-applicant'
  },
  {
    label: 'Anything else you want us to take into considerations?',
    name: 'note',
    type: 'textarea',
    noValueError: ''
  }
];

export const subscribeFields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    noValueError: 'Your Name is required'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    noValueError: 'Your Email is required'
  },
  {
    label: 'Please select the counties you wish to receive notifications about',
    name: 'county',
    type: 'checkbox',
    options: ['Bergen', 'Essex', 'Gloucester', 'Hudson', 'Mercer', 'Middlessex', 'Monmouth', 'Morris', 'Passaic', 'Sussex', 'Union', 'Warren'],
    noValueError: 'Please at least select one county of interest'
  },

]