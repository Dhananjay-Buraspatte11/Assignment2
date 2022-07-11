import React from 'react'
import "./Home.css"
import { useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [user, setUser] = useState({})
    const [input, setInput] = useState("")

    const getData = async () => {
        console.log("clicked");
        const response = await axios.get(`https://api.github.com/users/${input}`)
        setUser(response.data)        
    }

    return (
        <div className='container'>
            <div className='search-form'>
                <h2>GitHub Search User</h2>
<br />
                <input type="text" value={input} placeholder='Enter User Name' onChange={(event) => setInput(event.target.value)} />
                <button type='submit' onClick={getData}>Search Data</button>

            </div>
            <div className='search-result'>
                <div className='user'>
                    <div className='image'>
                        <img src={user.avatar_url} alt="" />
                    </div>
                    <div className='user-info'>
                        <h2>{user.name}</h2>
                        <small>{user.bio}</small>
                        <a href={`https://github.com/${user.login}`}>view profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home