import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from 'native-base';
import { centerPosition } from "../../../assets/common/position";
import LoadingSpinner from "../ui/LoadingSpinner";

interface IProps {
  isLoading: boolean,
  click: any,
}

interface Styles {
  container: any,
}

const SignInUI: React.SFC<IProps> = ({ isLoading, click }): JSX.Element => (
  <View style={styles.container}>
    {isLoading ? (
      <LoadingSpinner/>
    ) : (
      <Button onPress={click}>
        <Text>Sign in with Google</Text>
      </Button>
    )}
  </View>
);

const styles = StyleSheet.create<Styles>({
  container: centerPosition,
});

export default SignInUI;