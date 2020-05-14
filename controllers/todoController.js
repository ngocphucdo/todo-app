const bodyParser = require("body-parser");
const urlencoderParse = bodyParser.urlencoded({ extended: false });

let data = [
  { item: "buy a note-book, a glass" },
  { item: "get some food" },
  { item: "hangout with theRobin" }
];

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/todo", (req, res) => {
    res.render("todoView", { todos: data });
  });

  app.post("/todo", urlencoderParse, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter(function(todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
