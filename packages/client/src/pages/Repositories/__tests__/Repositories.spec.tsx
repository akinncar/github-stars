import '../../../__mocks__/react-router-dom';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import MockedContainer from '../../../__mocks__/MockedContainer';
import AxiosMock from 'axios-mock-adapter';
import api from '../../../services/api';

import Repositories from '..';

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
        description: 'Package to create RN modules',
        language: 'JavaScript',
        tags_id: '604c13a7000a9904300ab822',
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

  it('should be able to suggest tag', async () => {
    const { getByText, getAllByText } = render(
      <MockedContainer>
        <Repositories />
      </MockedContainer>
    );

    const buttonEdit = getAllByText('edit');

    fireEvent.click(buttonEdit[0]);

    apiMock
      .onGet(`repositoryTagSuggestion/TypeScript`)
      .reply(200, ['open-source', 'tsc']);

    await waitFor(() => {
      expect(getByText('open-source')).toBeTruthy();
    });
  });

  it('should be able to add tag', async () => {
    const { getByText, getAllByText, getByTestId } = render(
      <MockedContainer>
        <Repositories />
      </MockedContainer>
    );

    const buttonEdit = getAllByText('edit');

    fireEvent.click(buttonEdit[0]);

    await waitFor(() => {
      expect(getByText('Edit repository tags')).toBeTruthy();
    });

    const inputSearch = getByTestId('edit-tag-input');

    await act(async () => {
      fireEvent.change(inputSearch, { target: { value: 'framework ' } });
    });

    await waitFor(() => {
      expect(getByText('framework')).toBeTruthy();
    });

    apiMock.onPatch(`repositoryTagAll`).reply(200, {
      _id: '60513b24f39d7e495c62eb8b',
      tags: ['facebook', 'framework']
    });

    const buttonSave = getByText(/Save changes/i);

    fireEvent.click(buttonSave);

    await waitFor(() => {
      expect(getByText('framework')).toBeTruthy();
    });
  });
});
