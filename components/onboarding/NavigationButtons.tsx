import { Pressable, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export const NavigationButtons = ({ onNext }: { onNext: () => void }) => (
    <ThemedView style={styles.navigationButtons}>
        <Pressable>
            <ThemedView style={styles.button}>
                <ThemedText>Save & Exit</ThemedText>
            </ThemedView>
        </Pressable>
        <Pressable onPress={onNext}>
            <ThemedView style={[styles.button, styles.buttonDark]}>
                <ThemedText lightColor='#fff'>Next</ThemedText>
            </ThemedView>
        </Pressable>
    </ThemedView>
);

const styles = StyleSheet.create({

    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 10,
    },
    button: {
        height: 53,
        width: 171,
        borderRadius: 57,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDark: {
        backgroundColor: '#000',
    },
})