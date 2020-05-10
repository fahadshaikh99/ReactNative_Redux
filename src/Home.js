import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

const Home = (props) => {
    console.log(props)
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'yellow'}}>
            <TouchableOpacity onPress={() => {props.changeName('Mahad')}}>
            <Text style={{ fontSize: 40}}>
                {props.myname}
            </Text>
            </TouchableOpacity>

        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        myname: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {dispatch({ type: 'CHANGE_NAME', payload: name})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);