import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';

// Icons
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';

const CustomInput = ({ label, icon, placeholder, type, ...rest }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[styles.inputLabel, { color: colors.textPrimary }]}>
                {label}
            </Text>

            <View style={styles.inputFieldContainer}>
                {icon}
                <TextInput
                    style={[styles.textInput, { color: colors.textPrimary }]}
                    placeholder={placeholder}
                    placeholderTextColor={colors.iconSecondary}
                    secureTextEntry={type === 'password' && secureTextEntry}
                    {...rest}
                />

                {type === 'password' && (
                    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Feather
                            name={secureTextEntry ? 'eye' : 'eye-off'}
                            size={moderateScale(28)}
                            color={colors.iconSecondary}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        marginVertical: moderateScale(8),
    },
    inputLabel: {
        fontWeight: '700',
        fontSize: moderateScale(16),
        marginVertical: moderateScale(8),
    },
    inputFieldContainer: {
        borderWidth: moderateScale(1),
        borderColor: '#ABABAB',
        borderRadius: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(8),
    },
    textInput: {
        flex: 1,
        marginLeft: moderateScale(15),
        fontSize: moderateScale(17),
        fontWeight: '300',
    },
});
