import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import  validator  from "validator";
import { createError } from "../utils/error.js";

const createToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.SECRET, { expiresIn: '3d' });
};

export const signup = async (req, res, next) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    // might be removed later, cos it will handled from the frontend
    if (!email || !password || !confirmPassword || !firstName || !lastName) return next(createError(400, 'All fields are required'));

    if (!validator.isEmail(email)) return res.status(400).json('Email is not valid!');

    const existingUser = await User.findOne({ email });

    if (existingUser) return next(createError(400, 'Email already in use!'));    

    if (password !== confirmPassword) return next(createError(400, 'Passwords do not match!')); 

    if (!validator.isStrongPassword(password)) return next(createError(400, 'Password is not strong enough!')); 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: `${firstName} ${lastName}`,
      email: email,
      password: hashedPassword
    });

    // jsm => newUser.create() note: 'new' keyword not added
    await newUser.save();

    // create a token
    const token = createToken(newUser._id, newUser.isAdmin); 

    // res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 })

    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ result: newUser, token });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email } = req.body;
  try {
    // might be removed later, cos it will handled from the frontend
    if (!email || !req.body.password) return next(createError(400, 'All fileds are required!')); 

    const existingUser = await User.findOne({ email });

    if (!existingUser) return next(createError(400, 'Incorrect email!'));

    const isPasswordCorrect = await bcrypt.compare(req.body.password, existingUser.password);

    if (!isPasswordCorrect) return next(createError(400, 'Password is incorrect!'));

    // create a token
    const token = createToken(existingUser._id, existingUser.isAdmin,);

    // res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 })

    // res.status(200).json({ result: existingUser, token });
    const { password, isAdmin, ...otherDetails } = existingUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({...otherDetails});
  } catch (error) {
    next(error);
  }
};