



function Mouse(name,vi_tri,status,weight) {
    this.name=name;
    this.vi_tri = vi_tri;
    this.status = status;
    this.weight = weight;
    this.vi_triNew = 5;

    this.check_Status = function () {
        return (this.status == true);
    }

    this.say_mouse = function (say) {
        return say;
    }

    this.set_vi_triM = function(vi_triM) {
        this.vi_triNew = vi_triM;
    }
    this.get_vi_triM = function () {
        return this.vi_tri;
    }
    this.runM = function () {
        this.vi_tri += this.vi_triNew;
    }
}





function Cat(name,vi_tri,weight) {
    this.name=name;
    this.vi_tri = vi_tri;
    this.weight = weight;
    this.vi_triNew = 5;

    this.set_vi_triC = function(vi_tricat) {
        this.vi_triNew = vi_tricat;
    }
    this.get_vi_triC = function () {
        return this.vi_tri;
    }

    this.eat_mouse = function (mouse) {
        if (mouse.check_Status() == true){
              this.weight += mouse.weight;
              return true;
        } else {
            return false;
        }
    }
    this.runC = function () {
        this.vi_tri += this.vi_triNew;
    }
}