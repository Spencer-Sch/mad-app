-- Seed file for courses table
-- File: supabase/seeds/01_courses.sql

-- Clear existing data (optional - use with caution)
TRUNCATE courses CASCADE;

-- Insert courses
INSERT INTO courses (id, title, description, local_id)
VALUES 
  (gen_random_uuid(), 'Making a Drummer', 'A grab-and-go curriculum for drum set instruction', 'making-a-drummer');
