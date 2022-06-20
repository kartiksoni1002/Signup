import React, {useState} from 'react'
import { View, Text, Image, useWindowDimensions} from 'react-native'
import CustomInput from '../../components/CustomInput/CustpmInput'
import CustomButton from '../../components/CustomButton/CustomButton';

    const ForgotPassword = () => {
       
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const {height} = useWindowDimensions();
        const onSignInPressed = () => {
            console.warn("sign in");
        }

        return (
            <View style={styles.root}>
                <h3> Forgot Password? </h3>
                <h6>Don't worry, happens to the best of us</h6>
                <Text>Enter Email Id or Username</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <Text>Password</Text>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text="Email me a recovery link" onPress={onSignInPressed} />
                <h6>Already have an account</h6>
            </View>
        );
    };

    const styles = StyleSheet.create({
        root:{
            alignItems: 'center',
            padding: 20,
        },
    });

export default ForgotPassword;