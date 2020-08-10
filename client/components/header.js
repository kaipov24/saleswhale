import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './css/header.css'

const Header = () => {
  const users = useSelector((store) => store.teams.users)
  const [user, setUser] = useState(users)
  useEffect(() => {
    setUser(users)
  }, [users])

  return (
    <div>
      {user.map((it) => {
        return (
          <div className="header" key={it}>
            <div className="header__left">
              <div className="header__title">NARWHAL</div>
              <div className="header__subtitle">Teams</div>
            </div>
            <div className="header__right">
              <div>
                <img src="images/menu notification.svg" alt="notification" />
              </div>
              <div className="header__right__text">Hello, {it.name}</div>
              <div>
                <img src="images/john.png" alt="" />
              </div>
              <div className="header__right__icon">
                <img src="images/caret down.svg" alt="" />
              </div>
            </div>
            <div className="header__menu">
              <div className="header__menu__item"><img src="images/sw-logo-white.svg" alt="" /></div>
              <div className="header__menu__item"><img src="images/icon-campaign.svg" alt="" /></div>
              <div className="header__menu__item"><img src="images/icon companies.svg" alt="" /></div>
              <div className="header__menu__item"><img src="images/icon-leads.svg" alt="" /></div>
              <div className="header__menu__item"><img src="images/icon-reports.svg" alt="" /></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
