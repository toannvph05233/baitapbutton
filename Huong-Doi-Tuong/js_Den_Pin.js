function Electriclamp(status) {
    this.status = status;
    
    this.status_Lamp = function () {
        return this.status
    }
    this.turnOff = function () {
        this.status = false;
    }
    this.turnOn = function () {
        this.status = true;
    }

}

function SwitchButton() {

    this.Switch_On =function (electric) {
        electric.turnOn();
    }
    this.Switch_Off =function (electric) {
        electric.turnOff();
    }

}