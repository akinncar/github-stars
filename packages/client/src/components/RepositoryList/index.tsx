import { useState } from 'react';

import { RepositoryType } from '../../types/RepositoryTypes';
import ModalEditTags from '../ModalEditTags';
import Tag from '../Tag';
import { Container, TagContainer } from './styles';

const RepositoryList = ({ repositories, updateTags }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalRepository, setModalRepository] = useState({} as RepositoryType);

  function handleOpenModal(repository) {
    setModalRepository(repository);
    setModalIsOpen(true);
  }

  return (
    <Container>
      <ModalEditTags
        modalIsOpen={modalIsOpen}
        repository={modalRepository}
        onSave={updateTags}
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
                  handleOpenModal(repository);
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
