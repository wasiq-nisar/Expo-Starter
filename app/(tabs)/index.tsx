import { View, Image } from "react-native"
import ImageViewer from "../../components/ImageViewer"
import Button from "../../components/Button"
import * as ImagePicker from "expo-image-picker"
import { useState } from "react"

export default function Index() {
  const PlaceholderImage = require("../../assets/images/background-image.png")
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  )

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("You did not select any image.")
    }
  }

  return (
    <View className="flex-1 items-center bg-backgroundColor">
      <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />

      <View className="mt-8">
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this Photo" />
      </View>
    </View>
  )
}
