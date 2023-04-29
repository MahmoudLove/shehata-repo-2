import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Every product must has a name'],
  },
  price: {
    type: Number,
    required: [true, 'add price'],
  },
  numberOfSolds: {
    type: Number,
    validate: {
      validator: function (val) {
        return val > 0;
      },
      message: 'Numbers of solds cant be nagative',
    },
  },
  discount: {
    type: Number,
    required: [true, 'if no Discount add 0 as a value'],
  },
  ratingsAverage: {
    type: Number,
    default: 2.5,
    min: [1, 'rating must be higher than 1.0'],
    max: [5, 'rating must be lower than 5.0'],
    set: (val) => Math.round(val * 10) / 10, //set work every time value in added to this field
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
  },

  productCateSlug: {
    type: [String],
    required: [true, 'add Sub Cate slug'],
  },
  type: {
    type: String,
  },
  productCode: {
    type: Number,
    required: [true, 'add Product Number'],
  },
});
productSchema.index({ subCateSlug: 1 });

const ProductsModel =
  mongoose.models?.Products || mongoose.model('Products', productSchema);

export default ProductsModel;
