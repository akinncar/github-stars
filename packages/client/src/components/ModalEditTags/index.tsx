import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';

import Modal from '../Modal';
import Button from '../Button';
import Tag from '../Tag';
import { Container, Header, Content, TagContainer, Footer } from './styles';

export default function ModalEditTags({
  modalIsOpen,
  repository,
  onSave,
  closeModal
}) {
  const tags = repository.tags || [];
  const full_name = repository.full_name || '';

  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();

  const [editedTags, setEditedTags] = useState(tags);
  const [newTag, setNewTag] = useState('');

  function handleSave() {
    onSave(full_name, editedTags);
    closeModal();
  }

  function handleCloseModal() {
    setEditedTags(tags);
    closeModal();
  }

  function handleDeleteTag(tagName) {
    const newTagList = editedTags.filter(t => t !== tagName);
    setEditedTags(newTagList);
  }

  useEffect(() => {
    const trimmedNewTag = newTag.trim();

    if (editedTags.includes(trimmedNewTag)) {
      setNewTag(trimmedNewTag);
      return;
    }

    if (newTag.includes(' ') && trimmedNewTag !== '') {
      setEditedTags([...editedTags, trimmedNewTag]);
      setNewTag('');
    }
  }, [newTag]);

  useEffect(() => {
    setEditedTags(tags);
  }, [tags]);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
      <Container>
        <Header>
          <h3>Edit repository tags</h3>
          <button onClick={handleCloseModal}>
            <MdClose size={18} color={theme.colors.text.primary} />
          </button>
        </Header>
        <Content>
          <p>
            Tags <span>(separate with spaces)</span>
          </p>
          <TagContainer>
            {editedTags.map(tag => (
              <Tag
                key={tag}
                isEditable
                onPressIcon={() => handleDeleteTag(tag)}
              >
                {tag}
              </Tag>
            ))}
            <input
              type="text"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
            />
          </TagContainer>
        </Content>
        <Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save changes
          </Button>
        </Footer>
      </Container>
    </Modal>
  );
}
