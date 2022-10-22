const models = require("../models");

//get property
const getProperty = async (req, res) => {
  try {
    const property = await models.Property.findAll({
        include: [
            {
              model: models.property_Owner,
            },
          ],
    });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json(err);
  }
};

//add property
const addProperty = async (req, res) => {
  const {
    propertyName,
    type,
    numberOfUnits,
    owner,
    country,
    state,
    lga,
    town,
    street,
    P_OwnerId,
  } = req.body;
  try {
    const property = await models.Property.create({
      propertyName,
      type,
      numberOfUnits,
      owner,
      country,
      state,
      lga,
      town,
      street,
      P_OwnerId,
      propertyImage: req.file,
    });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update property
const updateProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await models.Property.findOne({
      where: {
        id: `${id}`,
      },
      returning: true,
      plain: true,
    });
    await property.update(req.body);
    res.json(property);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete property
const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    await models.Property.destroy({
      where: {
        id: id,
      },
    });
    res.json("property removed");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
};
