import { View, Image } from "react-native"
import ImageViewer from "../../components/ImageViewer"
import Button from "../../components/Button"
const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View className="flex-1 items-center bg-backgroundColor">
      <ImageViewer imgSource={PlaceholderImage} />

      <View className="mt-8">
        <Button label="Choose a photo" theme="primary" />
        <Button label="Use this Photo" />
      </View>
    </View>
  )
}
