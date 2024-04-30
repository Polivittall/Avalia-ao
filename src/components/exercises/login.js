import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';


function login (){

    return (
        <>
        <div className='container pt-2'>

            <div className='card-body'>

                <div className='card-tittle p-2 card header'>

                    <div className='row'></div>

                    <div className='col-sm-12 col-md-6 col-lg-6 '>

                        <div className='md-3' controlId="formBasicEmail">
                            <label>Endereço de Email</label>
                            <input className='form-control' type="email" placeholder='Digite email'></input>
                            Nunca compartilhamos seu email
                        </div>

                        <br></br>

                        <div className='md-3' controlId="formBasicCheck">
                            <label>Senha</label>
                            <input className='form-control' type='password' placeholder='Senha'></input>
                            
                        </div>

                        <div className='mb-3' ></div>
                        <Button>Enviar</Button>

        
                    </div>


                </div>


            </div>

        </div>
    
   

        </>
    )

}

export default login;

