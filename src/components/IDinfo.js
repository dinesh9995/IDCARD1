import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class IDinfo extends Component {
    state = { info: [] };
    componentWillMount() {
        axios.get('http://141.144.58.135/vignan/index.php/api/student_login/141FA04022/VIGNAN/dfeb4Gvyn6Y:APA91bHrB-8GO6SZDDg4YixW0jpkLexSwvUtCNWEbe6uuDER-7id2G0sqbN3_X8nYNavsex6RbvzIwu2a8MBataFe4ldy7IBKGmj886osfG8MP60I7P198WnCBMpctTf5hBz9PkOzTfo/dfeb4Gvyn6Y')
        .then(response => console.log(response.data.student_details.student_id));
}

    render() {
        return (
        <View>
            <Text> hi</Text>
        </View>);
    }
}
export default IDinfo;
