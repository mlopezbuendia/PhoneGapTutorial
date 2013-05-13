var app = {
            
    showAlert: function(message, title){
        if(navigator.notification){
            navigator.notification.alert(message, null, title, "OK");
        }
        else{
            alert(title ? ( title + ':' + message ) :  message);
        }
    },
            
    registerEvents: function (){
        var self = this;
        
        //Check of browser support
        if(document.documentElement.hasOwnProperty('ontouchstart')){
            //...if yes register touch event listener to change the status of the selected item
            $('body').on('touchstart', 'a', function(event){
                                                $(event.target).addClass('tappable-active');
                                            }
            );
            $('body').on('touchend', 'a', function(event){
                                            $(event.target).removeClass('tappable-active');
                                          }
            );
        }
        else{
            //...if no, register mouse events instead
            $('body').on('mouseover', 'a', function(event){
                                                $(event.target).addClass('tappable-active');
                                            }        
            );
            $('body').on('mouseout', 'a', function(event){
                                                $(event.target).removeClass('tappable-active');
                                            }                
            );
        }
    },

    initialize: function() {
        var self = this;
        
        this.store = new MemoryStore(
                function(){
                    $('body').html(new HomeView(self.store).render().el);
                }
            );
        
        //Register events...
        this.registerEvents();
        
    }
};

app.initialize();