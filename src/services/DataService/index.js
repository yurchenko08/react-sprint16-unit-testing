import axios from 'axios';

async function getGitHubUser(user) {
  const URI = `https://api.github.com/users/${user}`;
  return await axios.get(URI);
}

export default getGitHubUser;
