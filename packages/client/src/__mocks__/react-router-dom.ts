jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    username: 'akinncar'
  }),
  useHistory: jest.fn()
}));
