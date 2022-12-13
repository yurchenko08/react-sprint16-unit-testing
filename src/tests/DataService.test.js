import axios from 'axios';
import getGitHubUser from '../services/DataService/index';

jest.mock('axios');

describe('Data service unit tests', () => {
  const data = {
    login: 'yurchenko',
  };

  let response;

  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: data }));
  });

  it('should call axios.get 1 time', async () => {
    response = await getGitHubUser('login');
    expect(axios.get).toBeCalledTimes(1);
  });

  it('should test services zxios request with some github data', async () => {
    response = await getGitHubUser('login');
    expect(response.data.login).toMatch('yurchenko');
  });
});
