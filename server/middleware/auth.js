import jwt from 'jsonwebtoken';
import User from '../models/User';

// use this middleware for authentication
const auth = async (req, res, next) => {
  const { authorization } = req.headers.authorization;

  if (!authorization) return res.status(401).json('Authorizaton token required!');

  try {  
    const token = authorization.split('  ')[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
        // verify custom token
      decodedData = jwt.verify(token, 'secret');

      req.userId = decodedData?.id; 

      // do this next
      req.userId = await User.findOne({ _id: decodedData }).select('_id') // find and return the corresponding id in the db
    } else {
      // verify google oauth token
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub(); 
      // do this next
      req.userId = await User.findOne({ _id: decodedData }).select('_id') // find and return the corresponding id in the db
    }

    next();
  } catch (error) {
    next(error); // Request is not authorized
  }
};