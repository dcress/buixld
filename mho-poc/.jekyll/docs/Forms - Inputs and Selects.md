# Forms

## Inputs
Inputs use bootstrap class <code>form-control</code> for styling the input/selects.
Inputs needs to be included in a div that has a defined column width
Required input fields include a font-awesome icon, refer to HTML below:

### Required inputs
	<form>
		<div class="row">
			<div id="" class="col-md-12 float-label">
				<i class="fa fa-exclamation-circle"></i>
				<input class="form-control" name="" type="text" id="" tabindex="" placeholder="Placeholder Text" required="1" />
			</div>
		</div>
	</form>