export enum Role {
  STAFF,
  STUDENT,
  MANAGER,
  ADMIN,
}
export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

interface address {
  city: string;
  street: string;
  postalCode: string;
}

export interface objPpl {
  id?: number;
  name?: string;
  surname?: string;
  age?: number;
  dateOfBirth?: string;
  address?: address;
  role?: Role;
  username?: string;
  profilePhotoUrl?: string;
  gender?: Gender;
}
