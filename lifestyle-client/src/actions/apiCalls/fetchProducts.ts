export const fetchProducts = async (filters: IFilters) => {
  console.log(filters);
  try {
    const response = await fetch(`https://my-json-server.typicode.com/teamzz111/teamzz111/product/?category_like=${filters.category}&q=${filters.text}&_page=1&_limit=10`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchLifestyleProducts = async () => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/teamzz111/teamzz111/product/?category_like=lifestyle&_page=1&_limit=10'
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchOffersProducts = async () => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/teamzz111/teamzz111/product/?category_like=offer&_page=1&_limit=10'
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewProducts = async () => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/teamzz111/teamzz111/product/?category_like=news&_page=1&_limit=10'
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
