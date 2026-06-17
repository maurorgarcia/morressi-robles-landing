import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  tipo_consulta: string;
  mensaje: string;
};

const initial: FormState = { nombre: '', email: '', telefono: '', tipo_consulta: '', mensaje: '' };

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('contactos').insert([form]);
    if (error) {
      setStatus('error');
      setErrorMsg('Hubo un error al enviar tu mensaje. Por favor intentá nuevamente.');
    } else {
      setStatus('success');
      setForm(initial);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-gray-500" />
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Contacto</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white max-w-2xl leading-tight mb-4">
            Hablemos sobre tu Propiedad
          </h1>
          <p className="text-gray-400 max-w-lg">
            Completá el formulario y uno de nuestros asesores se comunicará con vos a la brevedad.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8">¿Cómo podemos ayudarte?</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
                Ya sea que quieras comprar, vender o alquilar, nuestro equipo de expertos está listo para asesorarte en cada paso del proceso.
              </p>

              <div className="flex flex-col gap-6 mb-12">
                {[
                  { icon: Phone, label: '+54 11 4000-0000', sublabel: 'Lun – Vie, 9:00 – 18:00 hs', link: 'tel:+541140000000' },
                  { icon: Mail, label: 'info@morressirobles.com.ar', sublabel: 'Respondemos en menos de 24 hs', link: 'mailto:info@morressirobles.com.ar' },
                  { icon: MapPin, label: 'Nuestra Oficina', sublabel: 'Ver ubicación en Google Maps', link: 'https://maps.app.goo.gl/Wqnnsg6U4TMrZxCS6' },
                ].map(({ icon: Icon, label, sublabel, link }) => (
                  <a
                    key={label}
                    href={link}
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-gray-900 transition-colors">
                      <Icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:underline">{label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{sublabel}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <a
                href="https://maps.app.goo.gl/Wqnnsg6U4TMrZxCS6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-52 bg-gray-100 rounded-sm overflow-hidden relative block group/map border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
              >
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  className="w-full h-full object-cover opacity-30 group-hover/map:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/5 group-hover/map:bg-gray-900/0 transition-colors">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-900 mx-auto mb-2 group-hover/map:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-semibold text-gray-700">Ver ubicación en Google Maps</p>
                    <p className="text-xs text-gray-500">Abrir mapa interactivo</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-sm">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-5">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Mensaje enviado</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Recibimos tu consulta correctamente. Un asesor se pondrá en contacto con vos dentro de las próximas 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-black text-gray-900 text-xl mb-2">Envianos tu consulta</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">Nombre y apellido *</label>
                      <input
                        required
                        value={form.nombre}
                        onChange={set('nombre')}
                        placeholder="Juan Pérez"
                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors rounded-sm placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="juan@email.com"
                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors rounded-sm placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">Teléfono</label>
                    <input
                      value={form.telefono}
                      onChange={set('telefono')}
                      placeholder="+54 9 11 XXXX-XXXX"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors rounded-sm placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">Tipo de consulta</label>
                    <select
                      value={form.tipo_consulta}
                      onChange={set('tipo_consulta')}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-gray-900 transition-colors rounded-sm cursor-pointer"
                    >
                      <option value="">Seleccionar...</option>
                      <option>Compra de propiedad</option>
                      <option>Venta de propiedad</option>
                      <option>Alquiler</option>
                      <option>Inversión</option>
                      <option>Tasación</option>
                      <option>Otra consulta</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">Mensaje *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={set('mensaje')}
                      placeholder="Contanos qué estás buscando, o dejanos tu consulta..."
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition-colors rounded-sm resize-none placeholder:text-gray-400"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-semibold py-3.5 hover:bg-gray-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {status === 'loading' ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {status === 'loading' ? 'Enviando...' : 'Enviar Consulta'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
