import { View, Text } from 'react-native';

export default function MovieCard(props) {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}
