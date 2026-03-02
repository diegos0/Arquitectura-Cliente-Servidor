import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Empresas = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterResidentes, setFilterResidentes] = useState('todos');

    const empresasRecientes = [
        {
            id: 1,
            idEmpresa: 'E001',
            nombre: 'IBM México',
            departamento: 'Desarrollo de Software',
            asesorExterno: 'Ing. Marco Antonio Ríos',
            residentes: 3,
            fechaRegistro: '15/02/2026',
        },
        {
            id: 2,
            idEmpresa: 'E002',
            nombre: 'Toyota Saltillo',
            departamento: 'Manufactura y Calidad',
            asesorExterno: 'Lic. Sandra Pérez Mora',
            residentes: 2,
            fechaRegistro: '14/02/2026',
        },
        {
            id: 3,
            idEmpresa: 'E003',
            nombre: 'Siemens México',
            departamento: 'Automatización Industrial',
            asesorExterno: 'Dr. Ernesto Fuentes Gil',
            residentes: 1,
            fechaRegistro: '13/02/2026',
        },
        {
            id: 4,
            idEmpresa: 'E004',
            nombre: 'Microsoft México',
            departamento: 'Infraestructura TI',
            asesorExterno: 'Ing. Claudia Vargas',
            residentes: 4,
            fechaRegistro: '12/02/2026',
        },
        {
            id: 5,
            idEmpresa: 'E005',
            nombre: 'Bimbo Coahuila',
            departamento: 'Gestión Empresarial',
            asesorExterno: 'Lic. Raúl Gutiérrez',
            residentes: 0,
            fechaRegistro: '11/02/2026',
        },
    ];

    const todasEmpresas = [
        ...empresasRecientes,
        {
            id: 6,
            idEmpresa: 'E006',
            nombre: 'Nissan CIVAC',
            departamento: 'Ingeniería de Producción',
            asesorExterno: 'Ing. Jorge Salinas',
            residentes: 2,
            fechaRegistro: '10/02/2026',
        },
        {
            id: 7,
            idEmpresa: 'E007',
            nombre: 'Samsung Electronics',
            departamento: 'Control de Calidad',
            asesorExterno: 'M.C. Yolanda Cruz',
            residentes: 1,
            fechaRegistro: '09/02/2026',
        },
        {
            id: 8,
            idEmpresa: 'E008',
            nombre: 'Google México',
            departamento: 'Desarrollo Web',
            asesorExterno: 'Ing. Andrés Montoya',
            residentes: 0,
            fechaRegistro: '08/02/2026',
        },
        {
            id: 9,
            idEmpresa: 'E009',
            nombre: 'Coca-Cola FEMSA',
            departamento: 'Sistemas de Información',
            asesorExterno: 'Lic. Teresa Alvarado',
            residentes: 3,
            fechaRegistro: '07/02/2026',
        },
        {
            id: 10,
            idEmpresa: 'E010',
            nombre: 'Tecnológico de México',
            departamento: 'Innovación y Desarrollo',
            asesorExterno: 'Dr. Felipe Herrera',
            residentes: 2,
            fechaRegistro: '06/02/2026',
        },
    ];

    const filteredEmpresas = todasEmpresas.filter(empresa => {
        const matchesSearch =
            empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empresa.idEmpresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empresa.departamento.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empresa.asesorExterno.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesResidentes =
            filterResidentes === 'todos' ||
            (filterResidentes === 'con' && empresa.residentes > 0) ||
            (filterResidentes === 'sin' && empresa.residentes === 0);

        return matchesSearch && matchesResidentes;
    });

    const handleNuevaEmpresa  = () => alert('Abrir formulario de nueva empresa');
    const handleVerDetalles   = (e) => alert(`Ver detalles de ${e.nombre}`);
    const handleEditar        = (e) => alert(`Editar ${e.nombre}`);
    const handleEliminar      = (e) => {
        if (window.confirm(`¿Estás seguro de eliminar a ${e.nombre}?`)) alert('Empresa eliminada');
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
                <span>Empresas</span>
            </div>

            <main className="main-content">

                {/* Stats */}
                <div className="stats-section">
                    <div className="stat-card">
                        <div className="stat-icon stat-icon-total">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <div className="stat-info">
                            <h3>Total Empresas</h3>
                            <p className="stat-number">{todasEmpresas.length}</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-proceso">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="stat-info">
                            <h3>Con Proyectos</h3>
                            <p className="stat-number">{todasEmpresas.filter(e => e.residentes > 0).length}</p>
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
                            <h3>Total Empresas Activas</h3>
                            <p className="stat-number">{todasEmpresas.reduce((acc, e) => acc + e.residentes, 0)}</p>
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
                            <h3>Sin Proyecto</h3>
                            <p className="stat-number">{todasEmpresas.filter(e => e.residentes === 0).length}</p>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <section className="search-filters-section">
                    <div className="section-header">
                        <h2 className="section-title">Búsqueda de Empresas</h2>
                        <button className="btn btn-nuevo" onClick={handleNuevaEmpresa}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Nueva Empresa
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
                                placeholder="Buscar por nombre, ID, departamento o asesor externo..."
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
                            <option value="todos">Todas las Empresas</option>
                            <option value="con">Con Residentes</option>
                            <option value="sin">Sin Residentes</option>
                        </select>
                    </div>

                    <div className="results-info">
                        <p>Mostrando {filteredEmpresas.length} de {todasEmpresas.length} empresas</p>
                    </div>
                </section>

                {/* Table */}
                <section className="table-section">
                    <div className="table-container">
                        <table className="alumnos-table">
                            <thead>
                            <tr>
                                <th>ID Empresa</th>
                                <th>Nombre</th>
                                <th>Departamento</th>
                                <th>Asesor Externo</th>
                                <th>Residentes Activos</th>
                                <th>Fecha Registro</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredEmpresas.map((empresa) => (
                                <tr key={empresa.id}>
                                    <td className="no-control">{empresa.idEmpresa}</td>
                                    <td className="nombre">{empresa.nombre}</td>
                                    <td>{empresa.departamento}</td>
                                    <td>{empresa.asesorExterno}</td>
                                    <td>
                                            <span className={`status-badge ${getBadgeResidentes(empresa.residentes)}`}>
                                                {empresa.residentes} {empresa.residentes === 1 ? 'residente' : 'residentes'}
                                            </span>
                                    </td>
                                    <td>{empresa.fechaRegistro}</td>
                                    <td>
                                        <div className="action-buttons-table">
                                            <button
                                                className="btn-icon btn-icon-view"
                                                onClick={() => handleVerDetalles(empresa)}
                                                title="Ver detalles"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </button>
                                            <button
                                                className="btn-icon btn-icon-edit"
                                                onClick={() => handleEditar(empresa)}
                                                title="Editar"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                </svg>
                                            </button>
                                            <button
                                                className="btn-icon btn-icon-delete"
                                                onClick={() => handleEliminar(empresa)}
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
                    <h2 className="section-title">Empresas Recientes</h2>
                    <div className="recent-grid">
                        {empresasRecientes.map((empresa) => (
                            <div key={empresa.id} className="recent-card">
                                <div className="recent-card-header">
                                    <div className="avatar-circle">
                                        {empresa.nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                                    </div>
                                    <div className="recent-info">
                                        <h3 className="recent-name">{empresa.nombre}</h3>
                                        <p className="recent-control">{empresa.idEmpresa}</p>
                                    </div>
                                </div>
                                <div className="recent-card-body">
                                    <div className="recent-detail">
                                        <span className="detail-label">Departamento:</span>
                                        <span className="detail-value">{empresa.departamento}</span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Asesor Externo:</span>
                                        <span className="detail-value">{empresa.asesorExterno}</span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Residentes:</span>
                                        <span className="detail-value">
                                            <span className={`status-badge ${getBadgeResidentes(empresa.residentes)}`}>
                                                {empresa.residentes} {empresa.residentes === 1 ? 'residente' : 'residentes'}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Registrada:</span>
                                        <span className="detail-value">{empresa.fechaRegistro}</span>
                                    </div>
                                </div>
                                <div className="recent-card-footer">
                                    <button className="btn-link" onClick={() => handleVerDetalles(empresa)}>
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

export default Empresas;