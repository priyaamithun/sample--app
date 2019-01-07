import * as React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Weather from '../Weather/Weather';



interface Props {
  onSubmit: ((e: any) => void) //event bubbling
}
export class Form extends React.Component<Props, {}>{
  //const Form = props => (

  render() {
    let suggList = [{
      name: 'Austin'
    },
    {
      name: 'New York'
    },
    {
      name: 'San Fransisco'
    },
    {
      name: 'London'
    }];

    return (

      <form className="form" onSubmit={this.props.onSubmit}>
        <div className="form-row">

          <div className="col-5">
            {/* <AutoComp onSelected={this.props.onSubmit} suggestlist={suggList} /> */}
          </div>

          {/* <div className="col-5">
            <input name="city" type="text" className="form-control" placeholder="City" autoComplete="off" />
          </div> */}

          {/* <div className="col-5">
            <input name="country" type="text" className="form-control" placeholder="Country" autoComplete="off" />
          </div> */}
          <div className="col">
            <button className="btn" type="submit" >Submit</button>
          </div>
        </div>
      </form>

    );
  }

}







export default Form;