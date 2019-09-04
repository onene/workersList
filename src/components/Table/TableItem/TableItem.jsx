import React, { Component } from 'react';
import classes from './TableItem.module.css';
import Modal from 'react-modal';

class TableItem extends Component {
    constructor(props) {
        super()
        this.state = {
            modalIsOpen: false,
            name: '',
            surname: '',
            age: '',
            position: '',
            salary: '',
            description: ''
        }


    }
    delete = (index) => {
        this.props.delete(index)
    }
    editWorker = (index) => {
        console.log(index)
    }
    openModal(index) {
        let name = this.props.worker[index].name;
        let surname = this.props.worker[index].surname;
        let age = this.props.worker[index].age;
        let position = this.props.worker[index].position;
        let salary = this.props.worker[index].salary;
        let description = this.props.worker[index].description
        this.setState({ name: name, surname: surname, age: age, position: position, salary: salary, description: description })
        this.setState({
            modalIsOpen: true

        });
        console.log(this.state)
        // debugger;
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    handleChange(e) {
        console.log(e.current.value)
    }
    render() {
        let workersList = this.props.worker.map((item, index) => {
            return <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.age}</td>
                <td>{item.position}</td>
                <td>{item.salary}</td>
                <td>
                    <button onClick={() => { this.delete(index) }}>Delete</button>
                </td>
                <td><button onClick={() => { this.openModal(index) }}>More information</button></td>
            </tr>
        })
        return (


            <tbody className={classes.tbody}>{workersList}
                <Modal
                    className={classes.modal}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}>
                    <h2 ref={subtitle => this.subtitle = subtitle}>Detail information</h2>

                    <p>The name of this worker is {this.state.name}, and his surname - {this.state.surname}</p>
                    <p>This worker was born in {new Date().getFullYear() - this.state.age} year</p>
                    <p>{this.state.name} works on the {this.state.position} position and characterised as a good professional</p>
                    <p>The main traits of {this.state.name} is:</p><br />
                    {this.state.description}
                    <br />
                    <button onClick={() => { this.closeModal() }}>close</button>
                </Modal>
            </tbody>


        );
    }

}

export default TableItem;