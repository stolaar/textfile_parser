const BaseController = require("./BaseController");
const fs = require("fs");
class FilesController extends BaseController {
    constructor(req, res, next) {
        super(req, res, next);
    }

    async readFile() {
        try {
            let arr = Object.keys(this._req.body).map(key => key.split("\n")).flat();
            let splitted = [], index = 0;
            while (arr.length > 0) {
                let endIndex = arr.findIndex(el => el === "");
                const chunk = endIndex > 0 ? arr.splice(index, endIndex + 1) : arr.splice(index, arr.length);
                const obj = { name: "", items: [] };
                const regex1 = new RegExp(/[^\s\d.-]\w+/);
                chunk.forEach(el => {
                    if (el.match(/^[0-9](.)[a-zA-Z0-9]*$/)) {
                        obj.name = regex1.exec(el)[0] || null;
                    }
                    if (el.match("-")) {
                        let item = regex1.exec(el)[0] || null;
                        if (!item) {
                            console.warn("Item property should be style as \"- Item\"");
                        }
                        obj.items.push({ name: item });
                    }
                })
                if (obj.name === "") {
                    console.warn("Head property should be style as \"- HeadName\"");
                } else
                    splitted.push(obj);
            }
            return this._res.send(splitted);
        } catch (err) {
            this._next(err);
        }
    }
}

module.exports = FilesController;