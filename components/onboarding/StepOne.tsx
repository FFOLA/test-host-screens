import { ScrollView } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import SelectPlaceType from "../SelectPlaceType";
import { NavigationButtons } from "./NavigationButtons";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const StepOne = ({ onNext }: { onNext: () => void }) => {
    const placeType = useSelector((state: RootState) => state.onboarding.onboardingChecklist.placeType);
    return (
        <ThemedView style={styles.slide}>
            <ThemedText style={styles.heading} type='heading'>
                Which of these best describes your place?
            </ThemedText>
            <ScrollView style={styles.scrollContent}>
                <SelectPlaceType />
            </ScrollView>
            <NavigationButtons onNext={() => placeType ? onNext() : alert('Please select a place type')} />
        </ThemedView>
    )
};

const styles = StyleSheet.create({

    slide: {
        flex: 1,
        padding: 20,
    },
    heading: {
        marginBottom: 20,
    },
    scrollContent: {
        flex: 1,
        marginTop: 26,
    },
})
