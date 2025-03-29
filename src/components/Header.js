import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

//icons
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import { moderateScale } from 'react-native-size-matters';
import { useNavigation, useTheme } from '@react-navigation/native';

const Header = () => {
    const {colors} = useTheme()
    const navigation =useNavigation();
    const handleOpenSetting= ()=>{
        navigation.navigate("SETTING SCREEN")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name={"arrow-back"} color={colors.iconPrimary} size={moderateScale(28)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenSetting}>
                <Octicons name={"gear"} color={colors.iconPrimary} size={moderateScale(28)} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})