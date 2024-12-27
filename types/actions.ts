
import { Places } from '@/types/places';
import { Occupants } from "./occupants";

export interface PlaceAction {
    type: string,
    payload: Places
}
export interface OccupantAction {
    type: string,
    payload: Occupants
}
