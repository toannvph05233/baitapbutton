
function News(img, title, price,view, content) {
    this.img = img;
    this.title = title;
    this.price = price;
    this.content = content;
    this.view = view;
    // get
    this.getimg = function () {
        return this.img;
    }
    this.gettitle = function () {
        return this.title;
    }
    this.getprice = function () {
        return this.price;
    }
    this.getcontent = function () {
        return this.content;
    }
    this.getview = function () {
        return this.view;
    }

    // set
    this.setimg = function (img) {
        this.img = img;
    }
    this.settitle = function (title) {
         this.title=title;
    }
    this.setprice = function (price) {
         this.price=price;
    }
    this.setcontent = function (content) {
         this.content=content;
    }
    this.setcontent = function (view) {
         this.view=view;
    }

}

function get_more_news(classs) {
    classs.setimg = document.getElementById("link_img").value;
    classs.settitle = document.getElementById("title").value;
    classs.setprice = document.getElementById("price").value;
    classs.setcontent = document.getElementById("comtent").value;
    classs.setcontent = document.getElementById("view").value;

}

function display_more_new(classs) {
    let arr = "<li>" +
        "<img src=" + classs.getimg() +' height="150" width="170">'+" <h2>"+classs.gettitle()+" </h2>"+
        " giá :" + classs.getprice() +" <br><br>" + classs.getview()+"<br><br>" + classs.getcontent();
    return arr;
}