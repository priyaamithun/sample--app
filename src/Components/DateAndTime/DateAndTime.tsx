import * as React from 'react';


class DateAndTime extends React.Component {
   
    

    render(){
        return(
<div className ="date-content clearfix">
    <h1> 
        {new Date ().toDateString()}<br></br>
        {new Date().toLocaleTimeString()}
        </h1>


    
</div>


        );
    }


}
export default DateAndTime;