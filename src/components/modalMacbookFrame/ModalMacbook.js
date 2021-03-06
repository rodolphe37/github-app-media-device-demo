/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import MacbookFrame from './macbookFrame/MacbookFrame';

const ModalMacbook = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle} style={{ cursor: 'pointer', marginTop: '-54px', width: '151px', marginLeft: '110px' }}>
        <b style={{ fontSize: '12px', color: 'black', marginLeft: '8%' }}>My Github sur MacBook</b>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle} className="modal-macbook">
          <br />
          <br />
          <ModalBody className="modal-body-macbook" toggle={toggle}>
            <MacbookFrame />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}

export default ModalMacbook;
