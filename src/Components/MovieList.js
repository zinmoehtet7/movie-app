import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouritesComponents;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex align-items-center justify-content-start m-2' key={index}>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	)
}

export default MovieList