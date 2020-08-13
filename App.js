import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging'

// Main Screen
import MainApp from "./src/screens/MainApp";

async function registerAppWithFCM() {
    await messaging().registerDeviceForRemoteMessages();
}

export default App = () => {
  useEffect(() => {
    registerAppWithFCM()
    messaging().subscribeToTopic('anime')
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification)
      }
    })
  }, [])

  return (
    <MainApp />
  );
};