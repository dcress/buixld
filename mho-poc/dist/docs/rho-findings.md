# Smart Wizard
https://github.com/mstratman/jQuery-Smart-Wizard

## Goal
Separate the "next", "previous", "submit" etc button group from the wizard to reuse elsewhere and allow the "submit" and "cancel" button actions to be separately specified. Add validation.

## Issues
https://github.com/mstratman/jQuery-Smart-Wizard/issues/58
  1. Doesn't seem to have a native implementation to affect property values after initialization
  2. Upon reaching last step and clicking 'Previous', the next-to-last step has 'Submit' enabled
  3. jQuery validate happens onSubmit vs. leaving a step
  4. steps 3 & 4 use radio buttons - however, the iCheck plugin is overriding radio button behavior by replacing the element with an ins tag to accept custom styling. This means we can't validate if a button is :checked
  
## Workarounds
  1. Removed href attribute from the cancel btn property in the .js file - instead use a class hook to specify 'Cancel' btn href on a per page basis.
  
    Similarly, the form action can be changed on a per page basis.
  
    Added other class hooks for the buttons to indicate the current step
    
  2. Appended the buttonDisabled class to the 'Submit' btn, except for the last step

  3. Use Smart Wizard validation methods

  4. will try hasClass?
