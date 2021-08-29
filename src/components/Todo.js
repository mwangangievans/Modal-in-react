import {useState}  from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

const Todo = (props) =>{
    const [modalIsOpen ,setModalIsOpen] = useState(false);

    const deleteHandler = () =>{
       setModalIsOpen(true)
    }
    const cancelHandler = () =>{
        setModalIsOpen(false);
    }
    const confirmHandler = () =>{
        setModalIsOpen(false)

    }
    return(<div>
       
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
          </div>
          {modalIsOpen && <Modal cancelHandler={cancelHandler} confirmHandler={confirmHandler}/>}
          {modalIsOpen && <Backdrop  />}
        </div>
      </div>
    )
}
export default Todo