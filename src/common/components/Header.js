import React, { Fragment } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/header";
import { white, secondary } from "constants/colors";

const Header = ({ onBack = () => null, title = "Trivio" }) => (
  <Fragment>
    <StatusBar barStyle="light-content" backgroundColor={secondary} />
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButtonContainer} onPress={onBack}>
        <Icon name="arrow-back" size={30} color={white} />
      </TouchableOpacity>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  </Fragment>
);

export default Header;
