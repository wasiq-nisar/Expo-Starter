import { Image } from "react-native"

type Props = {
  imgSource: any
  selectedImage?: string
}

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource
  return <Image source={imageSource} className="w-[320] h-[440] rounded-2xl" />
}
