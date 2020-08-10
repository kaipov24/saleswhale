import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Activity from './activity'
import './css/team.css'

const Teams = () => {
  const allTeams = useSelector((s) => s.teams.teams)
  const favTeams = allTeams.filter((it) => it.is_favorited)
  const archieveTeams = allTeams.filter((it) => it.is_archived)
  const [teams, setTeams] = useState(allTeams)
  const [title, setTitle] = useState('All')
  useEffect(() => {
    setTeams(allTeams)
  }, [allTeams])

  return (
    <div className="main">
      <div className="intro">
        <div className="intro__inner">
          <div className="intro__inner__left">
            <div className="intro__inner__left__icon">
              <img src="images/icon companies.svg" alt="Teams" />
            </div>
            <div className="intro__inner__left__text">Teams</div>
          </div>
          <div className="intro__inner__right">
            <img src="images/Shape.svg" alt="button" />
            <button className="intro__inner__right__button" type="button">
              CREATE NEW TEAM
            </button>
          </div>
        </div>
        <div className="intro__buttons">
          <div>
            <button
              className="buttons__filter"
              type="button"
              onClick={() => {
                setTeams(allTeams)
                setTitle('All')
              }}
            >
              All Teams
            </button>

            <button
              className="buttons__filter"
              type="button"
              onClick={() => {
                setTeams(favTeams)
                setTitle('Favourite')
              }}
            >
              Favourite Teams
            </button>
            <button
              className="buttons__filter"
              type="button"
              onClick={() => {
                setTeams(archieveTeams)
                setTitle('Archieved')
              }}
            >
              ArchieveTeams
            </button>
          </div>
          <div className="input">
            <img className="input__button" src="images/icon-search.svg" alt="search" />
            <input className="input__field" type="text" placeholder="Search team name ..." />
          </div>
        </div>
      </div>

      <section className="content">
        <div className="teams__wrapper">
          <div className="teams__header">
            <div className="teams__title">{title} teams</div>
            <div className="teams__info">
              Showing {teams.length} out of {teams.length} teams
            </div>
          </div>
          <div className="teams__grid">
            {teams.map((team) => {
              return (
                <div key={team} className="team__item">
                  <div className="team__header">
                    <div className="team__header__info">
                      <img className="team__image" src={team.image} alt={team.name} />{' '}
                      <div>
                        <div className="team__title">{team.name}</div>
                        <div className="team__date">Created at {team.created_at} </div>
                      </div>
                    </div>
                    <div className="teams__star">
                      <img
                        src={
                          team.is_favorited ? 'images/star active.svg' : 'images/star default.svg'
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="team__description">{team.description} </div>
                  <div className="team__stats">
                    <div className="team__campaigns">
                      <img src="images/icon-conversations-small (1).svg" alt="" />
                      <div className="team__campaigns__info">{team.campaigns_count} Campaigns</div>
                    </div>
                    <div className="team__leads">
                      <img src="images/icon-leads-small.svg" alt="" />
                      <div className="team__leads__info">{team.leads_count} Leads</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="activity">
          <Activity />
        </div>
      </section>
    </div>
  )
}

Teams.propTypes = {}
export default React.memo(Teams)
