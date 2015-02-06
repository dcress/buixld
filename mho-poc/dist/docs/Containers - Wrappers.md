# Container and Wrappers
Contaiers are used to wrap <code>row</code> elements so that they <code>col-x-x</code> grid system works correctly.

##Small containers (HCA Standard)
Small containers facilitate the width of small screen or a container slightly smaller than the standard.

	.container-sm {
		max-width: @screen-sm; // Defined in ce-variables
	
		.container-fixed(); // In Bootstrap mixins. Adds gutter padding according to gutter variables and centers
	
		// Resposiveness
		@media (min-width: @screen-sm) { width: @container-sm; }
		@media (min-width: @screen-md) {width: @container-md; }
		@media (min-width: @screen-lg-min) { width: @container-lg; }
	}

## Container
Standard container to wrap <code>row</row> elements.
  
  .container {
    max-width: @screen-md; // Defined in ce-variables
  
    .container-fixed(); // In Bootstrap mixins. Adds gutter pading according to gutter variables and centers
  
    // Resposiveness
    @media (min-width: @screen-sm) { width: @container-sm; }
    @media (min-width: @screen-md) { width: @container-md; }
    @media (min-width: @screen-lg-min) { width: @container-lg; }
}

##Large container
Large containers are wrappers on elements that will go outside of the standard container size: <code>1200px;</code>

  .container-lg {
    max-width: @screen-lg; // Defined in ce-variables
  
    .container-fixed(); // In Bootstrap mixins. Adds gutter pading according to gutter variables and centers
  
    // Resposiveness
    @media (min-width: @screen-sm) { width: @container-sm; }
    @media (min-width: @screen-md) { width: @container-md; }
    @media (min-width: @screen-lg-min) { width: @container-lg; }
  }


