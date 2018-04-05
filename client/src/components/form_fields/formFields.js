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
    noValueError: 'Name is required'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    noValueError: 'Email is required'
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'phone',
    noValueError: 'Phone no. is required'
  },
  {
    label: 'What is it about?',
    name: 'about',
    type: 'textarea',
    noValueError: 'required'
  }
]

export const applicationFields = [
  {
    label: 'Address you are applying for:',
    name: 'address',
    type: 'select',
    options: options,
    noValueError: 'Address is required'
  },
  {
    label: 'No. of Occupants',
    name: 'occupants',
    type: 'select',
    options: [1, 2, 3, 4, 5, 6],
    noValueError: 'No. Of Occupants is required'
  },
  {
    label: 'Expected move-in date',
    name: 'date',
    type: 'date',
    noValueError: 'required'
  },
  {
    label: 'Do you have a co-applicant?',
    name: 'coApplicant',
    type: 'select',
    options: ['Yes', 'No'],
    noValueError: 'required'
  },
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    noValueError: 'First name is required'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
    noValueError: 'Last name is required'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    noValueError: 'Email is required'
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'phone',
    noValueError: 'Phone no. is required'
  },
  {
    label: 'Occupation',
    name: 'occupation',
    type: 'text',
    noValueError: 'Occupation is required'
  },
  {
    label: 'Annual Income',
    name: 'income',
    type: 'select',
    options: ['<25k', '25k-40k', '40k-55k', '55k-70k', '>70k'],
    noValueError: 'Phone no. is required'
  },
  {
    label: 'Name of Employer',
    name: 'employer',
    type: 'text',
    noValueError: 'Employer is required'
  },
  {
    label: 'Credit Score',
    name: 'credit',
    type: 'select',
    options: ['<500', '500-600', '600-700', '>700'],
    noValueError: 'Credit score is required'
  },
  {
    label: 'Have you ever been evicted?',
    name: 'eviction',
    type: 'select',
    options: ['Yes', 'No'],
    noValueError: 'required'
  },
  {
    label: 'Have you ever filed for bankruptcy?',
    name: 'bankruptcy',
    type: 'select',
    options: ['Yes', 'No'],
    noValueError: 'required'
  },
  {
    label: 'Name of Co-applicant',
    name: 'coName',
    type: 'text',
    optional: true,
    noValueError: 'required'
  },
  {
    label: 'Occupation of Co-applicant',
    name: 'coOccupation',
    type: 'text',
    optional: true,
    noValueError: 'required'
  },
  {
    label: 'Annual Income of Co-applicant',
    name: 'coIncome',
    type: 'select',
    optional: true,
    options: ['<25k', '25k-40k', '40k-55k', '55k-70k', '>70k'],
    noValueError: 'required'
  },
  {
    label: 'Employer of Co-applicant',
    name: 'coEmployer',
    optional: true,
    type: 'text',
    noValueError: 'required'
  }
];
