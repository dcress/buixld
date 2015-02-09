// CE CRM Module - Global Vars JavaScript

/////////////////////////////////////////////////////////////////
// dotCMS Services Controller Variables
/////////////////////////////////////////////////////////////////
var service_host = document.getElementById("ehc_ce_service_hostname").value;
var service_url = service_host + "/src/crm/ce/pages/ce-service-controller.dot";
var service_success = "Success";
var service_success_code = 200;

// Actions
var ehc_ce_services_autocomplete = "autocomplete";
var ehc_ce_services_confirm_enrollment = "enroll";
var ehc_ce_service_session_action = "session";
var ehc_ce_service_facilities_action = "facilities";
var ehc_ce_service_enrollment_action = "enrollment";
var ehc_ce_service_withdraw_action = "withdraw";
var ehc_ce_service_initialize_enrollment_action = "initialize_enrollment";
var ehc_ce_service_finalize_enrollment_action = "finalize_enrollment";

// Get Enrollment parameters
var ehc_ce_service_get_enroll_first_name = "ehc_ce_get_enrollment_first_name";
var ehc_ce_service_get_enroll_last_name = "ehc_ce_get_enrollment_last_name";
var ehc_ce_service_get_enroll_confirmation_num = "ehc_ce_get_enrollment_confirmation_number";

// Withdraw parameters
var ehc_ce_service_withdraw_first_name = "ehc_ce_withdraw_first_name";
var ehc_ce_service_withdraw_last_name = "ehc_ce_withdraw_last_name";
var ehc_ce_service_withdraw_confirmation_num = "ehc_ce_withdraw_confirmation_number";

// Finalize parameters
var ehc_ce_finalize_enroll_hps_confirmation = "ehc_ce_finalize_enroll_hps_confirmation";
var ehc_ce_finalize_enroll_request_id = "ehc_ce_finalize_enroll_request_id";

// Get Session parameters
var ehc_ce_service_session_id = "ehc_ce_initiate_enroll_event_session_id";
var ehc_ce_service_employee_id = "ehc_ce_initiate_enroll_employee_id";

// Get Facilities parameters
var ehc_ce_service_region = "ehc_ce_search_region";

// Search ids
var ehc_ce_search_keyword_id = "ehc_ce_search_keyword";

// Initiate enrollment parameters
var ehc_ce_initiate_enrollment_session_id = "ehc_ce_initiate_enroll_event_session_id";

// Discount Modal ids
var ehc_ce_enroll_discount_modal_id = "ehc-ce-modal-discount";
var ehc_ce_enroll_discount_value = "ehc_ce_initiate_enroll_discount_value";
var ehc_ce_withdraw_modal = "ce-modal-withdrawal";

/////////////////////////////////////////////////////////////////
// Validation Variables
/////////////////////////////////////////////////////////////////

// Validation Form
var ehc_ce_validation_set_search = "search";
var ehc_ce_validation_set_get_enrollment = "get_enrollment";
var ehc_ce_validation_set_withdraw = "withdraw";
var ehc_ce_validation_set_initiate_enrollment = "initiate_enrollment";

/////////////////////////////////////////////////////////////////
// Sorting / Pagination Vars
/////////////////////////////////////////////////////////////////
var event_container = "#ce-results-listing";
var event_selector = ".ce-sortable-result";

/////////////////////////////////////////////////////////////////
// Enrollment / General
/////////////////////////////////////////////////////////////////

// Variables to hold values for Finalize response
var confirmation_number, token, request_id;

// Modal ids
var ehc_ce_intiate_enrollment_modal_id = "process-enrollment-modal";
var ehc_ce_result_detail_modal_id = "ce-modal-result-details";

// General variable for holding session id
var ehc_ce_transaction_session_id;
// General variable for emergency phone
var ehc_ce_emergency_phone;

/////////////////////////////////////////////////////////////////
// Validation / Error Handling
/////////////////////////////////////////////////////////////////

// Error Message Wrap Id - variable for the error message wrap
var error_message_wrap_id = "error-message-wrap";

// Error Phone
var error_phone;

// Holds missing required fields when validating
var missing_required_fields = [];

// REGEX
// dob: dd/mm/yyyy
var date_regex = /(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)\d\d/;
// zip: 5 digit: ^\d{5}$
var zip_regex = /^\s*\d{5}\s*$/;
// email needs to have an @ in it 
var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// US Phone: 333-333-3333
var phone_regex = /^[2-9]\d{2}-\d{3}-\d{4}$/;
