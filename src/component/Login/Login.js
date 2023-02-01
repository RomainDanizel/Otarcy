import {React, useState} from 'react'
import PropTypes from 'prop-types'

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

export default function Login({ setToken }) {
    const [ username, setUsername] = useState()
    const [ password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        });
        setToken(token)

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Nom d'utilisateur</p>
                <input type="text" onChange={e => setUsername(e.target.value)}></input>
            </label>
            <label>
                <p>Mot de passe</p>
                <input type="password" onChange={e => setPassword(e.target.value)}></input>
            </label>
            <div>
                <button type='submit'>Se connecter</button>
            </div>
        </form>
    </>
  )
}
    Login.propTypes = {
        setToken: PropTypes.func.isRequired
    }
 