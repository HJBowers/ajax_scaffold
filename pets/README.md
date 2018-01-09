# Scaffolding for an AJAX demo
## The object:
- The pet name field is a text input (this is already part of the scaffold)
- When user makes a change <return> in the pet name field, record the change in the db via AJAX.
- After AJAX completes, display success / failure message on page in the browser.

## To install from scratch:

1. Fork or clone the repo
2. `$ npm install`
3. `$ npm run db:create`
4. `$ npm run db:seed`
5. `$ npm run dev:start`


### TODO:
SERVER
- Use updatePetName to update the db
- Associate pet name with pet ID
  - Need a pet ID for updatePetName
  - Add petId as part of the query in getPetsAndSpecies
- Write a PUT route to process AJAX call

CLIENT
- Send petId and newName to server via AJAX fetch
  - Get from form
- Display response from AJAX
  - Add empty div in pug template, give ID
  - Format differently for success/failure

- Add CSS classes for success/failure
