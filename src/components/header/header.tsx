import {View, Text, Pressable, Modal, FlatList } from "react-native";

import { style } from "./style"

type SelectProps = {
  name: string;
};

export function Header({name}: SelectProps) {

  return (
    <View style={style.container}>
      <Text style={style.pagename}>{ name }</Text>
    </View>
  );
}
