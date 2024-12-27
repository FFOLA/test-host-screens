import { OccupantImageKey, Occupants } from "@/types/occupants";
import { ImageRequireSource } from "react-native";

export const occupantTypeData: Occupants[] = [
    {
        id: 1,
        name: 'An entire place',
        image: 'entire',
        description: 'Occupants have the whole building to themselves',
    },
    {
        id: 2,
        name: 'A private room',
        image: 'private',
        description: 'Occupants have a room in the home, and access to shared places. ',
    },
    {
        id: 3,
        name: 'A shared  room',
        image: 'shared',
        description: 'A shared bedroom for budget-conscious renters and community seekers.',
    },
    {
        id: 4,
        name: 'A studio',
        image: 'studio',
        description: 'A self-contained, single-room unit with a private bathroom and kitchenette. ',
    },
    {
        id: 5,
        name: 'A co-living space',
        image: 'private',
        description: 'A shared living space with private rooms and communal areas. ',
    },
]


export const occupantImages: Record<OccupantImageKey, ImageRequireSource> = {
    'co-living': require('@/assets/images/onboarding/occupants/co-living.png'),
    'entire': require('@/assets/images/onboarding/occupants/entire.png'),
    'private': require('@/assets/images/onboarding/occupants/private.png'),
    'shared': require('@/assets/images/onboarding/occupants/shared.png'),
    'studio': require('@/assets/images/onboarding/occupants/studio.png'),
};