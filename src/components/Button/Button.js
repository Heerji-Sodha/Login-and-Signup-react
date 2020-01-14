import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";





class ButtonPage extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (

            <Fragment>
                <MDBBtn style={this.props.style} rounded onClick={this.props.onClick} color="dark" style={this.props.style}>{this.props.children}</MDBBtn>
                {/* <MDBBtn  rounded color="danger">Danger</MDBBtn> */}
            </Fragment>
        );
    }


}

export default ButtonPage;