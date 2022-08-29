import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const CopyButton = (props) => {
  const {size, text, style, onClick, copyValue} = props;

  const [copied, setCopied] = useState(false);

  const onCopyPressed = (event) => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
    event.preventDefault();
    navigator.clipboard.writeText(copyValue);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button variant='outline-primary' size={size || 'sm'} onClick={onCopyPressed} style={style}>
      {copied ? 'Copied!' : text || 'Copy'}
    </Button>
  );

};

export default CopyButton;
