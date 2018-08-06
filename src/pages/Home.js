import React, { Component } from "react";
import UserList from "../components/user/UserList";
import { connect } from "react-redux";
import * as userActions from "../redux/actions/userActions";
import { USERS_URL } from "../utils/Constants";
import UserForm from "../components/Form";
import Modal from "react-modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Modal.setAppElement('#userForm')

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overlay: {
      backgroundColor: "black"
    },
    content: {
      color: "lightsteelblue"
    },
    textAlign: "center",
    width: "80%"
  }
};

class Home extends Component {
  state = {
    user: {
      name: "",
      id: 0,
      address: {},
      company: {}
    },
    modalIsOpen: false
  };

  onNameChange = event => {
    const user = this.state.user;
    user.name = event.target.value;
    user.id = Math.floor(Math.random() * 10000);
    user.address = {
      geo: {}
    };
    this.setState({ user });
  };

  submit = values => {
    let dataForm = Object.assign({}, values);
    dataForm.id = Math.floor(Math.random() * 10000);
    dataForm.address = {
      geo: {}
    };
    dataForm.company = {
      name: dataForm.companyName
    };
    this.props.createUser(dataForm);
    this.closeModal();
    this.notify();
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  notify = () => toast.success("Operación exitosa !");

  render() {
    
    return (
      <div className="animated bounceInUp">
        <div className="FormUsers">
          <h1>TODO APP</h1>
          <h3 onClick={this.openModal} style={{ cursor: "pointer" }}>
            <i className="fa fa-plus" /> Add users
          </h3>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </div>

        <UserList />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="User add"
          ariaHideApp={false}
        >
          <h2>Agregar usuario</h2>
          <UserForm onSubmit={this.submit} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { userReducer } = state;
  return {
    usersdemo: userReducer.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => {
      fetch(`${USERS_URL}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => {
          dispatch(userActions.createUser(json));

        });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
