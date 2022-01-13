export default {
    data: {
        living_room: false,
        smart_tv1: false,
        ac: false,
        washing_machine: false,
        refrigerator: false,
        backyard_camera: false,
    },
    toggle_living_room: function() {
        this.living_room = !this.living_room;
    },
    toggle_smart_tv1: function() {
        this.smart_tv1 = !this.smart_tv1;
    },
    toggle_ac: function() {
        this.ac = !this.ac;
    },
    toggle_washing_machine: function() {
        this.washing_machine = !this.washing_machine;
    },
    toggle_refrigerator: function() {
        this.refrigerator = !this.refrigerator;
    },
    toggle_backyard_camera: function() {
        this.backyard_camera = !this.backyard_camera;
    }
}