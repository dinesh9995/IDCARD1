import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';

class IDinfo extends Component {
    state = { student_details: [] };
    componentWillMount() {
        axios.get('http://141.144.58.135/vignan/index.php/api/student_login/141FA04022/VIGNAN/dfeb4Gvyn6Y:APA91bHrB-8GO6SZDDg4YixW0jpkLexSwvUtCNWEbe6uuDER-7id2G0sqbN3_X8nYNavsex6RbvzIwu2a8MBataFe4ldy7IBKGmj886osfG8MP60I7P198WnCBMpctTf5hBz9PkOzTfo/dfeb4Gvyn6Y')
  .then(response => this.setState({ student_details: response.data }));
}
renderInfo() {
    if (this.state.student_details.student_details) {
        const student = this.state.student_details.student_details;
        return (
            <View>
                <View>
                    <Image 
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    source={{ uri: 'http://141.144.58.135/vignan/StudentPhotos/141FA04022.JPG' }} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green', alignSelf: 'center' }}>EMPID:{student.student_id}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Name:{student.student_name}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>FatherName:{student.fathername}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>MotherName:{student.mothername}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>PersonalMobile:8142001368</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Doing Intern at:MTWlabs</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                    PresentAddress:Sri venkataramana Deluxe Men Hostel
                    </Text>
                </View>
                
            </View>

        
        );
    }
    const styles = {
        imageStyle: {
            width: 600,
            height: 300,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textStyle: {
            fontSize: 30,
            fontWeight: '600',
            color: '#00800'
        }


    };
    // return JSON.stringify(this.state.student_details.student_details);
}
    render() {
        return (
        <View>
            {this.renderInfo()}
        </View>);
    }
}
export default IDinfo;
