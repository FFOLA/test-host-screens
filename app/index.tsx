
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Progress from 'react-native-progress';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  getOcuppantTypeData,
  getPlacesData,
} from "@/redux/OnboardingSlice";
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import SelectPlaceType from '@/components/SelectPlaceType';
import SelectOccupantType from '@/components/SelectOccupantType';
import { StepOne } from '@/components/onboarding/StepOne';
import { StepTwo } from '@/components/onboarding/StepTwo';
import { StepThree } from '@/components/onboarding/StepThree';
import { Header } from '@/components/onboarding/Header';

export default function HomeScreen() {
  const swiperRef = useRef<Swiper>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOcuppantTypeData());
    dispatch(getPlacesData());
  }, []);


  return (
    <ThemedView style={{ flex: 1, }}>
      <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1 }}>
        <Header
          currentIndex={currentIndex}
          onBack={() => swiperRef.current?.scrollBy(-1)}
        />
        <Swiper
          style={styles.wrapper}
          loop={false}
          ref={swiperRef}
          onIndexChanged={(index) => {
            setCurrentIndex(index + 1);
          }}
          showsPagination={false}
          scrollEnabled={false}
        >
          <StepOne onNext={() => swiperRef.current?.scrollBy(1)} />
          <StepTwo onNext={() => swiperRef.current?.scrollBy(1)} />

          <StepThree />
        </Swiper>
      </SafeAreaView>
    </ThemedView>

  )
}

const styles = StyleSheet.create({
  wrapper: {
  },

})
