import React, { useContext } from 'react'
import UserNav from '../../components/userCompo/UserNav'
import { UserContext } from '../../Context/UserContext'

export default function Profile() {
  const {user} = useContext(UserContext)
  return (
    <div>
        <div>
            <h1>Profile</h1>
            <h1>{user._id}</h1>
            <h1>{user.fname}</h1>
        </div>
      <div>
        <UserNav/>
      </div>
    </div>
  )
}
