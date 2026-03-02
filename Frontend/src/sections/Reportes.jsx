import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Paleta & tokens ─────────────────────────────────────────────────────── */
const T = {
    navy:    '#0f1f3d',
    blue:    '#1a3a6e',
    accent:  '#2f6fcf',
    sky:     '#4e9af1',
    gold:    '#e8a820',
    white:   '#ffffff',
    offwhite:'#f5f7fb',
    muted:   '#8a96aa',
    border:  '#dde3ef',
    green:   '#1a9e6e',
    red:     '#d94f4f',
};

/* ─── Datos de ejemplo ────────────────────────────────────────────────────── */
const stats = [
    { label: 'Residentes Activos',   value: 87,   sub: '+12 este período',  color: T.accent },
    { label: 'Proyectos Registrados',value: 63,   sub: '24 completados',     color: T.green },
    { label: 'Empresas Participantes',value: 21,  sub: '3 nuevas',           color: T.gold, },
    { label: 'Docentes Asignados',   value: 14,   sub: '6 con carga máx.',   color: T.red,  },
];

const reportes = [
    {
        id: 1,
        categoria: 'Alumnos',
        titulo: 'Alumnos por Período Escolar',
        descripcion: 'Listado completo de residentes agrupados por período activo.',

        color: T.accent,
    },
    {
        id: 2,
        categoria: 'Alumnos',
        titulo: 'Alumnos por Carrera',
        descripcion: 'Distribución de residentes según su carrera de origen.',

        color: T.accent,
    },
    {
        id: 3,
        categoria: 'Proyectos',
        titulo: 'Proyectos por Empresa',
        descripcion: 'Relación de proyectos activos vinculados a cada empresa.',
       color: T.green,
    },
    {
        id: 4,
        categoria: 'Proyectos',
        titulo: 'Proyectos Próximos a Vencer',
        descripcion: 'Proyectos con fecha de término en los próximos 30 días.',

        color: T.gold,
    },
    {
        id: 5,
        categoria: 'Docentes',
        titulo: 'Carga de Asesorías por Docente',
        descripcion: 'Cantidad de residentes asignados a cada profesor asesor.',

        color: T.red,
    },
    {
        id: 6,
        categoria: 'Empresas',
        titulo: 'Empresas Activas por Período',
        descripcion: 'Empresas con al menos un residente en el período actual.',

        color: T.navy,
    },
    {
        id: 7,
        categoria: 'Documentos',
        titulo: 'Carta de Presentación',
        descripcion: 'Genera la carta oficial de presentación del alumno a la empresa.',

        color: '#7c3aed',
    },
    {
        id: 8,
        categoria: 'Documentos',
        titulo: 'Constancia de Residencia',
        descripcion: 'Constancia de término exitoso de residencia profesional.',

        color: '#7c3aed',
    },
];

const categorias = ['Todos', 'Alumnos', 'Proyectos', 'Docentes', 'Empresas', 'Documentos'];

const catColor = {
    Alumnos:    T.accent,
    Proyectos:  T.green,
    Docentes:   T.red,
    Empresas:   T.gold,
    Documentos: '#7c3aed',
};

