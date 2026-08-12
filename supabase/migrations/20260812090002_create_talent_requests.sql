/*
  Request Talent form -> talent_requests

  This table is completely separate from the Contact form.
*/
CREATE TABLE IF NOT EXISTS talent_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text NOT NULL,
  role_needed text NOT NULL,
  num_openings text,
  employment_type text,
  key_skills text,
  work_location text,
  hiring_timeline text,
  message text,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE talent_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_talent_requests" ON talent_requests;
CREATE POLICY "anon_insert_talent_requests"
ON talent_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS talent_requests_created_at_idx
ON talent_requests (created_at DESC);
