# Step-by-Step Guide to Implementing the Database Seeding System

Let me walk you through the entire process of setting up and using this flexible database seeding system in your Next.js project.

## Step 1: Install Required Packages

```bash
npm install --save-dev dotenv dotenv-cli ts-node tsconfig-paths
```

## Step 2: Create Directory Structure

```bash
mkdir -p src/data
mkdir -p src/supabase/scripts/seeders
```

**Full Dir Structure**

```
src/
├── data/
│   ├── courses.json
│   ├── chapters.json
│   ├── sections.json
│   ├── subsections.json
│   ├── collections.json
│   ├── exercises.json
│   ├── etudes.json
│   ├── instructions.json
│   ├── references.json
│   ├── metronome_levels.json
│   └── related_exercises.json
├── supabase/
│   ├── client.ts
│   └── scripts/
│       ├── seed.ts
│       └── seeders/
│           ├── courseSeeder.ts
│           ├── chapterSeeder.ts
│           ├── sectionSeeder.ts
│           └── ...other seeders
```

## Step 3: Create Base Seeder Class

Create a file at `src/supabase/scripts/seeders/baseSeeder.ts`:

_NOTE:_ See file for latest version

## Step 4: Add Local ID to Database Tables

Run the following SQL in your Supabase SQL Editor to add the `local_id` column to your tables:
_NOTE:_ See `on-local-id.md` for more info

```sql
ALTER TABLE courses ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE chapters ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE sections ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE subsections ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE collections ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE exercises ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE etudes ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE instructions ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE "references" ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE metronome_levels ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
ALTER TABLE related_exercises ADD COLUMN IF NOT EXISTS local_id TEXT UNIQUE;
```

## Step 5: Create Individual Seeders

Create a seeder for each table. Here are a few examples:

### Course Seeder (src/supabase/scripts/seeders/courseSeeder.ts)

_NOTE:_ See file for latest version

### Chapter Seeder (src/supabase/scripts/seeders/chapterSeeder.ts)

_NOTE:_ See file for latest version

### Section Seeder (src/supabase/scripts/seeders/sectionSeeder.ts)

_NOTE:_ See file for latest version

## Step 6: Create JSON Data Files

Create these JSON files with your seed data:

### src/data/courses.json

_NOTE:_ See file for latest version

### src/data/chapters.json

_NOTE:_ See file for latest version

### src/data/sections.json

_NOTE:_ See file for latest version

## Step 7: Create Main Seed Script

Create file `src/supabase/scripts/seed.ts`:

_NOTE:_ see file for most up to date code

## Step 8: Update package.json Scripts

Add these scripts to your package.json:

```json
"scripts": {
  "seed": "dotenv -e .env.local -- ts-node -r tsconfig-paths/register src/supabase/scripts/seed.ts",
  "seed:all": "npm run seed -- all --all",
  "seed:courses": "npm run seed -- courses",
  "seed:chapters": "npm run seed -- chapters",
  "seed:sections": "npm run seed -- sections",
  "seed:subsections": "npm run seed -- subsections",
  "seed:collections": "npm run seed -- collections",
  "seed:exercises": "npm run seed -- exercises",
  "seed:etudes": "npm run seed -- etudes",
  "seed:instructions": "npm run seed -- instructions",
  "seed:references": "npm run seed -- references",
  "seed:metronome-levels": "npm run seed -- metronome_levels",
  "seed:related-exercises": "npm run seed -- related_exercises"
}
```

## Step 9: Using the System

### Seeding All Data

To seed all your data at once:

```bash
npm run seed:all
```

### Seeding Specific Tables

To seed just a specific table:

```bash
npm run seed:courses
npm run seed:chapters
npm run seed:sections
```

### Adding New Data

When you want to add new data:

1. Add a new version to your JSON file:

```json
{
  "v1": [...],
  "v2": [
    {
      "id": "technique_chapter",
      "course_id": "drum_curriculum",
      "number": 2,
      "title": "Technique",
      "page_number_start": 35
    }
  ]
}
```

2. Run the appropriate seeder:
   _NOTE:_ See `guide-to-seeding-script-commands.md` for more info

```bash
npm run seed:chapters
```

## Example Workflow for Adding New Content

Let's walk through an example of adding a new chapter, section, and subsection:

### 1. Add a new chapter to chapters.json:

```json
{
  "v1": [...],
  "v2": [
    {
      "id": "technique_chapter",
      "course_id": "drum_curriculum",
      "number": 2,
      "title": "Technique",
      "page_number_start": 35
    }
  ]
}
```

### 2. Run the chapter seeder:

```bash
npm run seed:chapters
```

### 3. Add a new section to sections.json:

```json
{
  "v1": [...],
  "v2": [
    {
      "id": "grip_section",
      "chapter_id": "technique_chapter",
      "number": "2.1",
      "title": "Grip",
      "page_number": 35,
      "description": "Understanding proper stick technique",
      "has_subsections": true
    }
  ]
}
```

### 4. Run the section seeder:

```bash
npm run seed:sections
```

### 5. Add a new subsection to subsections.json:

```json
{
  "v1": [...],
  "v2": [
    {
      "id": "matched_grip_subsection",
      "section_id": "grip_section",
      "title": "Matched Grip",
      "page_number": 36,
      "description": "Holding the sticks with both hands in the same position"
    }
  ]
}
```

### 6. Run the subsection seeder:

```bash
npm run seed:subsections
```

This modular approach lets you add data to any part of your hierarchy without having to seed everything at once, while maintaining all the relationships between your tables.
