import React, { useContext, useEffect, useState } from 'react'
import UserNav from '../../components/userCompo/UserNav'
import { UserContext } from '../../Context/UserContext'

export default function Profile() {
  const { user } = useContext(UserContext)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Check if user data is already available in context
    if (user) {
      setUserData(user)
    } else {
      // Fallback to localStorage if user is not available in context (after refresh)
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        setUserData(JSON.parse(savedUser)) // Parse the JSON string back to object
      }
    }
  }, [user])

  useEffect(() => {
    // Save user data to localStorage whenever the user changes
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)) // Save user object as a JSON string
    }
  }, [user])

  // Make sure userData is available before rendering
  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        <h1>Profile</h1>
        <h1>{userData._id}</h1>
        <h1>{userData.fname}</h1>
        <img src={userData.image} alt="Profile" className="border-2 rounded-full" />
      </div>
      <div>
        <UserNav />
      </div>
    </div>
  )
}
