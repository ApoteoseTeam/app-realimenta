import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const IconButtonStyle = StyleSheet.create({
    Button: {
        width: 48,
        height: 48,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    buttonPressed: {
        backgroundColor: colors.primary,
        transform: [{ scale: 0.95 }],
    },
});