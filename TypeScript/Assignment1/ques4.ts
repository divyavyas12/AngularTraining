class Item {
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;

    constructor(itemid:number, itemname:string, itemprice:number, category:string) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }

}

var display = (item:Item) => {
    console.log(item);
}

var obj:Item = new Item(1, "ball", 30, "sports");
display(obj);