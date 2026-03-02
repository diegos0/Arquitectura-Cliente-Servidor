import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Docentes = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterResidentes, setFilterResidentes] = useState('todos');

    const profesoresRecientes = [
        {
            id: 1,
            nombre: 'Dr. Carlos Mendoza López',
            idProfesor: 'P001',
            correo: 'cmendoza@itssaltillo.edu.mx',
            telefono: '844-123-4567',
            residentes: 3,
            fechaRegistro: '15/02/2026',
        },
        {
            id: 2,
            nombre: 'Ing. Patricia Vázquez Ruiz',
            idProfesor: 'P002',
            correo: 'pvazquez@itssaltillo.edu.mx',
            telefono: '844-234-5678',
            residentes: 1,
            fechaRegistro: '14/02/2026',
        },
        {
            id: 3,
            nombre: 'M.C. Roberto Serna Garza',
            idProfesor: 'P003',
            correo: 'rserna@itssaltillo.edu.mx',
            telefono: '844-345-6789',
            residentes: 2,
            fechaRegistro: '13/02/2026',
        },
        {
            id: 4,
            nombre: 'Dra. Laura Morales Ibarra',
            idProfesor: 'P004',
            correo: 'lmorales@itssaltillo.edu.mx',
            telefono: '844-456-7890',
            residentes: 0,
            fechaRegistro: '12/02/2026',
        },
        {
            id: 5,
            nombre: 'Ing. Héctor Reyes Torres',
            idProfesor: 'P005',
            correo: 'hreyes@itssaltillo.edu.mx',
            telefono: '844-567-8901',
            residentes: 4,
            fechaRegistro: '11/02/2026',
        },
    ];

    const todosProfesores = [
        ...profesoresRecientes,
        {
            id: 6,
            nombre: 'M.C. Alejandra Flores Núñez',
            idProfesor: 'P006',
            correo: 'aflores@itssaltillo.edu.mx',
            telefono: '844-678-9012',
            residentes: 2,
            fechaRegistro: '10/02/2026',
        },
        {
            id: 7,
            nombre: 'Dr. Fernando Castro Peña',
            idProfesor: 'P007',
            correo: 'fcastro@itssaltillo.edu.mx',
            telefono: '844-789-0123',
            residentes: 1,
            fechaRegistro: '09/02/2026',
        },
        {
            id: 8,
            nombre: 'Ing. Gabriela Ortiz Salinas',
            idProfesor: 'P008',
            correo: 'gortiz@itssaltillo.edu.mx',
            telefono: '844-890-1234',
            residentes: 3,
            fechaRegistro: '08/02/2026',
        },
        {
            id: 9,
            nombre: 'M.C. Jorge Delgado Ríos',
            idProfesor: 'P009',
            correo: 'jdelgado@itssaltillo.edu.mx',
            telefono: '844-901-2345',
            residentes: 0,
            fechaRegistro: '07/02/2026',
        },
        {
            id: 10,
            nombre: 'Dra. Silvia Ramírez Contreras',
            idProfesor: 'P010',
            correo: 'sramirez@itssaltillo.edu.mx',
            telefono: '844-012-3456',
            residentes: 2,
            fechaRegistro: '06/02/2026',
        },
    ];

    const filteredProfesores = todosProfesores.filter(profesor => {
        const matchesSearch =
            profesor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profesor.idProfesor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profesor.correo.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesResidentes =
            filterResidentes === 'todos' ||
            (filterResidentes === 'con' && profesor.residentes > 0) ||
            (filterResidentes === 'sin' && profesor.residentes === 0);

        return matchesSearch && matchesResidentes;
    });

    const handleNuevoProfesor = () => alert('Abrir formulario de nuevo profesor');
    const handleVerDetalles  = (p) => alert(`Ver detalles de ${p.nombre}`);
    const handleEditar       = (p) => alert(`Editar ${p.nombre}`);
    const handleEliminar     = (p) => {
        if (window.confirm(`¿Estás seguro de eliminar a ${p.nombre}?`)) alert('Profesor eliminado');
    };

    const getBadgeResidentes = (n) => {
        if (n === 0) return 'status-pendiente';
        if (n <= 2)  return 'status-proceso';
        return 'status-completado';
    };

    return (
        <div className="alumnos-container">
            {/* Header */}
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

            {/* Navigation */}
            <nav className="navbar">
                <button className="nav-item" onClick={() => navigate('/main')}>Inicio</button>
                <button className="nav-item" onClick={() => navigate('/alumnos')}>Alumnos</button>
                <button className="nav-item" onClick={() => navigate('/proyectos')}>Proyectos</button>
                <button className="nav-item" onClick={() => navigate('/docentes')}>Docentes</button>
                <button className="nav-item" onClick={() => navigate('/empresas')}>Empresas</button>
                <button className="nav-item" onClick={() => navigate('/reportes')}>Reportes</button>
            </nav>

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <span>Inicio</span>
                <span className="separator">/</span>
                <span>Docentes</span>
            </div>

            {/* Main Content */}
            <main className="main-content">

                {/* Stats */}
                <div className="stats-section">
                    <div className="stat-card">
                        <div className="stat-icon stat-icon-total">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="stat-info">
                            <h3>Total Docentes</h3>
                            <p className="stat-number">{todosProfesores.length}</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-proceso">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div className="stat-info">
                            <h3>Con Residentes</h3>
                            <p className="stat-number">{todosProfesores.filter(p => p.residentes > 0).length}</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-completado">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <div className="stat-info">
                            <h3>Total Residentes Asignados</h3>
                            <p className="stat-number">{todosProfesores.reduce((acc, p) => acc + p.residentes, 0)}</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-pendiente">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <div className="stat-info">
                            <h3>Sin Residentes</h3>
                            <p className="stat-number">{todosProfesores.filter(p => p.residentes === 0).length}</p>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <section className="search-filters-section">
                    <div className="section-header">
                        <h2 className="section-title">Búsqueda de Docentes</h2>
                        <button className="btn btn-nuevo" onClick={handleNuevoProfesor}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Nuevo Docente
                        </button>
                    </div>

                    <div className="filters-container">
                        <div className="search-box-alumnos">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Buscar por nombre, ID o correo..."
                                className="search-input-alumnos"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <select
                            className="filter-select"
                            value={filterResidentes}
                            onChange={(e) => setFilterResidentes(e.target.value)}
                        >
                            <option value="todos">Todos los Docentes</option>
                            <option value="con">Con Residentes</option>
                            <option value="sin">Sin Residentes</option>
                        </select>
                    </div>

                    <div className="results-info">
                        <p>Mostrando {filteredProfesores.length} de {todosProfesores.length} docentes</p>
                    </div>
                </section>

                {/* Table */}
                <section className="table-section">
                    <div className="table-container">
                        <table className="alumnos-table">
                            <thead>
                            <tr>
                                <th>ID Profesor</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Teléfono</th>
                                <th>Residentes Asignados</th>
                                <th>Fecha Registro</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredProfesores.map((profesor) => (
                                <tr key={profesor.id}>
                                    <td className="no-control">{profesor.idProfesor}</td>
                                    <td className="nombre">{profesor.nombre}</td>
                                    <td>{profesor.correo}</td>
                                    <td>{profesor.telefono}</td>
                                    <td>
                                            <span className={`status-badge ${getBadgeResidentes(profesor.residentes)}`}>
                                                {profesor.residentes} {profesor.residentes === 1 ? 'residente' : 'residentes'}
                                            </span>
                                    </td>
                                    <td>{profesor.fechaRegistro}</td>
                                    <td>
                                        <div className="action-buttons-table">
                                            <button
                                                className="btn-icon btn-icon-view"
                                                onClick={() => handleVerDetalles(profesor)}
                                                title="Ver detalles"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </button>
                                            <button
                                                className="btn-icon btn-icon-edit"
                                                onClick={() => handleEditar(profesor)}
                                                title="Editar"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                </svg>
                                            </button>
                                            <button
                                                className="btn-icon btn-icon-delete"
                                                onClick={() => handleEliminar(profesor)}
                                                title="Eliminar"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Recent Cards */}
                <section className="recent-section">
                    <h2 className="section-title">Docentes Recientes</h2>
                    <div className="recent-grid">
                        {profesoresRecientes.map((profesor) => (
                            <div key={profesor.id} className="recent-card">
                                <div className="recent-card-header">
                                    <div className="avatar-circle">
                                        {profesor.nombre.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                    </div>
                                    <div className="recent-info">
                                        <h3 className="recent-name">{profesor.nombre}</h3>
                                        <p className="recent-control">{profesor.idProfesor}</p>
                                    </div>
                                </div>
                                <div className="recent-card-body">
                                    <div className="recent-detail">
                                        <span className="detail-label">Correo:</span>
                                        <span className="detail-value">{profesor.correo}</span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Teléfono:</span>
                                        <span className="detail-value">{profesor.telefono}</span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Residentes:</span>
                                        <span className="detail-value">
                                            <span className={`status-badge ${getBadgeResidentes(profesor.residentes)}`}>
                                                {profesor.residentes} {profesor.residentes === 1 ? 'residente' : 'residentes'}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Registrado:</span>
                                        <span className="detail-value">{profesor.fechaRegistro}</span>
                                    </div>
                                </div>
                                <div className="recent-card-footer">
                                    <button className="btn-link" onClick={() => handleVerDetalles(profesor)}>
                                        Ver detalles →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Docentes;