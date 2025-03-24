-- Seed file for subsections table
-- File: supabase/seeds/04_subsections.sql

-- Clear existing data (optional - use with caution)
TRUNCATE subsections CASCADE;

-- Insert subsections (using a reference to the section by local_id)
INSERT INTO subsections (id, section_id, title, page_number, description, local_id)
VALUES 
  (
    gen_random_uuid(), 
    (SELECT id FROM sections WHERE local_id = 's1-1'),
    'Whole Notes, Half Notes, Quarter Notes and Their Equivalent Rests', 
    20, 
    'Introduction to basic note values and rest.',
    'sub-whqnr'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM sections WHERE local_id = 's1-1'),
    'Eighth Notes and Rests', 
    22, 
    'Introduction to eighth notes and rests with various rhythmic combinations.',
    'sub-enr'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM sections WHERE local_id = 's1-1'),
    'Sixteenth Notes', 
    26, 
    'Introduction to sixteenth notes with various rhythmic combinations.',
    'sub-sn'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM sections WHERE local_id = 's1-1'),
    'Review Etudes', 
    28, 
    'The first set of review etudes.',
    'sub-re1'
  );
