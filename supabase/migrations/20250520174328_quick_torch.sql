/*
  # Early Access Form Schema

  1. New Tables
    - `early_access_submissions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text)
      - `role` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `early_access_submissions` table
    - Add policy for authenticated users to read their own data
    - Add policy for unauthenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS early_access_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE early_access_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert early access submissions"
  ON early_access_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read their own submissions"
  ON early_access_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT au.id 
    FROM auth.users au 
    WHERE au.email = early_access_submissions.email
  ));