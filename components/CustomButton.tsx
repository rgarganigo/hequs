import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import '../global.css'
import 'react-native-reanimated';

const CustomButton = () => {
    return (
        <TouchableOpacity className={`bg-secondary rounded-xl
        min-h-[62px] justify-center items-center`}>
            <Text className="text-primary">Custom Button</Text>
        </TouchableOpacity>
    )
}

export default CustomButton