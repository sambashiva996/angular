import { Gym } from "./gym";

export interface Member {
  id?: number;
  name: string;
  phoneNumber: string;
  address: string;
  gym?: Gym;
}