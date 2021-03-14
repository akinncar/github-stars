import { useState } from 'react';

import ModalTags from '../ModalTags';
import Tag from '../Tag';
import { Container, TagContainer } from './styles';

const RepositoryList = ({ repositories }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTags, setModalTags] = useState([]);

  function handleOpenModal(tags) {
    setModalTags(tags);
    setModalIsOpen(true);
  }

  return (
    <Container>
      <ModalTags
        modalIsOpen={modalIsOpen}
        tags={modalTags}
        closeModal={() => {
          setModalIsOpen(false);
        }}
      />

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
              <button
                onClick={() => {
                  handleOpenModal(repository.tags);
                }}
              >
                edit
              </button>
            </td>
          </tr>
        );
      })}
    </Container>
  );
};

export default RepositoryList;
