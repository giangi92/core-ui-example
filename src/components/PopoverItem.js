import React, { Component } from 'react';
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap';


class PopoverItem extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen,
        });
    }

    render() {
        return (
            <span>
                <Button className="btn btn-lg btn-danger" color="secondary" id={'Popover-' + this.props.id} onClick={()=>{
                    this.toggle();
                    this.props.successAlertFunc(!this.props.showSuccessAlert);
                }}>
                    {this.props.item.text}
                </Button>
                <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle} trigger="legacy" delay={0}>
                    <PopoverHeader>Success!!</PopoverHeader>
                    <PopoverBody>Complimenti, hai cliccato sul pop over! Hai guadagnato un successo.</PopoverBody>
                </Popover>
            </span>
        );
    }
}

export default PopoverItem;