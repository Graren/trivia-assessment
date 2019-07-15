import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/header";
import { white } from "constants/colors";

const Header = ({ onBack = () => null, title = "Trivio" }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButtonContainer} onPress={onBack}>
      <Icon name="arrow-back" size={30} color={white} />
    </TouchableOpacity>
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  </View>
);

export default Header;
