import React, { useState } from "react";
import { ActivityIndicator, TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface UIButtonProps {
  buttonText?: string;
}

export const UIButton: React.FC<UIButtonProps> = ({ buttonText = "Login" }) => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    // Simulate an async action
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handlePress}
        disabled={loading}
      >
        <View style={styles.buttonContent}>
          {!loading && <Text style={styles.buttonText}>{buttonText}</Text>}
          {loading && <ActivityIndicator size="small" color="#ffffff" />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    alignItems: "center",
    width: "100%",
  },
  buttonDisabled: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
