import { Link, Stack } from "expo-router"
import React from "react"
import { SafeAreaView, View } from "react-native"

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View className="flex-1 bg-backgroundColor items-center justify-center">
        <Link href="/" className="text-xl color-white underline">
          Go back to Home
        </Link>
      </View>
    </>
  )
}

export default NotFoundScreen
