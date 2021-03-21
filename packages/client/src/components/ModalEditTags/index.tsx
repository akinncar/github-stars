import { useEffect, useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';
import { useFetch } from '../../hooks/useFetch';
import { RepositoryType } from '../../types/RepositoryTypes';

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

interface ModalEditTagsProps {
  modalIsOpen: boolean;
  repository: RepositoryType;
  onSave(fullName: string, tags: Array<string>): void;
  closeModal(): void;
}

export default function ModalEditTags({
  modalIsOpen,
  repository,
  onSave,
  closeModal
}: ModalEditTagsProps) {
  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();

  const [fullName, setFullName] = useState<string>('');
  const [editedTags, setEditedTags] = useState<Array<string>>([]);
  const [newTag, setNewTag] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  const tags = repository.tags || [];
  const full_name = repository.full_name || '';

  const { data: suggestedTags } = useFetch<Array<string>>(
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

  function handleAddTag(tagName: string) {
    setEditedTags([...editedTags, tagName]);
  }

  function handleDeleteTag(tagName: string) {
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
