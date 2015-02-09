(function() {
    fileUpload();
})();

/* Image Upload functionality on User Profile page */
function fileUpload() {
    /* File upload manipulation */
    $("#upload_link").on('click', function(e){
        e.preventDefault();
        $("#uploadProfileImage:hidden").trigger('click');
    });

    /* Preview uploaded file on browsers that support html5 file API */
    if (window.File && window.FileReader) { //check for browser support - IE8 and IE9 does not support
        function handleFileSelect(evt) {
            var files = evt.target.files; // FileList object
            // Loop through the FileList and render image files as profile image.
            var f;
            for (var i = 0; f = files[i]; i++) {
                // Only process image files.
                if (!f.type.match('image.*')) {
                    continue;
                }

                var reader = new FileReader();
                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        var image = ['<img class="img-circle img-responsive" width="100%" src="', e.target.result,
                                     '" title="', escape(theFile.name), '"/>'].join('');
                        $('#profile-placeholder').html(image);
                        //document.getElementById('list').insertBefore(span, null);
                        localStorage.setItem('img', e.target.result);
                    };
                })(f);

                // Read in the image file as a data URL.
                reader.readAsDataURL(f);
            }
        }

        document.getElementById('uploadProfileImage').addEventListener('change', handleFileSelect, false);
        if(localStorage.img) {
            var image1 = ['<img class="img-circle img-responsive" width="100%" src="', localStorage.img,
                          '" title="profile picture"/>'].join('');
            $('#profile-placeholder').html(image1);
        }
    }
    else {
        $('#profile-placeholder').hide();
        $('#upload_link').hide();
        $('#uploadProfileImage').show();
        $('#profile-ie-image').show();
    }
}
