import Toggle from 'react-toggle';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from './styles';

export default function ThemeToggle() {
  const { changeTheme } = useTheme();

  return (
    <label>
      <Toggle
        defaultChecked={localStorage.getItem('@GithubStars:theme') === 'dark'}
        icons={{
          checked: (
            <Icon>
              <span>🌜</span>
            </Icon>
          ),
          unchecked: (
            <Icon>
              <span>🌞</span>
            </Icon>
          )
        }}
        onChange={() => {
          changeTheme();
        }}
      />
    </label>
  );
}