/* ─── Componente principal ────────────────────────────────────────────────── */
const Reportes = () => {
    const navigate = useNavigate();
    const [activeCategoria, setActiveCategoria] = useState('Todos');
    const [hoveredCard, setHoveredCard] = useState(null);

    const filtered = activeCategoria === 'Todos'
        ? reportes
        : reportes.filter(r => r.categoria === activeCategoria);

    const handleGenerar = (reporte) => {
        alert(`Generando: ${reporte.titulo}`);
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
            {/* ── Breadcrumb ── */}
            <div className="breadcrumb">
                <span>Inicio</span>
                <span className="separator">/</span>
                <span> Reportes </span>
            </div>

            {/* ── Main ── */}
            <main style={s.main}>

                {/* Hero */}
                <div style={s.hero}>
                    <div style={s.heroText}>
                        <h1 style={s.heroTitle}>Centro de Reportes</h1>
                        <p style={s.heroDesc}>
                            Consulta estadísticas, genera listados y descarga documentos oficiales del sistema de residencias.
                        </p>
                    </div>
                </div>

                {/* Stats strip */}
                <div style={s.statsStrip}>
                    {stats.map((st, i) => (
                        <div key={i} style={s.statCard}>
                            <div style={{ ...s.statAccent, background: st.color }} />
                            <div style={s.statIcon}>{st.icon}</div>
                            <div style={s.statValue}>{st.value}</div>
                            <div style={s.statLabel}>{st.label}</div>
                            <div style={s.statSub}>{st.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Filtros */}
                <div style={s.filterRow}>
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            style={{
                                ...s.filterBtn,
                                ...(activeCategoria === cat ? {
                                    background: catColor[cat] || T.navy,
                                    color: T.white,
                                    borderColor: catColor[cat] || T.navy,
                                } : {}),
                            }}
                            onClick={() => setActiveCategoria(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid de reportes */}
                <div style={s.grid}>
                    {filtered.map(rep => (
                        <div
                            key={rep.id}
                            style={{
                                ...s.card,
                                ...(hoveredCard === rep.id ? s.cardHover : {}),
                            }}
                            onMouseEnter={() => setHoveredCard(rep.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div style={{ ...s.cardStripe, background: rep.color }} />

                            <div style={s.cardTop}>
                                <div style={{ ...s.cardIconWrap, background: rep.color + '18' }}>
                                    <span style={s.cardIcon}>{rep.icon}</span>
                                </div>
                                <span style={{
                                    ...s.catTag,
                                    background: (catColor[rep.categoria] || T.navy) + '18',
                                    color: catColor[rep.categoria] || T.navy,
                                }}>
                                    {rep.categoria}
                                </span>
                            </div>

                            <h3 style={s.cardTitle}>{rep.titulo}</h3>
                            <p style={s.cardDesc}>{rep.descripcion}</p>

                            <button
                                style={{ ...s.cardBtn, background: rep.color }}
                                onClick={() => handleGenerar(rep)}
                            >
                                {rep.categoria === 'Documentos' ? 'Generar PDF' : 'Ver Reporte'}
                                <span style={s.cardBtnArrow}>→</span>
                            </button>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
};

/* ─── Estilos ─────────────────────────────────────────────────────────────── */
const s = {
    page: {
        minHeight: '100vh',
        background: T.offwhite,
        fontFamily: "'Georgia', 'Times New Roman', serif",
    },

    /* Header */
    header: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 32px', height: 64,
        background: T.navy,
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
    },
    headerLeft: { display: 'flex', alignItems: 'center', gap: 16 },
    logo: { height: 36, objectFit: 'contain' },
    headerTitle: { fontSize: 16, fontWeight: 700, color: T.white, letterSpacing: '0.01em' },
    headerSub:   { fontSize: 11, color: '#7a9cc8', marginTop: 2 },
    userBlock:   { display: 'flex', alignItems: 'center', gap: 12 },
    avatar: {
        width: 36, height: 36, borderRadius: '50%',
        background: T.accent, color: T.white,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 700, fontSize: 15,
    },
    userRole: { fontSize: 10, color: '#7a9cc8' },
    userName: { fontSize: 13, color: T.white, fontWeight: 600 },

    /* Nav */
    nav: {
        display: 'flex', gap: 0,
        background: T.blue,
        padding: '0 32px',
    },
    navBtn: {
        padding: '12px 20px',
        background: 'transparent', border: 'none',
        color: '#9ab8d8', fontSize: 13, fontWeight: 500,
        cursor: 'pointer', letterSpacing: '0.02em',
        borderBottom: '3px solid transparent',
        transition: 'all 0.2s',
        fontFamily: 'inherit',
    },
    navBtnActive: {
        color: T.white,
        borderBottom: `3px solid ${T.gold}`,
    },

    /* Breadcrumb */
    breadcrumb: {
        padding: '10px 32px',
        display: 'flex', alignItems: 'center', gap: 8,
        background: T.white, borderBottom: `1px solid ${T.border}`,
    },
    breadcrumbLink:    { fontSize: 12, color: T.muted, cursor: 'pointer' },
    sep:               { fontSize: 12, color: T.border },
    breadcrumbCurrent: { fontSize: 12, color: T.navy, fontWeight: 600 },

    /* Main */
    main: { padding: '32px 32px 48px' },

    /* Hero */
    hero: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: `linear-gradient(120deg, ${T.navy} 0%, ${T.blue} 100%)`,
        borderRadius: 16, padding: '32px 40px',
        marginBottom: 28,
        boxShadow: '0 8px 32px rgba(15,31,61,0.18)',
        overflow: 'hidden', position: 'relative',
    },
    heroText: { flex: 1 },
    heroTitle: {
        margin: 0, fontSize: 28, fontWeight: 700,
        color: T.white, letterSpacing: '-0.01em',
    },
    heroDesc: {
        margin: '10px 0 0', fontSize: 14, color: '#9ab8d8',
        maxWidth: 480, lineHeight: 1.6,
    },
    heroBadge: {
        width: 80, height: 80, borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
    },
    heroBadgeIcon: { fontSize: 36 },

    /* Stats strip */
    statsStrip: {
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16, marginBottom: 28,
    },
    statCard: {
        background: T.white, borderRadius: 12,
        padding: '20px 22px', position: 'relative', overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        border: `1px solid ${T.border}`,
    },
    statAccent: {
        position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '12px 12px 0 0',
    },
    statIcon: { fontSize: 22, marginBottom: 8 },
    statValue: { fontSize: 32, fontWeight: 700, color: T.navy, lineHeight: 1 },
    statLabel: { fontSize: 13, color: T.navy, fontWeight: 600, marginTop: 4 },
    statSub:   { fontSize: 11, color: T.muted, marginTop: 4 },

    /* Filter row */
    filterRow: {
        display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap',
    },
    filterBtn: {
        padding: '7px 18px', borderRadius: 999,
        border: `1.5px solid ${T.border}`,
        background: T.white, color: T.navy,
        fontSize: 13, fontWeight: 500, cursor: 'pointer',
        transition: 'all 0.18s',
        fontFamily: 'inherit',
    },

    /* Cards grid */
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 20,
    },
    card: {
        background: T.white, borderRadius: 14,
        padding: '24px 24px 20px',
        border: `1px solid ${T.border}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', gap: 0,
        transition: 'box-shadow 0.2s, transform 0.2s',
        cursor: 'default',
    },
    cardHover: {
        boxShadow: '0 10px 32px rgba(15,31,61,0.13)',
        transform: 'translateY(-3px)',
    },
    cardStripe: {
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
        borderRadius: '14px 0 0 14px',
    },
    cardTop: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 16, paddingLeft: 8,
    },
    cardIconWrap: {
        width: 44, height: 44, borderRadius: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    cardIcon:  { fontSize: 22 },
    catTag: {
        fontSize: 10, fontWeight: 700, padding: '4px 10px',
        borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.06em',
    },
    cardTitle: {
        margin: '0 0 8px', fontSize: 15, fontWeight: 700,
        color: T.navy, paddingLeft: 8, lineHeight: 1.3,
    },
    cardDesc: {
        margin: '0 0 20px', fontSize: 13, color: T.muted,
        paddingLeft: 8, lineHeight: 1.6, flex: 1,
    },
    cardBtn: {
        marginLeft: 8, padding: '9px 18px', borderRadius: 8,
        border: 'none', color: T.white,
        fontSize: 13, fontWeight: 600, cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 6,
        alignSelf: 'flex-start',
        transition: 'opacity 0.15s',
        fontFamily: 'inherit',
    },
    cardBtnArrow: { fontSize: 15 },
};

export default Reportes;