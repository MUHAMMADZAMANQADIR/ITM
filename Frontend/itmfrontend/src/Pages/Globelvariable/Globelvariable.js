import React, { createContext } from 'react';

const idContext = createContext({
  ID: '',//caseid, 
  ReportType:"",//casetype
  User: '',//userid
  Caseid: "",//assinged by person
  updateID: () => {},
  updateReportType: ()=>{},
  updateUser: ()=>{},
  updateCaseid: ()=>{},
});

export class IdProvider extends React.Component {
  updateID = newID => {
    this.setState({ ID: newID });
  };

  updateReportType = newReportType => {
    this.setState({ ReportType: newReportType });
  };
  updateUser = newUser => {
    this.setState({ User: newUser });
  };
  updateCaseid = newCaseid => {
    this.setState({ Caseid: newCaseid });
  };
  state = {
    ID: 'id',
    updateID: this.updateID,
    ReportType: 'ReportType',
    updateReportType : this.updateReportType,
    User:"user",
    updateUser : this.updateUser,
    Caseid: "Caseid",
    updateCaseid: this.updateCaseid
  };

  render() {
    return (
      <idContext.Provider value={this.state}>
        {this.props.children}
      </idContext.Provider>
    );
  }
}

export const IDConsumer = idContext.Consumer;
