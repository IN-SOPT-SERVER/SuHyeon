import contents from "../data/contentData"

const getItem = async (contentId: number) => {
  return contents[contentId];
};

export default getItem;
