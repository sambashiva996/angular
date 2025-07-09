import { Equipment } from "./equipment";
import { Member } from "./member";

export interface Gym {
  id?: number;
  exercises: string;
  gymAddress: string;
  equipName?: Equipment[];
}
