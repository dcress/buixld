$(document).ready(function(){/* CE search page vailidation */
  // PickaDate Datepicker
        $('.datepicker').pickadate({
            selectYears: 90,
            selectMonths: true,
            format: 'mm/dd/yyyy',
            formatSubmit: 'mm/dd/yyyy',
            min: new Date(1930,1,1),
            max: new Date(2016,1,1)
        });

        // Tooltips
          $('.tooltip-info').tooltip();

          //Truncates event description - An handlebars helper
          Handlebars.registerHelper ( 'truncate', function ( str, len ) {
              if (str.length > len) {
                  var new_str = str.substr ( 0, len+1 );
                  while ( new_str.length )
                  {
                      var ch = new_str.substr ( -1 );
                      new_str = new_str.substr ( 0, -1 );
                      if ( ch == ' ' )
                      {
                          break;
                      }
                  }
                  if ( new_str == '' )
                  {
                      new_str = str.substr ( 0, len );
                  }
                  return  ( new_str +'...' );
              }
              return str;
          });



        //On click of search button, show the results. Will have to make ajax call here to retrieve the results.
        $('.basic-search').on('click',function (event) {
            searchFieldValidate();
        });

        //On enter of search field
        $('#inputSearch').on('keypress',function(event) {
          if ( event.which == 13 ) {
            event.preventDefault();
            searchFieldValidate();
           }
        });

});
