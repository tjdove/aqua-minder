export interface User {
  id: number;
  firstName: string;
  lastName: string;
  addr1: string;
  addr2: string;
  state: string;
  zip: string;
}

export interface Tank {
  id: number;
  name: string;
  picId: number;
  description: string;
  size: string;
}

export interface Measure {
  id: number;
  type: string;
  sample: number;
}
