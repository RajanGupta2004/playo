import Venue from '../models/venue.model.js';
import venues from '../utils/venuesData.js';

const addVenusData = async () => {
  try {
    for (const venusData of venues) {
      const existingVenus = await Venue.findOne({name: venusData.name});

      if (existingVenus) {
        console.log(`Venus already presented ${venusData.name}`);
      } else {
        const newVenus = new Venue(venusData);
        await newVenus.save();
      }
    }
  } catch (error) {
    console.log('Error while addind Venues Data...');
  }
};

addVenusData();

export const getVenusData = async (req, res) => {
  try {
    const allVenus = await Venue.find();

    if (!allVenus) {
      return res.status(404).json({message: 'Data not found...'});
    }

    return res
      .status(200)
      .json({message: 'Data fetch Successfully', data: allVenus});
  } catch (error) {
    console.log('Error in getVenus');
    return res.status(500).json({message: 'somthing went wrong....'});
  }
};
