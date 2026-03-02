import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from "react-router-dom";
import RegistrarProyectoModal from './RegistrarProyectoModal';

const Principal = () => {
    const [numeroControl, setNumeroControl] = useState('');
    const [alumnoEncontrado, setAlumnoEncontrado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleBuscar = async () => {
        if (!numeroControl) {
            alert("Ingresa un número de control");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:4000/api/alumnos/${numeroControl}`);
            if (!response.ok) throw new Error("Alumno no encontrado");
            const data = await response.json();
            setAlumnoEncontrado(data);
        } catch (error) {
            alert(error.message);
            setAlumnoEncontrado(null);
        }
        setLoading(false);
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

            <nav className="navbar">
                <button className="nav-item" onClick={() => navigate('/main')}>Inicio</button>
                <button className="nav-item" onClick={() => navigate('/alumnos')}>Alumnos</button>
                <button className="nav-item" onClick={() => navigate('/proyectos')}>Proyectos</button>
                <button className="nav-item" onClick={() => navigate('/docentes')}>Docentes</button>
                <button className="nav-item" onClick={() => navigate('/empresas')}>Empresas</button>
                <button className="nav-item" onClick={() => navigate('/reportes')}>Reportes</button>
            </nav>

            <div className="breadcrumb">
                <span>Inicio</span>
                <span className="separator">/</span>
                <span>Búsqueda de Alumno</span>
            </div>

            <main className="main-content">
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
                            {loading ? "Buscando..." : "Buscar alumno"}
                        </button>
                    </div>
                    <div className="action-buttons">
                        <button className="btn btn-secondary" onClick={() => setModalOpen(true)}>
                            Registrar Proyecto
                        </button>
                        <button className="btn btn-secondary">Generar Reporte</button>
                    </div>
                </section>

                {alumnoEncontrado && (
                    <section className="results-section">
                        <h2 className="section-title">Resultado de la Búsqueda</h2>
                        <div className="result-card">
                            <div className="card-header">
                                <div className="student-avatar">
                                    {alumnoEncontrado.nombre?.charAt()}
                                </div>
                                <div className="student-header-info">
                                    <h3 className="student-name">{alumnoEncontrado.nombre}</h3>
                                    <span className="student-meta">
                                        {alumnoEncontrado.num_control} · {alumnoEncontrado.carrera}
                                    </span>
                                </div>
                            </div>
                            <div className="card-columns">
                                <div className="info-column">
                                    <div className="column-header">
                                        <h4 className="column-title">Datos Personales</h4>
                                    </div>
                                    <div className="info-item"><span className="info-label">Género</span><span className="info-value">{alumnoEncontrado.genero}</span></div>
                                    <div className="info-item"><span className="info-label">Dirección</span><span className="info-value">{alumnoEncontrado.direccion}</span></div>
                                    <div className="info-item"><span className="info-label">Correo</span><span className="info-value">{alumnoEncontrado.correo}</span></div>
                                    <div className="info-item"><span className="info-label">Celular</span><span className="info-value">{alumnoEncontrado.celular}</span></div>
                                    <div className="info-item"><span className="info-label">Teléfono Fijo</span><span className="info-value">{alumnoEncontrado.telefono_fijo}</span></div>
                                </div>
                                <div className="info-column">
                                    <div className="column-header">
                                        <h4 className="column-title">Residencia Profesional</h4>
                                    </div>
                                    <div className="info-item"><span className="info-label">Periodo</span><span className="info-value">{alumnoEncontrado.id_periodo}</span></div>
                                    <div className="info-item"><span className="info-label">Fecha Inicio</span><span className="info-value">{alumnoEncontrado.fecha_inicio}</span></div>
                                    <div className="info-item"><span className="info-label">Fecha Fin</span><span className="info-value">{alumnoEncontrado.fecha_fin}</span></div>
                                    <div className="info-item"><span className="info-label">Empresa</span><span className="info-value">{alumnoEncontrado.nombre_empresa}</span></div>
                                    <div className="info-item"><span className="info-label">Departamento</span><span className="info-value">{alumnoEncontrado.departamento}</span></div>
                                    <div className="info-item"><span className="info-label">Proyecto</span><span className="info-value">{alumnoEncontrado.nombre_proyecto}</span></div>
                                    <div className="info-item"><span className="info-label">Asesor Interno</span><span className="info-value">{alumnoEncontrado.profesor_nombre}</span></div>
                                </div>
                                <div className="info-column">
                                    <div className="column-header">
                                        <h4 className="column-title">Asesor Externo</h4>
                                    </div>
                                    <div className="info-item"><span className="info-label">Nombre</span><span className="info-value">{alumnoEncontrado.asesor_nombre}</span></div>
                                    <div className="info-item"><span className="info-label">Cargo</span><span className="info-value">{alumnoEncontrado.cargo}</span></div>
                                    <div className="info-item"><span className="info-label">Correo</span><span className="info-value">{alumnoEncontrado.asesor_correo}</span></div>
                                    <div className="info-item"><span className="info-label">Teléfono</span><span className="info-value">{alumnoEncontrado.telefono}</span></div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* Modal recibe initialData con los datos del alumno encontrado */}
            <RegistrarProyectoModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                initialData={alumnoEncontrado}
                onSuccess={() => {}}
            />
        </div>
    );
};

export default Principal;