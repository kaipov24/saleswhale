const GET_TEAMS = 'GET_TEAMS'
const GET_ACTIVITIES = 'GET_ACTIVITIES'
const GET_USERS = 'GET_USERS'


const initialState = {
  teams: [],
  activities: [],
  users: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return { ...state, teams: action.teams }
    case GET_ACTIVITIES:
      return { ...state, activities: action.activities }
    case GET_USERS:
      return { ...state, users: action.users }

    default:
      return state
  }
}

export function getTeams() {
  return (dispatch) => {
    fetch('/api/v1/teams')
      .then((res) => res.json())
      .then((teams) => {
        dispatch({ type: GET_TEAMS, teams })
      })
  }
}

export function getActivities() {
  return (dispatch) => {
    fetch('/api/v1/activities')
      .then((res) => res.json())
      .then((activities) => {
        dispatch({ type: GET_ACTIVITIES, activities })
      })
  }
}

export function getUsers() {
  return (dispatch) => {
    fetch('/api/v1/users')
      .then((res) => res.json())
      .then((users) => {
        dispatch({ type: GET_USERS, users })
      })
  }
}

