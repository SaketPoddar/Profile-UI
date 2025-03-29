import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CustomInput from '../components/CustomInput'
// import { colors } from '../constants/colors'
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from '@react-navigation/native';


//icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign"


const ProfileScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={{
      paddingBottom: 2 * moderateScale(32)
    }}>


      <Header />


      {/* profile image container */}
      <View style={styles.ProfileImageCintainer}>
        <Image source={require("../assets/dp.png")}
          style={styles.ProfileImage} />
        <TouchableOpacity style={[styles.editIconContainer, {
          backgroundColor: colors.orange,

        }]}>
          <FontAwesome name={"edit"} size={moderateScale(28)}
            color={colors.iconWhite} />
        </TouchableOpacity>
      </View>

      {/* Profile Details Container */}
      <View style={styles.nameRoleContainer}>
        <Text style={[styles.name, {
          color: colors.textPrimary,
        }]}>Saket Poddar</Text>
        <Text style={[styles.role, {
          color: colors.textSecondary,
        }]}>UI UX DESIGN</Text>
      </View>


      {/* input fields container */}
      <View style={styles.inputFieldsContainer}>
        {/* add all the input fields */}
        <CustomInput
          label='Your Email'
          placeholder='email@gmail.com'
          icon={<Ionicons
            name="mail-outline"
            size={moderateScale(28)}
            color={colors.iconSecondary}
            style={styles.icon} />
          }

        />
        <CustomInput
          label='Phone Number'
          placeholder='91+ 905314***'
          icon={<Feather
            name="phone"
            size={moderateScale(28)}
            color={colors.iconSecondary}
            style={styles.icon} />
          }

        />
        <CustomInput
          label='Website'
          placeholder='www.google.com'
          icon={<Fontisto
            name="world-o"
            size={moderateScale(28)}
            color={colors.iconSecondary}
            style={styles.icon} />
          }


        />
        <CustomInput
          label='Password'
          placeholder='******'
          icon={<AntDesign
            name="lock1"
            size={moderateScale(28)}
            color={colors.iconSecondary}
            style={styles.icon} />
          }
          type='password'


        />


      </View>

      {/* Logout Button */}
      <TouchableOpacity style={[styles.logoutButton, {
        borderColor: colors.orange,
      }]}>
        <Text style={[styles.logoutText, {
          color: colors.orange,
        }]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16)
  },
  ProfileImageCintainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(5)
  },
  ProfileImage: {
    height: moderateScale(120),
    width: moderateScale(120),
  },
  editIconContainer: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(14),
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(-20),
    marginLeft: moderateScale(40),
  },
  nameRoleContainer: {
    alignItems: "center",
    marginVertical: moderateScale(8),
  },
  name: {
    fontWeight: "600",
    fontSize: moderateScale(24),
  },
  role: {
    fontWeight: "400",
    fontSize: moderateScale(16),
  },
  inputFieldsContainer: {
    marginVertical: moderateScale(6)
  },
  icon: {
    marginVertical: moderateScale(8),
    marginLeft: moderateScale(15),
  },
  logoutButton: {
    borderWidth: 1,
    padding: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(16)
  },
  logoutText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },

})