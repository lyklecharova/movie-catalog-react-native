import { Text, View } from 'react-native';
import data from './data.json';
import MovieCard from './components/MovieCard';

export default function App() {
    return (
        <View style={{ marginTop: 50 }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                }}
            >
                Movie Catalog
            </Text>

            <View>
                {data.movies.map((movie) => (
                    <MovieCard key={movie.id} title={movie.title} />
                ))}
            </View>
        </View>
    );
}
