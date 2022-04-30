import React from 'react'
import edjsHTML from "editorjs-html"
import Blocks from 'editorjs-blocks-react-renderer';
function Html({data}) {
   
  return (
    <Blocks data={data} />
  )
}

export default Html