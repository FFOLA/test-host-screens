
import { StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const StepThree = () => {
    const placeType = useSelector((state: RootState) => state.onboarding.onboardingChecklist.placeType);
    const occupantType = useSelector((state: RootState) => state.onboarding.onboardingChecklist.occupantType);

    return (
        <ThemedView style={styles.slide}>
            <ThemedText style={styles.text}>
                SELECTED PLACE - {placeType?.name}
            </ThemedText>
            <ThemedText style={styles.text}>
                SELECTED OCCUPANT - {occupantType?.name}
            </ThemedText>
        </ThemedView>
    )
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        padding: 20,
    },

    text: {
        fontSize: 32,
        fontWeight: 'bold',
    },
})
