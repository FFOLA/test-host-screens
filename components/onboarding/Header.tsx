import { Pressable, ScrollView } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import SelectPlaceType from "../SelectPlaceType";
import { NavigationButtons } from "./NavigationButtons";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Feather } from "@expo/vector-icons";
import * as Progress from 'react-native-progress';

export const Header = ({ onBack, currentIndex }: { onBack: () => void, currentIndex: number }) => {
    const placeType = useSelector((state: RootState) => state.onboarding.onboardingChecklist.placeType);
    return (
        <ThemedView style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginLeft: 20 }}>
            <Pressable style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 42, backgroundColor: '#F9F9F9' }} onPress={() => currentIndex > 1 && onBack()}>
                <Feather name="arrow-left" size={24} color="black" />
            </Pressable>
            <ThemedView style={{ flexDirection: 'row', gap: 10, marginLeft: 6 }}>
                <Progress.Bar progress={currentIndex === 1 ? 0.5 : 1} unfilledColor='#0000000D' color='black' borderWidth={0} width={85} style={styles.progress} borderRadius={40} />
                <Progress.Bar progress={currentIndex === 2 ? 0.5 : currentIndex < 2 ? 0 : 1} unfilledColor='#0000000D' color='black' borderWidth={0} width={85} style={styles.progress} borderRadius={20} />
                <Progress.Bar progress={currentIndex === 3 ? 0.5 : currentIndex < 3 ? 0 : 1} unfilledColor='#0000000D' color='black' borderWidth={0} width={85} style={styles.progress} borderRadius={20} />
            </ThemedView>
            <ThemedView style={{ flexDirection: 'row', marginLeft: 8 }}>
                <ThemedText lightColor='#00000066'>{currentIndex}</ThemedText>
                <ThemedText lightColor='#00000066'>/</ThemedText>
                <ThemedText lightColor='#00000066'>{3}</ThemedText>
            </ThemedView>
        </ThemedView>
    )
};

const styles = StyleSheet.create({

    progress: {
        height: 5,
        borderRadius: 20,
    }
})
