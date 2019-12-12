function Apple(soluong) {
    this.soluong = soluong;

    this.getsoluong = function () {
        return this.soluong;
    }

    this.setsoluong = function (soluong) {
        this.soluong = soluong;
    }
    this.tao_apple = function () {
        let sotao= prompt("hay nhap so luong tao :");
        this.setsoluong(parseInt(sotao));
        alert(this.soluong);
    }

    this.giam = function () {
        this.soluong--;
    }
}


function Human(name,gioitinh,cannang) {
    this.name=name;
    this.gioitinh=gioitinh;
    this.cannang = cannang;

    this.getname = function () {
        return this.name;
    }
    this.getgioitinh = function () {
        return this.gioitinh;
    }
    this.getcannang = function () {
        return this.cannang;
    }

    this.setname = function (name) {
        this.name = name;
    }
    this.setgioitinh = function (gioitinh) {
        this.gioitinh = gioitinh;
    }
    this.setcannang = function (cannang) {
        this.cannang = cannang;
    }

    this.an_apple = function (apple) {
        apple.giam();
        this.cannang++;
    }

}