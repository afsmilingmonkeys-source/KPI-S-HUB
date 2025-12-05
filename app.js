// app.js - VERSIÓN CORREGIDA
import React from 'react';
import ReactDOM from 'react-dom/client';

// Componente principal
const App = () => {
  return React.createElement('div', { className: 'container mt-5' },
    React.createElement('h1', { className: 'text-primary mb-4' }, 'Dentalgy OS | KPI Portal'),
    React.createElement('p', { className: 'lead' }, 'Panel de control de indicadores de desempeño'),
    
    React.createElement('div', { className: 'row mt-4' },
      // Tarjeta 1
      React.createElement('div', { className: 'col-md-3 mb-3' },
        React.createElement('div', { className: 'card h-100' },
          React.createElement('div', { className: 'card-body text-center' },
            React.createElement('div', { className: 'text-primary mb-3', style: { fontSize: '2rem' } },
              React.createElement('i', { className: 'fas fa-chart-line' })
            ),
            React.createElement('h5', { className: 'card-title' }, 'KPIs Activos'),
            React.createElement('h2', { className: 'text-primary' }, '12'),
            React.createElement('p', { className: 'text-muted' }, 'Indicadores en monitoreo')
          )
        )
      ),
      
      // Tarjeta 2
      React.createElement('div', { className: 'col-md-3 mb-3' },
        React.createElement('div', { className: 'card h-100' },
          React.createElement('div', { className: 'card-body text-center' },
            React.createElement('div', { className: 'text-success mb-3', style: { fontSize: '2rem' } },
              React.createElement('i', { className: 'fas fa-users' })
            ),
            React.createElement('h5', { className: 'card-title' }, 'Equipos'),
            React.createElement('h2', { className: 'text-success' }, '8'),
            React.createElement('p', { className: 'text-muted' }, 'Departamentos participando')
          )
        )
      ),
      
      // Tarjeta 3
      React.createElement('div', { className: 'col-md-3 mb-3' },
        React.createElement('div', { className: 'card h-100' },
          React.createElement('div', { className: 'card-body text-center' },
            React.createElement('div', { className: 'text-warning mb-3', style: { fontSize: '2rem' } },
              React.createElement('i', { className: 'fas fa-trending-up' })
            ),
            React.createElement('h5', { className: 'card-title' }, 'Crecimiento'),
            React.createElement('h2', { className: 'text-warning' }, '+23%'),
            React.createElement('p', { className: 'text-muted' }, 'Este trimestre')
          )
        )
      ),
      
      // Tarjeta 4
      React.createElement('div', { className: 'col-md-3 mb-3' },
        React.createElement('div', { className: 'card h-100' },
          React.createElement('div', { className: 'card-body text-center' },
            React.createElement('div', { className: 'text-info mb-3', style: { fontSize: '2rem' } },
              React.createElement('i', { className: 'fas fa-dollar-sign' })
            ),
            React.createElement('h5', { className: 'card-title' }, 'Ingresos'),
            React.createElement('h2', { className: 'text-info' }, '$245K'),
            React.createElement('p', { className: 'text-muted' }, 'Acumulado anual')
          )
        )
      )
    )
  );
};

// Renderizar la aplicación
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(App));
} else {
  console.error('No se encontró el elemento con id "root"');
}
