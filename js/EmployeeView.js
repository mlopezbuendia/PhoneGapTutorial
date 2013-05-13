var EmployeeView = function (employee){
    
    this.initialize = function(){
        this.el = $('<div/>');
    };
    
    this.addLocation = function(event){
        event.preventDefault();
        console.log("addLocation");
        navigator.geolocation.getCurrentPosition(
                function(position){
                    $('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
                },
                function(error){
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            alert("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            alert("The request to get user location timed out.");
                            break;
                        case error.UNKNOWN_ERROR:
                            alert("An unknown error occurred.");
                            break;
                        }
                }
        );
        return false;
    };
    
    this.render = function(){
      this.el.on('click', '.add-location-btn', this.addLocation);
      this.el.html(EmployeeView.template(employee));
      return this;
    };
    
    this.initialize();
    
};

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());