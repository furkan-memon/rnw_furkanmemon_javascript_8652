$(document).ready(function() {
    // 1. Attach an event handler to the form's submit event
    $("#dataForm").submit(function(event) {
        // Prevent the default form submission (which causes a page reload)
        event.preventDefault();

        // **JQUERY TRAVERSING**
        // a) Start at the form element (this) and use .find() to get all input elements
        var $form = $(this);
        var $inputs = $form.find('input[type="text"]');

        // b) Use .each() to iterate over the collection of inputs and build a data object
        var formData = {};
        $inputs.each(function() {
            var $input = $(this);
            // c) Use .attr() to get the name and .val() to get the value
            formData[$input.attr('name')] = $input.val();
        });

        // We want to exclude the 'secret' key from the data object
        // NOTE: A more efficient way to get all non-secret inputs would be:
        // var formData = $form.find('input:not(#data-secret)').serialize();

        // For this example, let's manually filter to show traversing/selection
        // We will remove the 'secret' property from the final object
        delete formData['secret'];

        // **AJAX CALL**
        $.ajax({
            type: "POST", // HTTP method
            url: "your-server-endpoint.php", // Replace with your actual server URL
            data: formData, // The data object created using traversing
            dataType: "json", // Expected data type from the server

            // d) Success callback
            success: function(response) {
                // Find the result message container and update it
                // We use .parent() and .find() to show another traversing example
                // Get the button that was clicked and find its closest ancestor div with a class of form-group, then find the result message globally.
                $form.siblings("#result-message")
                    .removeClass("error-message")
                    .addClass("success-message")
                    .html("<b>Success!</b> Data submitted: " + JSON.stringify(response));
            },

            // e) Error callback
            error: function(xhr, status, error) {
                $("#result-message")
                    .removeClass("success-message")
                    .addClass("error-message")
                    .html("<b>Error:</b> Could not contact server or request failed. Status: " + status);
            }
        });
    });
});