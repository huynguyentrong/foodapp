import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainComponent from "./components/MainComponent";
import { ConfigureStore } from "./redux/ConfigureStore";
import SigninScreen from "./screens/SigninScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      {/* <MainComponent /> */}
      {/* <WelcomeScreen /> */}
      <SigninScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
