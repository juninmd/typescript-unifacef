import axios from 'axios';

const baseURL = 'https://api.github.com/';

export const getUser = async (userName: string): Promise<User> => {
  try {
    const { data } = await axios.request({ method: 'GET', baseURL, url: `users/${userName}` });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export const init = async () => {
  const user = await getUser('juninmd');
  console.log(user.name)
  console.log(JSON.stringify(user));
}

// Site: http://json2ts.com/
export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location: string;
  email?: any;
  hireable?: any;
  bio?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

init();