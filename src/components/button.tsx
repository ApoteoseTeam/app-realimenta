import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import {globalStyles} from '../theme/global'

type ButtonProps = TouchableOpacityProps & {
    label: string
}
export const Button = ({ label, ...rest }: ButtonProps) => {
    return (
        <TouchableOpacity style = {globalStyles.button} {...rest}>
    <Text style = {globalStyles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}