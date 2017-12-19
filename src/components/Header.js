import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    return (<Text style={styles.textStyle}>IDCARD</Text>);
};
const styles = {
    textStyle: {
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
     fontSize: 50,   
    }

};
export default Header;
