-- Seed file for exercises table
-- File: supabase/seeds/06_exercises.sql

-- Clear existing data (optional - use with caution)
TRUNCATE exercises CASCADE;

-- Insert exercises for collection col-whqnr (using a reference to the collection by local_id)
INSERT INTO exercises (id, collection_id, number, title, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 1, 'Whole Note', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-1.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-1.mp3', 1, 'whqnr-1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 2, 'Whole Rest', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-2.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-2.mp3', 1, 'whqnr-2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 3, 'Half Notes', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-3.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-3.mp3', 1, 'whqnr-3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 4, 'Half Note and Half Rest', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-4.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-4.mp3', 1, 'whqnr-4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 5, 'Half Rest and Half Note', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-5.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-5.mp3', 1, 'whqnr-5'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 6, 'Half Rests', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-6.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-6.mp3', 1, 'whqnr-6'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 7, 'Quarter Notes', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-7.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-7.mp3', 1, 'whqnr-7'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 8, 'Quarter Notes and Rests Pattern A', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-8.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-8.mp3', 1, 'whqnr-8'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 9, 'Quarter Notes and Rests Pattern B', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-9.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-9.mp3', 1, 'whqnr-9'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 10, 'Quarter Notes and Rests Pattern C', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-10.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-10.mp3', 1, 'whqnr-10'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 11, 'Quarter Notes and Rests Pattern D', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-11.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-11.mp3', 1, 'whqnr-11'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 12, 'Quarter Notes and Rests Pattern E', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-12.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-12.mp3', 1, 'whqnr-12'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 13, 'Quarter Notes and Rests Pattern F', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-13.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-13.mp3', 1, 'whqnr-13'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 14, 'Quarter Notes and Rests Pattern G', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-14.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-14.mp3', 1, 'whqnr-14'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 15, 'Quarter Notes and Rests Pattern H', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-15.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-15.mp3', 1, 'whqnr-15'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 16, 'Quarter Notes and Rests Pattern I', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-16.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-16.mp3', 1, 'whqnr-16'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 17, 'Quarter Notes and Rests Pattern J', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-17.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-17.mp3', 1, 'whqnr-17'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 18, 'Quarter Notes and Rests Pattern K', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-18.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-18.mp3', 1, 'whqnr-18'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 19, 'Quarter Notes and Rests Pattern L', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-19.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-19.mp3', 1, 'whqnr-19'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 20, 'Quarter Notes and Rests Pattern M', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-20.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-20.mp3', 1, 'whqnr-20'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 21, 'Quarter Notes and Rests Pattern N', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-21.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-21.mp3', 1, 'whqnr-21'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 22, 'Quarter Rests', '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-22.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/exercises/whqnr-22.mp3', 1, 'whqnr-22');

-- Insert exercises for collection col-enqn (using a reference to the collection by local_id)
INSERT INTO exercises (id, collection_id, number, title, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 1, 'Eighth Notes and Quarter Notes Pattern A', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-1.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-1.mp3', 1, 'enqn-1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 2, 'Eighth Notes and Quarter Notes Pattern B', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-2.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-2.mp3', 1, 'enqn-2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 3, 'Eighth Notes and Quarter Notes Pattern C', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-3.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-3.mp3', 1, 'enqn-3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 4, 'Eighth Notes and Quarter Notes Pattern D', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-4.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-4.mp3', 1, 'enqn-4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 5, 'Eighth Notes and Quarter Notes Pattern E', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-5.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-5.mp3', 1, 'enqn-5'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 6, 'Eighth Notes and Quarter Notes Pattern F', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-6.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-6.mp3', 1, 'enqn-6'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 7, 'Eighth Notes and Quarter Notes Pattern G', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-7.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-7.mp3', 1, 'enqn-7'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 8, 'Eighth Notes and Quarter Notes Pattern H', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-8.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-8.mp3', 1, 'enqn-8'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 9, 'Eighth Notes and Quarter Notes Pattern I', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-9.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-9.mp3', 1, 'enqn-9'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 10, 'Eighth Notes and Quarter Notes Pattern J', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-10.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-10.mp3', 1, 'enqn-10'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 11, 'Eighth Notes and Quarter Notes Pattern K', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-11.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-11.mp3', 1, 'enqn-11'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 12, 'Eighth Notes and Quarter Notes Pattern L', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-12.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-12.mp3', 1, 'enqn-12'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 13, 'Eighth Notes and Quarter Notes Pattern M', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-13.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-13.mp3', 1, 'enqn-13'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 14, 'Eighth Notes and Quarter Notes Pattern N', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-14.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-14.mp3', 1, 'enqn-14'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 15, 'Eighth Notes', '', '/notations/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-15.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/exercises/enqn-15.mp3', 1, 'enqn-15');

-- Insert exercises for collection col-enqr (using a reference to the collection by local_id)
INSERT INTO exercises (id, collection_id, number, title, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 16, 'Eighth Notes and Quarter Rests Pattern A', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-1.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-1.mp3', 1, 'enqr-1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 17, 'Eighth Notes and Quarter Rests Pattern B', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-2.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-2.mp3', 1, 'enqr-2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 18, 'Eighth Notes and Quarter Rests Pattern C', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-3.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-3.mp3', 1, 'enqr-3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 19, 'Eighth Notes and Quarter Rests Pattern D', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-4.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-4.mp3', 1, 'enqr-4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 20, 'Eighth Notes and Quarter Rests Pattern E', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-5.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-5.mp3', 1, 'enqr-5'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 21, 'Eighth Notes and Quarter Rests Pattern F', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-6.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-6.mp3', 1, 'enqr-6'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 22, 'Eighth Notes and Quarter Rests Pattern G', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-7.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-7.mp3', 1, 'enqr-7'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 23, 'Eighth Notes and Quarter Rests Pattern H', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-8.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-8.mp3', 1, 'enqr-8'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 24, 'Eighth Notes and Quarter Rests Pattern I', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-9.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-9.mp3', 1, 'enqr-9'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 25, 'Eighth Notes and Quarter Rests Pattern J', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-10.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-10.mp3', 1, 'enqr-10'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 26, 'Eighth Notes and Quarter Rests Pattern K', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-11.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-11.mp3', 1, 'enqr-11'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 27, 'Eighth Notes and Quarter Rests Pattern L', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-12.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-12.mp3', 1, 'enqr-12'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 28, 'Eighth Notes and Quarter Rests Pattern M', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-13.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-13.mp3', 1, 'enqr-13'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 29, 'Eighth Notes and Quarter Rests Pattern N', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-14.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-14.mp3', 1, 'enqr-14'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 30, 'Quarter Rests', '', '/notations/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-15.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/exercises/enqr-15.mp3', 1, 'enqr-15');

-- Insert exercises for collection col-ener (using a reference to the collection by local_id)
INSERT INTO exercises (id, collection_id, number, title, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 31, 'Eighth Notes and Eighth Rests Pattern A', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-1.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-1.mp3', 2, 'ener-1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 32, 'Eighth Notes and Eighth Rests Pattern B', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-2.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-2.mp3', 2, 'ener-2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 33, 'Eighth Notes and Eighth Rests Pattern C', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-3.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-3.mp3', 2, 'ener-3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 34, 'Eighth Notes and Eighth Rests Pattern D', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-4.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-4.mp3', 2, 'ener-4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 35, 'Eighth Notes and Eighth Rests Pattern E', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-5.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-5.mp3', 2, 'ener-5'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 36, 'Eighth Notes and Eighth Rests Pattern F', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-6.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-6.mp3', 2, 'ener-6'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 37, 'Eighth Notes and Eighth Rests Pattern G', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-7.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-7.mp3', 2, 'ener-7'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 38, 'Eighth Notes and Eighth Rests Pattern H', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-8.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-8.mp3', 2, 'ener-8'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 39, 'Eighth Notes and Eighth Rests Pattern I', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-9.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-9.mp3', 2, 'ener-9'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 40, 'Eighth Notes and Eighth Rests Pattern J', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-10.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-10.mp3', 2, 'ener-10'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 41, 'Eighth Notes and Eighth Rests Pattern K', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-11.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-11.mp3', 2, 'ener-11'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 42, 'Eighth Notes and Eighth Rests Pattern L', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-12.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-12.mp3', 2, 'ener-12'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 43, 'Eighth Notes and Eighth Rests Pattern M', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-13.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-13.mp3', 2, 'ener-13'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 44, 'Eighth Notes and Eighth Rests Pattern N', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-14.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-14.mp3', 2, 'ener-14'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 45, 'Eighth Notes and Eighth Rests Pattern O', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-15.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-15.mp3', 2, 'ener-15'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 46, 'Eighth Notes and Eighth Rests Pattern P', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-16.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-16.mp3', 2, 'ener-16'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 47, 'Eighth Notes and Eighth Rests Pattern Q', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-17.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-17.mp3', 2, 'ener-17'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 48, 'Eighth Notes and Eighth Rests Pattern R', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-18.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-18.mp3', 2, 'ener-18'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 49, 'Eighth Notes and Eighth Rests Pattern S', '', '/notations/ch1/s1-1/sub-enr/col-ener/exercises/ener-19.svg', '/audio/ch1/s1-1/sub-enr/col-ener/exercises/ener-19.mp3', 2, 'ener-19');

-- Insert exercises for collection col-snqn (using a reference to the collection by local_id)
INSERT INTO exercises (id, collection_id, number, title, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 1, 'Sixteenth Notes and Quarter Notes Pattern A', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-1.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-1.mp3', 2, 'snqn-1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 2, 'Sixteenth Notes and Quarter Notes Pattern B', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-2.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-2.mp3', 2, 'snqn-2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 3, 'Sixteenth Notes and Quarter Notes Pattern C', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-3.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-3.mp3', 2, 'snqn-3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 4, 'Sixteenth Notes and Quarter Notes Pattern D', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-4.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-4.mp3', 2, 'snqn-4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 5, 'Sixteenth Notes and Quarter Notes Pattern E', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-5.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-5.mp3', 2, 'snqn-5'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 6, 'Sixteenth Notes and Quarter Notes Pattern F', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-6.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-6.mp3', 2, 'snqn-6'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 7, 'Sixteenth Notes and Quarter Notes Pattern G', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-7.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-7.mp3', 2, 'snqn-7'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 8, 'Sixteenth Notes and Quarter Notes Pattern H', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-8.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-8.mp3', 2, 'snqn-8'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 9, 'Sixteenth Notes and Quarter Notes Pattern I', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-9.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-9.mp3', 2, 'snqn-9'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 10, 'Sixteenth Notes and Quarter Notes Pattern J', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-10.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-10.mp3', 2, 'snqn-10'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 11, 'Sixteenth Notes and Quarter Notes Pattern K', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-11.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-11.mp3', 2, 'snqn-11'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 12, 'Sixteenth Notes and Quarter Notes Pattern L', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-12.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-12.mp3', 2, 'snqn-12'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 13, 'Sixteenth Notes and Quarter Notes Pattern M', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-13.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-13.mp3', 2, 'snqn-13'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 14, 'Sixteenth Notes and Quarter Notes Pattern N', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-14.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-14.mp3', 2, 'snqn-14'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 15, 'Sixteenth Notes and Quarter Notes Pattern O', '', '/notations/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-15.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/exercises/snqn-15.mp3', 2, 'snqn-15');

-- Insert exercises for collection col-snen (using a reference to the collection by local_id)
INSERT INTO exercises (id, collection_id, number, title, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 16, 'Sixteenth Notes and Eighth Notes Pattern A', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-1.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-1.mp3', 2, 'snen-1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 17, 'Sixteenth Notes and Eighth Notes Pattern B', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-2.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-2.mp3', 2, 'snen-2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 18, 'Sixteenth Notes and Eighth Notes Pattern C', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-3.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-3.mp3', 2, 'snen-3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 19, 'Sixteenth Notes and Eighth Notes Pattern D', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-4.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-4.mp3', 2, 'snen-4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 20, 'Sixteenth Notes and Eighth Notes Pattern E', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-5.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-5.mp3', 2, 'snen-5'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 21, 'Sixteenth Notes and Eighth Notes Pattern F', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-6.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-6.mp3', 2, 'snen-6'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 22, 'Sixteenth Notes and Eighth Notes Pattern G', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-7.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-7.mp3', 2, 'snen-7'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 23, 'Sixteenth Notes and Eighth Notes Pattern H', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-8.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-8.mp3', 2, 'snen-8'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 24, 'Sixteenth Notes and Eighth Notes Pattern I', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-9.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-9.mp3', 2, 'snen-9'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 25, 'Sixteenth Notes and Eighth Notes Pattern J', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-10.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-10.mp3', 2, 'snen-10'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 26, 'Sixteenth Notes and Eighth Notes Pattern K', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-11.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-11.mp3', 2, 'snen-11'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 27, 'Sixteenth Notes and Eighth Notes Pattern L', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-12.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-12.mp3', 2, 'snen-12'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 28, 'Sixteenth Notes and Eighth Notes Pattern M', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-13.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-13.mp3', 2, 'snen-13'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 29, 'Sixteenth Notes and Eighth Notes Pattern N', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-14.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-14.mp3', 2, 'snen-14'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 30, 'Sixteenth Notes and Eighth Notes Pattern O', '', '/notations/ch1/s1-1/sub-sn/col-snen/exercises/snen-15.svg', '/audio/ch1/s1-1/sub-sn/col-snen/exercises/snen-15.mp3', 2, 'snen-15');
