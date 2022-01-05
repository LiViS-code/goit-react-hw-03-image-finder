const getPictures = async (request, page = 1) => {
  const API_KEY = "24165340-8b0e7a7ee772979b6a936f118";
  const perPage = 12;
  const pageNum = page;
  const sQuery = request;
  const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${sQuery}&page=${pageNum}&per_page=${perPage}&key=${API_KEY}`;

  const response = await fetch(URL);

  return response.json();
};

export default getPictures;
