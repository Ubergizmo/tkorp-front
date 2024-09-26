export type Person = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  id: number;
};

export type Animal = {
  name: string;
  dateOfBirth: string;
  species: string;
  breed: string;
  color: string;
  weight: number;
  personId: number;
  id: number;
  owner?: {
    firstName: string;
    lastName: string;
  };
};

export type Endpoint = "animals" | "persons";
