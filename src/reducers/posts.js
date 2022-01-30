export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload.data;
    case "CREATE":
      return [...posts, action.payload.data];
    case "UPDATE":
      return posts.map((post) => post._id === action.payload.data._id ? action.payload.data : post);
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
