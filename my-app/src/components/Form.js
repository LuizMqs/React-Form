import { useContext, useState } from 'react';
import Modal from 'react-modal';
import Teste from './Teste'
import Title from '../styles'
import Button from '@mui/material/Button';
import MyContext from '../context/MyContext';

Modal.setAppElement('#root')

function Form() {
    const {user, setUser} = useContext(MyContext)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()

    function HandleOpenModal() {
        setIsOpen(true)
      }
    
      function handleCloseModal() {
        setIsOpen(false)
      }

      function Start() {
        HandleOpenModal()
        Teste(fname, lname, setUser)
      }

      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          rigth: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        } 
      }

    return (
        <form>
            <label htmlFor="fname">Email:</label><br />
            <input type="text" id="fname" name="fname" onChange={(e) => setFname(e.target.value)} /><br />
            <label htmlFor="lname">Senha:</label><br />
            <input type="text" id="lname" name="lname" onChange={(e) => setLname(e.target.value)} /><br /> <br></br>

            <Button variant="contained" onClick={Start}>Confirmar</Button>  
            
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            >
              <button className="CloseButtomModal" onClick={handleCloseModal}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Letter_x.svg/1200px-Letter_x.svg.png" alt="close" height="20px"></img></button>
              <Title>{user? JSON.stringify(user.data):""}</Title>
            </Modal>
        </form>
    )
}

export default Form;