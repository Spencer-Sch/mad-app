-- Seed file for etudes table with FULL dataset
-- File: supabase/seeds/07_etudes_full.sql

-- Clear existing data (optional - use with caution)
TRUNCATE etudes CASCADE;

-- Insert etudes for collection col-whqnr (using a reference to the collection by local_id)
INSERT INTO etudes (id, collection_id, number, title, page_number, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 1, 'Whole, Half, Quarter Notes and Rests Etude 1', 20, '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e1.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e1.mp3', 1, 'whqnr-e1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 2, 'Whole, Half, Quarter Notes and Rests Etude 2', 21, '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e2.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e2.mp3', 1, 'whqnr-e2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 3, 'Whole, Half, Quarter Notes and Rests Etude 3', 21, '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e3.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e3.mp3', 1, 'whqnr-e3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 4, 'Whole, Half, Quarter Notes and Rests Etude 4', 21, '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e4.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e4.mp3', 1, 'whqnr-e4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-whqnr'), 5, 'Whole, Half, Quarter Notes and Rests Etude 5', 21, '', '/notations/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e5.svg', '/audio/ch1/s1-1/sub-whqnr/col-whqnr/etudes/whqnr-e5.mp3', 1, 'whqnr-e5');

-- Insert etudes for collection col-enqn (using a reference to the collection by local_id)
INSERT INTO etudes (id, collection_id, number, title, page_number, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 1, 'Eighth Notes and Rests Etude 1', 22, '', '/notations/ch1/s1-1/sub-enr/col-enqn/etudes/enqn-e1.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/etudes/enqn-e1.mp3', 1, 'enqn-e1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 2, 'Eighth Notes and Rests Etude 2', 22, '', '/notations/ch1/s1-1/sub-enr/col-enqn/etudes/enqn-e2.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/etudes/enqn-e2.mp3', 1, 'enqn-e2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqn'), 3, 'Eighth Notes and Rests Etude 3', 22, '', '/notations/ch1/s1-1/sub-enr/col-enqn/etudes/enqn-e3.svg', '/audio/ch1/s1-1/sub-enr/col-enqn/etudes/enqn-e3.mp3', 1, 'enqn-e3');

-- Insert etudes for collection col-enqr (using a reference to the collection by local_id)
INSERT INTO etudes (id, collection_id, number, title, page_number, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 4, 'Eighth Notes and Rests Etude 4', 23, '', '/notations/ch1/s1-1/sub-enr/col-enqr/etudes/enqr-e1.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/etudes/enqr-e1.mp3', 1, 'enqr-e1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 5, 'Eighth Notes and Rests Etude 5', 23, '', '/notations/ch1/s1-1/sub-enr/col-enqr/etudes/enqr-e2.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/etudes/enqr-e2.mp3', 1, 'enqr-e2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-enqr'), 6, 'Eighth Notes and Rests Etude 6', 23, '', '/notations/ch1/s1-1/sub-enr/col-enqr/etudes/enqr-e3.svg', '/audio/ch1/s1-1/sub-enr/col-enqr/etudes/enqr-e3.mp3', 1, 'enqr-e3');

-- Insert etudes for collection col-ener (using a reference to the collection by local_id)
INSERT INTO etudes (id, collection_id, number, title, page_number, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 7, 'Eighth Notes and Rests Etude 7', 24, '', '/notations/ch1/s1-1/sub-enr/col-ener/etudes/ener-e1.svg', '/audio/ch1/s1-1/sub-enr/col-ener/etudes/ener-e1.mp3', 2, 'ener-e1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 8, 'Eighth Notes and Rests Etude 8', 24, '', '/notations/ch1/s1-1/sub-enr/col-ener/etudes/ener-e2.svg', '/audio/ch1/s1-1/sub-enr/col-ener/etudes/ener-e2.mp3', 2, 'ener-e2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 9, 'Eighth Notes and Rests Etude 9', 25, '', '/notations/ch1/s1-1/sub-enr/col-ener/etudes/ener-e3.svg', '/audio/ch1/s1-1/sub-enr/col-ener/etudes/ener-e3.mp3', 2, 'ener-e3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 10, 'Eighth Notes and Rests Etude 10', 25, '', '/notations/ch1/s1-1/sub-enr/col-ener/etudes/ener-e4.svg', '/audio/ch1/s1-1/sub-enr/col-ener/etudes/ener-e4.mp3', 3, 'ener-e4'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-ener'), 11, 'Eighth Notes and Rests Etude 11', 25, '', '/notations/ch1/s1-1/sub-enr/col-ener/etudes/ener-e5.svg', '/audio/ch1/s1-1/sub-enr/col-ener/etudes/ener-e5.mp3', 3, 'ener-e5');

-- Insert etudes for collection col-snqn (using a reference to the collection by local_id)
INSERT INTO etudes (id, collection_id, number, title, page_number, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 1, 'Sixteenth Notes Etude 1', 26, '', '/notations/ch1/s1-1/sub-sn/col-snqn/etudes/snqn-e1.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/etudes/snqn-e1.mp3', 2, 'snqn-e1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 2, 'Sixteenth Notes Etude 2', 26, '', '/notations/ch1/s1-1/sub-sn/col-snqn/etudes/snqn-e2.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/etudes/snqn-e2.mp3', 2, 'snqn-e2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snqn'), 3, 'Sixteenth Notes Etude 3', 26, '', '/notations/ch1/s1-1/sub-sn/col-snqn/etudes/snqn-e3.svg', '/audio/ch1/s1-1/sub-sn/col-snqn/etudes/snqn-e3.mp3', 2, 'snqn-e3');

-- Insert etudes for collection col-snen (using a reference to the collection by local_id)
INSERT INTO etudes (id, collection_id, number, title, page_number, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 4, 'Sixteenth Notes Etude 4', 27, '', '/notations/ch1/s1-1/sub-sn/col-snen/etudes/snen-e1.svg', '/audio/ch1/s1-1/sub-sn/col-snen/etudes/snen-e1.mp3', 2, 'snen-e1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 5, 'Sixteenth Notes Etude 5', 27, '', '/notations/ch1/s1-1/sub-sn/col-snen/etudes/snen-e2.svg', '/audio/ch1/s1-1/sub-sn/col-snen/etudes/snen-e2.mp3', 2, 'snen-e2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-snen'), 6, 'Sixteenth Notes Etude 6', 27, '', '/notations/ch1/s1-1/sub-sn/col-snen/etudes/snen-e3.svg', '/audio/ch1/s1-1/sub-sn/col-snen/etudes/snen-e3.mp3', 2, 'snen-e3');

-- Insert etudes for collection col-re1 (using a reference to the collection by local_id)
INSERT INTO etudes (id, collection_id, number, title, page_number, description, notation, audio_url, difficulty, local_id)
VALUES 
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-re1'), 1, 'Review Etude 1', 28, '', '/notations/ch1/s1-1/sub-re1/col-re1/etudes/re1-e1.svg', '/audio/ch1/s1-1/sub-re1/col-re1/etudes/re1-e1.mp3', 2, 're1-e1'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-re1'), 2, 'Review Etude 2', 28, '', '/notations/ch1/s1-1/sub-re1/col-re1/etudes/re1-e2.svg', '/audio/ch1/s1-1/sub-re1/col-re1/etudes/re1-e2.mp3', 3, 're1-e2'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-re1'), 3, 'Review Etude 3', 28, '', '/notations/ch1/s1-1/sub-re1/col-re1/etudes/re1-e3.svg', '/audio/ch1/s1-1/sub-re1/col-re1/etudes/re1-e3.mp3', 4, 're1-e3'),
  (gen_random_uuid(), (SELECT id FROM collections WHERE local_id = 'col-re1'), 4, 'Review Etude 4', 28, '', '/notations/ch1/s1-1/sub-re1/col-re1/etudes/re1-e4.svg', '/audio/ch1/s1-1/sub-re1/col-re1/etudes/re1-e4.mp3', 4, 're1-e4');
