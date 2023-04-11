let userModel = require('./userModel')

module.exports.getDataFromDBServices = () => {
    return userModel.find({}).lean()
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  }
  
module.exports.createUserDBService = (userDetails) => {
    return new Promise((resolve, reject) => {
      let userModelData = new userModel({
        category: userDetails.category,
        name: userDetails.name,
        quantity: userDetails.quantity,
        price: userDetails.price,
      });
      
      userModelData.save()
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  module.exports.updateUserDBService = (id, userDetails) => {
    return userModel.findByIdAndUpdate(id, userDetails)
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  }
  
  module.exports.removeUserDBService = (id) => {
    return userModel.findOneAndDelete(id)
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  }