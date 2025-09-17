const mongoose = require('mongoose');

const customOrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },      // e.g. "Spiderman theme 2kg"
    description: { type: String, default: '' },
    referenceImage: { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'delivered', 'cancelled'],
      default: 'pending',
    },
    quotedPrice: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CustomOrder', customOrderSchema);
