var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Item;
}());
var display = function (item) {
    console.log(item);
};
var obj = new Item(1, "ball", 30, "sports");
display(obj);
