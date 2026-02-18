import React, { useState } from 'react';
import '../App.css'
import Alumnos from "./Alumnos"
import {useNavigate} from "react-router-dom";



const Principal = () => {
    const [numeroControl, setNumeroControl] = useState('');
    const [alumnoEncontrado, setAlumnoEncontrado] = useState(null);
    const navigate = useNavigate();

    const handleBuscar = () => {

        // Busqueda
        setAlumnoEncontrado({
            nombre: 'Juan Perez',
            noControl: '21051487',
            carrera: 'Ing Sistemas',
            proyecto: 'Sistema de Inventarios',
            empresa: 'Tecnologico de Mexico',
            asesor: 'Ing.Lopez',
            estado: 'En Proceso',
            periodo: 'Ene-Jul 2026'
        });
    };

    return (
        <div className="principal-container">
            <header className="header">
                <div className="header-left">
                    <img src="/logo-its.png" alt="ITS" className="logo" />
                    <div className="header-info">
                        <h1>Sistema de Gestión de Residencias</h1>
                        <p>Departamento de Sistemas</p>
                    </div>
                </div>
                <div className="header-right">
                    <div className="user-info">
                        <div className="user-avatar">J</div>
                        <div className="user-details">
                            <span className="user-title">Coordinación de Residencias</span>
                            <span className="user-name">Coordinador Jose Armando</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Nav */}
            <nav className="navbar">
                <button className="nav-item active">INICIO</button>
                <button className="nav-item active" onClick={() => navigate('/alumnos')}>Alumnos</button>
                <button className="nav-item">Proyectos</button>
                <button className="nav-item">Docentes</button>
                <button className="nav-item">Empresas</button>
                <button className="nav-item">Reportes</button>
            </nav>

            {/* Busqueda */}
            <div className="breadcrumb">
                <span>Inicio</span>
                <span className="separator">/</span>
                <span>Búsqueda de Alumno</span>
            </div>

            {/* Main */}
            <main className="main-content">
                {/* Buscar */}
                <section className="search-section">
                    <h2 className="section-title">Buscar alumno</h2>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Número de Control"
                            className="search-input"
                            value={numeroControl}
                            onChange={(e) => setNumeroControl(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={handleBuscar}>
                            Buscar alumno
                        </button>
                    </div>

                    <div className="action-buttons">
                        <button className="btn btn-secondary">Registrar Proyecto</button>
                        <button className="btn btn-secondary">Asignar Asesor</button>
                        <button className="btn btn-secondary">Generar Reporte</button>
                    </div>
                </section>

                {/* Resultado */}
                {alumnoEncontrado && (
                    <section className="results-section">
                        <h2 className="section-title">Resultado de la Búsqueda:</h2>

                        <div className="result-card">
                            <div className="card-header">
                                <h3 className="student-name">Alumno: {alumnoEncontrado.nombre}</h3>
                                <div className="card-actions">
                                    <button className="btn-action btn-reports">Reportes</button>
                                    <button className="btn-action btn-edit">Editar</button>
                                    <button className="btn-action btn-delete">Eliminar</button>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="info-column">
                                    <div className="info-item">
                                        <span className="info-label">No.Control:</span>
                                        <span className="info-value">{alumnoEncontrado.noControl}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Carrera:</span>
                                        <span className="info-value">{alumnoEncontrado.carrera}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Proyecto:</span>
                                        <span className="info-value">{alumnoEncontrado.proyecto}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Empresa:</span>
                                        <span className="info-value">{alumnoEncontrado.empresa}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Periodo:</span>
                                        <span className="info-value">{alumnoEncontrado.periodo}</span>
                                    </div>
                                </div>

                                <div className="info-column">
                                    <div className="info-item">
                                        <span className="info-label">Proyecto:</span>
                                        <span className="info-value">{alumnoEncontrado.proyecto}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Empresa:</span>
                                        <span className="info-value">{alumnoEncontrado.empresa}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Asesor:</span>
                                        <span className="info-value">{alumnoEncontrado.asesor}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Estado:</span>
                                        <span className="status-badge status-proceso">
                      {alumnoEncontrado.estado}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Principal