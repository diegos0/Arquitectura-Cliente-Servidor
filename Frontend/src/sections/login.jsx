import React from 'react';
import '../App.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';

function Login() {
    return (
        <MDBContainer className="my-5 gradient-form">
            <MDBRow>

                <MDBCol col="6" className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img
                                src="https://storage.mindbox.app/data/mbid_11/school/aEH1YufJ6PxugALhVkDnBRTfJOz2BXPGJ04mgPp7.png"                                style={{ width: '185px' }}
                                alt="logo"
                            />
                            <h4 className="mt-1 mb-5 pb-1">Coordinación De Residencias ITS</h4>
                        </div>

                        <p>Ingrese sus credenciales</p>

                        <MDBInput
                            wrapperClass="mb-4"
                            label="Numero de control"
                            type="email"
                        />

                        <MDBInput
                            wrapperClass="mb-4"
                            label="Contraseña"
                            type="password"
                        />

                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2">
                                Iniciar sesión
                            </MDBBtn>

                        </div>
                    </div>
                </MDBCol>

                <MDBCol col="6" className="mb-5">
                    <div className="d-flex flex-column justify-content-center backg1 h-100 mb-4">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">Desarrollo cliente-servidor </h4>
                            <p className="small mb-0">
                                Esta pagina es un proyecto para demostrar
                                el funcionamiento de una conexión cliente-
                                servidor
                                   </p>
                        </div>
                    </div>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}

export default Login;
