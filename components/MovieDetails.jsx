import { View, Image, Text, Button } from 'react-native-web';

export default function MovieDetails(props) {
    return (
        <View>
            <Image
                style={{ borderRadius: 10 }}
                source={{
                    uri: props.movie.imageUrl,
                    width: 100,
                    height: 148,
                }}
            />
            <Text>{props.movie.title}</Text>

            <Button title="Go back" onPress={props.onClose} />
        </View>
    );
}
