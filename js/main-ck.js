$(document).ready(function(){function t(){var t=$(window).height()-12;$(".bg").height(t);e!=0?$(".bg").backstretch("./images/home_bg_re.jpg"):$(".bg").backstretch("./images/home_bg.jpg")}function n(){var e=$(window).height()-12,t=$(window).width(),n=t/2,r=e/2;$(".content").css({left:n-185,top:r-185})}var e=!0;$(window).load(function(){t();n()});$(window).resize(function(){t();n()});$(".first").mouseenter(function(){e=!0;$(".bg").backstretch("./images/home_bg_re.jpg")});$(".last").mouseenter(function(){e=!1;$(".bg").backstretch("./images/home_bg.jpg")})});