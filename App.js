import { Text, View } from 'react-native';
import data from './data.json';
import MovieCard from './components/MovieCard';

export default function App() {
    
    const moviePressHandler = (movieId) => {
        alert(`Movie Pressed: ${movieId}`);
    };

    return (
        <View style={{ paddingTop: 50, backgroundColor: '#faf0e6' }}>
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
                {data.movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        imageUrl={movie.imageUrl}
                        onPress={moviePressHandler}
                    />
                ))}
            </View>
        </View>
    );
}
