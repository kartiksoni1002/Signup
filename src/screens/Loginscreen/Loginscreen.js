import React, {useState} from 'react'
import { View, Text, Image, useWindowDimensions} from 'react-native'
import CustomInput from '../../components/CustomInput/CustpmInput'
import CustomButton from '../../components/CustomButton/CustomButton';

    const Loginscreen = () => {
       
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const {height} = useWindowDimensions();
        const onSignInPressed = () => {
            console.warn("login");
        }

        return (
            <View style={styles.root}>
                <h3> Login </h3>
                <Text>E-Mail</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <Text>Password</Text>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text="Login" onPress={onSignInPressed} />
                <h6>Don't have an accout?</h6>
                <h4>Sign Up</h4>
            </View>
        );
    };

    const styles = StyleSheet.create({
        root:{
            alignItems: 'center',
            padding: 20,
        },
    });

export default Loginscreen;