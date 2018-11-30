getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      console.log('Unauthorized1');
      return null;
    }
  } else {
    console.log('Unauthorized');
    return null;
  }
};

module.exports = getToken;