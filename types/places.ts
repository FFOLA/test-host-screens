export interface Places {
    id: number;
    name: string;
    image: PlaceImageKey;
    description?: string;
    created_at?: string;
}

export type PlaceImageKey = 'flat' | 'co-living' | 'condo' | 'dorm' | 'duplex' | 'loft' | 'studio' | 'town';
