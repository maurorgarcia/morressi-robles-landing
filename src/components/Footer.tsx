import { Link } from 'react-router-dom';
import { Instagram, MapPin } from 'lucide-react';

const links = {
  Empresa: [
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Equipo', to: '/nosotros' },
    { label: 'Contacto', to: '/contacto' },
  ],
  Propiedades: [
    { label: 'Casas', to: '/propiedades' },
    { label: 'Departamentos', to: '/propiedades' },
    { label: 'Oficinas', to: '/propiedades' },
    { label: 'Terrenos', to: '/propiedades' },
  ],
  Legal: [
    { label: 'Política de Privacidad', to: '/' },
    { label: 'Términos y Condiciones', to: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo.png" alt="Morressi Robles Bienes Raíces" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs mb-6">
              Más de 15 años ayudando a familias y empresas a encontrar el inmueble ideal en todo el país.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/morressiroblesbienesraices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gray-800 flex items-center justify-center hover:border-gray-500 hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://maps.app.goo.gl/Wqnnsg6U4TMrZxCS6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gray-800 flex items-center justify-center hover:border-gray-500 hover:text-white transition-colors"
                title="Cómo llegar (Google Maps)"
              >
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-white tracking-[0.15em] uppercase mb-5">{section}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Morressi Robles Bienes Raíces. Todos los derechos reservados.</p>
          <p>Matrícula CUCICBA N° 12345 — CMCPSI N° 67890</p>
        </div>
      </div>
    </footer>
  );
}
