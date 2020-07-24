import React, { Component } from 'react'
import Preview from './Previewer'
import '../css/App.css'

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [Twitter handle](https://twitter.com/kouqhar), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![MySelf](https://res.cloudinary.com/telicsound/image/upload/v1583264812/DuniyaNaphtali_jyryrc.jpg)
`

class Markdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            markdown : placeholder
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            markdown : e.target.value
        })
    }
    render(){
        const { markdown} = this.state
        return (
            <div className="page-wrapper">
                <div className="markdown">
                <h6>Text Editor</h6>
                    <textarea name="markdown" id="editor" onChange={this.handleChange} value={markdown}>
                    </textarea>
                </div>
                <div className="preview">
                <h6>Previewer</h6>
                    <Preview markdown={markdown} />
                </div>
            </div>
        )
    }
}

export default Markdown;