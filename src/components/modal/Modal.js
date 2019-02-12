import ReactModal from 'react-modal';

import './modal.scss';

ReactModal.setAppElement('#app');

export const Modal = ({ isOpen, close, success, text }) => {
  const onOk = () => {
    success();
    close();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Example Modal"
      className="warning"
    >
      <div className="headerModal">
        <h3>Warning!</h3>
        <button type="button" className="close" onClick={close}>X</button>
      </div>
      <p>{text}</p>
      <div className="buttons">
        <button type="button" onClick={onOk}>Ok</button>
        <button type="button" onClick={close}>Cancel</button>
      </div>
    </ReactModal>
  );
};
