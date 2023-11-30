import PropTypes from "prop-types"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import { put, post } from "../utils/service.js";

export const ModalForm = ( {data, id, handleOpen, handleClose, open} ) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'rgba(111, 111, 111, 0.9)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: "20px"
      };
    const { handleSubmit, register } = useForm({defaultValues: ( data ? data:{} )});
    const onSubmit = (formData) => {
        
        let aux = Object.values(formData)
        aux = aux.map( (e) => typeof e == 'string' ? e.trim() : e )
        if(aux.includes('')) return
        if (id){
            put( id, formData ).then( (resp) => {
                if (resp.status == 200) window.location.reload();
            } )
        }
        else{
            post( formData ).then( (resp) => {
                if (resp.status == 200) window.location.reload();
            } )
        }
    };
    
    return (
        <>
            { !data && (<Button onClick={handleOpen}>Agregar cliente</Button>)}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className = "mt-4">
                            <label htmlFor="name" className="form-label">Nombre:</label>
                            <input id='name' className="form-control" {...register('name')} />
                        </div>
                        <div className = "mt-4">
                            <label htmlFor="cedula" className="form-label">Cedula:</label>
                            <input id='cedula' type = "number" className="form-control" {...register('cedula')} />
                        </div>
                        <div className = "mt-4">
                            <label htmlFor="direccion" className="form-label">Dirección:</label>
                            <input id='direccion' className="form-control" {...register('direccion')} />
                        </div>
                        <div className = "mt-4">
                            <label htmlFor="celular" className="form-label">celular:</label>
                            <input id='celular' type = "number" className="form-control" {...register('celular')} />
                        </div>
                        <div className = "mt-4">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input id='email' className="form-control" {...register('email')} />
                        </div>

                        <div className = "text-center mt-5">
                            <button type="submit" className="btn btn-outline-light">{data ? 'Actualizar' : 'Crear' }</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

ModalForm.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.any
  }),
  handleClose: PropTypes.any,
  handleOpen: PropTypes.any,
  id: PropTypes.any,
  open: PropTypes.any,
  setOpen: PropTypes.any
}
