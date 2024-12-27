export interface Occupants {
    id: number;
    name: string;
    image: OccupantImageKey;
    description?: string;
    created_at?: string;
}


export type OccupantImageKey = 'shared' | 'co-living' | 'private' | 'studio' | 'entire';