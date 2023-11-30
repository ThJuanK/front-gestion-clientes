import PropTypes from "prop-types"
import { useState } from "react";
import { ModalForm } from "./ModalForm.jsx";


export const ListItem = ( {atributos, boton, deleteUsuario} ) => {
    const [colorTrash, setColorTrash] = useState('#dc3545')
    const [colorEdit, setColorEdit] = useState('#0dcaf0')
    const values = Object.values(atributos)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const deleteItem = () => {
        deleteUsuario( atributos._id )
    }

    const propsModal = {handleOpen, handleClose, open, setOpen}

    return (
        <>
            <ModalForm id={atributos._id} data={atributos} {...propsModal}/>
            <li className='list-group-item'> 
                <div className = "row justify-content-between">
                    <div className="col-10">
                        <div className="row align-items-center">
                            { 
                                values.map( ( v, i ) => 
                                ( i != 0 ) && (
                                    <div className='col text-center px-0' key={i}> {v} </div>
                                ) )
                            }
                        </div>
                    </div>
                    {boton && 
                        <div className="col-2 d-flex px-0 justify-content-evenly">
                            <button 
                                type="button" 
                                className="btn btn-outline-danger text-center" 
                                onPointerLeave={() => setColorTrash('#dc3545')} onMouseOver={() => setColorTrash('#000')}
                                onClick={deleteItem}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colorTrash} className="bi bi-trash eliminar" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-outline-info text-center" 
                                onPointerLeave={() => setColorEdit('#0dcaf0')} onMouseOver={() => setColorEdit('#000')}
                                onClick={handleOpen}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colorEdit} className="bi bi-pencil-square editar" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                            </button>
                        </div>
                    }
                </div>
            </li>
        </>
    )
}

ListItem.propTypes = {
  atributos: PropTypes.object,
  boton: PropTypes.bool,
  deleteUsuario: PropTypes.func,
  index: PropTypes.number,
  setUsuarios: PropTypes.func
}
