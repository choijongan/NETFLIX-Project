import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/MovieAction'
import Banner from '../components/Banner'

const Home = () => {
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(state=>state.movie)
  
  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])
  return ( //조건부 렌더링, popularmovies.results값이 있으면 banner를 보여준다는 뜻.
    <div> 
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />} 
    </div>
  )
}

export default Home