const Repair = require('../models/repairs.model');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/users.model');

exports.findRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({
    where: { status: ['pending', 'completed'] },
    attributes: {
      exclude: ['status'],
    },
    include: [
      {
        model: User,
      },
    ],
  });

  res.json({
    status: 'success',
    results: repairs.length,
    repairs,
  });
});

exports.createRepair = catchAsync(async (req, res, next) => {
  const { date, motorsNumber, description } = req.body;
  const { id } = req.sessionUser;

  const repair = await Repair.create({
    date,
    motorsNumber: motorsNumber.toLowerCase(),
    description,
    userId: id,
  });

  res.status(201).json({
    message: 'Motorcycle repair created successfully 🟢',
    repair,
  });
});

exports.findRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const oneRepair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!oneRepair) {
    return res.status(404).json({
      status: 'error',
      message: `The repair with id: ${id} was not found! 🕵🏻‍♀️`,
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'repair found',
    oneRepair,
  });
});

exports.updateRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  const updatedRepair = await repair.update({ status: 'completed' });

  res.status(200).json({
    status: 'success',
    message: 'Repair updated',
    repair: updatedRepair,
  });
});

exports.deleteRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({ status: 'cancelled' });

  res.status(200).json({
    status: 'success',
    message: `Repair with id:${repair.id} has been deleted`,
  });
});
