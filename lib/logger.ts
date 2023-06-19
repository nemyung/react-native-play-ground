import { Platform } from "react-native";

export class Logger {
  static info(message: unknown) {
    console.log(
      `Platform: ${Platform.OS}.  message: ${JSON.stringify(message, null, 2)}`
    );
  }
}
