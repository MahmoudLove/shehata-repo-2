import mongoose from 'mongoose';
import slugify from 'slugify';

const productsCateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'add product cate name'],
    },
    subCateSlug: {
      type: String,
      required: [true, 'add sub cate slug'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
productsCateSchema.virtual('slug').get(function () {
  return slugify(this.name);
});
productsCateSchema.index({ mainCateSlug: 1 });
const ProductsCateModel =
  mongoose.models?.ProductsCate ||
  mongoose.model('ProductsCate', productsCateSchema);

export default ProductsCateModel;
