# Cypress

1. Install cypress
2. `npm install cypress`
3. If want to install as dev dependency
4. `npm install cypress --save-dev`
5. In scripts write, "cypress":"cypress open"
6. `npm start`
7. `npm run cypress`
8. Select e2e testing on the cypress window
9. Scroll down and select the continue button
10. Select the browser to run on
11. Select Create an Empty Spec Option
12. Continue with Running the spec
13. Create .eslintrc.json file inside the cypress folder.
14. ```JavaScript
    {
    "extends":["plugin:cypress/recommended"]
    }
    ```
15. add at top to get suggestions in spec.cy.js

- `/// <reference types="Cypress" />`

# If error: change Cypress Verification Timeout

1. npx cypress verify
2. Open node_modules\cypress\lib\tasks\verify.js, search for VERIFY_TEST_RUNNER_MS and change it from 30000(default) to 100000
3. npm cache clean --force

### Objective:

1. How to work with synchronous events, accesss elements, and user events.
 