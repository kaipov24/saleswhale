import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const users = useSelector((store) => store.teams.users)

  const [user, setUser] = useState(users)
  useEffect(() => {
    setUser(users)
  }, [users])

  return (
    <div className="overflow-hidden flex items-center justify-start content-start ">
      {user.map((it) => {
        return (
          <div className="text-black" key={it}>
            {it.name}
          </div>
        )
      })}
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
