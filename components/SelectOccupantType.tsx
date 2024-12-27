import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { Places } from '@/types/places'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { ThemedText } from './ThemedText'
import { placeImages } from '@/data/placesdata'

import {
    setOccupantType
} from "@/redux/OnboardingSlice";
import { Occupants } from '@/types/occupants'
import { occupantImages } from '@/data/occupanttypedata'

const SelectOccupantType = () => {
    const occupantType = useSelector((state: RootState) => state.onboarding.onboardingChecklist.occupantType);
    const occupantTypeData = useSelector((state: RootState) => state.onboarding.onboardingChecklist.occupantTypeData);


    return (
        <ThemedView style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: 20 }}>
            {
                occupantTypeData.map((occupant) =>
                    <SelectOccupantTypeItem occupant={occupant} isSelected={occupant.id === occupantType?.id} onPress={() => { }} key={occupant.id} />
                )
            }
        </ThemedView>
    )
}

interface SelectOccupantTypeItemProp {
    occupant: Occupants
    isSelected: boolean
    onPress: () => void
}

const SelectOccupantTypeItem = ({ occupant, isSelected }: SelectOccupantTypeItemProp) => {
    const dispatch = useDispatch<AppDispatch>();


    return (
        <Pressable onPress={() => dispatch(setOccupantType(occupant))}>
            <ThemedView style={{ minHeight: 236, width: 166, borderWidth: 2, borderColor: isSelected ? '#101828' : '#EAECF0', borderRadius: 12, paddingVertical: 16, }}>
                <Image source={occupantImages[occupant.image]} style={{ height: 125, width: 142, alignSelf: 'center' }} />
                <ThemedText lightColor='#000000E5' style={{ paddingLeft: 12, marginTop: 12 }} type='descriptionBig'>{occupant.name}</ThemedText>
                <ThemedText lightColor='#00000099' style={{ paddingLeft: 12 }} type='descriptionSmall'>{occupant.description}</ThemedText>
            </ThemedView >

        </Pressable>
    )
}

export default SelectOccupantType

const styles = StyleSheet.create({})

