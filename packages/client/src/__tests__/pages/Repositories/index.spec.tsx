import '../../../__mocks__/react-router-dom';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import MockedContainer from '../../../__mocks__/MockedContainer';
import AxiosMock from 'axios-mock-adapter';
import api from '../../../services/api';

import Repositories from '../../../pages/Repositories';

const apiMock = new AxiosMock(api);

describe('Repositories Page', () => {
  it('should be able to render page with repositories', async () => {
    const { getByText } = render(
      <MockedContainer>
        <Repositories />
      </MockedContainer>
    );

    apiMock.onGet(`repositories/akinncar`).reply(200, [
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
    ]);

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

    const inputSearch = getByPlaceholderText('Search tags...');

    await act(async () => {
      fireEvent.change(inputSearch, { target: { value: 'face' } });
    });

    apiMock.onGet(`repositories/akinncar?tag=face`).reply(200, [
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
    ]);

    await waitFor(() => {
      expect(getByText('facebook/react')).toBeTruthy();
    });
  });
});
