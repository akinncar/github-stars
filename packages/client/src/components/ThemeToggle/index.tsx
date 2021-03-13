import Toggle from 'react-toggle';
import { Icon } from './styles';

export default function ThemeToggle() {
  return (
    <label>
      <Toggle
        defaultChecked={true}
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
        onChange={() => {}}
      />
    </label>
  );
}
