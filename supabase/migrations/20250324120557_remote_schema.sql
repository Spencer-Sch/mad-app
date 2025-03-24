

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";





SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."chapters" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "course_id" "uuid" NOT NULL,
    "number" smallint NOT NULL,
    "title" "text" NOT NULL,
    "page_number_start" smallint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "local_id" "text"
);


ALTER TABLE "public"."chapters" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."collections" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "subsection_id" "uuid" NOT NULL,
    "title" "text",
    "page_number" smallint NOT NULL,
    "description" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "local_id" "text"
);


ALTER TABLE "public"."collections" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."courses" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "title" "text" DEFAULT ''::"text" NOT NULL,
    "description" "text",
    "cover_image" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "local_id" "text"
);


ALTER TABLE "public"."courses" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."etudes" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "collection_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "number" smallint NOT NULL,
    "title" "text",
    "page_number" smallint NOT NULL,
    "description" "text",
    "notation" "text",
    "audio_url" "text",
    "difficulty" smallint,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "local_id" "text"
);


ALTER TABLE "public"."etudes" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."exercises" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "collection_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "number" smallint NOT NULL,
    "title" "text",
    "description" "text",
    "notation" "text",
    "audio_url" "text",
    "difficulty" smallint,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "local_id" "text"
);


ALTER TABLE "public"."exercises" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."instructions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "entry_type" "text" NOT NULL,
    "entry_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "content" "text",
    "order" smallint,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "local_id" "text"
);


ALTER TABLE "public"."instructions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."metronome_levels" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "section_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "label" "text",
    "beginner_note_value" "text",
    "beginner_tempo" smallint,
    "intermediate_note_value" "text",
    "intermediate_tempo" smallint,
    "advanced_note_value" "text",
    "advanced_tempo" smallint,
    "created_at" timestamp with time zone,
    "local_id" "text"
);


ALTER TABLE "public"."metronome_levels" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."references" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "entry_type" "text" NOT NULL,
    "entry_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "reference_type" "text" NOT NULL,
    "reference_id" "text" NOT NULL,
    "page" smallint NOT NULL,
    "description" "text",
    "created_at" timestamp with time zone,
    "local_id" "text"
);


ALTER TABLE "public"."references" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."related_exercises" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "etude_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "exercise_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "local_id" "text"
);


ALTER TABLE "public"."related_exercises" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."sections" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "chapter_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "number" "text" NOT NULL,
    "title" "text" NOT NULL,
    "page_number" smallint NOT NULL,
    "description" "text",
    "quote" "text",
    "explanation_text" "text",
    "staff_key" "text",
    "has_subsections" boolean NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "local_id" "text"
);


ALTER TABLE "public"."sections" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."subsections" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "section_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "title" "text" NOT NULL,
    "page_number" smallint NOT NULL,
    "description" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "local_id" "text"
);


ALTER TABLE "public"."subsections" OWNER TO "postgres";


ALTER TABLE ONLY "public"."chapters"
    ADD CONSTRAINT "chapters_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."chapters"
    ADD CONSTRAINT "chapters_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."collections"
    ADD CONSTRAINT "collections_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."collections"
    ADD CONSTRAINT "collections_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."courses"
    ADD CONSTRAINT "courses_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."courses"
    ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."etudes"
    ADD CONSTRAINT "etudes_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."etudes"
    ADD CONSTRAINT "etudes_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."exercises"
    ADD CONSTRAINT "exercises_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."exercises"
    ADD CONSTRAINT "exercises_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."instructions"
    ADD CONSTRAINT "instructions_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."instructions"
    ADD CONSTRAINT "instructions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."metronome_levels"
    ADD CONSTRAINT "metronomeLevels_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."metronome_levels"
    ADD CONSTRAINT "metronome_levels_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."references"
    ADD CONSTRAINT "references_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."references"
    ADD CONSTRAINT "references_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."related_exercises"
    ADD CONSTRAINT "relatedExercises_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."related_exercises"
    ADD CONSTRAINT "related_exercises_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."sections"
    ADD CONSTRAINT "sections_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."sections"
    ADD CONSTRAINT "sections_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."subsections"
    ADD CONSTRAINT "subsections_local_id_key" UNIQUE ("local_id");



