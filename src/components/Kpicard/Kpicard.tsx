import { View, Text } from "react-native"
import { kpicardStyles } from "./styles";
import { Feather } from "@expo/vector-icons";

type KpicardVariant = "primary" | "secondary";

type KpicardProps = {
    variant?: KpicardVariant
    title: string
    value: number
    unit?: string
    change?: number
}

export const Kpicard = ({ title, value, unit, variant = "primary", change }: KpicardProps) => {
    return (
        <View style={[
            kpicardStyles.KpicardBox,
            variant === "primary"
                ? kpicardStyles.kpicardPrimary
                : kpicardStyles.kpicardSecondary,
        ]}>
            <Text style={kpicardStyles.kpicardTitle}>{title}</Text>
            <View style={kpicardStyles.kpicardValueContainer}>
                <Text style={kpicardStyles.kpicardValue}>{value.toLocaleString("pt-BR")}</Text>
                <Text style={kpicardStyles.kpicardUnit}>{unit}</Text>
            </View>
            {change !== undefined && (
                <View style={kpicardStyles.kpicardChangeContainer}>
                    <Feather
                        name={
                            change > 0
                                ? "trending-up"
                                : change < 0
                                    ? "trending-down"
                                    : "minus"
                        }
                        size={16}
                        color={
                            change > 0
                                ? "#16A34A"
                                : change < 0
                                    ? "#DC2626"
                                    : "#757575"
                        }
                    />
                    <Text style={
                        change > 0
                            ? kpicardStyles.kpicardChangePositive
                            : change < 0
                                ? kpicardStyles.kpicardChangeNegative
                                : kpicardStyles.kpicardChangeNeutral
                    }
                    >
                        {change > 0 ? "+" : ""}
                        {change}%</Text>
                </View>
            )}
        </View>
    )
}