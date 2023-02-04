import Hotel from '../models/Hotel.js';

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
    
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json('Hotel has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();  
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export const countByCity = async () => {
  const cities = req.query.cities.split(',');
  
  try {
    const list = Promise.all(cities.map(city => {
      return Hotel.countDocuments({ city: city });
    }));

    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async () => {
  const types = req.query.types.split(',');
  
  try {
    const list = Promise.all(types.map(type => {
      return Hotel.countDocuments({ type: type });
    }));

    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};