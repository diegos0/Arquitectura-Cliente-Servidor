import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Proyectos = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterEstado, setFilterEstado] = useState('todos');
    const [filterArea, setFilterArea] = useState('todas');

    // Datos de ejemplo
    const proyectos = [
        {
            id: 1,
            nombre: 'Sistema de Inventarios',
            area: 'Desarrollo de Software',
            empresa: 'Tecnológico de México',
            alumno: 'Juan Pérez Gómez',
            asesorInterno: 'Ing. López',
            asesorExterno: 'Lic. Martínez',
            estado: 'En Proceso',
            progreso: 65,
            fechaInicio: '15/01/2026',
            fechaFin: '30/06/2026'
        },
        {
            id: 2,
            nombre: 'Optimización de Procesos Productivos',
            area: 'Ingeniería Industrial',
            empresa: 'Toyota',
            alumno: 'Carlos Martínez Ruiz',
            asesorInterno: 'Ing. García',
            asesorExterno: 'Ing. Rodríguez',
            estado: 'Completado',
            progreso: 100,
            fechaInicio: '10/01/2026',
            fechaFin: '15/02/2026'
        },
        {
            id: 3,
            nombre: 'Sistema de Control Industrial',
            area: 'Electrónica',
            empresa: 'Siemens',
            alumno: 'Ana Sánchez Pérez',
            asesorInterno: 'Dr. Ramírez',
            asesorExterno: 'Ing. Torres',
            estado: 'En Proceso',
            progreso: 45,
            fechaInicio: '20/01/2026',
            fechaFin: '30/06/2026'
        },
        {
            id: 4,
            nombre: 'Aplicación Web de Gestión',
            area: 'Desarrollo de Software',
            empresa: 'Microsoft',
            alumno: 'Luis Fernando Torres',
            asesorInterno: 'Mtra. Hernández',
            asesorExterno: 'Ing. Castro',
            estado: 'Pendiente',
            progreso: 10,
            fechaInicio: '01/02/2026',
            fechaFin: '30/07/2026'
        },
        {
            id: 5,
            nombre: 'Análisis de Cadena de Suministro',
            area: 'Ingeniería Gestión',
            empresa: 'Bimbo',
            alumno: 'Diana Rodríguez Castro',
            asesorInterno: 'Ing. Morales',
            asesorExterno: 'Lic. Jiménez',
            estado: 'En Proceso',
            progreso: 55,
            fechaInicio: '12/01/2026',
            fechaFin: '30/06/2026'
        },
        {
            id: 6,
            nombre: 'Dashboard de Análisis de Datos',
            area: 'Desarrollo de Software',
            empresa: 'IBM México',
            alumno: 'María García López',
            asesorInterno: 'Dr. Sánchez',
            asesorExterno: 'Ing. Flores',
            estado: 'En Proceso',
            progreso: 70,
            fechaInicio: '05/01/2026',
            fechaFin: '30/06/2026'
        }
    ];

    const filteredProyectos = proyectos.filter(proyecto => {
        const matchesSearch =
            proyecto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            proyecto.alumno.toLowerCase().includes(searchTerm.toLowerCase()) ||
            proyecto.empresa.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesEstado = filterEstado === 'todos' || proyecto.estado === filterEstado;
        const matchesArea = filterArea === 'todas' || proyecto.area === filterArea;

        return matchesSearch && matchesEstado && matchesArea;
    });

    const getEstadoClass = (estado) => {
        switch(estado) {
            case 'Completado':
                return 'status-completado';
            case 'En Proceso':
                return 'status-proceso';
            case 'Pendiente':
                return 'status-pendiente';
            default:
                return '';
        }
    };

    const handleNuevoProyecto = () => {
        alert('Abrir formulario de nuevo proyecto');
    };

    const handleVerDetalles = (proyecto) => {
        alert(`Ver detalles de ${proyecto.nombre}`);
    };

    const handleEditar = (proyecto) => {
        alert(`Editar ${proyecto.nombre}`);
    };

    const handleEliminar = (proyecto) => {
        if (window.confirm(`¿Estás seguro de eliminar el proyecto "${proyecto.nombre}"?`)) {
            alert('Proyecto eliminado');
        }
    };

    return (
        <div className="proyectos-container">
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
                <button className="nav-item" onClick={() => navigate('/principal')}>INICIO</button>
                <button className="nav-item" onClick={() => navigate('/alumnos')}>Alumnos</button>
                <button className="nav-item active" onClick={() => navigate('/proyectos')}>Proyectos</button>
                <button className="nav-item" onClick={() => navigate('/docentes')}>Docentes</button>
                <button className="nav-item" onClick={() => navigate('/empresas')}>Empresas</button>
                <button className="nav-item" onClick={() => navigate('/reportes')}>Reportes</button>
            </nav>

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <span>Inicio</span>
                <span className="separator">/</span>
                <span>Proyectos</span>
            </div>

            {/* Main Content */}
            <main className="main-content">
                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stat-card">
                        <div className="stat-icon stat-icon-total">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4"></path>
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                            </svg>
                        </div>
                        <div className="stat-info">
                            <h3>Total Proyectos</h3>
                            <p className="stat-number">124</p>
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
                            <h3>En Proceso</h3>
                            <p className="stat-number">78</p>
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
                            <h3>Completados</h3>
                            <p className="stat-number">41</p>
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
                            <h3>Pendientes</h3>
                            <p className="stat-number">5</p>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <section className="search-filters-section">
                    <div className="section-header">
                        <h2 className="section-title">Gestión de Proyectos</h2>
                        <button className="btn btn-nuevo" onClick={handleNuevoProyecto}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Nuevo Proyecto
                        </button>
                    </div>

                    <div className="filters-container">
                        <div className="search-box-proyectos">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Buscar por proyecto, alumno o empresa..."
                                className="search-input-proyectos"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <select
                            className="filter-select"
                            value={filterArea}
                            onChange={(e) => setFilterArea(e.target.value)}
                        >
                            <option value="todas">Todas las Áreas</option>
                            <option value="Desarrollo de Software">Desarrollo de Software</option>
                            <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                            <option value="Electrónica">Electrónica</option>
                            <option value="Ingeniería Gestión">Ingeniería Gestión</option>
                        </select>

                        <select
                            className="filter-select"
                            value={filterEstado}
                            onChange={(e) => setFilterEstado(e.target.value)}
                        >
                            <option value="todos">Todos los Estados</option>
                            <option value="En Proceso">En Proceso</option>
                            <option value="Completado">Completado</option>
                            <option value="Pendiente">Pendiente</option>
                        </select>
                    </div>

                    <div className="results-info">
                        <p>Mostrando {filteredProyectos.length} de {proyectos.length} proyectos</p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="projects-grid-section">
                    <div className="projects-grid">
                        {filteredProyectos.map((proyecto) => (
                            <div key={proyecto.id} className="project-card">
                                <div className="project-card-header">
                                    <h3 className="project-name">{proyecto.nombre}</h3>
                                    <span className={`status-badge ${getEstadoClass(proyecto.estado)}`}>
                    {proyecto.estado}
                  </span>
                                </div>

                                <div className="project-card-body">
                                    <div className="project-info">
                                        <div className="info-row">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            <span>{proyecto.alumno}</span>
                                        </div>
                                        <div className="info-row">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                            </svg>
                                            <span>{proyecto.empresa}</span>
                                        </div>
                                        <div className="info-row">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2v20M2 12h20"></path>
                                            </svg>
                                            <span>{proyecto.area}</span>
                                        </div>
                                    </div>

                                    <div className="progress-section">
                                        <div className="progress-header">
                                            <span className="progress-label">Progreso</span>
                                            <span className="progress-value">{proyecto.progreso}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${proyecto.progreso}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="dates-section">
                                        <div className="date-item">
                                            <span className="date-label">Inicio:</span>
                                            <span className="date-value">{proyecto.fechaInicio}</span>
                                        </div>
                                        <div className="date-item">
                                            <span className="date-label">Fin:</span>
                                            <span className="date-value">{proyecto.fechaFin}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card-footer">
                                    <button className="btn-icon btn-icon-view" onClick={() => handleVerDetalles(proyecto)} title="Ver detalles">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </button>
                                    <button className="btn-icon btn-icon-edit" onClick={() => handleEditar(proyecto)} title="Editar">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </button>
                                    <button className="btn-icon btn-icon-delete" onClick={() => handleEliminar(proyecto)} title="Eliminar">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
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

export default Proyectos;