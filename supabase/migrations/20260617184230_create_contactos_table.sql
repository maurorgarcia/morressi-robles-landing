
CREATE TABLE contactos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text,
  tipo_consulta text,
  mensaje text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contactos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contactos" ON contactos
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "select_contactos" ON contactos
  FOR SELECT TO anon USING (true);
