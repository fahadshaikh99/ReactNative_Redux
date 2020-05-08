import React from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';

const Home = (props) => {
    console.log(props)
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'yellow'}}>
            <Text>
                {props.myname}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        myname: state.name
    }
}

export default connect(mapStateToProps)(Home);