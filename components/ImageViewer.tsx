import { Image } from "react-native"

type Props = {
  imgSource: any
}

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} className="w-[320] h-[440] rounded-2xl" />
}
