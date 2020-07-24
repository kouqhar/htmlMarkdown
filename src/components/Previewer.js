import React from 'react'
import marked from 'marked'

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
});
  
// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}

const Previewer = props => {
        return (
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} />
        )
}

export default Previewer;