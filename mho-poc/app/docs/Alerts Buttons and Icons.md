# Alerts, Buttons & Icons

##Colors
Color variables set in the ce-variable.less file are used to use across many different systems

	@brand-primary:         #428bca;
	@brand-success:         #009900;
	@brand-warning:         #CC6600;
	@brand-danger:          #E96E57;
	@brand-info:            #999999;

##Buttons
Button markup uses standard Bootstrap v3 markup

	<a href="" class="btn btn-default"><i class="fa fa-flag"></i> Dark Button with Icon</a>
	<a href="" class="btn btn-success"><i class="fa fa-check"></i> Register for Event</a>
	<a href="" class="btn btn-info"> Button with Info</a>
	
	.btn, .btn-default  { background-color: @brand-primary; } // Dark Gray
	.btn-success        { background-color: @brand-success; } // Register (Green)
	.btn-warning        { background-color: @brand-warning; } // Yellow
	.btn-danger         { background-color: @brand-warning; } // Redish
	.btn-info           { background-color: @brand-info; }    // Light Gray

## Alerts
Alert classes have been created to match the user interaction of the buttons

	.ce-alert-default   { color: @brand-default; } // Dark Grey
	.ce-alert-success   { color: @brand-success; } // Green
	.ce-alert-warning   { color: @brand-warning; } // Yellow
	.ce-alert-danger    { color: @brand-danger; }  // Redish
	.ce-alert-info      { color: @brand-info; }    // Light Grey

## Icons
Combine alert classes with icons to create the appropriate message

	// Default = Dark normal alert
	<span class="ce-alert-default"><i class="fa fa-money"></i> $100.00</span>
	
	// Available = Success
	<span class="ce-alert-success"><i class="fa fa-check-circle"></i> 10/10 Spots Open</span>
	
	// Warning = Warning
	<span class="ce-alert-warning"><i class="fa fa-exclamation-circle"></i> 3/10 Spots Open</span>
	
###Icon are typically defined by two theme variables:

	@ce-icon-color:              @gray-light;
	@ce-icon-font-size:          18px;
