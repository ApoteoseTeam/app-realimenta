import { TextInput, TextInputProps } from "react-native"
import { globalStyles } from "../theme/global"

type InputProps = TextInputProps;

export function Input({ style, ...rest }: InputProps) {
  return (
    <TextInput
      style={[globalStyles.input, style]}
      {...rest}
    />
  )
}