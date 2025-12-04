import { KPI, BenchmarkStatus } from './types';

// Helper for status logic
const getTrafficLight = (val: number, good: number, excellent: number, invert: boolean = false): BenchmarkStatus => {
  if (invert) {
    if (val <= excellent) return BenchmarkStatus.EXCELLENT;
    if (val <= good) return BenchmarkStatus.GOOD;
    return BenchmarkStatus.CRITICAL;
  }
  if (val >= excellent) return BenchmarkStatus.EXCELLENT;
  if (val >= good) return BenchmarkStatus.GOOD;
  return BenchmarkStatus.CRITICAL;
};

export const KPIS: KPI[] = [
  // 1. CAPTACIÓN Y MARKETING
  {
    id: 'cac',
    title: 'CAC - Coste de Adquisición',
    description: 'Coste medio para conseguir un nuevo paciente.',
    category: 'marketing',
    inputs: [
      { key: 'marketingSpend', label: 'Inversión Total en Marketing', unit: '€' },
      { key: 'newPatients', label: 'Nuevos Pacientes (Captados)', unit: '#' }
    ],
    calculate: (v) => (v.newPatients > 0 ? v.marketingSpend / v.newPatients : null),
    getStatus: (v) => getTrafficLight(v, 60, 30, true), // Lower is better. <30 Excellent, <60 Good
    format: (v) => `${v.toFixed(2)}€`,
    benchmarkText: '< 30€ ideal'
  },
  {
    id: 'lead_conversion',
    title: 'Conversión Leads a Citas',
    description: 'Porcentaje de interesados que agendan una primera visita.',
    category: 'marketing',
    inputs: [
      { key: 'appointments', label: 'Citas Agendadas', unit: '#' },
      { key: 'totalLeads', label: 'Total Leads/Contactos', unit: '#' }
    ],
    calculate: (v) => (v.totalLeads > 0 ? (v.appointments / v.totalLeads) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 40, 60),
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '> 60% excelente'
  },
  {
    id: 'first_visit_attendance',
    title: 'Asistencia 1ª Visita',
    description: 'Pacientes que realmente acuden a su primera cita.',
    category: 'marketing',
    inputs: [
      { key: 'attended', label: '1ª Visitas Realizadas', unit: '#' },
      { key: 'scheduled', label: '1ª Visitas Agendadas', unit: '#' }
    ],
    calculate: (v) => (v.scheduled > 0 ? (v.attended / v.scheduled) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 80, 90),
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '> 90% ideal'
  },
  {
    id: 'ltv',
    title: 'LTV - Valor de Vida',
    description: 'Ingresos medios que genera un paciente durante toda su relación con la clínica.',
    category: 'marketing',
    inputs: [
      { key: 'avgTicket', label: 'Ticket Medio', unit: '€' },
      { key: 'avgVisits', label: 'Visitas Medias por Año', unit: '#' },
      { key: 'yearsRetention', label: 'Años de Retención Media', unit: 'años' }
    ],
    calculate: (v) => v.avgTicket * v.avgVisits * v.yearsRetention,
    getStatus: (v) => getTrafficLight(v, 1500, 3000),
    format: (v) => `${v.toFixed(0)}€`,
    benchmarkText: '> 3.000€ objetivo'
  },

  // 2. PRODUCCIÓN Y VENTAS
  {
    id: 'prod_per_chair',
    title: 'Producción por Sillón',
    description: 'Ingresos generados por cada sillón dental al mes.',
    category: 'clinical',
    inputs: [
      { key: 'totalProduction', label: 'Producción Total Mensual', unit: '€' },
      { key: 'numChairs', label: 'Número de Sillones', unit: '#' }
    ],
    calculate: (v) => (v.numChairs > 0 ? v.totalProduction / v.numChairs : null),
    getStatus: (v) => getTrafficLight(v, 15000, 25000),
    format: (v) => `${v.toLocaleString('es-ES')}€`,
    benchmarkText: '> 25k€/sillón'
  },
  {
    id: 'acceptance_rate',
    title: 'Aceptación de Planes',
    description: 'Porcentaje de presupuesto aceptado sobre el presentado.',
    category: 'clinical',
    inputs: [
      { key: 'acceptedValue', label: 'Valor Presupuestos Aceptados', unit: '€' },
      { key: 'presentedValue', label: 'Valor Presupuestos Presentados', unit: '€' }
    ],
    calculate: (v) => (v.presentedValue > 0 ? (v.acceptedValue / v.presentedValue) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 50, 70),
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '> 70% excelente'
  },
  {
    id: 'avg_ticket',
    title: 'Ticket Medio Paciente',
    description: 'Facturación media por visita de paciente.',
    category: 'clinical',
    inputs: [
      { key: 'totalIncome', label: 'Ingresos Totales', unit: '€' },
      { key: 'totalVisits', label: 'Número de Visitas Totales', unit: '#' }
    ],
    calculate: (v) => (v.totalVisits > 0 ? v.totalIncome / v.totalVisits : null),
    getStatus: (v) => getTrafficLight(v, 150, 250),
    format: (v) => `${v.toFixed(2)}€`,
    benchmarkText: '> 200€ ideal'
  },
  {
    id: 'revenue_per_hour',
    title: 'Ingreso Hora Clínica',
    description: 'Rendimiento económico por hora clínica abierta.',
    category: 'clinical',
    inputs: [
      { key: 'totalProduction', label: 'Producción Total', unit: '€' },
      { key: 'clinicalHours', label: 'Horas Totales Trabajadas', unit: 'h' }
    ],
    calculate: (v) => (v.clinicalHours > 0 ? v.totalProduction / v.clinicalHours : null),
    getStatus: (v) => getTrafficLight(v, 200, 400),
    format: (v) => `${v.toFixed(0)}€/h`,
    benchmarkText: '> 400€/h excelente'
  },

  // 3. OPERACIONES
  {
    id: 'chair_utilization',
    title: 'Ocupación de Sillón',
    description: 'Porcentaje de tiempo que el sillón está ocupado con paciente.',
    category: 'operations',
    inputs: [
      { key: 'occupiedHours', label: 'Horas con Paciente', unit: 'h' },
      { key: 'availableHours', label: 'Horas Disponibles Apertura', unit: 'h' }
    ],
    calculate: (v) => (v.availableHours > 0 ? (v.occupiedHours / v.availableHours) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 70, 85),
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '85% óptimo'
  },
  {
    id: 'waiting_time',
    title: 'Tiempo de Espera',
    description: 'Tiempo medio en sala de espera antes de entrar a gabinete.',
    category: 'operations',
    inputs: [
      { key: 'totalWaitMinutes', label: 'Minutos Totales Espera', unit: 'min' },
      { key: 'patientCount', label: 'Pacientes Atendidos', unit: '#' }
    ],
    calculate: (v) => (v.patientCount > 0 ? v.totalWaitMinutes / v.patientCount : null),
    getStatus: (v) => getTrafficLight(v, 15, 10, true), // Invert: Less is better
    format: (v) => `${v.toFixed(0)} min`,
    benchmarkText: '< 10 min ideal'
  },
  {
    id: 'cancellation_rate',
    title: 'Tasa Cancelaciones',
    description: 'Porcentaje de citas fallidas o canceladas a última hora.',
    category: 'operations',
    inputs: [
      { key: 'missedAppts', label: 'Citas Fallidas/Canceladas', unit: '#' },
      { key: 'totalAppts', label: 'Citas Totales Agendadas', unit: '#' }
    ],
    calculate: (v) => (v.totalAppts > 0 ? (v.missedAppts / v.totalAppts) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 10, 5, true), // Invert
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '< 5% excelente'
  },
  {
    id: 'budget_time',
    title: 'Tiempo Presupuestos',
    description: 'Tiempo medio en entregar un presupuesto complejo.',
    category: 'operations',
    inputs: [
      { key: 'totalDays', label: 'Suma Días Retraso', unit: 'días' },
      { key: 'numBudgets', label: 'Presupuestos Entregados', unit: '#' }
    ],
    calculate: (v) => (v.numBudgets > 0 ? v.totalDays / v.numBudgets : null),
    getStatus: (v) => getTrafficLight(v, 2, 1, true), // Invert
    format: (v) => `${v.toFixed(1)} días`,
    benchmarkText: 'Mismo día ideal'
  },
  {
    id: 'operational_cost',
    title: 'Coste Operativo Paciente',
    description: 'Coste fijo+variable asignable a cada visita.',
    category: 'operations',
    inputs: [
      { key: 'totalOpex', label: 'Gastos Operativos Totales', unit: '€' },
      { key: 'totalVisits', label: 'Visitas Totales', unit: '#' }
    ],
    calculate: (v) => (v.totalVisits > 0 ? v.totalOpex / v.totalVisits : null),
    getStatus: (v) => getTrafficLight(v, 100, 80, true), // Lower better usually, context dependent
    format: (v) => `${v.toFixed(2)}€`,
    benchmarkText: '< 80€ objetivo'
  },

  // 4. CALIDAD
  {
    id: 'nps',
    title: 'NPS Score',
    description: 'Índice de lealtad y recomendación (encuestas).',
    category: 'quality',
    inputs: [
      { key: 'promoters', label: '% Promotores (9-10)', unit: '%' },
      { key: 'detractors', label: '% Detractores (0-6)', unit: '%' }
    ],
    calculate: (v) => v.promoters - v.detractors,
    getStatus: (v) => getTrafficLight(v, 50, 70),
    format: (v) => `${v.toFixed(0)}`,
    benchmarkText: '> 70 excelente'
  },
  {
    id: 'complaint_rate',
    title: 'Tasa Reclamaciones',
    description: 'Porcentaje de visitas que generan una queja formal.',
    category: 'quality',
    inputs: [
      { key: 'complaints', label: 'Número Quejas', unit: '#' },
      { key: 'visits', label: 'Número Visitas', unit: '#' }
    ],
    calculate: (v) => (v.visits > 0 ? (v.complaints / v.visits) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 1, 0.1, true),
    format: (v) => `${v.toFixed(2)}%`,
    benchmarkText: 'Tendencia a 0%'
  },
  {
    id: 'rework_rate',
    title: 'Tasa Repeticiones',
    description: 'Trabajos clínicos que deben repetirse por fallo.',
    category: 'quality',
    inputs: [
      { key: 'repeats', label: 'Tratamientos Repetidos', unit: '#' },
      { key: 'totalTreatments', label: 'Tratamientos Totales', unit: '#' }
    ],
    calculate: (v) => (v.totalTreatments > 0 ? (v.repeats / v.totalTreatments) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 3, 1, true),
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '< 1% excelente'
  },
  {
    id: 'retention_rate',
    title: 'Retención Pacientes',
    description: 'Porcentaje de pacientes que vuelven al año siguiente.',
    category: 'quality',
    inputs: [
      { key: 'returning', label: 'Pacientes Recurrentes Año Actual', unit: '#' },
      { key: 'totalPrev', label: 'Total Pacientes Año Anterior', unit: '#' }
    ],
    calculate: (v) => (v.totalPrev > 0 ? (v.returning / v.totalPrev) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 60, 75),
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '> 75% fidelidad'
  },

  // 5. FINANZAS
  {
    id: 'operating_margin',
    title: 'Margen Operativo',
    description: 'Beneficio antes de impuestos sobre ingresos.',
    category: 'finance',
    inputs: [
      { key: 'ebitda', label: 'EBITDA', unit: '€' },
      { key: 'revenue', label: 'Ingresos Totales', unit: '€' }
    ],
    calculate: (v) => (v.revenue > 0 ? (v.ebitda / v.revenue) * 100 : null),
    getStatus: (v) => getTrafficLight(v, 15, 25),
    format: (v) => `${v.toFixed(1)}%`,
    benchmarkText: '> 25% saludable'
  },
  {
    id: 'cash_flow',
    title: 'Flujo Caja Operativo',
    description: 'Dinero real generado por las operaciones.',
    category: 'finance',
    inputs: [
      { key: 'inflow', label: 'Cobros Reales', unit: '€' },
      { key: 'outflow', label: 'Pagos Reales', unit: '€' }
    ],
    calculate: (v) => v.inflow - v.outflow,
    getStatus: (v) => getTrafficLight(v, 0, 10000), // Positive is good
    format: (v) => `${v.toLocaleString('es-ES')}€`,
    benchmarkText: 'Positivo siempre'
  },
  {
    id: 'dso',
    title: 'DSO - Días Cobro',
    description: 'Tiempo medio en cobrar las facturas emitidas (financiaciones, seguros).',
    category: 'finance',
    inputs: [
      { key: 'receivables', label: 'Cuentas por Cobrar', unit: '€' },
      { key: 'creditSales', label: 'Ventas a Crédito/Seguro', unit: '€' }
    ],
    calculate: (v) => (v.creditSales > 0 ? (v.receivables / v.creditSales) * 365 : null),
    getStatus: (v) => getTrafficLight(v, 45, 30, true), // Invert
    format: (v) => `${v.toFixed(0)} días`,
    benchmarkText: '< 30 días'
  }
];

export const CATEGORIES = [
  { id: 'marketing', label: 'Marketing', icon: 'Megaphone' },
  { id: 'clinical', label: 'Producción', icon: 'Stethoscope' },
  { id: 'operations', label: 'Operaciones', icon: 'Activity' },
  { id: 'quality', label: 'Calidad', icon: 'Award' },
  { id: 'finance', label: 'Finanzas', icon: 'Euro' },
];