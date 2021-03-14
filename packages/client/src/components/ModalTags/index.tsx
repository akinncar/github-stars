import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import Modal from '../Modal';
import Button from '../Button';
import Tag from '../Tag';
import { Container, Header, Content, TagContainer, Footer } from './styles';

export default function ModalTags({ modalIsOpen, closeModal, tags }) {
  const [editedTags, setEditedTags] = useState([]);

  useEffect(() => {
    setEditedTags(tags);
  }, [tags]);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <Container>
        <Header>
          <h3>Edit repository tags</h3>
          <button onClick={closeModal}>
            <FaTimes size={13} />
          </button>
        </Header>
        <Content>
          <p>
            Topics <span>(separate with spaces)</span>
          </p>
          <TagContainer>
            {editedTags.map(tag => (
              <Tag>{tag}</Tag>
            ))}
            <input type="text" />
          </TagContainer>
        </Content>
        <Footer>
          <Button variant="primary">Save changes</Button>
        </Footer>
      </Container>
    </Modal>
  );
}
