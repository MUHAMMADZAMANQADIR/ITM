import Notifications from "react-notifications-menu"
 
const Notification = ( ) =>{

  const data=[
    {
      image: 'https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b9.png' ,
      message: 'Kameshwaran S had shared a feedback with you.',
      
    },
    {
      image: 'https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b9.png' ,
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
   data={data} 
   header={{
    title: 'Notifications',
    option: { text: 'View All', onClick: () => console.log('Clicked') },
  }}
   markAsRead={data => console.log(data)}
   cardOption
    
  />)
}

export default Notification;