import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Activity = () => {
  const activities = useSelector((s) => s.teams.activities)

  const [activ, setActiv] = useState(activities)

  useEffect(() => {
    setActiv(activities)
  }, [activities])     

  return (
    <div>
      {activ.map((team) => {
        return (
          <div
            key={team}
            className="max-w-sm bg-indigo-100 rounded overflow-hidden shadow-lg w-84 p-2 m-4"
          >
            <div className="justify-center inline-block rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 card__title">
              {team.person.name}{' '}yrdfsdf
            </div>
          </div>
        )
      })}
    </div>
  )
}


Activity.propTypes = {}
export default React.memo(Activity)
