import { View } from 'react-native';
import data from './data.json';
import { useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

export default function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    console.log(selectedMovie);

    const moviePressHandler = (movieId) => {
        const movie = data.movies.find((movie) => movie.id === movieId);
        setSelectedMovie(movie);
    };

    const closeDetailsHandler = () => {
        setSelectedMovie(null);
    };

    return (
        <View style={{ paddingTop: 50, backgroundColor: '#faf0e6' }}>
            {selectedMovie ? (
                <MovieDetails
                    movie={selectedMovie}
                    onClose={closeDetailsHandler}
                />
            ) : (
                <MovieList
                    movies={data.movies}
                    moviePressHandler={moviePressHandler}
                />
            )}
        </View>
    );
}
