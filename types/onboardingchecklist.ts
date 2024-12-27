import { Occupants } from "./occupants";
import { Places } from "./places";

export interface OnboardingChecklist {
    placeType: Places | null;
    occupantType: Occupants | null;
    placesData: Places[];
    occupantTypeData: Occupants[]
}
