/*
  Send Your Resume form -> resume_submissions

  target_role and LinkedIn are required because the frontend requires them.
*/
CREATE TABLE IF NOT EXISTS resume_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  linkedin_url text NOT NULL,
  target_role text NULL,
  years_experience text,
  employment_type text,
  preferred_location text,
  work_authorization text,
  key_skills text,
  resume_link text,
  cover_note text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE resume_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_resume_submissions" ON resume_submissions;
CREATE POLICY "anon_insert_resume_submissions"
ON resume_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS resume_submissions_created_at_idx
ON resume_submissions (created_at DESC);
