const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const foundCategory = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],
    });
    if (!foundCategory) {
      res.status(404).json({ message: "No category with that ID found!" });
      return;
    }
    res.status(200).json(foundCategory);
  } catch (err) {
    es.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      { category_name: req.body.category_name },
      {
        where: { id: req.params.id },
      }
    );
    if (!categoryData) {
      res.status(404).json({ message: "no category with that ID found!" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that ID!" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

function flat(arr) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      console.log("curr is a number: ", arr[i]);
      ret.push(arr[i]);
      console.log("Current ret value: ", ret);
    } else {
      console.log("Curr is an array, recursing in");
      const tmp = flat(arr[i]);
      console.log("got back: ", tmp);
      console.log("before concat: ", ret);
      ret = ret.concat(tmp);
      console.log("after concat: ", ret);
    }
  }
  return ret;
}
