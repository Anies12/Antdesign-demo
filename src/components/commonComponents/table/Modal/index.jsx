import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import './style.css';

const ModalComp = ({ visible, hideModal, removeRow }) => (
  <Modal
    className="TableComp__removeModal"
    title="Remove Confirmation"
    centered
    closable={false}
    visible={visible}
    onOk={removeRow}
    onCancel={hideModal}
    okText="Yes"
    cancelText="Cancel"
  >
    <span className="TableComp__removeModal--modalbody">Are you sure you want to remove this Security role ?</span>
  </Modal>
);

ModalComp.propTypes = {
  visible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
};

export default ModalComp;
