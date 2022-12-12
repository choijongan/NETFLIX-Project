import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/MovieAction'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(state=>state.movie)
  
  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])
  // loading이 true면 loading 스피너를 보여주고
  // loading이 false면 데이터를 보여주고

  //true: 데이터 도착 전
  //false: 데이터 도착 후, 에러가 났을때
  if(loading){
    return <ClipLoader
    color="#ffff"
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    }
  return ( //조건부 렌더링, popularmovies.results값이 있으면 banner를 보여준다는 뜻.
    <div> 

      

      {popularMovies.results && <Banner movie={popularMovies.results[0]} />} 

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  )
}

export default Home