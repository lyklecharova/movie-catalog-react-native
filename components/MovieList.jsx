import { Text, View } from 'react-native';
import MovieCard from './MovieCard';

export default function MovieList(props) {
    return (
        <>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginBottom: 20,
                }}
            >
                Movie Catalog
            </Text>

            <View>
                {props.movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        imageUrl={movie.imageUrl}
                        onPress={props.moviePressHandler}
                    />
                ))}
            </View>
        </>
    );
}
