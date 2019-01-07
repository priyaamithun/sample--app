import * as React from 'react';


class AddLocation extends React.Component{
   

    render(){
        return (
<div aria-label="breadcrumb" className="breadcrumb-title">
<ol className="breadcrumb clearfix">
    <li className="breadcrumb-item">
    <a href="#"><input type="input" placeholder="search"></input></a>
    <a href=""><i className ="fas fa-search  fa-2x searchIcon" ></i></a></li>
<li className="addLocation clearfix"><i className="fas fa-plus-circle fa-3x" ></i></li>
  
<div className="Location-heading">
<h1>Add your location</h1>
<h6>Did you know you can add favourite locations?</h6>
</div>
</ol>

</div>


        );
    }
}

export default AddLocation;