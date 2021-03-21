import { useState } from 'react';

import { RepositoryType } from '../../types/RepositoryTypes';
import ModalEditTags from '../ModalEditTags';
import Tag from '../Tag';
import { Container, TagContainer } from './styles';

interface RepositoryListProps {
  repositories: Array<RepositoryType>;
  updateTags(fullName: string, tags: Array<string>): void;
}

const RepositoryList = ({ repositories, updateTags }: RepositoryListProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
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
      <thead>
        <tr>
          <th>Repository</th>
          <th>Description</th>
          <th>Language</th>
          <th>Tags</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {repositories.map(repository => {
          return (
            <tr key={repository.id}>
              <td>{repository.full_name}</td>
              <td>{repository.description}</td>
              <td>{repository.language}</td>
              <td>
                <TagContainer>
                  {repository.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
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
      </tbody>
    </Container>
  );
};

export default RepositoryList;
