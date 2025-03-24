-- Seed file for chapters table
-- File: supabase/seeds/02_chapters.sql

-- Clear existing data (optional - use with caution)
TRUNCATE chapters CASCADE;

-- Insert chapters (using a reference to the course by local_id)
INSERT INTO chapters (id, course_id, number, title, page_number_start, local_id)
VALUES 
  (
    gen_random_uuid(), 
    (SELECT id FROM courses WHERE local_id = 'making-a-drummer'), 
    1, 
    'Reading', 
    19,
    'ch1'
  );
