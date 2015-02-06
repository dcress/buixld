(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ce-search-results'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {

  var buffer = "", stack1, helper, options;
  buffer += "\n\n\n\n<article class=\"ce-result\">\n\n  <!-- Event title location date and time -->\n  <div id=\"ce-result-info\" class=\"row\">\n\n    <!-- Event Title -->\n    <div class=\"col-sm-8 ce-result-title\">\n      <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details";
  if (helper = helpers.eventId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.eventName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n      <p class=\"eventDescription\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventDescription), 100, options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.eventDescription), 100, options)))
    + "</p>\n      <p><i class=\"fa fa-pencil\"></i> <a>";
  if (helper = helpers.eventClassType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventClassType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n\n      <!-- Location information -->\n      <div class=\"row ce-result-location\">\n        <div class=\"col-xs-3 ce-result-location-img\">\n          <img src=\"../../img/result-locations/result-location-default.png\" data-src=\"../../img/result-locations/facility-stonecrest-1.jpg\" width=\"80\" height=\"80\" class=\"img-circle lazy\">\n        </div>\n        <div class=\"col-sm-9 ce-result-location-info\">\n          <p><i class=\"fa fa-map-marker\"></i> 3.5 Miles Away</p>\n          <a href=\"https://www.google.com/maps/place/2200+Murphy+Ave/@36.1547456,-86.8060501,17z/data=!3m1!4b1!4m2!3m1!1s0x886466b8ca81945f:0x7192c427307a32a3\">\n          <p>Tace Building</p>\n          <p>2200 Murphy Avenue Nashville TN 37203</p>\n          </a>\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n    <!-- Calendar and Time -->\n    <div class=\"col-sm-4 ce-result-date-time\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 ce-result-calendar\"><div id=\"ce-date-calendar\">\n  <div class=\"ce-date-month\"><span>Jan</span></div>\n <div class=\"ce-date-day\"><span>28</span></div>\n  <div class=\"ce-date-time\"><span>9:00 AM</span></div>\n</div></div>\n        <div class=\"col-sm-12 ce-result-time\">\n          <p>September 28, 2014</p>\n          <p>September 28, 2014</p>\n          <p>9:00am - 11:30 am</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n<!-- Result Attributes -->\n  <div id=\"ce-result-attributes\" class=\"row\">\n    <!-- Result details -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-result-details";
  if (helper = helpers.eventId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"fa fa-calendar\"></i> See Full Details</a>\n    </div>\n\n    <!-- Availability -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n      <span class=\"ce-alert-success\"><i class=\"fa fa-check-circle\"></i> 8/10 Spots Open</span>\n    </div>\n\n    <!-- Cost -->\n    <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n      <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $100.00</span>\n    </div>\n\n    <!-- Register for event -->\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n    </div>\n\n    <!-- Call to register\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: (123) 456-7890</a>\n    </div> -->\n\n    <!-- Joing waitlist\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n    </div> -->\n\n    <!-- Toggle payment modal\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n    </div> -->\n\n  </div>\n\n</article>\n\n\n";
  return buffer;
  }

function program3(depth0,data) {

  var buffer = "", stack1;
  buffer += "\n\n ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.callResult), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n\n";
  return buffer;
  }
function program4(depth0,data) {

  var buffer = "", stack1, helper;
  buffer += " \n<article class=\"ce-result\">\n  \n  <!-- Event title location date and time -->\n  <div id=\"ce-result-info\" class=\"row\">\n\n    <!-- Event Title -->\n    <div class=\"col-sm-8 ce-result-title\">\n      <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details-call";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> ";
  if (helper = helpers.resultName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </a></h3>\n      <p> ";
  if (helper = helpers.resultInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n      <p><i class=\"fa fa-pencil\"></i> <a> ";
  if (helper = helpers.resultType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </a></p>\n\n      <!-- Location information -->\n      <div class=\"row ce-result-location\">\n        <div class=\"col-xs-3 ce-result-location-img\">\n          <img src=\"../../img/result-locations/result-location-default.png\" data-src=\"\" width=\"80\" height=\"80\" class=\"img-circle lazy\">\n        </div>\n        <div class=\"col-sm-9 ce-result-location-info\">\n          <p><i class=\"fa fa-map-marker\"></i>  ";
  if (helper = helpers.distance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.distance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Miles Away</p>\n          <a href=\" ";
  if (helper = helpers.mapLink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mapLink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " \">\n          <p> ";
  if (helper = helpers.buildingName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n          <p> ";
  if (helper = helpers.buildingAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n          </a>\n        </div>\n\n\n      </div>\n\n    </div>\n\n    <!-- Calendar and Time -->\n    <div class=\"col-sm-4 ce-result-date-time\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 ce-result-calendar\">\n          <div id=\"ce-date-calendar\">\n            <div class=\"ce-date-month\"><span> ";
  if (helper = helpers.month) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.month); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n            <div class=\"ce-date-day\"><span> ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n            <div class=\"ce-date-time\"><span> ";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 ce-result-time\">\n          <p>";
  if (helper = helpers.expandedMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.expandedMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.year) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.year); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.endTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Result Attributes -->\n  <div id=\"ce-result-attributes\" class=\"row\">\n\n    <!-- Result details -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-result-details-call";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"fa fa-calendar\"></i> See Full Details</a>\n    </div>\n\n    <!-- Availability -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n      <span class=\"ce-alert-warning\"><i class=\"fa fa-check-circle\"></i> ";
  if (helper = helpers.emptySpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emptySpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (helper = helpers.totalSpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalSpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Spots Open</span>\n    </div>\n\n    <!-- Cost -->\n    <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n      <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span>\n    </div>\n\n    <!-- Register for event\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n    </div>  -->\n\n    <!-- Call to register -->\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: ";
  if (helper = helpers.contactNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contactNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n    </div>\n\n    <!-- Joing waitlist\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n    </div> -->\n\n    <!-- Toggle payment modal\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n    </div> -->\n\n  </div>\n\n</article>\n ";
  return buffer;
  }

function program6(depth0,data) {

  var buffer = "", stack1;
  buffer += "\n\n ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.waitResult), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n\n";
  return buffer;
  }
function program7(depth0,data) {

  var buffer = "", stack1, helper;
  buffer += " \n<article class=\"ce-result\">\n  <!-- Event title location date and time -->\n  <div id=\"ce-result-info\" class=\"row\">\n\n    <!-- Event Title -->\n    <div class=\"col-sm-8 ce-result-title\">\n      <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details-waitlist";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> ";
  if (helper = helpers.resultName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </a></h3>\n      <p> ";
  if (helper = helpers.resultInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n      <p><i class=\"fa fa-pencil\"></i> <a> ";
  if (helper = helpers.resultType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </a></p>\n\n      <!-- Location information -->\n      <div class=\"row ce-result-location\">\n        <div class=\"col-xs-3 ce-result-location-img\">\n          <img src=\"../../img/result-locations/result-location-default.png\" data-src=\"../../img/result-locations/facility-stonecrest-3.jpg\" width=\"80\" height=\"80\" class=\"img-circle lazy\">\n        </div>\n        <div class=\"col-sm-9 ce-result-location-info\">\n          <p><i class=\"fa fa-map-marker\"></i>  ";
  if (helper = helpers.distance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.distance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Miles Away</p>\n          <a href=\" ";
  if (helper = helpers.mapLink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mapLink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " \">\n          <p> ";
  if (helper = helpers.buildingName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n          <p> ";
  if (helper = helpers.buildingAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n          </a>\n        </div>\n\n\n      </div>\n\n    </div>\n\n    <!-- Calendar and Time -->\n    <div class=\"col-sm-4 ce-result-date-time\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 ce-result-calendar\">\n          <div id=\"ce-date-calendar\">\n            <div class=\"ce-date-month\"><span> ";
  if (helper = helpers.month) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.month); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n            <div class=\"ce-date-day\"><span> ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n            <div class=\"ce-date-time\"><span> ";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 ce-result-time\">\n          <p>";
  if (helper = helpers.expandedMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.expandedMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.year) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.year); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.endTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Result Attributes -->\n  <div id=\"ce-result-attributes\" class=\"row\">\n\n    <!-- Result details -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-result-details-waitlist";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"fa fa-calendar\"></i> See Full Details</a>\n    </div>\n\n    <!-- Availability -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n      <span class=\"ce-alert-danger\"><i class=\"fa fa-check-circle\"></i> ";
  if (helper = helpers.emptySpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emptySpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (helper = helpers.totalSpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalSpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Spots Open</span>\n    </div>\n\n    <!-- Cost -->\n    <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n      <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span>\n    </div>\n\n    <!-- Register for event\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n    </div>  -->\n\n    <!-- Call to register\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: (123) 456-7890</a>\n    </div> -->\n\n    <!-- Joing waitlist -->\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\"../../register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n    </div>\n\n    <!-- Toggle payment modal\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n    </div> -->\n\n  </div>\n\n</article>\n ";
  return buffer;
  }

function program9(depth0,data) {

  var buffer = "", stack1, helper, options;
  buffer += "\n\n<div class=\"modal fade ce-modal-result-details\" id=\"ce-modal-result-details";
  if (helper = helpers.eventId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"ce-modal-dismiss close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times-circle\"></i></button>\n        <h3 class=\"modal-title\" id=\"myModalLabel\">Event Details</h3>\n      </div>\n\n      <div class=\"modal-body\">\n\n\n        <!-- Result -->\n        <article class=\"ce-result\">\n\n          <!-- Event title location date and time -->\n          <div id=\"ce-result-info\" class=\"row\">\n\n            <!-- Event Title -->\n            <div class=\"col-sm-8 ce-result-title\">\n              <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sessions)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.eventName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n              <p class=\"eventDescription\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventDescription), 100, options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.eventDescription), 100, options)))
    + "</p>\n              <p><i class=\"fa fa-pencil\"></i> <a>";
  if (helper = helpers.eventClassType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventClassType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n\n              <!-- Location information -->\n            <div class=\"row ce-result-location\">\n              <div class=\"col-xs-3 ce-result-location-img\">\n                <img src=\"../../img/result-locations/result-location-default.png\" data-src=\"../../img/result-locations/facility-stonecrest-1.jpg\" width=\"80\" height=\"80\" class=\"img-circle lazy\">\n              </div>\n              <div class=\"col-sm-9 ce-result-location-info\">\n                <p><i class=\"fa fa-map-marker\"></i> 3.5 Miles Away</p>\n                <a href=\"https://www.google.com/maps/place/2200+Murphy+Ave/@36.1547456,-86.8060501,17z/data=!3m1!4b1!4m2!3m1!1s0x886466b8ca81945f:0x7192c427307a32a3\">\n                <p>Tace Building</p>\n                <p>2200 Murphy Avenue Nashville TN 37203</p>\n                </a>\n              </div>\n              </div>\n\n            </div>\n\n           <!-- Calendar and Time -->\n            <div class=\"col-sm-4 ce-result-date-time\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 ce-result-calendar\"><div id=\"ce-date-calendar\">\n <div class=\"ce-date-month\"><span>Jan</span></div>\n <div class=\"ce-date-day\"><span>28</span></div>\n  <div class=\"ce-date-time\"><span>9:00 AM</span></div>\n</div></div>\n                <div class=\"col-sm-12 ce-result-time\">\n                  <p>September 28, 2014</p>\n                  <p>September 28, 2014</p>\n                  <p>9:00am - 11:30 am</p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!-- Result Attributes -->\n          <div id=\"ce-result-attributes\" class=\"row\">\n            <!-- Result details -->\n            <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n              <a data-toggle=\"modal\" data-target=\"#ce-modal-result-details\"><i class=\"fa fa-calendar\"></i> See Full Details</a>\n            </div>\n\n            <!-- Availability -->\n            <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n              <span class=\"ce-alert-success\"><i class=\"fa fa-check-circle\"></i> 8/10 Spots Open</span>\n            </div>\n\n            <!-- Cost -->\n            <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n              <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $100.00</span>\n            </div>\n\n            <!-- Register for event -->\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n            </div>\n\n            <!-- Call to register\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: (123) 456-7890</a>\n            </div> -->\n\n            <!-- Joing waitlist\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n            </div> -->\n\n            <!-- Toggle payment modal\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n            </div> -->\n\n          </div>\n        </article>\n\n        <!-- Tabs for content -->\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active\"><a href=\"#description\" data-toggle=\"tab\">Description</a></li>\n          <li><a href=\"#occurances\" data-toggle=\"tab\">Class Occurances</a></li>\n          <li><a href=\"#notes\" data-toggle=\"tab\">Notes</a></li>\n        </ul>\n        <!-- Tab content -->\n        <div class=\"tab-content\">\n          <div class=\"tab-pane fade in active\" id=\"description\">\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">INSTRUCTOR:</span> ";
  if (helper = helpers.eventMainContactName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventMainContactName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">TYPE:</span>  ";
  if (helper = helpers.eventClassType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventClassType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p> ";
  if (helper = helpers.eventDescription) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventDescription); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"occurances\">\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">INSTRUCTOR:</span>";
  if (helper = helpers.eventMainContactName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventMainContactName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">TYPE:</span>  ";
  if (helper = helpers.eventClassType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventClassType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>  ";
  if (helper = helpers.eventDescription) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventDescription); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"notes\">\n            <p> ";
  if (helper = helpers.eventEnrollmentCriteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventEnrollmentCriteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-info\">\n        <div class=\"modal-info-text\">\n          <span><i class=\"fa fa-info-circle\"></i> Need Help?</span>\n          <span class=\"modal-info-text-phone\">";
  if (helper = helpers.eventEnrollmentPhoneNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventEnrollmentPhoneNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
  return buffer;
  }

function program11(depth0,data) {

  var buffer = "", stack1;
  buffer += "\n\n ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.callResult), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n\n";
  return buffer;
  }
function program12(depth0,data) {

  var buffer = "", stack1, helper;
  buffer += " \n<div class=\"modal fade ce-modal-result-details\" id=\"ce-modal-result-details-call";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"ce-modal-dismiss close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times-circle\"></i></button>\n        <h3 class=\"modal-title\" id=\"myModalLabel\">Event Details</h3>\n      </div>\n\n      <div class=\"modal-body\">\n\n\n        <!-- Result Call -->\n        <article class=\"ce-result\">\n          <!-- Event title location date and time -->\n          <div id=\"ce-result-info\" class=\"row\">\n\n            <!-- Event Title -->\n            <div class=\"col-sm-8 ce-result-title\">\n              <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.resultName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n              <p> ";
  if (helper = helpers.resultInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n              <p><i class=\"fa fa-pencil\"></i> <a> ";
  if (helper = helpers.resultType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n\n              <!-- Location information -->\n              <div class=\"row ce-result-location\">\n                <div class=\"col-xs-3 ce-result-location-img\">\n                  <img class=\"img-circle\" src=\"../../img/result-locations/facility-stonecrest-4.jpg\">\n                </div>\n                <div class=\"col-sm-9 ce-result-location-info\">\n                  <p><i class=\"fa fa-map-marker\"></i>  ";
  if (helper = helpers.distance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.distance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Miles Away</p>\n                  <a href=\" ";
  if (helper = helpers.mapLink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mapLink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " \">\n                  <p> ";
  if (helper = helpers.buildingName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n                  <p> ";
  if (helper = helpers.buildingAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n                  </a>\n                </div>\n\n\n              </div>\n\n            </div>\n\n            <!-- Calendar and Time -->\n            <div class=\"col-sm-4 ce-result-date-time\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 ce-result-calendar\">\n                 <div id=\"ce-date-calendar\">\n                    <div class=\"ce-date-month\"><span> ";
  if (helper = helpers.month) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.month); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n                    <div class=\"ce-date-day\"><span> ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n                    <div class=\"ce-date-time\"><span> ";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n                </div>\n                </div>\n                <div class=\"col-sm-12 ce-result-time\">\n                  <p>";
  if (helper = helpers.expandedMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.expandedMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.year) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.year); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                  <p>";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.endTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!-- Result Attributes -->\n          <div id=\"ce-result-attributes\" class=\"row\">\n\n            <!-- Result details -->\n            <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n\n            </div>\n\n            <!-- Availability -->\n            <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n              <span class=\"ce-alert-warning\"><i class=\"fa fa-check-circle\"></i> ";
  if (helper = helpers.emptySpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emptySpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (helper = helpers.totalSpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalSpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Spots Open</span>\n            </div>\n\n            <!-- Cost -->\n            <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n              <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span>\n            </div>\n\n            <!-- Register for event\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n            </div>  -->\n\n            <!-- Call to register -->\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: ";
  if (helper = helpers.contactNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contactNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n            </div>\n\n            <!-- Joing waitlist\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n            </div> -->\n\n            <!-- Toggle payment modal\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n            </div> -->\n\n          </div>\n\n        </article>\n\n\n        <!-- Tabs for content -->\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active\"><a href=\"#description\" data-toggle=\"tab\">Description</a></li>\n          <li><a href=\"#occurances\" data-toggle=\"tab\">Class Occurances</a></li>\n          <li><a href=\"#notes\" data-toggle=\"tab\">Notes</a></li>\n        </ul>\n        <!-- Tab content -->\n       <div class=\"tab-content\">\n          <div class=\"tab-pane fade in active\" id=\"description\">\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">INSTRUCTOR:</span> ";
  if (helper = helpers.instructorName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instructorName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">TYPE:</span>  ";
  if (helper = helpers.descriptionType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p> ";
  if (helper = helpers.descriptionInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p> ";
  if (helper = helpers.descriptionInfoAdditional) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionInfoAdditional); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"occurances\">\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">INSTRUCTOR:</span>  ";
  if (helper = helpers.instructorName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instructorName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">TYPE:</span>  ";
  if (helper = helpers.descriptionType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>  ";
  if (helper = helpers.descriptionInfoAdditional) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionInfoAdditional); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"notes\">\n            <p> ";
  if (helper = helpers.notes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.notes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-info\">\n        <div class=\"modal-info-text\">\n          <span><i class=\"fa fa-info-circle\"></i> Need Help?</span>\n          <span class=\"modal-info-text-phone\"> ";
  if (helper = helpers.facilityContact) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facilityContact); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n ";
  return buffer;
  }

function program14(depth0,data) {

  var buffer = "", stack1;
  buffer += "\n\n ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.waitResult), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n\n";
  return buffer;
  }
function program15(depth0,data) {

  var buffer = "", stack1, helper;
  buffer += " \n<div class=\"modal fade ce-modal-result-details\" id=\"ce-modal-result-details-waitlist";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"ce-modal-dismiss close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times-circle\"></i></button>\n        <h3 class=\"modal-title\" id=\"myModalLabel\">Event Details</h3>\n      </div>\n\n      <div class=\"modal-body\">\n\n\n        <!-- Result Waitlist -->\n        <article class=\"ce-result\">\n          <!-- Event title location date and time -->\n          <div id=\"ce-result-info\" class=\"row\">\n\n            <!-- Event Title -->\n            <div class=\"col-sm-8 ce-result-title\">\n              <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details-waitlist";
  if (helper = helpers.modalId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modalId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> ";
  if (helper = helpers.resultName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </a></h3>\n              <p> ";
  if (helper = helpers.resultInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n              <p><i class=\"fa fa-pencil\"></i> <a> ";
  if (helper = helpers.resultType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </a></p>\n\n              <!-- Location information -->\n              <div class=\"row ce-result-location\">\n                <div class=\"col-xs-3 ce-result-location-img\">\n                  <img class=\"img-circle\" src=\"../../img/result-locations/facility-stonecrest-3.jpg\">\n                </div>\n                <div class=\"col-sm-9 ce-result-location-info\">\n                    <p><i class=\"fa fa-map-marker\"></i>  ";
  if (helper = helpers.distance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.distance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Miles Away</p>\n                    <a href=\" ";
  if (helper = helpers.mapLink) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mapLink); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " \">\n                    <p> ";
  if (helper = helpers.buildingName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n                    <p> ";
  if (helper = helpers.buildingAddress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.buildingAddress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n                  </a>\n                </div>\n\n\n              </div>\n\n            </div>\n\n            <!-- Calendar and Time -->\n            <div class=\"col-sm-4 ce-result-date-time\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 ce-result-calendar\">\n                  <div id=\"ce-date-calendar\">\n                    <div class=\"ce-date-month\"><span> ";
  if (helper = helpers.month) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.month); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n                    <div class=\"ce-date-day\"><span> ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n                    <div class=\"ce-date-time\"><span> ";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span></div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 ce-result-time\">\n                  <p>";
  if (helper = helpers.expandedMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.expandedMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.day) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.day); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.year) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.year); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                  <p>";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.endTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!-- Result Attributes -->\n          <div id=\"ce-result-attributes\" class=\"row\">\n\n            <!-- Result details -->\n            <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n\n            </div>\n\n            <!-- Availability -->\n            <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n                <span class=\"ce-alert-danger\"><i class=\"fa fa-check-circle\"></i> ";
  if (helper = helpers.emptySpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.emptySpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (helper = helpers.totalSpots) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalSpots); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Spots Open</span>\n            </div>\n\n            <!-- Cost -->\n            <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n              <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </span>\n            </div>\n\n            <!-- Register for event\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n            </div>  -->\n\n            <!-- Call to register\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: (123) 456-7890</a>\n            </div> -->\n\n            <!-- Joing waitlist -->\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n            </div>\n\n            <!-- Toggle payment modal\n            <div class=\"col-sm-4 ce-result-cta\">\n              <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n            </div> -->\n\n          </div>\n\n        </article>\n\n\n        <!-- Tabs for content -->\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active\"><a href=\"#description\" data-toggle=\"tab\">Description</a></li>\n          <li><a href=\"#occurances\" data-toggle=\"tab\">Class Occurances</a></li>\n          <li><a href=\"#notes\" data-toggle=\"tab\">Notes</a></li>\n        </ul>\n        <!-- Tab content -->\n        <div class=\"tab-content\">\n          <div class=\"tab-pane fade in active\" id=\"description\">\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">INSTRUCTOR:</span> ";
  if (helper = helpers.instructorName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instructorName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">TYPE:</span>  ";
  if (helper = helpers.descriptionType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p> ";
  if (helper = helpers.descriptionInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p> ";
  if (helper = helpers.descriptionInfoAdditional) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionInfoAdditional); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"occurances\">\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">INSTRUCTOR:</span>  ";
  if (helper = helpers.instructorName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instructorName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"ce-extra-info\"><span class=\"ce-extra-header\">TYPE:</span>  ";
  if (helper = helpers.descriptionType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>  ";
  if (helper = helpers.descriptionInfoAdditional) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionInfoAdditional); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"notes\">\n            <p> ";
  if (helper = helpers.notes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.notes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-info\">\n        <div class=\"modal-info-text\">\n          <span><i class=\"fa fa-info-circle\"></i> Need Help?</span>\n          <span class=\"modal-info-text-phone\">";
  if (helper = helpers.facilityContact) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facilityContact); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n ";
  return buffer;
  }

  buffer += "<!-- Results listing -->\n<section id=\"ce-results-listing\">\n\n  <!-- Results criteria -->\n  <article id=\"ce-results-criteria\" class=\"container-sm\">\n    <div class=\"row\">\n <!-- Resutls header section -->\n <div class=\"col-md-12\">\n   <h2>Class &amp; Events Search Results</h2>\n  </div>\n</div>\n    \n<div class=\"row\">\n <!-- Resutls sort button -->\n  <div class=\"col-xs-12 col-sm-4 left\">\n   <select name=\"sort\" id=\"select-sort\" class=\"form-control select-styled\" required=\"required\">\n      <option value=\"\">Sort by:</option>\n      <option value=\"\">Start Date</option>\n      <option value=\"\">Event Name</option>\n      <option value=\"\">Event Type</option>\n    </select>\n </div>\n  \n  <div class=\"col-xs-12 col-sm-2 right\">\n    <div class=\"btn-group\">\n     <select name=\"results\" id=\"select-results\" class=\"form-control select-styled\" required=\"required\">\n        <option value=\"\">Results</option>\n       <option value=\"\">5</option>\n       <option value=\"\">10</option>\n        <option value=\"\">20</option>\n        <option value=\"\">All</option>\n     </select>\n </div>\n</div>\n  </article>\n\n  <!-- Results -->\n  <section id=\"ce-result-container\" class=\"container-sm\">\n    \n";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.result) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.result); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.result) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n    <!--\n";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.classResults) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.classResults); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.classResults) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n-->\n    <!--\n";
  options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}
  if (helper = helpers.classResults) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.classResults); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.classResults) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n-->\n  </section>\n\n  <!-- Pagination -->\n  <div id=\"ce-pagination\" class=\"container-sm\">\n    <ul class=\"pagination\">\n <li><a href=\"#ce-results-listing\"><i class=\"fa fa-angle-left\"></i></a></li>\n <li><a href=\"#ce-results-listing\">1</a></li>\n  <li><a href=\"#ce-results-listing\">2</a></li>\n  <li><a href=\"#ce-results-listing\">3</a></li>\n  <li><a href=\"#ce-results-listing\">4</a></li>\n  <li><a href=\"#ce-results-listing\">5</a></li>\n  <li><a href=\"#ce-results-listing\"><i class=\"fa fa-angle-right\"></i></a></li>\n</ul>\n  </div>\n\n  <!-- Modals -->\n  <div class=\"modal fade\" id=\"ce-modal-withdrawal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n     <div class=\"modal-header\">\n        <button type=\"button\" class=\"ce-modal-dismiss close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times-circle\"></i></button>\n        <h3 class=\"modal-title\" id=\"myModalLabel\">You are withdrawing from</h3>\n     </div>\n\n      <div class=\"modal-body\">\n        <!-- Result in body -->\n       <article class=\"ce-result\">\n\n         <!-- Event title location date and time -->\n         <div id=\"ce-result-info\" class=\"row\">\n\n           <!-- Event Title -->\n            <div class=\"col-sm-8 ce-result-title\">\n              <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details\">Centennial Bariatric (weight loss) Surgery Seminar</a></h3>\n             <p>Celebrate all that life has to offer and reclaim your power over food! Register now for a free informational seminar to begin your Centennial Experience today!</p>\n\n              <!-- Location information -->\n             <div class=\"row ce-result-location\">\n                <div class=\"col-xs-3 ce-result-location-img\">\n                 <img class=\"img-circle\" src=\"../../img/result-locations/facility-stonecrest-1.jpg\">\n               </div>\n                <div class=\"col-sm-9 ce-result-location-info\">\n                  <p><i class=\"fa fa-map-marker\"></i> 3.5 Miles Away</p>\n                  <a href=\"https://www.google.com/maps/place/2200+Murphy+Ave/@36.1547456,-86.8060501,17z/data=!3m1!4b1!4m2!3m1!1s0x886466b8ca81945f:0x7192c427307a32a3\">\n                  <p>Tace Building</p>\n                  <p>2200 Murphy Avenue Nashville TN 37203</p>\n                  </a>\n                </div>\n\n\n\n              </div>\n\n            </div>\n\n            <!-- Calendar and Time -->\n            <div class=\"col-sm-4 ce-result-date-time\">\n              <div class=\"row\">\n               <div class=\"col-sm-12 ce-result-calendar\"><div id=\"ce-date-calendar\">\n <div class=\"ce-date-month\"><span>Jan</span></div>\n <div class=\"ce-date-day\"><span>28</span></div>\n  <div class=\"ce-date-time\"><span>9:00 AM</span></div>\n</div></div>\n                <div class=\"col-sm-12 ce-result-time\">\n                  <p>September 28, 2014</p>\n                 <p>9:00am - 11:30am</p>\n               </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!-- Result Attributes -->\n          <div id=\"ce-result-attributes\" class=\"row\">\n           <!-- Result details\n           <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n            </div>  -->\n\n           <!-- Availability\n           <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n              <span class=\"ce-alert-success\"><i class=\"fa fa-check-circle\"></i> 8/10 Spots Open</span>\n            </div>  -->\n\n           <!-- Cost -->\n           <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n             <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $100.00</span>\n           </div>\n\n            <!-- Register for event\n           <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n            </div>  -->\n\n           <!-- Call to register\n           <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: (123) 456-7890</a>\n           </div> -->\n\n            <!-- Joing waitlist\n           <div class=\"col-sm-4 ce-result-cta\">\n              <a href=\"../../register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n            </div> -->\n\n            <!-- Toggle payment modal\n           <div class=\"col-sm-4 ce-result-cta\">\n              <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n           </div> -->\n\n          </div>\n\n        </article>\n      </div>\n\n      <div class=\"modal-footer\">\n        <p> I want to withdraw from this class and have $100 refunded</p>\n       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n       <a href=\"../../withdrawal-confirmation/\" type=\"button\" class=\"btn btn-warning\">Confirm Withdrawal</a>\n     </div>\n\n      <div class=\"modal-info\">\n        <div class=\"modal-info-text\">\n         <span><i class=\"fa fa-info-circle\"></i> Need Help?</span>\n         <span class=\"modal-info-text-phone\">1-800-123-4567</span>\n       </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n  \n";
  options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}
  if (helper = helpers.result) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.result); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.result) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n  <!--\n";
  options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data}
  if (helper = helpers.classResults) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.classResults); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.classResults) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n-->\n  <!--\n";
  options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data}
  if (helper = helpers.classResults) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.classResults); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.classResults) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n-->\n  <!--<div class=\"modal fade\" id=\"ce-modal-payment\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n     <div class=\"modal-header\">\n        <button type=\"button\" class=\"ce-modal-dismiss close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times-circle\"></i></button>\n        <h3 class=\"modal-title\" id=\"myModalLabel\">Payment</h3>\n      </div>\n\n      <div class=\"modal-body\">\n        <!-- <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n  <head id=\"head\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-1\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\"><title>\n    HCA HPS - GL Payment Page\n    </title>\n    <script src=\"Scripts/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n    <script src=\"Scripts/jquery.creditCardValidator.js\" type=\"text/javascript\"></script>\n    <script src=\"Scripts/jquery.formance.min.js\" type=\"text/javascript\"></script>\n    <script src=\"Scripts/jquery.ba-postmessage.js\" type=\"text/javascript\"></script>\n    <script src=\"Scripts/PaymentForm.js\" type=\"text/javascript\"></script>\n    <script type=\"text/javascript\">\n    function completepayment(hpsid) {\n    // Get the parent page URL as it was passed in, for browsers that don't support\n    // window.postMessage (this URL could be hard-coded).\n    var parent_url = decodeURIComponent(querySt('ref').replace(/^#/, ''));\n    $.postMessage(hpsid, parent_url, parent);\n    }\n    </script>\n    <link href=\"Styles/Default.css\" rel=\"stylesheet\" type=\"text/css\" /></head>\n    <body class=\"hps-body\">\n      <script src=\"Scripts/ClientScriptLibrary.js\" type=\"text/javascript\"></script>\n      <form name=\"portalPaymentForm\" method=\"post\" action=\"GlPayment.aspx?reqid=3769a34e-86d3-4f8e-a3e1-e5f48df4ccaf&amp;ref=http%3a%2f%2fnadcwdwebspw01.hcadev.corpaddev.net%2fHPSRetailClient%2fGlRequestPayment.aspx\" id=\"portalPaymentForm\" class=\"hps-form\" autocomplete=\"&quot;off&quot;&quot;\">\n        <input type=\"hidden\" name=\"__VIEWSTATE\" id=\"__VIEWSTATE\" value=\"dMi36cdESOJgA6HXk4oprreiInw+0ptixYhfpqLQvionGs17XHQa8errBeJCIgwonVdPi4wiufgfRn+NLkd0v5EAFG5bOWG3EVz3Loy9mInAAgVWq5XADj3E9KyVzHdJLhKQiRQaNEvAd44RCe7RLGRlC/mZteSZ2IVrq4UKhizIJG8t8uBpSJnrznrX8oO4ZJBWODPYr5vfgTne6Z7e4MquwJlNmvqWLqeMopbnxyjLnTd60hKSf4zmrRF5BAPs2ydRfJEAzOU+gWDJAe2eFYODgYV+j0yFjRC0x0dgjBB6j+n9TJXFp+jhahbyUq60Ocn07Y08heR971wtH5aR0+h2bUA1Se+iP53I62x9BmsDWlD1NrYbTCXW2kf4G7qe2VLEo29CaBBdOLBuLpDoXjBAjMzHKT3d0GXnGuriKXrVqijQyHalE5tZVcJ02kbzY7gHAp+KftJYwrQ41xQ8RFcJMJKNrtSo4t/7sVbkTQkpQT04e2OXn6Oq3u/PDQ3nCpuNc9Wga3zQJMKD75qufXkwT9WR1vp753jE2yFee1W0IBOSmisi137Sd+RT4Tk/q3ZDCW9+3HanysYuqcW0NK4O2j2rdz4FKXuUSyiAN/LLcUGZbDEMbIlu5tgsZ4cijQd5OoXcwXPbZUUc2NivWRXqHjnJe8gjGEfMehJ6ZJaGYUd/By5GnulbYOA1nKX4wzE8fzyLZn8jwo0kriGrxKNb2BWLgdMOfnQEHjyOn3Oun5wcSg0INVgOd4wrojyZmmDUoIaP53mAkdH2uBWliH1HaijoudSjKklNLYdMCVpCZdZ7BKNLGGzY5CiZLenRURa4XpfOI9LsSqcAz5APvgqISTmKOpdgVLcunOyaIyXgecBLBWEbOoUvm3vp0G6QL6QgNW41hmWFcJreDTb/uknPLHp4W6vkRLJlRl4OqOpDQCV4AVwUqZbsL8agphl4LNgnIv79/i5Q7JTWwwZpTwT98PQ0Fatz8RLmaX0+HMEzPpgHd9mDW67SWP46XDPI7NSkErrgX2KAjE7mdIHdRN345KskuyVokqVCiimGvkgsBv0eKrM2aH/2zNkrD6I0uOrhk5lHen8VY59es65KuSEcQVaFL1Rscctzg1h9ZQhS4PAs5KsvISvlLrFQCOtJZmo4x/65A40GIAUIEM2g1xkvHZ67HiKOLK6FTKB4AdIqze2RMpk5qjQsqyerbpHc9MulAfavpF7h/HaET3sNpjXLEDfmO77ZCnko8pPOa36Kctn/k6+GWnZf9RTrhfPMICMOZgNSJ3QMerUAQM75rw1KZnFvKjerEwjNeknax+SRQNsuy0OS6hBsAmwCgCKcUOrD+4P+xZvok8VsJXGQG3rUGDN8cGZ57vwsdTesU69kQkLgPXRjdDO6+R09j4ULNTC6gWqB95mMUMx4RSy342yOqzB/5gXAaLJ1gorrxOdUPzgPDI1ybgFZNnevLco8dSlcDsKcaAuB9c1HlYsqWJJm56NXtbCnc6uneCSCx6Rw11vF7SKgphufm554w4UUBNfO/w/RJ889AZkawBxsCZK1lRWwubZ/ievN01d9becxiSsmvWIACV0+3G7ZKpumnCBf+BI9x/Mmd1xX+drVNVkMajY/mDTCGqCAt+CIcF7LPfh7uiicwnOg64kV5ZrQmiSOZthaiR0srrfazhlSozXcZX2Z4tJ8FmluNFWtwDnp9wKzQ2kEoXZ1FYrLKZjYo3BgKz1JZrkB+Yi679h+rPw9/XJXABCb1CGpaW37GGjhpBJGbdfWB8h5Qfc7Q/4Hop19h7nrrzKlSxmPV4DnqeLfgG0QqjA5cYEFcWQAOnQ3OjmeA/uKQqp051xeczbMzHZ/cb4tX45DQnNLHKZG7qvlyQQbk/1FWdRMKHAdK4NKTS7VrOI+qiE2ERDyFWCiSqcL0S23U4sKc4NbJbQDMXwuPxrBhTQlQqkqeSm/+h3VGE4ZXKwNaI7K+wawms1jS74Ovhq6N3YEDIcg8eKNZha/7yY6OMvzQHik0w6dngUFlrBDXbF88qLMj0/Ma65CqkyeC6t7TZet1Mmi32DF/MURO05UPMK2AlKRINjlWjqKDAqq8sHEHBlHZD6hyGlKbmFBthLB0p9ubUJIp2fgvFwvRYEu885LB0UpkQdUbVhr+wAs/GCREUH12iovhVFZYK+u4AWWOJNjYX6tzrTSEfrqWSrsX8Bv/sljWrZzZb+kcAa3vXF1jn5qiedZtSg+zi44JCEarMPjuubEvPI67kDC6xsB2INg+I2su9Mkn3621wCAX7oMZHsmeWiXwDSXENTKPx/ONYspna9ZOTtFMka2hCsJDV2K+xHEW23TF1rZza2BOWuzDHb5ussT58WqgWzZyLB+vJ9fH86UDCk0eWkm0A2V9BGGBx5Ujtnp7eWfUgbmuI8X059Q2H9J6yTkafVuMFa1mnmH45rPg2aLPfvV7bQ=\" />\n        <input type=\"hidden\" name=\"__VIEWSTATEENCRYPTED\" id=\"__VIEWSTATEENCRYPTED\" value=\"\" />\n        <input type=\"hidden\" name=\"__EVENTVALIDATION\" id=\"__EVENTVALIDATION\" value=\"o0Pqi1aCKO+sYrFm/J+SR7uVh8y3Vl3lqFECj3pIh4uIlD7RDgpZP+Rwa5mkXIK3tvt9gYxNEWvx/TfaicjIEDt9FPcItxVS5xiAP/Cljd4GxUfMKGNJvrvSxpYR7Aq+qY9HrYN1Zr77XrlRSwOFNqi5NxCYqlVYcq7vYSNsS4p8Sv2nstI/lj4U4jp7MtanH3M/wsHOzc90OzWEYfNoRKqG49FVhq7PMRnko1rx4/xMwjWhK3mr4QjBxNEZ23KzF+ya+/x1BDJdpQxJEwZ7lC5fNnFcxKTn0Ob8UwwCLMbqlQTW9igZayYZHOdTh3euxHH8siiyQgOAvm/EkmeaJIe3T4NB/4aXfNwTWGghYAQBg7ITlqqD56rty2zJS5gGzr0PkT48932hmCwE2Wqh3BQfuG8mYkdNK+7dMTgI82qRQ5rAqTLZHFBxGBkRFQoLrtOzvooyTGlvzRzamsmCwBgCv9822Vz5MxvdLqLc9rZSiyVpLU+hz27Ik7qHId6S91C20A==\" />\n        <div id=\"hca-hps\">\n\n          <div class=\"row card-payment-details\">\n            <div class=\"col-md-12\">\n              <h3 id=\"paymentinfo\" class=\"left\">Payment Details</h3>\n              <p class=\"right required-message\"><i class=\"fa fa-exclamation-circle\"></i> Denotes a required field</p>\n            </div>\n          </div>\n\n          <div class=\"row card-name\">\n            <div id=\"nameDiv\" class=\"col-md-12\">\n              <i class=\"fa fa-exclamation-circle\"></i>\n              <input class=\"form-control\" name=\"cardNameTextBox\" type=\"text\" id=\"cardNameTextBox\" placeholder=\"Name on Card\" required=\"1\" />\n            </div>\n          </div>\n\n          <div class=\"row card-number\">\n            <div id=\"cardNumberTextBoxDiv\" class=\"col-md-12 float-label\">\n              <i class=\"fa fa-exclamation-circle\"></i>\n              <input class=\"form-control\" name=\"cardNumberTextBox\" type=\"text\" maxlength=\"16\" size=\"22\" id=\"cardNumberTextBox\" tabindex=\"101\" autocomplete=\"off\" placeholder=\"Card Number\" required=\"1\" />\n            </div>\n          </div>\n\n          <div id=\"ccDetailsDiv\" class=\"row card-info-details\">\n\n            <div class=\"col-md-3 card-type\">\n              <select name=\"card-type\" class=\"form-control select-styled\" required=\"required\">\n                <option>\n                  <div class=\"CCType\" id=\"divAE\">\n                    <a id=\"AE\" href=\"#\" style=\"text-decoration: none; color: #000000;\">American Express</a>\n                  </div>\n                </option>\n                <option>\n                  <div class=\"CCType\"  id=\"divDS\" style=\"z-index: 1002; vertical-align: top;\">\n                    <a id=\"DS\" href=\"#\" style=\"text-decoration: none; color: #000000;\">Discover</a>\n                  </div>\n                </option>\n                <option>\n                  <div class=\"CCType\"  id=\"divMC\" style=\"z-index: 1001; vertical-align: top;\">\n                    <a id=\"MC\" href=\"#\" style=\"text-decoration: none; color: #000000;\">MasterCard</a>\n                  </div>\n                </option>\n                <option>\n                  <div class=\"CCType\"  id=\"divVI\" style=\"z-index: 1000; vertical-align: top;\">\n                    <a id=\"VI\" href=\"#\" style=\"text-decoration: none; color: #000000;\">Visa</a>\n                  </div>\n                </option>\n              </select>\n            </div>\n\n            <div class=\"col-md-3 card-code\">\n              <input name=\"cardSecurityCodeTextBox\" class=\"form-control\" type=\"text\" maxlength=\"4\" size=\"4\" id=\"cardSecurityCodeTextBox\" tabindex=\"104\" autocomplete=\"off\" placeholder=\"Security Code\" required=\"1\"/>\n              <a href=\"#\" id=\"whatsthis\" onclick=\"window.open('images/cvv-images.gif','Image','height=600, width=800, resizable=0');\" >What is this?</a>\n            </div>\n\n            <div class=\"col-md-3 card-exp-month\">\n              <select name=\"expMonthDropDown\" id=\"expMonthDropDown\" class=\"form-control select-styled\" tabindex=\"102\" placeholder=\"Expire Month\" required=\"1\">\n                <option selected=\"selected\" value=\"\">Expire Month</option>\n                <option value=\"01\">January</option>\n                <option value=\"02\">February</option>\n                <option value=\"03\">March</option>\n                <option value=\"04\">April</option>\n                <option value=\"05\">May</option>\n                <option value=\"06\">June</option>\n                <option value=\"07\">July</option>\n                <option value=\"08\">August</option>\n                <option value=\"09\">September</option>\n                <option value=\"10\">October</option>\n                <option value=\"11\">November</option>\n                <option value=\"12\">December</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-3 card-exp-year\">\n              <select name=\"expYearDropDown\" id=\"expYearDropDown\" class=\"form-control select-styled\" tabindex=\"103\" placeholder=\"Expire Year\" required=\"1\">\n                <option selected=\"selected\" value=\"\">Expire Year</option>\n                <option value=\"2014\">2014</option>\n                <option value=\"2015\">2015</option>\n                <option value=\"2016\">2016</option>\n                <option value=\"2017\">2017</option>\n                <option value=\"2018\">2018</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row card-holder-info\">\n            <div class=\"col-md-12\">\n              <h3>Card Holder Information</h3>\n            </div>\n\n            <div id=\"billingInfoDiv\" class=\"card-billing-address\">\n              <div class=\"col-md-12 float-label\">\n                <i class=\"fa fa-exclamation-circle\"></i>\n                <input name=\"billingAddressTextBox\" class=\"form-control\" type=\"text\" value=\"\" id=\"billingAddressTextBox\" tabindex=\"105\" class=\"billingAddressTextBox\" placeholder=\"Billing Address\" required=\"1\" />\n              </div>\n            </div>\n\n            <div id=\"billingInfoDiv2\" class=\"card-billing-details\">\n\n              <div class=\"col-md-2\">\n                <input name=\"apt\" class=\"form-control\" type=\"text\" id=\"apt\" placeholder=\"APT #\" />\n              </div>\n\n              <div class=\"col-md-4\">\n                <i class=\"fa fa-exclamation-circle\"></i>\n                <input name=\"billingCityTextBox\" class=\"form-control\" type=\"text\" value=\"\" id=\"billingCityTextBox\" tabindex=\"106\" placeholder=\"City\" />\n              </div>\n\n              <div class=\"col-md-3\">\n                <input name=\"billingStateTextBox\" class=\"form-control\" type=\"text\" value=\"\" maxlength=\"2\" id=\"billingStateTextBox\" tabindex=\"107\" placeholder=\"State\" />\n              </div>\n\n              <div class=\"col-md-3\">\n                <input name=\"billingZipTextBox\" class=\"form-control\" type=\"text\" value=\"\" maxlength=\"5\" id=\"billingZipTextBox\" placeholder=\"Zip\" required=\"1\" />\n              </div>\n            </div>\n            </div>\n\n            <div id=\"actiondiv\" class=\"card-submit\">\n              <input type=\"submit\" class=\"btn btn-success\" name=\"submitButton\" value=\"Process Payment\" onclick=\"return validateForm();\" language=\"javascript\" id=\"submitButton\" tabindex=\"109\" />\n              <div id=\"processingMessageContainer\" style=\"display: none;\" class=\"\">\n                <span>Your transaction is processing, please wait...</span>\n              </div>\n            </div>\n            </div>\n            <input type=\"hidden\" name=\"StatusCode\" id=\"StatusCode\" />\n            <input type=\"hidden\" name=\"HpsId\" id=\"HpsId\" />\n            <input type=\"hidden\" name=\"Amount\" id=\"Amount\" />\n            <input type=\"hidden\" name=\"AuthorizationCode\" id=\"AuthorizationCode\" />\n            <input type=\"hidden\" name=\"EntryDateUtc\" id=\"EntryDateUtc\" />\n            <input type=\"hidden\" name=\"Description\" id=\"Description\" />\n            <input type=\"hidden\" name=\"CardType\" id=\"CardType\" />\n            <input type=\"hidden\" name=\"CardSummary\" id=\"CardSummary\" />\n            <input type=\"hidden\" name=\"RequestId\" id=\"RequestId\" />\n            <input type=\"hidden\" name=\"ReceiptData\" id=\"ReceiptData\" />\n            <input type=\"hidden\" name=\"PaymentMadeBy\" id=\"PaymentMadeBy\" />\n            <input type=\"submit\" name=\"hiddenSubmitButton\" value=\"\" id=\"hiddenSubmitButton\" style=\"display: none;\" />\n            <input type=\"hidden\" name=\"HiddenCreditCardType\" id=\"HiddenCreditCardType\" />\n            <input type=\"hidden\" name=\"HiddenPaymentTypeVI\" id=\"HiddenPaymentTypeVI\" value=\"1\" />\n            <input type=\"hidden\" name=\"HiddenPaymentTypeMC\" id=\"HiddenPaymentTypeMC\" value=\"1\" />\n            <input type=\"hidden\" name=\"HiddenPaymentTypeDS\" id=\"HiddenPaymentTypeDS\" value=\"1\" />\n            <input type=\"hidden\" name=\"HiddenPaymentTypeAE\" id=\"HiddenPaymentTypeAE\" value=\"1\" />\n            <input name=\"reqid\" type=\"hidden\" id=\"reqid\" />\n          </form>\n        </body>\n      </html> -->\n\n     </div>\n\n      <div class=\"modal-info\">\n        <div class=\"modal-info-text\">\n         <span><i class=\"fa fa-info-circle\"></i> Need Help?</span>\n         <span class=\"modal-info-text-phone\">1-800-123-4567</span>\n       </div>\n      </div>\n    </div>\n  </div>\n</div>\n-->\n\n</section>\n";
  return buffer;
  });
})();
