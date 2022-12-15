import api from "../api";

const API_KEY=process.env.REACT_APP_API_KEY
function getMovies(){
    return async (dispatch)=> {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})
            const popularMovieApi =  api.get(
                `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            )
        
            const topRatedApi =  api.get(
                `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`  
            )

            const upComingApi =  api.get(
                `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            )

            const genreApi = api.get(
                `/genre/movie/list?api_key=${API_KEY}&language=en-US`
            )
            
            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi]) //정보 오기전에 한 번만 await 기다리고, 동시에 진행시켜!
            console.log("genrelist?", genreList)
            dispatch({
                type: 'GET_MOVIES_SUCCESS',
                payload: { 
                    popularMovies:popularMovies.data, 
                    topRatedMovies:topRatedMovies.data, 
                    upcomingMovies:upcomingMovies.data,
                    genreList: genreList.data.genres,
                },
            })
        } catch (error) {
            // 에러 핸들링 하는곳
            dispatch({type: 'GET_MOVIES_FAILURE'})
        }
        
       
    }
}

export const movieAction = {
    getMovies,
}