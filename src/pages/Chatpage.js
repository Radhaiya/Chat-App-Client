import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Chatpage = () => {

    const [chats, setChats] = useState([])


    const getChats = async () => {
        const { data } = await axios.get('http://localhost:8080/api/chat');
        setChats(data)
    }

    useEffect(() => {
        getChats()
    }, [])

    return (
        <>
            <div>{chats.map((chat) => <div key={chat._id}>{chat.chatName}  <div /></div>)}</div>

        </>
    )
}

export default Chatpage