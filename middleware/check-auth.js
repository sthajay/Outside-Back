const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'out_side_tech_nology_IT_Company_of_Nepal');
    next();

  }
  catch (error) {
    res.status(401).json({
      message: 'Authentication failed!!'
    });
  }

};


