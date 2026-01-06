import { Button } from './styles.js'

function DefaultButton({ theme, children, ...props }) {

    console.log(props);
  return (
    <Button {...props} theme={theme}>{children}</Button>
  );
}

export default DefaultButton;