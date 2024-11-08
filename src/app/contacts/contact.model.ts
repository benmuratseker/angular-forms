export interface Contact {
  id: string,
  icon: string,
  personal: boolean,
  firstName: string,
  lastName: string,
  // dateOfBirth: Date | null,
  dateOfBirth: string,
  favoritesRanking: number | null,
  // phone: Phone,
  phones: Phone[],
  address: Address,
  notes: string,
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}

export const phoneTypeValues = [
  { title: 'Mobile', value: 'mobile' },
  { title: 'Work', value: 'work' },
  { title: 'Other', value: 'other' },
];

export const addressTypeValues = [
  { title: 'Work', value: 'work' },
  { title: 'Home', value: 'home' },
  { title: 'Other', value: 'other' },
];