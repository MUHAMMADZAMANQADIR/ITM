import React from "react"
import './Scheduler.css'
import {Inject, ScheduleComponent , Day , Week , Month , Agenda ,  TimelineViews  } from '@syncfusion/ej2-react-schedule';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
import { width } from "@mui/material/node_modules/@mui/system";
class TimeScheduler extends React.Component{

   editorWindowTemplate(props){
     return(
         <table className="custom-event-editor">
         <tbody>
            <tr>
            <td className="e-textlabel">
               Title:
            </td>
            <input
                className="e-field e-input"
                id="title"
                style={{width: "300px", }}
                type="text1"
                name='name'
                 
            />
           </tr>
           <tr>
            <td className="e-textlabel">
              Case ID: 
            </td>
            <input
                id="CaseID"
                className="e-field e-input"
                style={{width: "300px" }}
                type="text1"
                name='caseid'
                 
            />
           </tr>
              <tr>
                <td className="e-textlabel">Email:</td>
                <input
                id="email"
                className="e-field e-input"
                style={{width: "300px" }}
                type="text1"
                name='mail'
                 
                />
             </tr>
              <tr>
                 <td>From:</td>
                 <div style={{ marginTop: "10px"}}>
                     <DateTimePickerComponent id='StartTime' data-name="StartTime"
                     value={new Date(props.startTime || props.StartTime )}
                     ></DateTimePickerComponent>
                 </div>
               </tr>
               <tr>  
                <td >To:</td>
                     <DateTimePickerComponent id='EndTime'
                     data-name="EndTime"
                     value={new Date(props.endTime || props.EndTime )}
                     ></DateTimePickerComponent>                 
             </tr>
            <tr>
                <td className="e-textlabel">Description:</td>
                <input
                id="description"
                style={{width: "300px" }}
                className="e-field e-input"
                type="text1"
                name='description'
                />
             </tr>
        
         </tbody>
         </table>
     )
    }

render(){
  return(
       <div style={{marginTop : "70px",marginRight: '-370px' ,marginLeft : "5px"}}>   
        <ScheduleComponent
            editorTemplate={this.editorWindowTemplate.bind(this)}>
            <Inject services={[Day , Week , Month , Agenda , TimelineViews ]}></Inject>
        </ScheduleComponent>
        </div> 
    )
 }
}

export default TimeScheduler;

