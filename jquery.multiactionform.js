(function ($) {

    //###############################################################################

    /*  
    *   jQuery multiActionForm plugin
    *   Original author: @pedromontoya
    *   Description:
    */

    //###############################################################################

    var defaultSettings = { allowDefault: true };

    $.fn.multiActionForm = function (settingArgs) {
        //Initialize plugin settings.
        var settings = $.extend({}, defaultSettings);

        if (settingArgs) {
            $.extend(settings, settingArgs);
        }

        //Iterate over each form in the selected element collection.
        return this.each(function () {
            var $formElement = $(this),
                $submitElements = $("[type='submit']", $formElement);

            if ($submitElements && $submitElements.length > 0) {
                //Keep track of the submit button that was clicked.
                var clickedButton = null;
                $submitElements.each(function () {
                    $(this).click(function () {
                        clickedButton = this;
                    });
                });

                //Register submit handler for multi action form.
                $formElement.submit(function (e) {
                    if (clickedButton) {
                        var action = $(clickedButton).data("submitaction");
                        if (action) {
                            this.action = action;
                            return true;
                        }
                    }

                    //Proceed to post if settings allow default action on the form element itself.
                    if (settings.allowDefault) {
                        return true;
                    }
                    
                    return false;
                });
            }
        });
    };

    //###############################################################################

    //Initialize forms.
    $(function () {
        $("[data-multiactionform]").multiActionForm();
    });

    //###############################################################################

})(jQuery)