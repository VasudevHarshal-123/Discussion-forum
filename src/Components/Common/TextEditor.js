import React from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import {stateToHTML} from 'draft-js-export-html'; 
import { BlockStyleControls, InlineStyleControls, styleMap} from '../../Constants/TextEditorConstant';
import 'draft-js/dist/Draft.css';
import './styles/TextEditor.css';
import { sendIcon } from "../../Constants/DiscussionConstant";

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  handleKeyCommand = (command, editorState) => {
    let newState = RichUtils.handleKeyCommand(editorState, command);
    if(newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  mapKeyToEditorCommand = (e) => {
    if(e.keyCode === 9 ) {
      let newEditorState = RichUtils.onTab(e, this.state.editorState, 4);
      if(newEditorState !== this.state.editorState) {
          this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }
   
  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }
  
  toggleInlineStyle = (inlineStyle) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  }

  onChange = (editorState) => {
    this.setState({editorState})
  }
  
  onClickModalPostButton = () => {
    this.props.onClickPostButton(stateToHTML(this.state.editorState.getCurrentContent()))
    this.props.toggleModal();
  }

  onClickInlinePostButton = () => {
    this.props.onClickPostButton(stateToHTML(this.state.editorState.getCurrentContent()));
    this.setState({editorState: EditorState.createEmpty()});
  }

  getStyleControls = (editorState) => {
    return (
      <div className="textEditorCommand">
        <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
        <span className="verticalLine"></span>
        <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
      </div>
    );
  }
  
  render() {
    let { editorState } = this.state;
    let className = "RichEditor-editor";
    let contentState = editorState.getCurrentContent();
    if(!contentState.hasText()){
      if(contentState.getBlockMap().first().getType() !== "unstyled"){
        className += " RichEditor-hidePlaceholder";
      }
    }
    
    return (
        <>
          <div className={`RichEditor-root ${this.props.wrapperClass}`}>
            <div className={`${className} ${this.props.textEditorClass}`}>
                <Editor
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}  //dont use
                  keyBindingFn={this.mapKeyToEditorCommand} //not used
                  onChange={this.onChange}
                  ref="editor"
                  spellCheck={true}
                  placeholder={this.props.placeHolder}
                />
                {this.props.styleControlDisabled?"":this.getStyleControls(editorState)}
              </div>
          </div>
          {this.props.inlinePostButton? <button className="inlinePostThreadButton" onClick={this.onClickInlinePostButton}>{sendIcon}</button>: 
          <button className="modalPostThreadButton" onClick={this.onClickModalPostButton}>{"Post"}</button>}
        </>
        );
      }
}

