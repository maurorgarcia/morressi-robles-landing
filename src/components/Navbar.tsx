import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/propiedades', label: 'Propiedades' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Morressi Robles Bienes Raíces" className="h-16 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/propiedades"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors"
            >
              Buscar Propiedad
            </Link>
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-gray-900 font-bold' : 'text-gray-600'}`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/propiedades"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 text-center"
          >
            Buscar Propiedad
          </Link>
        </div>
      )}
    </nav>
  );
}
