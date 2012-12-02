//The plugin functionality that should create the phone and enable dialing.

(function ($) {
    $.fn.str = function () {
        var id = $(this).closest("div").attr("id");
		$(this).append($("<input/>", {'id' : id , 'type' : "text"}));
        //this.prepend("<button>1</button>").append("<button>2</button>").append("<button>3</button>");
        //this.removeClass("button");
        // Set the CSS for the main arrow div.
        //this.addClass("button");
    };
})(jQuery);
