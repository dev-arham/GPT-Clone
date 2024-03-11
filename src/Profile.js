import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import LeftSection from './LeftSection'
import RightSection from './RightSection'


function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        {/* <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          
        </div> */}
        <div className="mainpage">
      <div className="leftOut">
        <LeftSection />
      </div>
      <div className="rightOut">
        <RightSection />
      </div>
    </div>
      </div>
  )
}

export default Profile
