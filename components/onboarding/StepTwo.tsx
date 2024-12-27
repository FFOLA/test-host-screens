import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import SelectPlaceType from "../SelectPlaceType";
import { NavigationButtons } from "./NavigationButtons";
import SelectOccupantType from "../SelectOccupantType";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const StepTwo = ({ onNext }: { onNext: () => void }) => {
    const occupantType = useSelector((state: RootState) => state.onboarding.onboardingChecklist.occupantType);
    return (
        <ThemedView style={styles.slide}>
            <ThemedText style={styles.heading} type='heading'>
                What type of place will occupants have?
            </ThemedText>
            <ScrollView style={styles.scrollContent}>
                <SelectOccupantType />
            </ScrollView>
            <NavigationButtons onNext={() => occupantType ? onNext() : alert('Please select an occupant type')} />
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
