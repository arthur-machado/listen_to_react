import React, { Component } from "react";
import { IoIosClose } from "react-icons/io";
import "./modal.css";

export default class Modal extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-title">
          <h4>{this.props.modalTitle}</h4>
          <IoIosClose size={32} onClick={this.onClose} />
        </div>

        <div className="modal-content">{this.props.children}</div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            Cancelar
          </button>
          {this.props.type === "delete" && (
            <button className="delete-button">Excluir</button>
          )}
          {this.props.type === "confirm" && (
              <button className="confirm-button">Confirmar</button>
          )}
        </div>
      </div>
    );
  }
}
