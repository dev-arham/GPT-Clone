import React from 'react'
import { useState } from 'react'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import './rightsection.css'
import styles from './RightSection.module.css'
import chatgptlogo from './assets/systech.png'
import chatgptlogo2 from './assets/systech.png'
import nouserlogo from './assets/nouserlogo.png'
// import OpenAI from "openai";

const openAiAPI = Your_API_Here

const RightSection = () => {
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [allMessages, setAllMessages] = useState([])

    const sendMessage = async () => {
        setIsLoading(true)
        let url = "https://api.openai.com/v1/chat/completions"

        let token = `Bearer ${openAiAPI}`
        let model = 'gpt-3.5-turbo-16k'

        let messagesToSend = [
            ...allMessages,
            {
                role: 'user',
                content: message
            }
        ]

        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: messagesToSend
            })
        })
        try{
        let resjson = await res.json()
        if (resjson) {

            let newAllMessages = [
                ...messagesToSend,
                resjson.choices[0].message
            ]

            setAllMessages(newAllMessages)
            localStorage.setItem('allMessages', JSON.stringify(newAllMessages));
            setMessage('')
        }}
        catch (error) {
            console.error('Error fetching resjson:', error);
          }finally {
            setIsLoading(false) 
        }
    }
  return (
    <>

<div className={styles.header}><div className="newChat">
                <div>
                    <img src={chatgptlogo} alt="systech-logo" width={50} height={50} />
                    <p className="logo_text">Systech AI</p>

                </div></div>
            <span className={styles.sign_out} onClick={() => signOut(auth)}>Sign Out</span>
        </div>

            
<div className={styles.rightSection}>
    
            <svg onClick={()=>{setAllMessages([])}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>

            {
                allMessages.length > 0 ?
                    <div className={styles.messages}>
                        {allMessages.map((msg, index) => (
                            <div key={index} className={styles.message}>
                                <img src={msg.role === 'user' ? nouserlogo : chatgptlogo2} width={50} height={50} alt="" />
                                <div className={styles.details}>
                                    <h2>{msg.role === 'user' ? 'You' : 'AI'}</h2>
                                    <p>{msg.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className={styles.nochat}>
                        <div className={styles.s1}>
                            <img src={chatgptlogo} alt="chatgpt" height={70} width={70} />
                            <h1>How can I help you today?</h1>
                        </div>
                        <div className={styles.s2}>
                            <div className={styles.suggestioncard} >
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                            <div className={styles.suggestioncard}>
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                            <div className={styles.suggestioncard}>
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                            <div className={styles.suggestioncard}>
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                        </div>

                    </div>
            }
    <hr class="hr"></hr>
            <div className={styles.bottomsection}>
                <div className={styles.messagebar}>
                    <input type='text' placeholder='Share your thoughts...'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />

{isLoading ? (
                        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" >
  <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
  <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 20 20"
      to="360 20 20"
      dur="1s"
      repeatCount="indefinite"/>
    </path>
  </svg>
                    ) : (
                        <svg
                            onClick={sendMessage}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    )}

                </div>
                <p>Systech AI can make mistakes. Consider checking important information.</p>

            </div>
        </div></>
  )
}

export default RightSection