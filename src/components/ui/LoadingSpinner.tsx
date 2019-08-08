import React from 'react';
import { Spinner } from 'native-base';
import { mainColor } from "../../../assets/common/colors";

const LoadingSpinner: React.SFC = () => <Spinner color={mainColor.basic}/>;

export default LoadingSpinner;