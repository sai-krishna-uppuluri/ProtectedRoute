import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

const Login = props => {
  const token = Cookies.get('jwt_token')

  if (token !== undefined) {
    return <Redirect to="/" />
  }

  const setJwtToken = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  const onClickLoginButton = async () => {
    const url = 'https://apis.ccbp.in/login'

    // const {username, password} = this.state

    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setJwtToken(data.jwt_token)
    }
  }
  return (
    <div className="login-container">
      <h1> Please Login </h1>
      <div>
        <button type="button" onClick={onClickLoginButton}>
          Login with Sample Creds
        </button>
      </div>
    </div>
  )
}

export default withRouter(Login)
