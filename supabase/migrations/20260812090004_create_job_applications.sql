/*
  Job Application form -> job_applications

  Stores applications for a specific published job.
*/
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title text NOT NULL,
  job_location text,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  linkedin_url text NOT NULL,
  years_experience text,
  employment_type text,
  preferred_location text,
  work_authorization text,
  key_skills text,
  resume_link text,
  cover_note text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_job_applications" ON job_applications;
CREATE POLICY "anon_insert_job_applications"
ON job_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS job_applications_created_at_idx
ON job_applications (created_at DESC);

CREATE INDEX IF NOT EXISTS job_applications_job_title_idx
ON job_applications (job_title);
