var footerButtonController=function(){var e={};return e.emailSignupSelector=".email-signup-button",e.emailFormContainerSelector=".email-signup-wrapper",e.oauthButtonContainerSelector=".oauth-wrapper",e.takeMeBackButtonSelector=".show-oauth",e.containerSelector=".weebly-footer-signup-container-expanded",e.init=function(){var t=jQuery;t(e.emailSignupSelector).on("click",e.showEmailForm),t(e.takeMeBackButtonSelector).on("click",e.showOauthButtons),setTimeout(function(){t(".footer-social-signup-container").css("visibility","visible")},50)},e.showEmailForm=function(t){var o=jQuery;return t.preventDefault(),o(e.oauthButtonContainerSelector).hide(),o(e.emailFormContainerSelector).fadeIn(),!1},e.showOauthButtons=function(t){var o=jQuery;return t.preventDefault(),o(e.emailFormContainerSelector).hide(),o(e.oauthButtonContainerSelector).fadeIn(),!1},{init:e.init}}();_wAMD.define("site/published/footerButtonController",function(){}),_wAMD.define("site/footerButtonController",function(){});