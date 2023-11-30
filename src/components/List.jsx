import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ListItem } from './ListItem.jsx'
import { useEffect, useState } from 'react'
import { deleteItem, get } from '../utils/service.js'
import { ModalForm } from "./ModalForm"


export const List = () => {
    const [animationParent] = useAutoAnimate()
    const [usuarios, _setUsuarios] = useState([])

    const setUsuarios = (e) => {
        _setUsuarios(e)
    }
    
    const fetchData = async () => {
        const data = (await get('clientes/all')).data.data;
        setUsuarios(data);
    };
    const deleteUsuario = async (id) => {
        const resp = deleteItem( id )
        fetchData()
        return resp
    }

    const keys = {a: '_id', b:  'Nombre', c:  'Cedula', d:  'Dirección', e:  'Celular', f:  'Email'} 
    
    useEffect( () => {
        fetchData()
    }, [])

    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const propsModal = {handleOpen, handleClose, open, setOpen}

    return (
        <>
            <ModalForm {...propsModal} />
            <div className="recuadro">
                <div className='header-recuadro'>
                    <ListItem atributos={keys} />
                </div>

                <div className='body-recuadro'>
                    <ul className='list-group' style={{borderRadius: 0}} ref={animationParent}>
                        { 
                            usuarios.map( (u, i) => <ListItem atributos={u} key={i} boton={true} setUsuarios = {setUsuarios} deleteUsuario = {deleteUsuario}/> )
                        }
                    </ul>
                </div>
            </div>
        
        </>
    )
}
