import Notifications from "react-notifications-menu"
import React, { useState, useEffect , useRef,  useContext} from "react";
import axios from 'axios'
const Notification = ( ) =>{
  const [notificationdata , setnotificationdata]=useState([{image: ''
    , message: ""}])

  useEffect(()=>{
    console.log("Notification")
    getnoti()
  })
  const getnoti = async () => {
    try {
            const res =await axios.get("http://localhost:5000/api/notification/getnoticication")
            const newData = res.data.map(item => ({image: 'https://i.ibb.co/f0Knd0d/police-officer-posing-crossing-arms-vector-138952895.jpg' ,message: item.NotificationBody}));
            setnotificationdata(newData)
            console.log(notificationdata)
        } catch (err) {
            console.log(err)
        }
  };
  const data=[
    {
      image: 'https://i.ibb.co/f0Knd0d/police-officer-posing-crossing-arms-vector-138952895.jpg' ,
      message: 'Kameshwaran S had shared a feedback with you.',
      
    },
    {
      image: 'https://i.ibb.co/f0Knd0d/police-officer-posing-crossing-arms-vector-138952895.jpg' ,
      message: (
        <p>
          Kameshwaran S had shared a{' '}
          <span style={{ color: '#7ac2fa' }}>feedback</span> with you.
        </p>
      ),
      detailPage: '/',
    },
  ]

   return  (
 <Notifications  
   data={notificationdata} 
   header={{
    title: 'Notifications',
    option: { text: 'View All', onClick: () => console.log('Clicked') },
  }}
   markAsRead={data => console.log(data)}
   cardOption
    
  />)
}

export default Notification;