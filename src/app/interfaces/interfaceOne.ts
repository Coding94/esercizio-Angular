enum roles {
  staff,
  student,
  manager,
  admin,
}

enum genders {
  male,
  female,
  other,
}

interface address {
  city: string;
  street: string;
  postalCode: string;
}

interface company {
  id: number;
  name: string;
  description: string;
  location: address;
}

export interface objOne {
  id?: number;
  name?: string;
  surname?: string;
  age?: number;
  dateOfBirth?: string;
  address?: address;
  role?: keyof typeof roles;
  username?: string;
  profilePhotoUrl?: string;
  companies?: company[];
  gender?: keyof typeof genders;
}
