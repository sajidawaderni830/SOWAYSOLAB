import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
    return (
        <View style={{ margin: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 28 }}>{props.title}</Text>
        </View>
    )
}
export default Header;