# Codebase Health Check Report

## Heaviness Check
- `dashboard/data/data.js` size: **745.92 KB**
- **Warning**: `data.js` is heavy because it contains raw HTML strings for every prototype embedded inside the JSON. Since we now have physical `.html` files in the `prototypes/` directory, this embedded HTML is redundant and bloats the file.

## File Connection Check (`app.js` routing vs physical files)
- Found 4 dynamic routing templates in `app.js`
- Found 30 physical prototype files in `prototypes/` folder.

### Prototype Mapping Status
- **ADM**: 7 files connected successfully.
- **ELP**: 11 files connected successfully.
- **NAM**: 4 files connected successfully.
- **PCAIM**: 4 files connected successfully.
- **PCHM**: 4 files connected successfully.