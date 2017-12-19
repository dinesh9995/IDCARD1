import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    return (<Text style={styles.textStyle}>MTWLABS</Text>);
};
const styles = {
    textStyle: {
     alignSelf: 'center',
     fontSize: 40, 
     color: 'black',
     fontFamily: 'elephant',
    }

};
export default Header;
