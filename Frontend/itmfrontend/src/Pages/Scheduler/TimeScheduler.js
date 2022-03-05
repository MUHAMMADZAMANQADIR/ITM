import React from "react"
import './Scheduler.css'
import {Inject, ScheduleComponent , Day , Week , Month , Agenda ,  TimelineViews  } from '@syncfusion/ej2-react-schedule';

 
function TimeScheduler(){
 
    return(
        <div style={{marginTop : "70px",marginRight: '-320px' ,marginLeft : "5px"}}>   
        <ScheduleComponent>
             <Inject services={[Day , Week , Month , Agenda , TimelineViews ]}></Inject>
             
        </ScheduleComponent>
        </div>
    )
}

export default TimeScheduler;

