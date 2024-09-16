import React from 'react'
import UserNav from '../../components/userCompo/UserNav'
import WriteBlog from '../../components/userCompo/WriteBlog'

export default function CreateBlog() {
  return (
    <div>
        <div>
            <WriteBlog/>
        </div>
      <div>
        <UserNav/>
      </div>
    </div>
  )
}
