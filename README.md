jquery-multiactionform
======================

An HTML Form&nbsp;requiring&nbsp;multiple submit actions isn't all that common. But how do you go about doing it when it is needed? Sure you could submit the form to a single action and write some server side logic to direct the data where it's needed. What if you want/need to handle this submission logic on the client side? Not to worry, JavaScript in the form of a jQuery plugin makes an excellent fit for this.<br />
<div>
<div>
Here's a sample of what the HTML for the proposed multi-action form could look like:</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/--pquOqjCIH4/UX9H6fxiXPI/AAAAAAAAApQ/tceNKqIcDiE/s1600/multi-action-sample-html.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/--pquOqjCIH4/UX9H6fxiXPI/AAAAAAAAApQ/tceNKqIcDiE/s1600/multi-action-sample-html.png" height="221" width="640" /></a></div>
<div>
<br /></div>
<div>
The client side code required to submit a form to varying actions is straight forward. The way I aproched it was to use data-dash attributes to designate a form element as "multi-action". This would allow the jQuery plugin to find and extend the form.</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-_5WsI-EACIY/UX83syV5ECI/AAAAAAAAAog/12NW1728fvQ/s1600/initializeMultiActionForms.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-_5WsI-EACIY/UX83syV5ECI/AAAAAAAAAog/12NW1728fvQ/s1600/initializeMultiActionForms.png" /></a></div>
<div>
<br /></div>
<div>
I also use these data-dash attributes to store the submit action used when the button is clicked.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-fXreT9hiA8s/UX9K4imSwBI/AAAAAAAAApg/PaqVEUVwnBw/s1600/multi-action-button.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-fXreT9hiA8s/UX9K4imSwBI/AAAAAAAAApg/PaqVEUVwnBw/s1600/multi-action-button.png" /></a></div>
<br />
Once the plugin has a handle on the form I grab all the "type=submit" elements inside of it. I then iterate over each one, attaching a click event handler to capture the button/action that was selected.&nbsp;</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-P8o_XYWf3lw/UX8-QkBIzII/AAAAAAAAAow/OXAwFggqROk/s1600/multi-action-click-handler.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-P8o_XYWf3lw/UX8-QkBIzII/AAAAAAAAAow/OXAwFggqROk/s1600/multi-action-click-handler.png" /></a></div>
<div>
<br /></div>
<div>
I then register a handler for the submit event on the base form being extended by the jQuery plugin.</div>
<div>
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-4udEog_XEWk/UX9EmoxYzLI/AAAAAAAAApA/uGwC-6rfE54/s1600/multi-action-submit.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-4udEog_XEWk/UX9EmoxYzLI/AAAAAAAAApA/uGwC-6rfE54/s1600/multi-action-submit.png" /></a></div>
<div>
<br />
That's it for the core functionality.</div>
<div>
<br /></div>
This article was pulled from my blog: http://appdev101.blogspot.com/


