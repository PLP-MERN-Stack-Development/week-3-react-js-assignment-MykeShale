const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const totalCount = response.headers.get('X-Total-Count');
    return { data, totalCount: parseInt(totalCount) };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const searchPosts = async (query, page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?q=${encodeURIComponent(query)}&_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const totalCount = response.headers.get('X-Total-Count');
    return { data, totalCount: parseInt(totalCount) };
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
}; 