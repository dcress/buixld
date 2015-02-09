HOW TO DO IT

      1. Create a layout for each component. Eg: _layouts/handlebars/enrollment.html
           - This layout should only include the html required for the template. No header, footer, navigation.

      2. Create a folder for each component inside handlebars folder - handlebars/enrollment
          - This folder will contain two files - enrollment.handlebars and enrollment-modal.js
          - enrollment.handlebars includes the layout and other html components, similar to generic html component - enrollment/index.html

      3. Do a grunt build.

      4. cd to /dist/enrollment folder on the terminal.

      5. Enter handlebars –f enrollment-modal.js enrollment.handlebars for pre-compilation

      6. Include this enrollment-modal.js in the portlet jsp

JSON PARSING

      1. JSON needs to be present in the portlet jsp inside script tags

      2. inject json data into handlebars template using -
        var content = Handlebars.templates['enrollment-modal'](enrollmentData);
        $('#enrollment-div').html(content);

QUESTIONS OR CONERNS

      1. How to handle error scenarios ? For eg. how to include server side error message in the template.

      2. How to reference portal URL's in the template ? Will they be coming from a json ?

      3. How to automate the handlebars precomplie command ?

      4. Has webserver been setup to host the template ?

      5. Performance ?


CRM-CE HANDLEBARS

    1. This module has two templates - search template and search results template.

    2. crm-ce.html inside layouts/handelbars/ folder.

    3. crm-ce.html inside app/crm-classes-events folder. This file is basically a portlet jsp.
            It includes handlebars library and the two precompiled crm-ce templates.
            It also has a div for wrapper.
            The js function displays only the search html on page load and click of submit, displays the results also.

    4. crm-ce folder inside handlebars.
            Now, this contains the .handlebars template and .js precompiled template files.
            Note that it is including the layout from layouts/handlebars folder.
            Only ce-search-tabs.handlebars contains the layout include as this is first element to be shown on page load.
            There is no layout include on ce-search-results.handlebars as this is included within the main div and called on click of submit.

    5. To make changes and to compile this template -
            After all the files have been created and the necessary includes being done, do a grunt build.
            Now, go to dist/handlebars/crm-ce folder and run -
                handlebars -f ce-search-tabs.js ce-search-tabs.handlebars (gives us the precompiled search tab template)
                handlebars -f ce-search-results-js ce-search-results.handlebars (gives us the precompiled search results template)
           Then, from project folder, do grunt copy:templates to route this templates folder from dist into staging folder.
           Copy js contents from staging folder and paste in app/handlebars/crm-ce/*.js files.
           Do a grunt serve.

     6. Those files in staging server will go into TFS.
