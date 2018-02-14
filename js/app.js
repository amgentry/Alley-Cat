/**
 * Created by alexgentry on 10/8/16.
 */
$(document).ready(function(){
    var sectionCount = $(".scroll-container").children().length;

    var scrollContWidth = sectionCount * 100;
    $(".scroll-container").css("width", scrollContWidth + "%")

    var sectionwidth = $(".scroll-container section").width();
    // $("header").append(sectionwidth);




    $("header a").click(function (e) {
        var btnID = this.id;
        // $("header").append(btnID);

        TweenMax.to($(".scroll-container"), 1, {x: -(sectionwidth * btnID)});

    });

    // TweenMax.to($("scroll-container"), 1,{x: "-sectionwidth"});
});
