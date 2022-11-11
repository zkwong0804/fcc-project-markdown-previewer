import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { marked } from 'marked';
import DefaultMarkdown from './DefaultMarkdown';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      markdown: DefaultMarkdown
    }
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }

  render() {
    return (
      <div className='desktop'>
        <Editor handleChange={this.handleChange} />
        <Previewer preview={marked.parse(this.state.markdown)} />
      </div>
    );
  }
}

function Editor(props) {
  return (
    <section className='window window-editor'>
      <h2 className='window-header'>Editor</h2>
      <textarea id='editor' name='editor' className='window-body' title='code editor' onChange={props.handleChange} defaultValue={DefaultMarkdown}>
      </textarea>
    </section>
  );
}

function Previewer(props) {
  return (
    <section className='window window-previewer'>
      <h2 className='window-header'>Previewer</h2>
      <div id='preview' className='window-body' dangerouslySetInnerHTML={{__html: props.preview}}></div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);
