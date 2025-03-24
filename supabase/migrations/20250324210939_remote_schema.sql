alter table "public"."etudes" alter column "collection_id" drop default;

alter table "public"."exercises" alter column "collection_id" drop default;

alter table "public"."instructions" alter column "entry_id" drop default;

alter table "public"."metronome_levels" alter column "section_id" drop default;

alter table "public"."references" alter column "entry_id" drop default;

alter table "public"."related_exercises" alter column "etude_id" drop default;

alter table "public"."related_exercises" alter column "exercise_id" drop default;

alter table "public"."sections" alter column "chapter_id" drop default;

alter table "public"."subsections" alter column "section_id" drop default;