ALTER TABLE ONLY "public"."subsections"
    ADD CONSTRAINT "subsections_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."chapters"
    ADD CONSTRAINT "chapters_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."collections"
    ADD CONSTRAINT "collections_subsection_id_fkey" FOREIGN KEY ("subsection_id") REFERENCES "public"."subsections"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."etudes"
    ADD CONSTRAINT "etudes_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "public"."collections"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."exercises"
    ADD CONSTRAINT "exercises_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "public"."collections"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."metronome_levels"
    ADD CONSTRAINT "metronomeLevels_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "public"."sections"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."related_exercises"
    ADD CONSTRAINT "relatedExercises_etude_id_fkey" FOREIGN KEY ("etude_id") REFERENCES "public"."etudes"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."related_exercises"
    ADD CONSTRAINT "relatedExercises_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "public"."exercises"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."sections"
    ADD CONSTRAINT "sections_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "public"."chapters"("id") ON UPDATE CASCADE;



ALTER TABLE ONLY "public"."subsections"
    ADD CONSTRAINT "subsections_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "public"."sections"("id") ON UPDATE CASCADE;





ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



































































































































































































GRANT ALL ON TABLE "public"."chapters" TO "anon";
GRANT ALL ON TABLE "public"."chapters" TO "authenticated";
GRANT ALL ON TABLE "public"."chapters" TO "service_role";



GRANT ALL ON TABLE "public"."collections" TO "anon";
GRANT ALL ON TABLE "public"."collections" TO "authenticated";
GRANT ALL ON TABLE "public"."collections" TO "service_role";



GRANT ALL ON TABLE "public"."courses" TO "anon";
GRANT ALL ON TABLE "public"."courses" TO "authenticated";
GRANT ALL ON TABLE "public"."courses" TO "service_role";



GRANT ALL ON TABLE "public"."etudes" TO "anon";
GRANT ALL ON TABLE "public"."etudes" TO "authenticated";
GRANT ALL ON TABLE "public"."etudes" TO "service_role";



GRANT ALL ON TABLE "public"."exercises" TO "anon";
GRANT ALL ON TABLE "public"."exercises" TO "authenticated";
GRANT ALL ON TABLE "public"."exercises" TO "service_role";



GRANT ALL ON TABLE "public"."instructions" TO "anon";
GRANT ALL ON TABLE "public"."instructions" TO "authenticated";
GRANT ALL ON TABLE "public"."instructions" TO "service_role";



GRANT ALL ON TABLE "public"."metronome_levels" TO "anon";
GRANT ALL ON TABLE "public"."metronome_levels" TO "authenticated";
GRANT ALL ON TABLE "public"."metronome_levels" TO "service_role";



GRANT ALL ON TABLE "public"."references" TO "anon";
GRANT ALL ON TABLE "public"."references" TO "authenticated";
GRANT ALL ON TABLE "public"."references" TO "service_role";



GRANT ALL ON TABLE "public"."related_exercises" TO "anon";
GRANT ALL ON TABLE "public"."related_exercises" TO "authenticated";
GRANT ALL ON TABLE "public"."related_exercises" TO "service_role";



GRANT ALL ON TABLE "public"."sections" TO "anon";
GRANT ALL ON TABLE "public"."sections" TO "authenticated";
GRANT ALL ON TABLE "public"."sections" TO "service_role";



GRANT ALL ON TABLE "public"."subsections" TO "anon";
GRANT ALL ON TABLE "public"."subsections" TO "authenticated";
GRANT ALL ON TABLE "public"."subsections" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;
