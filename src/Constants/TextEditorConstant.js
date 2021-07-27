import React from 'react';
import UnorderListIcon from '../Resources/images/unOrderList.svg';
import OrderListIcon from '../Resources/images/orderList.svg';

class StyleButton extends React.Component {
    onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    }
  
    render() {
      let className = "RichEditor-styleButton";
      if(this.props.active) {
        className += " RichEditor-activeButton";
      }
      return (
        <span className={this.props.class +" "+className} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
}

const BLOCK_TYPES = [
    { label: <img src={UnorderListIcon} alt="unordered list icon"/>, class: "", style: "unordered-list-item" },
    { label: <img src={OrderListIcon} alt="ordered list icon"/>, class: "", style: "ordered-list-item" },
    { label: <span className="textEditorCode" >{"</>"}</span>, class: "", style: "code-block" }
];
  
const BlockStyleControls = props => {
    let { editorState } = props;
    let selection = editorState.getSelection();
    let blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    return (
        <div className="RichEditor-controls">
          {BLOCK_TYPES.map(type => (<StyleButton key={type.label} active={type.style === blockType} label={type.label} onToggle={props.onToggle} style={type.style}/>))}
        </div>
    );
};

const INLINE_STYLES = [
    { label: "B", class: "textEditorBold", style: "BOLD" },
    { label: "I", class: "textEditorItalic", style: "ITALIC" },
    { label: "U", class: "textEditorUnderLine", style: "UNDERLINE" },
];

const InlineStyleControls = props => {
    let currentStyle = props.editorState.getCurrentInlineStyle();
    return (
      <div className="RichEditor-controls">
        {INLINE_STYLES.map(type => ( <StyleButton key={type.label} class={type.class} active={currentStyle.has(type.style)} label={type.label} onToggle={props.onToggle} style={type.style}/>))}
      </div>
    );
};
  
const styleMap = {
};

export {
    BlockStyleControls,
    InlineStyleControls,
    styleMap,
}