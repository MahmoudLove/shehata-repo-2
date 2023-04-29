import mongoose from 'mongoose';
import slugify from 'slugify';

const subCateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'sub cate must have a name'],
    },
    mainCateSlug: {
      type: [String],
      required: [true, 'Sub Cate must has a refrence to a Main Cate'],
    },
    numberOfProducts: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    mainCateSlug: {
      type: [String],
      required: [true, 'add main Cate slug'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
subCateSchema.virtual('slug').get(function () {
  return slugify(this.name);
});
subCateSchema.index({ mainCateSlug: 1 });
const SubCateModel =
  mongoose.models?.SubCate || mongoose.model('SubCate', subCateSchema);

export default SubCateModel;
