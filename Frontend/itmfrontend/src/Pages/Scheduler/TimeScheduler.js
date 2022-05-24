import React, { useState, useEffect , useRef,  useContext} from "react";
import './Scheduler.css'
import {Inject, ScheduleComponent , Day , Week , Month , Agenda ,  TimelineViews  } from '@syncfusion/ej2-react-schedule';
import Button from '@mui/material/Button';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
import { width } from "@mui/material";
import {investigationContext} from "../../Pages/context/GlobelInvestigationContext";
import { notification } from "antd";
import {L10n } from '@syncfusion/ej2-base';
import axios from 'axios'
L10n.load({
    'en-US': {
        'schedule': {
            'saveButton': 'Add',
            'cancelButton': 'Close',
            'deleteButton': 'Remove',
            'newEvent': 'Add Event',
        },
    }
});
class TimeScheduler extends React.Component{
      static contextType = investigationContext
       
      componentDidMount() {
        var Investeam = this.context
        console.log(Investeam)
        this.state.investigationteam  = Investeam.Investeam._id 
         
      }
   
    constructor() {
    super();
    this.state = {
       Subject: '',
       CaseID : '',
       CNIC : '',
       investigationteam : '',
       ReportType : '',
       StartTime : '',
       EndTime : '',
       Description : '',
       NotificationBody: "",
      
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    

  }
   
   onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    console.log("tme sch")
    if(this.state.CNIC){
    this.state.NotificationBody="Your Meeting With us Scheduler at".concat("  ").concat(this.state.StartTime).concat("  ").concat("to").concat(this.state.EndTime)
    .concat("  ").concat("Your Case-ID is").concat("  ").concat(this.state.CaseID).concat("  ").concat("Call-ID Will shared with you just 2 mint before the Meeting.")
    console.log(this.state)
    const body=JSON.stringify(this.state)
    const config = {
            headers: {
                'Content-Type':'application/json'
            }
    }
    try {
            const res =axios.post("http://localhost:5000/api/notification/sendnotification", body, config)
            console.log(res.data)
            this.state.CNIC="";
        } catch (err) {
            console.log(err)
        }

    }

  }
  //setSubject
  //CaseID, setCaseID 
  //EndTime, setEndTime
  //StartTime, setStartTime
  //Description, setDescription
  //Mail, setMail
   
    localData=[
        {
            Id: 1,
            Subject: "Meeting Imran SB  ",
            CaseID:"CASE-ID(FA127B)",
            StartTime: new Date(2022, 4,25 , 6 ,0),
            EndTime: new Date(2022, 4,25 , 7 ,0),
            Description: "To Record Testimony",
            CNIC: "839947392028"
        }, 
         {
            Id: 2,
            Subject: "Meeting Tayyab SB ",
            CaseID:"CASE-ID(FA127B)",
            StartTime: new Date(2022, 4,26 , 3 ,0),
            EndTime: new Date(2022,4,26 , 4 ,0),
            Description: "To Record Testimony",
            CNIC: "8399473974893"
        }
    ]
    setID=(props)=>{
      this.state.investigationteam=props.id
    }

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
                id="Title"
                style={{width: "300px", }}
                type="text1"
                name='Subject'
                value={this.state.Subject}
                onChange={this.onInputchange}
                 
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
                name='CaseID'
                value={this.state.CaseID}
                onChange={this.onInputchange}
                 
            />
           </tr>
              <tr>
                <td className="e-textlabel">CNIC:</td>
                <input
                id="email"
                className="e-field e-input"
                style={{width: "300px" }}
                type="text1"
                name='CNIC'
                value={this.state.CNIC}
                onChange={this.onInputchange}
                 
                />
             </tr>
              <tr>
                 <td>From:</td>
                 <div style={{ marginTop: "10px"}}>
                     
                     <DateTimePickerComponent id='StartTime' data-name="StartTime" name="StartTime"
                     value={this.state.StartTime} className="e-field"
                     onChange={this.onInputchange}
                     ></DateTimePickerComponent>
                 </div>
               </tr>
               <tr>  
                <td >To:</td>
                     <DateTimePickerComponent id='EndTime' name="EndTime"
                     data-name="EndTime"
                    value={this.state.EndTime} className="e-field"
                     onChange={this.onInputchange}
                     ></DateTimePickerComponent>                 
             </tr>
            <tr>
                <td className="e-textlabel">Description:</td>
                <input
                id="description"
                style={{width: "300px" }}
                className="e-field e-input"
                type="text1"
                name='Description'
                value={this.state.Description}
                onChange={this.onInputchange}
                />
             </tr>
        
         </tbody>
        <Button variant="outlined"  onClick={this.onSubmitForm()}>
            Send
        </Button>
         </table>
     )
    }

render(){
    
  return(
     
       <div style={{marginTop : "70px",marginRight: '-370px' ,marginLeft : "5px"}}>   
        
        <ScheduleComponent
            eventSettings={{dataSource:this.localData}}
            editorTemplate={this.editorWindowTemplate.bind(this)}>
            <Inject services={[Day , Week , Month , Agenda , TimelineViews ]}></Inject>
        </ScheduleComponent>
        </div> 
    )
 }
}

export default TimeScheduler;

