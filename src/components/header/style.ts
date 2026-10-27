import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
    },
    pagename: {
        color: colors.textSecondary,
        fontSize: typography.sizes.title,
        fontWeight: typography.weights.bold,
        padding: 20,
    }
});