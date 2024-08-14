import { Button, View, Text } from "react-native";

export default function DetailScreen( navigation ){
    return(
        <View>
            <Text>Detail Screen</Text>
            <Button 
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            />
            <Button 
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
            />

        </View>

    )
} 