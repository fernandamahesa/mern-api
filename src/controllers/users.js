exports.getUsers = (req, res, next) => {
  res.json({
    name: "fernanda mahesa",
    email: "fernandamahesa21@gmail.com",
  });
  next();
};

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  res.json({
    name: name,
    email: email,
  });
  next();
};
