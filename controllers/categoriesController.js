const fetch = require('node-fetch');

module.exports.getAllCategories = async (req, res, next) => {
    try {
        const result = await fetch("https://demo2.meals4u.net/fe/api.test.php");
        const data = await result.json();
        res.status(200).send({ data })
    } catch (err) {
        res.status(400).send("Error Occured while fetching data");
    }
}

