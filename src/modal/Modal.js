import React from 'react'
import './modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <React.Fragment>
                <button type="button" onClick={() => this.setState({isOpen: true})}>Open Modal</button>

                { this.state.isOpen && <div className="modal" onClick={() => this.setState({isOpen: false})}>
                    <div className="modal__body" >
                        <h2>modal title</h2>
                        <p>I am awesome modal!</p>
                        <button type="button" onClick={() => this.setState({isOpen: false})}>close modal</button>
                    </div>
                </div> }
            </React.Fragment>
        )
    }
}