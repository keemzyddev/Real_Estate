const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//get User
const getUser = async (req, res) => {
  try {
    const user = await models.Property_Owner.findAll({
      include: [
        {
          model: models.Property,
        },
      ],
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//register User
const addUser = async (req, res) => {
  const { lastName, firstName, email, password, phone, dob } = req.body;

  try {
    const emailExist = await models.Property_Owner.findOne({
      where: {
        email: `${email}`,
      },
    });

    if (emailExist) {
      return res.json("Email already registered");
    } else {
      const salt = await bcrypt.genSalt(16);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = await models.Property_Owner.create({
        lastName,
        firstName,
        email,
        password: hashPassword,
        phone,
        dob,
        profileImage: req.file,
        Token: accessToken(user.id),
      });
      console.log(newUser);
      return res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await models.Property_Owner.findOne({
      where: {
        email: `${email}`,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        Token: accessToken(user.id),
      });
    } else {
      res.status(401).json("Incorrect email or password!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await models.Property_Owner.findOne({
      where: {
        id: `${id}`,
      },
      returning: true,
      plain: true,
    });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await models.Property_Owner.destroy({
      where: {
        id: id,
      },
    });
    res.json("user deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUser,
  addUser,
  loginUser,
  updateUser,
  deleteUser,
};

const accessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
};
