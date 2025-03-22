# Guide to Seeding Script Commands

Here's a comprehensive guide to all the different ways you can use the seeding commands in your package.json, and when each option is most useful:

## Basic Commands

### Seed All Entities (Latest Version)

```bash
npm run seed
```

**When to use:** When you've made changes to multiple entity types and want to add all new data in the latest version of each JSON file. This is good for initial setup or when adding related data across multiple tables.

### Seed All Entities (All Versions)

```bash
npm run seed:all
```

**When to use:** When you need to completely rebuild your database from scratch, including all historical data from all versions. Useful when setting up a new environment or after wiping your database.

### Seed Specific Entity (Latest Version)

```bash
npm run seed:courses
npm run seed:chapters
npm run seed:sections
# etc.
```

**When to use:** When you've only added data to one specific entity type and want to seed just that data. This is the most common usage during incremental development.

## Advanced Command Options

### Seed Specific Entity with Specific Version

```bash
npm run seed -- courses v2
```

**When to use:** When you want to seed only a specific version of an entity, rather than the latest. Useful if you need to add data that you defined in an earlier version but skipped seeding previously.

### Seed Specific Entity with All Versions

```bash
npm run seed -- courses --all
```

**When to use:** When you want to reseed all historical versions of a specific entity type. Useful when you've made corrections to data across multiple versions.

### Seed All Entities with Specific Version

```bash
npm run seed -- all v2
```

**When to use:** When you want to seed only version "v2" across all entity types. This is useful when you've coordinated version numbers across entities for a specific feature or release.

## Examples for Specific Scenarios

### Adding New Content

You've added new chapter data in "v3" of chapters.json:

```bash
npm run seed:chapters
```

This automatically seeds just the latest version (v3).

### Correcting Historical Data

You found an error in "v1" of your courses data and fixed it:

```bash
npm run seed -- courses v1
```

This reseeds just version 1 of courses.

### Database Reset

You need to completely rebuild your database:

```bash
npm run seed:all
```

This seeds all versions of all entities in the correct dependency order.

### Selective Seeding for Testing

You're testing a specific feature and need only certain entities:

```bash
npm run seed:courses
npm run seed:chapters
```

This seeds only the latest versions of courses and chapters.

### Adding Related Data Across Entities

You've added new "v2" data that includes related records across multiple tables:

```bash
npm run seed -- all v2
```

This ensures all "v2" data is added consistently across all entity types.

By using these different command variations, you can precisely control what data gets seeded and when, making your development process more efficient and error-free.
