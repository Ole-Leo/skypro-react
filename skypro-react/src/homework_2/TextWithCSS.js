import { textForTask } from './Text';

const styleForText = {
  width: 'fit-content',
  padding: '3px 6px',
  backgroundColor: '#49d749',
  border: '2px solid #333',
  borderRadius: '30px',
};

function TextWithCSS() {
  return (
    <>
      <div style={styleForText}>{textForTask}</div>
      <hr />
    </>
  );
}

export default TextWithCSS;
