const { Product } = require("../models/Product");

const getAllProducts = (req, res, next) => {
    Product.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            next(error);
        })
}

const getRandomProducts = async (req, res, next) => {
    const count = 4;
    const data = await getRandomResults(count)
    res.send(data);

}

const getWomenPopular = async (req, res, next) => {
    const count = 4;
    const data = await getRandomResults(count, "women");
    res.send(data);

}
const getRelatedProduct = async (req, res, next) => {
    const category = req.params.productCategory
    const count = 4;
    const data = await getRandomResults(count, category);
    res.send(data);

}

async function getRandomResults(count, category = false) {
    try {
        // Get the total count of documents in the collection
        const totalDocuments = await Product.find(
            category ?
                { category: category } : null
        ).countDocuments();

        // Generate random indexes to fetch random documents
        const randomIndexes = generateRandomIndexes(count, totalDocuments);

        // Fetch documents based on random indexes
        const randomDataPromises = randomIndexes.map(async (index) => {
            return await Product.findOne(
                category ?
                    { category: category } : null
            ).skip(index);
        });

        // Wait for all promises to resolve
        const randomData = await Promise.all(randomDataPromises);

        return randomData;


    } catch (error) {
        console.error('Error fetching random data:', error);
        throw error;
    }

    function generateRandomIndexes(count, total) {
        const indexes = [];
        while (indexes.length < count) {
            const randomIndex = Math.floor(Math.random() * total);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    }

}


module.exports = {
    getAllProducts,
    getRandomProducts,
    getWomenPopular,
    getRelatedProduct,
}