import React from "react";
import { MDBInput } from "mdbreact";

class InputPage extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
           
            // <MDBInput label={this.props.label} type={this.props.type} icon={this.props.Icon} onChange={this.props.onChange} />
        

            <MDBInput
                label={this.props.label}
                icon={this.props.Icon}
                type={this.props.type}
                validate
                error="wrong"
                success="right"
                onChange={this.props.onChange}
              />
              
            )

    }
}


export default InputPage;