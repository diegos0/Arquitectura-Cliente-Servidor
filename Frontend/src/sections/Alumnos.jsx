import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Alumnos = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCarrera, setFilterCarrera] = useState('todas');
    const [filterEstado, setFilterEstado] = useState('todos');

    // Datos de ejemplo - esto vendría de tu API/base de datos
    const alumnosRecientes = [
        {
            id: 1,
            nombre: 'María García López',
            noControl: '21051489',
            carrera: 'Ing. Sistemas',
            empresa: 'IBM México',
            estado: 'En Proceso',
            fechaRegistro: '15/02/2026',
            fechaFin: '15/08/2027'
        },
        {
            id: 2,
            nombre: 'Carlos Martínez Ruiz',
            noControl: '21051490',
            carrera: 'Ing. Industrial',
            empresa: 'Toyota',
            estado: 'Completado',
            fechaRegistro: '14/02/2026',
            fechaFin: '15/08/2027'

        },
        {
            id: 3,
            nombre: 'Ana Sánchez Pérez',
            noControl: '21051491',
            carrera: 'Ing. Electrónica',
            empresa: 'Siemens',
            estado: 'En Proceso',
            fechaRegistro: '13/02/2026'
            ,fechaFin: '15/08/2027'
        },
        {
            id: 4,
            nombre: 'Luis Fernando Torres',
            noControl: '21051492',
            carrera: 'Ing. Sistemas',
            empresa: 'Microsoft',
            estado: 'Pendiente',
            fechaRegistro: '12/02/2026'
            ,fechaFin: '15/08/2027'
        },
        {
            id: 5,
            nombre: 'Diana Rodríguez Castro',
            noControl: '21051493',
            carrera: 'Ing. Gestión',
            empresa: 'Bimbo',
            estado: 'En Proceso',
            fechaRegistro: '11/02/2026'
        }
    ];

    const todosAlumnos = [
        ...alumnosRecientes,
        {
            id: 6,
            nombre: 'Juan Pérez Gómez',
            noControl: '21051487',
            carrera: 'Ing. Sistemas',
            empresa: 'Tecnológico de México',
            estado: 'En Proceso',
            fechaRegistro: '10/02/2026'
        }
    ];

    const filteredAlumnos = todosAlumnos.filter(alumno => {
        const matchesSearch =
            alumno.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumno.noControl.includes(searchTerm) ||
            alumno.empresa.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCarrera = filterCarrera === 'todas' || alumno.carrera === filterCarrera;
        const matchesEstado = filterEstado === 'todos' || alumno.estado === filterEstado;

        return matchesSearch && matchesCarrera && matchesEstado;
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
                <button className="nav-item " onClick={() => navigate('/alumnos')}>Alumnos</button>
                <button className="nav-item" onClick={() => navigate('/proyectos')}>Proyectos</button>
                <button className="nav-item" onClick={() => navigate('/docentes')}>Docentes</button>
                <button className="nav-item" onClick={() => navigate('/empresas')}>Empresas</button>
                <button className="nav-item" onClick={() => navigate('/reportes')}>Reportes</button>
            </nav>

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <span>Inicio</span>
                <span className="separator">/</span>
                <span>Alumnos</span>
            </div>

            {/* Main Content */}
            <main className="main-content">
                {/* Header Section with Stats */}
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
                            <h3>Total Alumnos</h3>
                            <p className="stat-number">150</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-proceso">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-completado">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
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

                    </div>
                </div>

                {/* Search and Filters Section */}
                <section className="search-filters-section">
                    <div className="section-header">
                        <h2 className="section-title">Búsqueda de Alumnos</h2>
                    </div>

                    <div className="filters-container">
                        <div className="search-box-alumnos">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Buscar por nombre, número de control o empresa..."
                                className="search-input-alumnos"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <select
                            className="filter-select"
                            value={filterCarrera}
                            onChange={(e) => setFilterCarrera(e.target.value)}
                        >
                            <option value="todas">Todas las Carreras</option>
                            <option value="Ing. Sistemas">Ing. Sistemas</option>
                            <option value="Ing. Industrial">Ing. Industrial</option>
                            <option value="Ing. Electrónica">Ing. Electrónica</option>
                            <option value="Ing. Gestión">Ing. Gestión</option>
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
                        <p>Mostrando {filteredAlumnos.length} de {todosAlumnos.length} alumnos</p>
                    </div>
                </section>

                {/* Table Section */}
                <section className="table-section">
                    <div className="table-container">
                        <table className="alumnos-table">
                            <thead>
                            <tr>
                                <th>No. Control</th>
                                <th>Nombre</th>
                                <th>Carrera</th>
                                <th>Empresa</th>
                                <th>Estado</th>
                                <th>Fecha Registro</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredAlumnos.map((alumno) => (
                                <tr key={alumno.id}>
                                    <td className="no-control">{alumno.noControl}</td>
                                    <td className="nombre">{alumno.nombre}</td>
                                    <td>{alumno.carrera}</td>
                                    <td>{alumno.empresa}</td>
                                    <td>
                      <span className={`status-badge ${getEstadoClass(alumno.estado)}`}>
                        {alumno.estado}
                      </span>
                                    </td>
                                    <td>{alumno.fechaRegistro}</td>
                                    <td>

                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Recent Students Section */}
                <section className="recent-section">
                    <h2 className="section-title">Alumnos Recientes</h2>
                    <div className="recent-grid">
                        {alumnosRecientes.map((alumno) => (
                            <div key={alumno.id} className="recent-card">
                                <div className="recent-card-header">
                                    <div className="avatar-circle">
                                        {alumno.nombre.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                    </div>
                                    <div className="recent-info">
                                        <h3 className="recent-name">{alumno.nombre}</h3>
                                        <p className="recent-control">{alumno.noControl}</p>
                                    </div>
                                </div>
                                <div className="recent-card-body">
                                    <div className="recent-detail">
                                        <span className="detail-label">Carrera:</span>
                                        <span className="detail-value">{alumno.carrera}</span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Empresa:</span>
                                        <span className="detail-value">{alumno.empresa}</span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Registrado:</span>
                                        <span className="detail-value">{alumno.fechaRegistro}
                      {alumno.estado}
                    </span>
                                    </div>
                                    <div className="recent-detail">
                                        <span className="detail-label">Registrado:</span>
                                        <span className="detail-value">{alumno.fechaRegistro}</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Alumnos;