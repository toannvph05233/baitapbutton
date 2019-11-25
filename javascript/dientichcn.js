function tinhdientich() {
    var width = prompt("hãy nhập chiều dai hình chữ nhật :");
    var height = prompt("hãy nhập chiều rộng của hình chữ nhật :");
    var dientich = parseInt(width)*parseInt(height);

    document.getElementById("dientich").innerHTML = "diện tích hình chữ nhật có chiều dài là :" + width
        +" có chiều rộng là :" + height + " = " + dientich;
}