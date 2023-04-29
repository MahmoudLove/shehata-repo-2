import mongoose from 'mongoose';
import slugify from 'slugify';
const mainCateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Main Categories must has a name'],
    },
    numberofSubCate: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

mainCateSchema.virtual('slug').get(function () {
  return slugify(this.name);
});
const MainCateModel =
  mongoose.models?.MainCate || mongoose.model('MainCate', mainCateSchema);

export default MainCateModel;
