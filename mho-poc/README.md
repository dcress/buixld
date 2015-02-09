# Portal Prototyping Environment

## Using:
* Yeoman for scaffolding
* Jekyll for html templating
* LESS for CSS pre-processing
* Grunt for task running
* Bower for package management
* Handlebars for JS templating


## What You'll Need installed on your machine:
* Git (duh)
* Ruby
* Rails
* Node.js (http://nodejs.org/)
* LESS - (http://lesscss.org/)
* Jekyll (http://jekyllrb.com/)
* Handlebars JS (http://handlebarsjs.com/)
* Install Grunt, Bower, and Yeoman all at once with:
  - npm install -g yo (http://yeoman.io/)

### OSX - specifics
* Homebrew (to make installs easier) - http://brew.sh/
* Ruby
  - use RVM (http://rvm.io/rvm/basics) to install/switch between Ruby versions. 
* Rails OSX - (http://rvm.io/rvm/install)- to install with RVM


### Windows - specifics
* Ruby - use http://rubyinstaller.org/
  - which has something similar to OSX's RVM called 'Pik'
* Rails - (http://rubyonrails.org/download)
* Jekyll - http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html

## After Clone

### Terminal Commands to run:
* while in root directory of the project in terminal, run these individual commands separately after each other:
  - bundle install
  - npm install
  - bower install
  - grunt serve

### Notes on what this did:
* bundle install:
* npm install:
  - This installs all the necessary 'node modules' that are required for the grunt tasks used on this project, which include such things as... minification, concatenation, image optimization, CSS pre-processor compilation, templating logic, and much more.
* bower install:
  - This installs all the dependencies for the prototype, so that means libs like Bootstrap 3, jQuery, jQuery-Validation, Handlebars, etc etc. (you can see the entire list inside the 'bower.json' file in the root folder of the project). This 'bower.json' file is what the 'bower install' command looks for when installing the dependencies.
* grunt:
  - This does the first 'build' using the grunt tasks, having this task run without errors ensures that all the necessary installs have worked properly.
  - (NOTE: If you are not going to be running the main grunt task for building the dist folder then it is not necessary to have the build task work since all you will be needing is the 'grunt serve' ability)

### No Errors? Alright! next!
#### If everything ran without any major errors then try running the following command in the same root directory that you ran the other commands:
  - grunt serve
* The 'grunt serve' command launches a local server in your default browser on port:9000. JS, LESS, HTML, and Jekyll files are then "Watched" by another grunt task which is connected to 'LiveReload' which automatically reloads the JS, LESS, HTML or Jekyll files that you have altered (and saved), after it reloads any changed files it then refreshes the localhost in the browser.

## Taxonomy Explained
* The directory that you will be working in is the 'app' directory. This contains all the dependency libraries and all the code in their development formats (as in not minified etc.).
* If you ever run a 'grunt:build' command or just 'grunt', this will run all the set grunt tasks which build a 'dist' directory that contains the minified, concatenated, and optimized code which is then used to push to the server myhealthone.buixld.com for presentations/critique.


## Versioning Notes:
* This project is specifically versioned for the "build/prototyping" environment. 
* The TFS git versioned code that the Portal Dev team requires lives in the "Staging" folder found in the root of the project.
* After running the main grunt build and then the Handlebars command for precompiling templates (within the 'dist' folder), running the Grunt task "grunt copy:templates" then handles the copying of the compiled Handlebar templates from the 'dist' directory to the 'Staging' directory.
* Pushing the "Staging" code to TFS has yet to be set up. Waiting on the git integration into TFS.
