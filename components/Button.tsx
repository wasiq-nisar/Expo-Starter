import { View, Text, Pressable } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

type Props = {
  label: String
  theme?: "primary"
}

export default function Button({ label, theme }: Props) {
  if (theme === "primary") {
    return (
      <Pressable
        className="w-[320] h-[54] mt-4 items-center justify-center bg-white rounded-xl border-4 border-yellow-400"
        onPress={() => alert("You pressed a button.")}
      >
        <View className="flex flex-row items-center">
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            className="mr-2"
          />
          <Text className="text-black text-xl">{label}</Text>
        </View>
      </Pressable>
    )
  }
  return (
    <Pressable
      className="w-[320] h-[54] mt-4 items-center justify-center"
      onPress={() => alert("You pressed a button.")}
    >
      <Text className="text-white text-xl">{label}</Text>
    </Pressable>
  )
}
