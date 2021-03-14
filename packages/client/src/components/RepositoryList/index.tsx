import Tag from '../Tag';
import { Container, TagContainer } from './styles';

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
            <td>
              <TagContainer>
                {repository.tags.map(tag => (
                  <Tag>{tag}</Tag>
                ))}
              </TagContainer>
            </td>
            <td>
              <button>edit</button>
            </td>
          </tr>
        );
      })}
    </Container>
  );
};

export default RepositoryList;
