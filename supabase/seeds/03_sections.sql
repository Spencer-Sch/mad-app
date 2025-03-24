-- Seed file for sections table
-- File: supabase/seeds/03_sections.sql

-- Clear existing data (optional - use with caution)
TRUNCATE sections CASCADE;

-- Insert sections (using a reference to the chapter by local_id)
INSERT INTO sections (id, chapter_id, number, title, page_number, description, quote, explanation_text, staff_key, has_subsections, local_id)
VALUES 
  (
    gen_random_uuid(), 
    (SELECT id FROM chapters WHERE local_id = 'ch1'),
    '1.1', 
    'Notes and Rests', 
    19, 
    'Learn to read combinations of notes and rests.',
    'Knowing how to read music is an essential part of being a musician. Being able to read music provides a deeper understanding of what we and our fellow musicians are playing. Being able to read music means we can communicate with others about music in an effective manner. Being able to read music means we have the power to learn anything we want by digging into the vast wealth of knowledge contained in the almost infinte sea of music publications.

Literacy of one''s native language is considered absolutely essential for everyone in society because we know that reading is the gateway to knowledge and success. If you plan to live among musicians, the same principle applies to learning to read music.',
    'In this section, you will learn to read rhythmic combinations that contain and combine whole notes, half notes, quarter notes, eighth notes, eighth note triplets, sixteenth notes, dotted notes, and tied notes as well as their corresponding rests.',
    '',
    true,
    's1-1'
  );
