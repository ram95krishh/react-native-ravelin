import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Ravelin from './RavelinModule';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  const getData = React.useCallback(async () => {
    const res = await Ravelin.setUp('YOUR_API_KEY_HERE');
    console.log('Success?', res);
    Ravelin.setCustomerId('Test123');
    const deviceId = await Ravelin.getDeviceId();
    setResult(deviceId);
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={styles.container}>
      <Text>Device ID from Ravelin: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
