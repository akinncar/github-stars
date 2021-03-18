import { render, fireEvent, waitFor } from '@testing-library/react';
import MockedContainer from '../../../__mocks__/MockedContainer';
import Repositories from '../../../pages/Repositories';
import api from '../../../services/api';

const username = 'akinncar';
const repositories = [
  {
    id: 135082477,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzUwODI0Nzc=',
    name: 'react-div-100vh',
    full_name: 'mvasin/react-div-100vh',
    description: "A workaround for the '100vh' issue in mobile browsers",
    watchers_count: 706,
    language: 'TypeScript',
    tags_id: '604c13a7000a9904300ab822',
    tags: ['games', 'design', 'ui', 'ux']
  },
  {
    id: 172547948,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNzI1NDc5NDg=',
    name: 'create-react-native-module',
    full_name: 'brodybits/create-react-native-module',
    description: null,
    language: 'JavaScript',
    tags_id: null,
    tags: []
  }
];
const repositoriesFilter = [
  {
    id: 135082477,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzUwODI0Nzc=',
    name: 'react',
    full_name: 'facebook/react',
    description: 'The React Facebook Project',
    watchers_count: 706,
    language: 'TypeScript',
    tags_id: '604c13a7000a9904300ab822',
    tags: ['facebook']
  }
];

jest.spyOn(api, 'get').mockImplementation(url => {
  switch (url) {
    case `repositories/${username}`:
      return Promise.resolve({
        data: repositories
      });
    case `repositories/${username}?tag=face`:
      return Promise.resolve({
        data: repositoriesFilter
      });

    default:
      return Promise.resolve({ data: { message: 'Not Found' }, status: 404 });
  }
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    username: username
  })
}));

describe('Repositories Page', () => {
  it('should be able to render page with repositories', async () => {
    const { getByText } = render(
      <MockedContainer>
        <Repositories />
      </MockedContainer>
    );

    await waitFor(() => {
      expect(getByText('brodybits/create-react-native-module')).toBeTruthy();
    });
  });

  it('should be able to search repositories by tag', async () => {
    const { getByText, getByPlaceholderText } = render(
      <MockedContainer>
        <Repositories />
      </MockedContainer>
    );

    // const input = getByPlaceholderText('Search tags...');
    // fireEvent.change(input, { target: { value: 'face' } });

    // expect(getByText('facebook/react')).toBeTruthy();
  });
});
