$(document).ready(function(){
    $(document).ready(function(){
        $('.nav-item a').hover(function(){
            $(this).css({
                'background':'var(--purple)',
                'color':'#fff',
                'transform':'skew(-10deg)',
                'transition': 'all .2s ease-in-out'
                
            });
        }, function(){
            $(this).css({
                'background':'initial',
                'color':'',
                'transform':'skew(0deg)',
                'transition': 'all .2s ease-in-out'
                
            }); 
        });
    });
    $(document).ready(function(){
        $('.btn').hover(function(){
            $(this).css({
                'background':'var(--dark)',
                'transition': 'all .2s ease-in-out'
                
            });
        }, function(){
            $(this).css({
                'background':'initial',
                'transition': 'all .2s ease-in-out'
                
            }); 
        });
    });
    $(document).ready(function(){
        $('.btn2').hover(function(){
            $(this).css({
                'background':'var(--dark)',
                'color':'#fff',
                'transition': 'all .2s ease-in-out',
                'border':'1px solid var(--dark)'
                
            });
        }, function(){
            $(this).css({
                'background':'',
                'color':'',
                'transition': 'all .2s ease-in-out',
                'border':''
                
            }); 
        });
    });
    $(document).ready(function(){
        $('.btn3').hover(function(){
            $(this).css({
                'background':'var(--dark)',
                'color':'#fff',
                'transition': 'all .2s ease-in-out',
                
            });
        }, function(){
            $(this).css({
                'background':'',
                'color':'',
                'transition': 'all .2s ease-in-out',
                
            }); 
        });
    });
    $(document).ready(function(){
        $('.btn4').hover(function(){
            $(this).css({
                'background':'var(--dark)',
                'color':'#fff',
                'transition': 'all .2s ease-in-out',
                
            });
        }, function(){
            $(this).css({
                'background':'',
                'color':'',
                'transition': 'all .2s ease-in-out',
                
            }); 
        });
    });
    $(document).ready(function(){
        $('.icon-user, .header-cart-icon').hover(function(){
            $(this).css({
                'background':'var(--dark)',
                'color':'#fff',
                'transition': 'all .2s ease-in-out',
                'border-radius':'50%'
            });
        }, function(){
            $(this).css({
                'background':'',
                'color':'',
                'transition': 'all .2s ease-in-out',
                
            }); 
        });
    });
})