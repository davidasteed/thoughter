
# Thoughter base assignment:

        Definitely not a Twitter clone.

        Author: David Steed

        Project Purpose:  Learn to use testing framework further, and also learn to refactor code as necessary while composing and conducting unit tests.

        Assignment:  Use test framework (Mocha, Chai, Karma) to evaluate function window.thoughter.showRecent in file recent-thoughts.js.

        Critical Path:
        1.  Validate one basic sanity check
        2.  List all basic checks. 
        3.  List all critical checks.
        4.  List any "edge case" checks, if needed
        5.  Create a list of unit tests that intelligently combine as many of the above
        6.  Validate unit tests and correct source code as needed
        7.  List changes to the file recent-thoughts.js ?

        What tech used for test:
        - "chai" "^3.5.0"
        - "karma" "^1.5.0"
        - "karma-chai" "^0.1.0"
        - "karma-chrome-launcher" "^2.0.0"
        - "karma-mocha" "^1.3.0"
        - "mocha" "^3.2.0"
        - Atom text editor
        - Chrome browser
        - jshint

        How to get started:
        - check out the repository
        - install test framework as follows:
        - $ npm init
        - $ npm install mocha --save-dev
        - $ npm install --save-dev karma chai karma-mocha karma-chai karma-chrome-launcher

        How to run the tests:
        - npm test


_________

# Process Automation, followup assignment:

        Author: David Steed

        Project Purpose:  Learn how to set up process automation using Grunt for an existing project.

        Assignment:  Check out an instructor-created branch of our previous "Thoughter" repository, then install Grunt and all required plugins.  Write the Grunt configuration file and validate that "grunt build" will successfully execute all components required to construct a new "build".  Adventure mode:  install, configure, and validate grunt watch plugin.

        NOTE:  as instructed, we are not completing this task as there is a lecture required to understand better how to do this:
        "All JS concatenated into a single app.js file, and in a js/ directory"

        Critical Path:
        1.  check out, merge from master, and switch to the "phase-two" branch
        2.  via Node Package Manager (npm), install dependencies for Grunt using --save-dev to update package.json
        3.  configure and validate operation from one Grunt task (such as a copy task:target)
        4.  complete task:targets for the remaining Grunt components of the repository:  copy files, sass, karma
        5.  adventure mode:  configure and validate grunt watch (all), and grunt watch "registerTask" aliases for each watch component.

        What tech used for test? 
        "devDependencies":   (via --save-dev option)
        - "chai": "^3.5.0",
        - "grunt": "^1.0.1",
        - "grunt-contrib-clean": "^1.0.0",
        - "grunt-contrib-compass": "^1.1.1",
        - "grunt-contrib-copy": "^1.0.0",
        - "grunt-contrib-jshint": "^1.1.0",
        - "grunt-contrib-sass": "^1.0.0",
        - "grunt-contrib-watch": "^1.0.0",
        - "grunt-karma": "^2.0.0",
        - "grunt-mocha": "^1.0.4",
        - "load-grunt-tasks": "^3.5.2",

        "dependencies":    (via --save option)
        - "jquery": "^3.2.0",

        How to get started:  
        1.  Install grunt:

          npm install --save-dev grunt
          npm install grunt-contrib-copy --save-dev
          npm install --save-dev load-grunt-tasks
          npm install -g grunt-cli
          npm install --save-dev grunt-contrib-clean
          npm install --save-dev grunt-contrib-sass
          npm install --save-dev grunt-contrib-jshint
          npm install --save-dev grunt-karma

        2.  Edit the gruntfile.js (saved in root directory) for each of the components.  See the file in the repo for example syntax.

        3.  Create the "build" code:
            a.  cd to the repo base directory
            b.  grunt build

        4.  Install grunt watch:
          npm install --save-dev grunt-contrib-watch
          npm install grunt-contrib-compass --save-dev

        5.  Run grunt watch:
          grunt watch   // for all watch tasks
          grunt htmlwatch   // or run one watch alias

          Note:  grunt watch has also been set up watch for, and restart grunt, if the gruntfile.js is updated
