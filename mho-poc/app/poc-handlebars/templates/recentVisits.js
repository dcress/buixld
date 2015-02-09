(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recentVisits'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"recent-visit-listing container\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"visit-info\">\n            <a href=\"recent-visit-detailed.html\"><div class=\"visit-info-date pull-left\">\n              <h3>";
  if (helper = helpers.visitDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.visitDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n            </div>\n            <div class=\"hyphen pull-left\"><h3>&nbsp;-&nbsp;</h3></div>\n            <div class=\"visit-info-type pull-left\">\n              <h3>";
  if (helper = helpers.visitType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.visitType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n            </div></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 listing-info\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"row\">\n                <div class=\"col-md-6 listing-facility-info\">\n                  <div class=\"info-label-head\">FACILITY</div>\n                  <div class=\"info-label-value\">";
  if (helper = helpers.facilityName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facilityName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                </div>\n                <div class=\"col-md-6 listing-contact-info\">\n                  <div class=\"info-label-head\">CONTACT</div>\n                  <div class=\"info-label-value\">";
  if (helper = helpers.contactNo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contactNo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                </div>\n                <div class=\"col-md-5 listing-address-info\">\n                  <div class=\"info-label-head\">YOUR ADDRESS</div>\n                  <div class=\"info-label-value\">";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                </div>\n                <div class=\"col-md-6\"></div>\n              </div>\n            </div>\n            <div class=\"col-md-6 listing-reason-info\">\n              <div class=\"info-label-head\">REASON</div>\n              <div class=\"info-label-value\"><p>";
  if (helper = helpers.reason) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reason); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div><!-- End of listing Info -->\n    ";
  return buffer;
  }

  buffer += "/* Start of Header area */\n     <div class=\"header-area\" id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <i class=\"icon-tasks pull-left\"></i><h2>";
  if (helper = helpers.pageName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n              </div>\n        </div>\n      </div>\n    </div>\n    /* End of Header Area */\n\n     <!-- Start of Main Content Area -->\n    <div class=\"container health-records-container\" id=\"recentVisitListing\">\n      <div class=\"row\">\n        <div class=\"col-md-8 health-records-content\" role=\"main\">\n          <div class=\"recent-visits-paragraph info-label-value\">\n            <p>Listed below is information about your most recent visits. Click links to access additional details about a specific visit. Click <strong>Summary of Care</strong> to access a list of all your visits to this facility and information about each.</p>\n          </div>\n        </div><!-- End of col-md-8 -->\n\n        <div class=\"col-md-4\">\n          <div class=\"recent-visits-pinboard less-margin\">\n            <div class=\"row access-area\">\n              <div class=\"col-md-12\">\n                <i class=\"icon-plus-sign\"></i>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"bold-text\">ACCESS YOUR ACCOUNT</div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"regular-text\">SUMMARY of CARE</div>\n            </div>\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-primary\"><i class=\"icon-download-alt\"></i>Download</a>\n            </div>\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-primary\"><i class=\"icon-share\"></i>Transmit</a>\n            </div>\n        </div>\n        </div>\n      </div> <!-- End of col-md-4 -->\n    </div> <!-- End of Main Content Area row -->\n  </div> <!-- End of Health Records Content -->\n\n    <hr />\n\n     <!-- Listing Info -->\n     ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.visitInfo) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.visitInfo); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.visitInfo) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
})();