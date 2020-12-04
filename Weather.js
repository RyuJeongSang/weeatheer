import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lighting-rainy",
    gradient: ["#00416a", "#e4e5e6"],
    title: "Thunder",
    subtitle:
      "Just a young gun with a quick fuse. I was uptight, wanna let loose.",
  },
  Drizzle: {
    iconName: "weather-cloudy",
    gradient: ["#0f2027", "#203a43", "#2c5364"],
    title: "Drizzle",
    subtitle: "You know? Drizzle is small rain",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#2bc0e4", "#eaecc6"],
    title: "Rain",
    subtitle: "Korean squirrel, Korean squirrel",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#274046", "#e6dada"],
    title: "Don't cry, snowman",
    subtitle:
      "not in front of me. Who'll catch your tears if you can't catch me, darling",
  },
  Atmosphere: {
    iconName: "weather-hazy",
    gradient: ["#ff6e7f", "#bfe9ff"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#373b44", "#4286f4"],
    title: "Cloudy",
    subtitle: "Cloud there",
  },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "Sunny",
    subtitle: "Awesome Sun outside",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={90}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
});
