const Repair = require('../models/repairs.model');
const Users = require('../models/users.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.validRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
    include: [
      {
        model: Users,
        attributes: ['id', 'name', 'email', 'role'],
      },
    ],
  });

  if (!repair) {
    return next(new AppError(`Repair with id:${id} was not found 🕵🏻‍♀️ 😕`, 404));
  }

  req.user = repair.user;
  req.repair = repair;
  next();
});
