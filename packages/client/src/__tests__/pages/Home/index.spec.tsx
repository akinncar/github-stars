import { render } from '@testing-library/react';
import MockedContainer from '../../../__mocks__/MockedContainer';
import Home from '../../../pages/Home';

describe('Home Page', () => {
  it('should be able to render page', async () => {
    const { getByText, getByPlaceholderText } = render(
      <MockedContainer>
        <Home />
      </MockedContainer>
    );

    expect(getByText('https://github.com/')).toBeTruthy();
    expect(getByPlaceholderText(/username/i)).toBeTruthy();
    expect(getByText(/Search Repositories/i)).toBeTruthy();
  });
});
