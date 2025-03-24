-- Seed file for collections table
-- File: supabase/seeds/05_collections.sql

-- Clear existing data (optional - use with caution)
TRUNCATE collections CASCADE;

-- Insert collections (using a reference to the subsection by local_id)
INSERT INTO collections (id, subsection_id, title, page_number, description, local_id)
VALUES 
  (
    gen_random_uuid(), 
    (SELECT id FROM subsections WHERE local_id = 'sub-whqnr'),
    'Whole, Half, Quarter Note and Rest Combinations', 
    20, 
    'Individual exercises focusing on specific whole, half, quarter note and rest combinations.',
    'col-whqnr'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM subsections WHERE local_id = 'sub-enr'),
    'Eighth Note and Quarter Note Combinations', 
    22, 
    'Individual exercises focusing on specific eighth note and quarter note combinations',
    'col-enqn'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM subsections WHERE local_id = 'sub-enr'),
    'Eighth Note and Quarter Rest Combinations', 
    23, 
    'Individual exercises focusing on specific eighth note and quarter rest combinations',
    'col-enqr'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM subsections WHERE local_id = 'sub-enr'),
    'Eighth Note and Eighth Rest Combinations', 
    24, 
    'Individual exercises focusing on specific eighth note and eighth rest combinations',
    'col-ener'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM subsections WHERE local_id = 'sub-sn'),
    'Sixteenth Note and Quarter Note Combinations', 
    26, 
    'Individual exercises focusing on specific sixteenth note and quarter note combinations',
    'col-snqn'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM subsections WHERE local_id = 'sub-sn'),
    'Sixteenth Note and Eighth Note Combinations', 
    27, 
    'Individual exercises focusing on specific sixteenth note and eighth note combinations',
    'col-snen'
  ),
  (
    gen_random_uuid(), 
    (SELECT id FROM subsections WHERE local_id = 'sub-re1'),
    'Review Etudes', 
    28, 
    'Etudes which combine whole, half, quarter, eighth, and sixteenth notes along with whole, half, quarter, and eighth rests.',
    'col-re1'
  );
