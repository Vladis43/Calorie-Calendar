import React from 'react';
import Layout from '../../components/SignInUI';
import { Actions } from 'react-native-router-flux';

class SignIn extends React.Component {
  state = {
    isLoading: false,
  };

  handleClick = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
      return Actions.home();
    }, 3000);
  };

  render() {
    const { isLoading } = this.state;
    return <Layout isLoading={isLoading} click={this.handleClick}/>
  }
}

export default SignIn;