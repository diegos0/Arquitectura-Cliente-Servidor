import React, { useState, useEffect } from 'react';

const RegistrarProyectoModal = ({ isOpen, onClose, onSuccess, initialData }) => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [profesores, setProfesores] = useState([]);

    const emptyForm = {
        num_control: '',
        nombre: '',
        carrera: '',
        genero: '',
        direccion: '',
        correo: '',
        telefono_fijo: '',
        celular: '',
        id_periodo: '',
        nombre_empresa: '',
        departamento: '',
        asesor_nombre: '',
        asesor_cargo: '',
        asesor_correo: '',
        asesor_telefono: '',
        nombre_proyecto: '',
        fecha_inicio: '',
        fecha_fin: '',
        id_profesor: '',
    };

    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});

    // Cada vez que se abre el modal, sincroniza los datos del alumno encontrado
    useEffect(() => {
        if (isOpen) {
            setForm({
                // Datos del alumno: se pre-llenan si vienen de la búsqueda
                num_control:   initialData?.num_control   || '',
                nombre:        initialData?.nombre        || '',
                carrera:       initialData?.carrera       || '',
                genero:        initialData?.genero        || '',
                direccion:     initialData?.direccion     || '',
                correo:        initialData?.correo        || '',
                telefono_fijo: initialData?.telefono_fijo || '',
                celular:       initialData?.celular       || '',
                id_periodo:    initialData?.id_periodo    || '',
                // Datos del proyecto: siempre vacíos (son nuevos)
                nombre_empresa:  '',
                departamento:    '',
                asesor_nombre:   '',
                asesor_cargo:    '',
                asesor_correo:   '',
                asesor_telefono: '',
                nombre_proyecto: '',
                fecha_inicio:    '',
                fecha_fin:       '',
                id_profesor:     '',
            });
            setStep(1);
            setErrors({});
        }
    }, [isOpen, initialData]);

    // Cargar profesores al abrir el modal
    useEffect(() => {
        if (isOpen) {
            fetch('http://localhost:4000/api/profesores')
                .then(r => r.json())
                .then(setProfesores)
                .catch(() => setProfesores([]));
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateStep = () => {
        const newErrors = {};
        if (step === 1) {
            if (!form.num_control) newErrors.num_control = 'Requerido';
            if (!form.nombre)      newErrors.nombre      = 'Requerido';
            if (!form.carrera)     newErrors.carrera     = 'Requerido';
            if (!form.genero)      newErrors.genero      = 'Requerido';
            if (!form.correo)      newErrors.correo      = 'Requerido';
            if (!form.celular)     newErrors.celular     = 'Requerido';
            if (!form.id_periodo)  newErrors.id_periodo  = 'Requerido';
        }
        if (step === 2) {
            if (!form.nombre_empresa)  newErrors.nombre_empresa  = 'Requerido';
            if (!form.departamento)    newErrors.departamento    = 'Requerido';
            if (!form.asesor_nombre)   newErrors.asesor_nombre   = 'Requerido';
            if (!form.asesor_cargo)    newErrors.asesor_cargo    = 'Requerido';
            if (!form.asesor_correo)   newErrors.asesor_correo   = 'Requerido';
            if (!form.asesor_telefono) newErrors.asesor_telefono = 'Requerido';
        }
        if (step === 3) {
            if (!form.nombre_proyecto) newErrors.nombre_proyecto = 'Requerido';
            if (!form.fecha_inicio)    newErrors.fecha_inicio    = 'Requerido';
            if (!form.fecha_fin)       newErrors.fecha_fin       = 'Requerido';
            if (!form.id_profesor)     newErrors.id_profesor     = 'Requerido';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => { if (validateStep()) setStep(s => s + 1); };
    const handleBack = () => setStep(s => s - 1);

    const handleSubmit = async () => {
        if (!validateStep()) return;
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/api/proyectos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || 'Error al registrar');
            }
            alert('¡Proyecto registrado exitosamente!');
            onSuccess?.();
            handleClose();
        } catch (err) {
            alert(err.message);
        }
        setLoading(false);
    };

    const handleClose = () => {
        setStep(1);
        setErrors({});
        onClose();
    };

    if (!isOpen) return null;

    const stepLabels = ['Datos del Alumno', 'Empresa y Asesor Externo', 'Proyecto y Asesor Interno'];

    // Indica si un campo viene pre-llenado del alumno encontrado
    const isPrefilled = (fieldName) => !!initialData?.[fieldName];

    const Field = ({ label, name, type = 'text', required }) => (
        <div style={styles.field}>
            <label style={styles.label}>
                {label}{required && <span style={styles.req}>*</span>}
                {isPrefilled(name) && <span style={styles.badge}>Auto-llenado</span>}
            </label>
            <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                style={{
                    ...styles.input,
                    ...(errors[name] ? styles.inputError : {}),
                    ...(isPrefilled(name) ? styles.inputPrefilled : {}),
                }}
            />
            {errors[name] && <span style={styles.errorMsg}>{errors[name]}</span>}
        </div>
    );

    const SelectField = ({ label, name, options, required }) => (
        <div style={styles.field}>
            <label style={styles.label}>
                {label}{required && <span style={styles.req}>*</span>}
                {isPrefilled(name) && <span style={styles.badge}>Auto-llenado</span>}
            </label>
            <select
                name={name}
                value={form[name]}
                onChange={handleChange}
                style={{
                    ...styles.input,
                    ...(errors[name] ? styles.inputError : {}),
                    ...(isPrefilled(name) ? styles.inputPrefilled : {}),
                }}
            >
                <option value="">Seleccionar...</option>
                {options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
            {errors[name] && <span style={styles.errorMsg}>{errors[name]}</span>}
        </div>
    );

    return (
        <div style={styles.overlay} onClick={e => e.target === e.currentTarget && handleClose()}>
            <div style={styles.modal}>

                {/* Header */}
                <div style={styles.modalHeader}>
                    <div>
                        <h2 style={styles.modalTitle}>Registrar Proyecto de Residencia</h2>
                        <p style={styles.modalSubtitle}>
                            {initialData
                                ? `Datos del alumno ${initialData.nombre} pre-llenados automáticamente`
                                : 'Complete todos los datos del formato de residencia'}
                        </p>
                    </div>
                    <button style={styles.closeBtn} onClick={handleClose}>✕</button>
                </div>

                {/* Steps indicator */}
                <div style={styles.stepsBar}>
                    {stepLabels.map((label, i) => {
                        const num = i + 1;
                        const active = step === num;
                        const done = step > num;
                        return (
                            <div key={num} style={styles.stepItem}>
                                <div style={{
                                    ...styles.stepCircle,
                                    background: done || active ? '#2563eb' : '#e2e8f0',
                                    color: done || active ? '#fff' : '#94a3b8',
                                    border: active ? '2px solid #1d4ed8' : 'none',
                                }}>
                                    {done ? '✓' : num}
                                </div>
                                <span style={{
                                    ...styles.stepLabel,
                                    color: active || done ? '#2563eb' : '#94a3b8',
                                    fontWeight: active ? 600 : 400,
                                }}>
                                    {label}
                                </span>
                                {i < stepLabels.length - 1 && (
                                    <div style={{ ...styles.stepLine, background: done ? '#2563eb' : '#e2e8f0' }} />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Body */}
                <div style={styles.modalBody}>

                    {/* Aviso de auto-llenado si hay alumno */}
                    {step === 1 && initialData && (
                        <div style={styles.infoAlert}>
                            Los datos del alumno <strong>{initialData.nombre}</strong> fueron cargados automáticamente desde la búsqueda. Puedes editarlos si es necesario.
                        </div>
                    )}

                    {step === 1 && (
                        <>
                            <div style={styles.sectionTitle}> Información del Estudiante</div>
                            <div style={styles.grid2}>
                                <Field label="Número de Control" name="num_control" required />
                                <Field label="Nombre Completo" name="nombre" required />
                            </div>
                            <div style={styles.grid2}>
                                <SelectField label="Carrera" name="carrera" required options={[
                                    { value: 'Ingeniería en Sistemas', label: 'Ingeniería en Sistemas' },
                                    { value: 'Ingeniería Industrial', label: 'Ingeniería Industrial' },
                                    { value: 'Ingeniería Mecatrónica', label: 'Ingeniería Mecatrónica' },
                                ]} />
                                <SelectField label="Género" name="genero" required options={[
                                    { value: 'Hombre', label: 'Hombre' },
                                    { value: 'Femenino', label: 'Femenino' },
                                ]} />
                            </div>
                            <Field label="Dirección" name="direccion" />
                            <div style={styles.grid2}>
                                <Field label="Correo Electrónico" name="correo" type="email" required />
                                <Field label="Celular" name="celular" required />
                            </div>
                            <div style={styles.grid2}>
                                <Field label="Teléfono Fijo" name="telefono_fijo" />
                                <SelectField label="Periodo Escolar" name="id_periodo" required options={[
                                    { value: 'AGO-DIC 2025', label: 'AGO-DIC 2025' },
                                    { value: 'ENE-JUN 2026', label: 'ENE-JUN 2026' },
                                    { value: 'ENE-JUN 2025', label: 'ENE-JUN 2025' },
                                ]} />                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div style={styles.sectionTitle}>🏢 Datos de la Empresa</div>
                            <div style={styles.grid2}>
                                <Field label="Nombre de la Empresa" name="nombre_empresa" required />
                                <Field label="Departamento" name="departamento" required />
                            </div>
                            <div style={{ ...styles.sectionTitle, marginTop: 24 }}>👔 Asesor Externo</div>
                            <div style={styles.grid2}>
                                <Field label="Nombre del Asesor Externo" name="asesor_nombre" required />
                                <Field label="Cargo" name="asesor_cargo" required />
                            </div>
                            <div style={styles.grid2}>
                                <Field label="Correo Electrónico" name="asesor_correo" type="email" required />
                                <Field label="Teléfono" name="asesor_telefono" required />
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <div style={styles.sectionTitle}>📁 Datos del Proyecto</div>
                            <Field label="Nombre del Proyecto" name="nombre_proyecto" required />
                            <div style={styles.grid2}>
                                <Field label="Fecha de Inicio" name="fecha_inicio" type="date" required />
                                <Field label="Fecha de Término" name="fecha_fin" type="date" required />
                            </div>

                            <div style={{ ...styles.sectionTitle, marginTop: 24 }}>🎓 Asesor Interno (Asignación)</div>
                            <div style={styles.field}>
                                <label style={styles.label}>Profesor Asesor Interno<span style={styles.req}>*</span></label>
                                <select
                                    name="id_profesor"
                                    value={form.id_profesor}
                                    onChange={handleChange}
                                    style={{ ...styles.input, ...(errors.id_profesor ? styles.inputError : {}) }}
                                >
                                    <option value="">Seleccionar profesor...</option>
                                    {profesores.map(p => (
                                        <option key={p.id_profesor} value={p.id_profesor}>
                                            {p.nombre}
                                        </option>
                                    ))}
                                </select>
                                {errors.id_profesor && <span style={styles.errorMsg}>{errors.id_profesor}</span>}
                                {profesores.length === 0 && (
                                    <span style={{ fontSize: 12, color: '#f59e0b', marginTop: 4 }}>
                                        ⚠ No se pudieron cargar los profesores del servidor
                                    </span>
                                )}
                            </div>

                            {/* Resumen */}
                            <div style={styles.summary}>
                                <div style={styles.summaryTitle}>📋 Resumen del Registro</div>
                                <div style={styles.summaryGrid}>
                                    <span style={styles.summaryKey}>Alumno:</span>
                                    <span>{form.nombre} ({form.num_control})</span>
                                    <span style={styles.summaryKey}>Carrera:</span>
                                    <span>{form.carrera}</span>
                                    <span style={styles.summaryKey}>Empresa:</span>
                                    <span>{form.nombre_empresa}</span>
                                    <span style={styles.summaryKey}>Proyecto:</span>
                                    <span>{form.nombre_proyecto}</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div style={styles.modalFooter}>
                    <button
                        style={styles.btnSecondary}
                        onClick={step === 1 ? handleClose : handleBack}
                    >
                        {step === 1 ? 'Cancelar' : '← Anterior'}
                    </button>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={styles.stepCounter}>Paso {step} de 3</span>
                        {step < 3 ? (
                            <button style={styles.btnPrimary} onClick={handleNext}>
                                Siguiente →
                            </button>
                        ) : (
                            <button style={styles.btnSuccess} onClick={handleSubmit} disabled={loading}>
                                {loading ? 'Registrando...' : '✓ Registrar Proyecto'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed', inset: 0,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
    },
    modal: {
        background: '#fff',
        borderRadius: 16,
        width: '100%', maxWidth: 720,
        maxHeight: '90vh',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        overflow: 'hidden',
    },
    modalHeader: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        padding: '24px 28px 20px',
        borderBottom: '1px solid #f1f5f9',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
        color: '#fff',
    },
    modalTitle: { margin: 0, fontSize: 20, fontWeight: 700, color: '#fff' },
    modalSubtitle: { margin: '4px 0 0', fontSize: 13, color: '#bfdbfe' },
    closeBtn: {
        background: 'rgba(255,255,255,0.15)', border: 'none',
        color: '#fff', width: 32, height: 32, borderRadius: 8,
        cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    stepsBar: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px 28px 16px', gap: 0,
        background: '#f8fafc', borderBottom: '1px solid #e2e8f0',
    },
    stepItem: { display: 'flex', alignItems: 'center', gap: 8 },
    stepCircle: {
        width: 32, height: 32, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700, flexShrink: 0,
    },
    stepLabel: { fontSize: 12, whiteSpace: 'nowrap' },
    stepLine: { width: 40, height: 2, margin: '0 8px' },
    modalBody: {
        padding: '24px 28px',
        overflowY: 'auto', flex: 1,
    },
    infoAlert: {
        background: '#f0fdf4', border: '1px solid #86efac',
        borderRadius: 8, padding: '10px 14px',
        fontSize: 13, color: '#166534', marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14, fontWeight: 600, color: '#1e3a8a',
        marginBottom: 16, paddingBottom: 8,
        borderBottom: '2px solid #dbeafe',
    },
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 },
    field: { display: 'flex', flexDirection: 'column', marginBottom: 16 },
    label: { fontSize: 13, fontWeight: 500, color: '#374151', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 },
    req: { color: '#ef4444', marginLeft: 3 },
    badge: {
        fontSize: 10, fontWeight: 600,
        background: '#dbeafe', color: '#1d4ed8',
        padding: '2px 6px', borderRadius: 4,
    },
    input: {
        padding: '9px 12px', border: '1.5px solid #d1d5db', borderRadius: 8,
        fontSize: 14, color: '#111827', outline: 'none',
        transition: 'border-color 0.2s', background: '#fff',
    },
    inputPrefilled: {
        borderColor: '#93c5fd',
        background: '#eff6ff',
    },
    inputError: { borderColor: '#ef4444', background: '#fef2f2' },
    errorMsg: { fontSize: 11, color: '#ef4444', marginTop: 4 },
    summary: {
        background: '#f0f9ff', border: '1px solid #bae6fd',
        borderRadius: 10, padding: 16, marginTop: 20,
    },
    summaryTitle: { fontSize: 13, fontWeight: 600, color: '#0369a1', marginBottom: 12 },
    summaryGrid: {
        display: 'grid', gridTemplateColumns: 'auto 1fr',
        gap: '8px 16px', fontSize: 13,
    },
    summaryKey: { fontWeight: 600, color: '#0369a1' },
    modalFooter: {
        padding: '16px 28px',
        borderTop: '1px solid #f1f5f9',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: '#f8fafc',
    },
    stepCounter: { fontSize: 12, color: '#94a3b8' },
    btnPrimary: {
        background: '#2563eb', color: '#fff',
        border: 'none', padding: '10px 24px',
        borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer',
    },
    btnSecondary: {
        background: '#fff', color: '#374151',
        border: '1.5px solid #d1d5db', padding: '10px 20px',
        borderRadius: 8, fontWeight: 500, fontSize: 14, cursor: 'pointer',
    },
    btnSuccess: {
        background: '#059669', color: '#fff',
        border: 'none', padding: '10px 24px',
        borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer',
    },
};

export default RegistrarProyectoModal;