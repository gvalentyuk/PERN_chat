import socketIOClient from 'socket.io-client';
import {useEffect} from 'react';

function useSocket(user, dispatch) {
    useEffect(() => {
        const socket = socketIOClient.connect('http://127.0.0.1:3001');
        socket.emit('join', user)
        socket.on('typing', user => {
            console.log("event" + user)
        })

        socket.on('friends', friends => {
            console.log("friends", friends)
        })

        socket.on('online', user => {
            console.log("online" )
        })

        socket.on('offline', user => {
            console.log("offline" + user)
        })
    }, [dispatch])
}

export default useSocket;
