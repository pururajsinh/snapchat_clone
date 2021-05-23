import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Chats.css";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { db } from "../../firebase";
import Chat from "../Chat/Chat";

function Chats() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
            );
    }, [])
    return (
        <div className="chats">
            <div className="chats_header">
                <Avatar className="chats_avatar" />
                <div className="chats_search">
                    <SearchIcon />
                    <input placeholder="Friends" type="text"></input>
                </div>
                <div className="chats_chatBubble">
                    <ChatBubbleIcon />
                </div>
            </div>
            <div className="chats_posts">
                {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
                    <Chat
                        key={id}
                        username={username}
                        timestamp={timestamp}
                        read={read}
                        profilePic={profilePic}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
        </div>);
}

export default Chats;
