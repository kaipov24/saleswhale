import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Activity from './activity'
import './css/team.css'

const Teams = () => {
  const allTeams = useSelector((s) => s.teams.teams)
  const favTeams = allTeams.filter((it) => it.is_favorited)
  const archieveTeams = allTeams.filter((it) => it.is_archived)
  const [teams, setTeams] = useState(allTeams)

  // const [activ, setActiv] = useState(activities)
  useEffect(() => {
    setTeams(allTeams)
  }, [allTeams])

  return (
    <div className="flex flex-col">
      <div className="flex">
        <button
          className="flex-shrink-0 bg-indigo-900 text-base border border-white rounded text-white px-3"
          type="button"
          onClick={() => {
            setTeams(allTeams)
          }}
        >
          All Teams
        </button>

        <button
          className="flex-shrink-0 bg-indigo-900 text-base border border-white rounded text-white px-3"
          type="button"
          onClick={() => {
            setTeams(favTeams)
          }}
        >
          Favourite Teams
        </button>
        <button
          className="flex-shrink-0 bg-indigo-900 text-base border border-white rounded text-white px-3"
          type="button"
          onClick={() => {
            setTeams(archieveTeams)
          }}
        >
          ArchieveTeams
        </button>
      </div>
      <div className="flex flex-wrap content-center justify-center card">
        {teams.map((team) => {
          return (
            <div key={team} className="team__item">
              <div className="flex">
                <img
                  className="team__image"
                  src={team.image}
                  alt={team.name}
                />{' '}
                <div>
                  <div>{team.name}</div>
                  <div>Created at {team.created_at} </div>
                </div>
              </div>
              <div>{team.description} </div>
            </div>
          )
        })}
      </div>
      <div>
        <Activity />
      </div>

    </div>
  )
}

Teams.propTypes = {}
export default React.memo(Teams)
