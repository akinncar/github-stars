import { useEffect, useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';
import { useFetch } from '../../hooks/useFetch';

import Modal from '../Modal';
import Button from '../Button';
import Tag from '../Tag';
import {
  Container,
  Header,
  Content,
  TagContainer,
  SuggestedContainer,
  Footer
} from './styles';
import Loading from '../Loading';

export default function ModalEditTags({
  modalIsOpen,
  repository,
  onSave,
  closeModal
}) {
  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();

  const [fullName, setFullName] = useState('');
  const [editedTags, setEditedTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [language, setLanguage] = useState([]);

  const tags = repository.tags || [];
  const full_name = repository.full_name || '';

  const { data: suggestedTags, error, mutate } = useFetch<Array<string>>(
    `repositoryTagSuggestion/${language}`
  );

  function handleSave() {
    onSave(fullName, editedTags);
    closeModal();
  }

  function handleCloseModal() {
    setEditedTags(tags);
    closeModal();
  }

  function handleAddTag(tagName) {
    setEditedTags([...editedTags, tagName]);
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
      handleAddTag(trimmedNewTag);
      setNewTag('');
    }
  }, [newTag]);

  useEffect(() => {
    setEditedTags(tags);
    setFullName(full_name);
    setLanguage(repository.language);
  }, [modalIsOpen]);

  if (!suggestedTags) {
    return (
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <Loading />
      </Modal>
    );
  }

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
                icon={<MdClose size={14} color={theme.colors.tag.text} />}
                onPressIcon={() => handleDeleteTag(tag)}
              >
                {tag}
              </Tag>
            ))}
            <input
              type="text"
              data-testid="edit-tag-input"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
            />
          </TagContainer>
          {suggestedTags.length > 0 && (
            <SuggestedContainer>
              <p>
                <span>Suggested:</span>
              </p>
              {suggestedTags.map(
                tag =>
                  !editedTags.includes(tag) && (
                    <Tag
                      key={tag}
                      icon={<MdAdd size={14} color={theme.colors.tag.text} />}
                      onPressIcon={() => handleAddTag(tag)}
                    >
                      {tag}
                    </Tag>
                  )
              )}
            </SuggestedContainer>
          )}
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
