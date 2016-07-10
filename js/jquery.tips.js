(function ($) {
    //FIRST CAPTURE EVENT
    $('a[mobile-al-id]').on('click', function (e) {
            e.preventDefault();
            var tips = $(this).attr('mobile-al-id');
            $('#' + tips).tips($(this).data());
        })
        //SECOND CREATE A OBJECT
    $.fn.tips = function (options) {
        //SET DEFAULT PARMETTER 
        var def = {
            tipsClose:$('.tipsClose'),
            tipsMask:$('.tips-mask')
        };
        var opt = $.extend({}, def, options);
        return this.each(function (i) {
                var modal = $(this);
            
                
            
                //SET BIND EVENT 
                modal.bind('tips:open', function () {
                    modal.unbind('tips:open');
                    modal.css({
                        "visibility": "visible"
                    })
                });
                modal.bind('tips:close', function () {
                    modal.unbind('tips:close');
                     modal.css({
                        "visibility": "hidden"
                    })
                })
                 //SET LISTENER 
                modal.trigger('tips:open');
            
                if(opt.tipsClose.length > 0){
                    opt.tipsClose.bind('click',function(){
                         modal.trigger('tips:close');
                    })
                }  
                opt.tipsMask.bind('click',function(){
                     modal.trigger('tips:close');
                })
               
            })
        }
})(jQuery);