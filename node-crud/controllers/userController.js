const { AppDataSource } = require("../data-source");
const userRepository = AppDataSource.getRepository("User");

exports.createUser = async (req, res) => {
  try {
    const newUser = userRepository.create(req.body);
    const savedUser = await userRepository.save(newUser);
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  const users = await userRepository.find();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};

exports.updateUser = async (req, res) => {
  const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
  if (user) {
    userRepository.merge(user, req.body);
    const updatedUser = await userRepository.save(user);
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.deleteUser = async (req, res) => {
  const result = await userRepository.delete(req.params.id);
  if (result.affected > 0) res.json({ message: "User deleted" });
  else res.status(404).json({ message: "User not found" });
};
