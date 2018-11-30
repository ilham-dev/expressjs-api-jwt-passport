var helper = {};

// Show List View
helper.status = function(statuss, msgs,res) {
    res.json({success: true, statuscode: statuss, msg: msgs});
};

module.exports = helper;