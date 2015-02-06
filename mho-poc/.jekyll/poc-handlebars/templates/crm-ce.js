(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['crm-ce'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<article class=\"ce-result\">\n\n  <!-- Event title location date and time -->\n  <div id=\"ce-result-info\" class=\"row\">\n\n    <!-- Event Title -->\n    <div class=\"col-sm-8 ce-result-title\">\n      <h3><a data-toggle=\"modal\" data-target=\"#ce-modal-result-details\">";
  if (helper = helpers.resultName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n      <p>Celebrate all that life has to offer and reclaim your power over food! Register now for a free informational seminar to begin your Centennial Experience today!</p>\n      <p><i class=\"fa fa-pencil\"></i> <a>Bariatric Surgery</a></p>\n\n      <!-- Location information -->\n      <div class=\"row ce-result-location\">\n        <div class=\"col-xs-3 ce-result-location-img\">\n          <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page)),stack1 == null || stack1 === false ? stack1 : stack1.base_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "img/result-locations/result-location-default.png\" data-src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page)),stack1 == null || stack1 === false ? stack1 : stack1.base_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "img/result-locations/facility-stonecrest-1.jpg\" width=\"80\" height=\"80\" class=\"img-circle lazy\">\n        </div>\n        <div class=\"col-sm-9 ce-result-location-info\">\n          <p><i class=\"fa fa-map-marker\"></i> 3.5 Miles Away</p>\n          <a href=\"https://www.google.com/maps/place/2200+Murphy+Ave/@36.1547456,-86.8060501,17z/data=!3m1!4b1!4m2!3m1!1s0x886466b8ca81945f:0x7192c427307a32a3\">\n          <p>Tace Building</p>\n          <p>2200 Murphy Avenue Nashville TN 37203</p>\n          </a>\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n    <!-- Calendar and Time -->\n    <div class=\"col-sm-4 ce-result-date-time\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 ce-result-calendar\">{% include crm-ce/ce-little-calendar.html %}</div>\n        <div class=\"col-sm-12 ce-result-time\">\n          <p>September 28, 2014</p>\n          <p>9:00am - 11:30 am</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Result Attributes -->\n  <div id=\"ce-result-attributes\" class=\"row\">\n    <!-- Result details -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-details\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-result-details\"><i class=\"fa fa-calendar\"></i> See Full Details</a>\n    </div>\n\n    <!-- Availability -->\n    <div class=\"col-sm-3 ce-result-attribute ce-result-available\">\n      <span class=\"ce-alert-success\"><i class=\"fa fa-check-circle\"></i> 8/10 Spots Open</span>\n    </div>\n\n    <!-- Cost -->\n    <div class=\"col-sm-2 ce-result-attribute ce-result-cost\">\n      <span class=\"ce-alert-default\"><i class=\"fa fa-money\"></i> $100.00</span>\n    </div>\n\n    <!-- Register for event -->\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page)),stack1 == null || stack1 === false ? stack1 : stack1.base_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "register/\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Register for Event</a>\n    </div>\n\n    <!-- Call to register\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page)),stack1 == null || stack1 === false ? stack1 : stack1.base_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "register/\" class=\"btn btn-info\"><i class=\"fa fa-phone\"></i> Call: (123) 456-7890</a>\n    </div> -->\n\n    <!-- Joing waitlist\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.page)),stack1 == null || stack1 === false ? stack1 : stack1.base_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "register/\" class=\"btn btn-default\"><i class=\"fa fa-flag\"></i> Join Waitlist</a>\n    </div> -->\n\n    <!-- Toggle payment modal\n    <div class=\"col-sm-4 ce-result-cta\">\n      <a data-toggle=\"modal\" data-target=\"#ce-modal-payment\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Toggle Payment Modal</a>\n    </div> -->\n\n  </div>\n\n</article>\n";
  return buffer;
  }

  buffer += "---\ntitle: Classes & Events\nbase_url: \"../../\"\n---\n\n";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.classResults) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.classResults); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.classResults) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();