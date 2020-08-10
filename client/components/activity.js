import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './css/activity.css'

const Activity = () => {
  const activities = useSelector((s) => s.teams.activities)

  const [activ, setActiv] = useState(activities)

  useEffect(() => {
    setActiv(activities)
  }, [activities])

  return (
    <div className="activity__inner">
      <div className="activity__header">Activity</div>
      {activ.map((activity) => {
        return (
          <div key={activity} className="activity__item">
            <div className="activity__avatar">
              <img src={`images/${activity.person.name}.png`} alt="" />
            </div>
            <div className="activity__descr">
              <b>{activity.person.name}</b> {activity.action.split('_').join(' ')}{' '}
              <strong>{activity.target}</strong>
              <div className="activity__time">{activity.created_at}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


Activity.propTypes = {}
export default React.memo(Activity)
