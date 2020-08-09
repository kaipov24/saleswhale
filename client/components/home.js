import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTeams, getActivities, getUsers } from '../redux/reducers/teams'
import Teams from './teams'
import Header from './header'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTeams())
    dispatch(getActivities())
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <Header />
      <Teams />
    </div>
  )
}

Home.propTypes = {}

export default Home
