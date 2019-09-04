import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import workers from './workersBase';
import Modal from 'react-modal';

Modal.setAppElement('#root')
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false,
      workers: workers,
      name: '',
      surname: '',
      age: '',
      position: '',
      salary: ''
    }
  }
  deleteWorker = (index) => {
    let arr = this.state.workers;
    arr.splice(index, 1)
    this.setState({
      workers: arr
    })
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  submitModal() {
    this.setState({ modalIsOpen: false });
    this.setState({
      workers: this.state.workers.concat({
        id: new Date().getMilliseconds(),
        name: this.state.name,
        surname: this.state.surname,
        age: this.state.age,
        position: this.state.position,
        salary: this.state.salary,
        description: this.state.description
      })
    })
    this.setState({ name: '', surname: '', age: '', position: '', salary: '' })
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  inputName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  inputSurname = (e) => {
    this.setState({
      surname: e.target.value
    })
  }
  inputAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }
  inputPosition = (e) => {
    this.setState({
      position: e.target.value
    })
  }
  inputSalary = (e) => {
    this.setState({
      salary: e.target.value
    })
  }
  inputDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Our team</h1>
        <Table workers={this.state.workers} delete={this.deleteWorker} />
        <button onClick={this.openModal.bind(this)} className="add">Add Worker</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='modal'>
          <h2 ref={subtitle => this.subtitle = subtitle}>Please, fill all inputs</h2>
          <form>
            <label htmlFor="name">Enter  name</label>
            <input type="text" id="name" placeholder="name" onChange={this.inputName.bind(this)} /><br />
            <label htmlFor="surname">Enter  surname</label>
            <input type="text" id="surname" placeholder="surname" onChange={this.inputSurname.bind(this)} /><br />
            <label htmlFor="age">Enter  age</label>
            <input type="text" id="age" placeholder="age" onChange={this.inputAge.bind(this)} /><br />
            <label htmlFor="position">Enter  position</label>
            <input type="text" id="position" placeholder="position" onChange={this.inputPosition.bind(this)} /><br />
            <label htmlFor="salary">Enter  salary</label>
            <input type="text" id="salary" placeholder="salary" onChange={this.inputSalary.bind(this)} /><br />
            <label htmlFor="salary">Enter  description</label>
            <input type="text" id="description" placeholder="description" onChange={this.inputDescription.bind(this)} /><br />
          </form>
          <button onClick={this.submitModal.bind(this)}>Submit</button>
          <button onClick={this.closeModal.bind(this)}>Close</button>


        </Modal>

      </div>
    );
  }
}



export default App;
