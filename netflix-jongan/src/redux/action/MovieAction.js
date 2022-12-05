import api from "../api";

const API_KEY=process.env.REACT_APP_API_KEY
function getMovies(){
    return async (dispatch)=> {
        const popularMovieApi =  api.get(
                `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            )
        
            const topRatedApi =  api.get(
                `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`  
            )

            const upComingApi =  api.get(
                `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            )
            
            let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([popularMovieApi, topRatedApi, upComingApi]) //정보 오기전에 한 번만 await 기다리고, 동시에 진행시켜!
            console.log(popularMovies)
            console.log(topRatedMovies)
            console.log(upcomingMovies)
        // let url = `/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
        // let response = await fetch(url);
        // let data = await response.json();

        // let url2 = `/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
        // let url3 = `/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;
    }
}

export const movieAction = {
    getMovies,
}