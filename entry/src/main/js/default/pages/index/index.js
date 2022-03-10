import fetch from '@system.fetch';

export default {
    data: {
        username: "Username",
        living_room_active: true,
        dining_room_active: false,
        bed_room_active: false,
        bath_room_active: false,
        backyard_room_active: false,
        living_room: true,
        smart_tv: false,
        ac: true,
        washing_machine: false,
        refrigerator: false,
        carousel: true,
        dry_mode: false,
        cool_mode: false,
        fan_mode: false,
        turbo_mode: false,
        lamp1_p: "0",
        lamp2_p: "0",
        fan1_p: "0",
        fan2_p: "0",
        temperature: 0,
        humidity: 0,
        location: "Bangalore",
        weather: "Rainy",
        day: "Mob, Jan 01",
        alert_title: "Title",
        alert_desc: "Description"
    },
    toggleRoom(room){
        for(var i=0;i<5;i++){
            if(room==0){
                this.living_room_active=true;
                this.dining_room_active=false;
                this.bed_room_active=false;
                this.bath_room_active=false;
                this.backyard_room_active=false;
            }
            if(room==1){
                this.living_room_active=false;
                this.dining_room_active=true;
                this.bed_room_active=false;
                this.bath_room_active=false;
                this.backyard_room_active=false;
            }
            if(room==2){
                this.living_room_active=false;
                this.dining_room_active=false;
                this.bed_room_active=true;
                this.bath_room_active=false;
                this.backyard_room_active=false;
            }
            if(room==3){
                this.living_room_active=false;
                this.dining_room_active=false;
                this.bed_room_active=false;
                this.bath_room_active=true;
                this.backyard_room_active=false;
            }
            if(room==4){
                this.living_room_active=false;
                this.dining_room_active=false;
                this.bed_room_active=false;
                this.bath_room_active=false;
                this.backyard_room_active=true;
            }
        }
    },
    decreaseTemp: function(){
        if (this.temperature <= 16)
        {
            console.log("Minimimum Temperature reached !");
        }
        else
        {
            this.temperature-=.5;
            console.log("Temperature decreased by .5 degree !");
        }
    },
    increaseTemp: function(){
        if (this.temperature >= 31)
        {
            console.log("Maximum Temperature reached !");
        }
        else {
            this.temperature += .25;
            console.log("Temperature increased by .25 degree !");
        }
    },
    toggleLivingRoom: function() {
        this.living_room = !this.living_room;
        console.log("Living Room toggled !");
    },
    toggleDryMode: function() {
        this.dry_mode = !this.dry_mode;
        console.log("Dry Mode toggled !");
    },
    toggleCoolMode: function() {
        this.cool_mode = !this.cool_mode;
        console.log("Cool Mode toggled !");
    },
    toggleFanMode: function() {
        this.fan_mode = !this.fan_mode;
        console.log("Fan Mode toggled !");
    },
    toggleTurboMode: function() {
        this.turbo_mode = !this.turbo_mode;
        console.log("Turbo Mode toggled !");
    },
    onNewDevicesClick: function() {
        console.log("Add New Devices Button clicked !");
    },
    toggleSmartTV: function() {
        this.smart_tv = !this.smart_tv;
        console.log("Smart TV toggled !");
    },
    toggleAC: function() {
        this.ac = !this.ac;
        console.log("AC toggled !");
    },
    toggleWashingMachine: function() {
        this.washing_machine = !this.washing_machine;
        console.log("Washing Machine toggled !");
    },
    toggleRefrigerator: function() {
        this.refrigerator = !this.refrigerator;
        console.log("Refrigerator toggled !");
    },
    toggleCarousel: function() {
        this.carousel = !this.carousel;
        console.log("Carousel toggled !");
    },
    onDateClick: function() {
        console.log("Date Button clicked !");
    },
    onWeekClick: function() {
        console.log("Week Button clicked !");
    },
    fetchData : function(){
        let data;
        fetch.fetch({
            url:'https://neumorphism-api.herokuapp.com/neumorphism/living_room',
            responseType:"json",
            method: 'GET',
            success:function(resp)
            {
                data = JSON.parse(resp.data);
            },
            fail:(data,code) => {
                console.log("fail data:"+ JSON.stringify(data));
                console.log("fail code:"+ code)
            },
            complete: ()=>{
                this.username = data.username;
                this.living_room_active = data.living_room_active;
                this.dining_room_active = data.dining_room_active;
                this.bed_room_active = data.bed_room_active;
                this.bath_room_active = data.bath_room_active;
                this.backyard_room_active = data.backyard_room_active;
                this.living_room = data.living_room;
                this.smart_tv = data.smart_tv;
                this.ac = data.ac;
                this.washing_machine = data.washing_machine;
                this.refrigerator = data.refrigerator;
                this.carousel = data.carousel;
                this.dry_mode = data.dry_mode;
                this.cool_mode = data.cool_mode;
                this.fan_mode = data.fan_mode;
                this.turbo_mode = data.turbo_mode;
                this.lamp1_p = data.lamp1_p;
                this.lamp2_p = data.lamp2_p;
                this.fan1_p = data.fan1_p;
                this.fan2_p = data.fan2_p;
                this.temperature = data.temperature;
                this.humidity = data.humidity;
                this.location = data.location;
                this.weather = data.weather;
                this.day = data.day;
                this.alert_title = data.alert_title;
                this.alert_desc = data.alert_desc;
            }
        })
    },
    onInit(){
        this.fetchData();
        setInterval(this.fetchDateAndTime, 1000);
    }
}