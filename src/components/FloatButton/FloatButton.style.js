import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    left:230,
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // Dành cho Android
    borderRadius: 30,
  },
  gradient: {
    width: 70,
    height: 70,
    padding: 20,
    alignItems: "center",
    borderRadius: 25,
  },
});

