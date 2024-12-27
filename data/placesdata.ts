import { PlaceImageKey, Places } from "@/types/places";

export const placesData: Places[] = [
    {
        id: 1,
        name: 'Apartment/Flat',
        image: 'flat'
    },
    {
        id: 2,
        name: 'Co-living space',
        image: 'co-living'
    },
    {
        id: 3,
        name: 'Townhouse',
        image: 'town'
    },
    {
        id: 4,
        name: 'Duplex',
        image: 'duplex'
    },
    {
        id: 5,
        name: 'Studio Apartment',
        image: 'studio'
    },
    {
        id: 6,
        name: 'Dormitory',
        image: 'dorm'
    },
    {
        id: 7,
        name: 'Loft',
        image: 'loft'
    },
    {
        id: 8,
        name: 'Condominium',
        image: 'condo'
    },
]


type ImageRequireSource = number;


export const placeImages: Record<PlaceImageKey, ImageRequireSource> = {
    'flat': require('@/assets/images/onboarding/places/flat.png'),
    'co-living': require('@/assets/images/onboarding/places/co-living.png'),
    'condo': require('@/assets/images/onboarding/places/condo.png'),
    'dorm': require('@/assets/images/onboarding/places/dorm.png'),
    'duplex': require('@/assets/images/onboarding/places/dupluex.png'),
    'loft': require('@/assets/images/onboarding/places/loft.png'),
    'studio': require('@/assets/images/onboarding/places/studio.png'),
    'town': require('@/assets/images/onboarding/places/town.png'),
};