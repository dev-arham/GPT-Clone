import React from 'react'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import './leftsection.css'
import chatgptlogo from './assets/systech.png'
import nouserlogo from './assets/nouserlogo.png'

export const LeftSection = () => {
    
  return (
    <div className="leftSection">
            <div className="newChat">
                <div>
                    <img src={chatgptlogo} alt="systech-logo" width={50} height={50} />
                    <p className="logo_text">Systech AI</p>

                </div>

            </div>
            <div className="allChats">
                <p>Dive into the realm of artificial intelligence with Systech Chat AI, your advanced AI conversational partner that delivers rich, insightful dialogues, mirroring the complexity of human interaction. Engage, inquire, and be entertained with a platform that's as close to conversing with a human as AI can offer.</p>
            </div>
            <div className="newChat">
                <div>
                    <img src={nouserlogo} alt="Sysytech-user" width={40} height={40} />
                    <p className="text1">{auth.currentUser.email}</p>
                </div>

            </div>
            <span class="sign_out" onClick={() => signOut(auth)}>Sign Out</span>
        </div>
  )
}
export default LeftSection