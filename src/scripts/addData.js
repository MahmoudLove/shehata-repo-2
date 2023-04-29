for (let i = 0; i < 20; i++) {
  const addMain = async () => {
    await MainCateModel.create({
      name: `Main Cate ${i + 1}`,
      numberofSubCate: 10,
      imageUrl: 'Image Url',
    });
  };
  addMain();
}

const subCate = async () => {
  const MainCate = await MainCateModel.find();
  console.log(MainCate);
  MainCate.forEach((m, i) => {
    for (let i = 0; i < 9; i++) {
      const asyncFunc = async () => {
        await SubCateModel.create({
          name: `sub Cate ${i + 1} `,
          mainCateSlug: m.MainCateSlug,
          imageUrl: 'image url',
        });
      };
      asyncFunc();
    }
  });
};
subCate();
