import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({title, theme, color, onPress, icon}) {
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={onPress}
            >
              if (icon == "") {
                <FontAwesome
                name="picture-o"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
              />
              }
              <FontAwesome
                name="picture-o"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
              />
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{title}</Text>
            </Pressable>
        </View>
        );
      } else {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 0, borderColor: "#e2f4ad", borderRadius: 18 }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={onPress}
            >
              {/*
                <FontAwesome 
                name="picture-o"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
              />
        */}
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{title}</Text>
            </Pressable>
        </View>
        );
      }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
