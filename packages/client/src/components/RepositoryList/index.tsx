import { Container } from './styles';

const RepositoryList = ({ repositories }) => {
  return (
    <Container>
      <tr>
        <th>Repository</th>
        <th>Description</th>
        <th>Language</th>
        <th>Tags</th>
        <th></th>
      </tr>
      {repositories.map(repository => {
        return (
          <tr>
            <td>{repository.full_name}</td>
            <td>{repository.description}</td>
            <td>{repository.language}</td>
            <td>{repository.tags.join(', ')}</td>
            <td>
              <a href="">edit</a>
            </td>
          </tr>
        );
      })}
    </Container>
  );
};

export default RepositoryList;
