import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { Places } from '@/types/places'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { ThemedText } from './ThemedText'
import { placeImages } from '@/data/placesdata'

import {
    setPlaceType
} from "@/redux/OnboardingSlice";

const SelectPlaceType = () => {
    const placeType = useSelector((state: RootState) => state.onboarding.onboardingChecklist.placeType);
    const placesData = useSelector((state: RootState) => state.onboarding.onboardingChecklist.placesData);


    return (
        <ThemedView style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: 20 }}>
            {
                placesData.map((place) =>
                    <SelectPlaceTypeItem place={place} isSelected={place.id === placeType?.id} onPress={() => { }} key={place.id} />
                )
            }
        </ThemedView>
    )
}

interface SelectPlaceTypeItemProp {
    place: Places
    isSelected: boolean
    onPress: () => void
}

const SelectPlaceTypeItem = ({ place, isSelected }: SelectPlaceTypeItemProp) => {
    const dispatch = useDispatch<AppDispatch>();


    return (
        <Pressable onPress={() => dispatch(setPlaceType(place))}>
            <ThemedView style={{ height: 93, width: 166, borderWidth: 2, borderColor: isSelected ? '#101828' : '#EAECF0', borderRadius: 12, paddingHorizontal: 20, paddingVertical: 16, justifyContent: 'space-between' }}>
                <Image source={placeImages[place.image]} tintColor={isSelected ? '#101828' : '#667085'} style={{ height: 24, width: 24 }} />
                <ThemedText lightColor={isSelected ? '#101828' : '#667085'} type={isSelected ? 'descriptionBig' : 'descriptionSmall'}>{place.name}</ThemedText>
            </ThemedView >

        </Pressable>
    )
}

export default SelectPlaceType

const styles = StyleSheet.create({})

