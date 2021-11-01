import React, { useState } from 'react';
const Noodl = require('@noodl/noodl-sdk');
import 'regenerator-runtime/runtime'
import { Document, Page, Outline, View } from 'react-pdf';
import SelectionHighlighter from 'react-highlight-selection';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "./styles.css";


function Wrapper (props){
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
	  setNumPages(numPages);
	}

	function copyTextToClipboard(text) {
		if (!navigator.clipboard) {
		  fallbackCopyTextToClipboard(text);
		  return;
		}
		navigator.clipboard.writeText(text).then(function() {
		  console.log('Async: Copying to clipboard was successful!');
		}, function(err) {
		  console.error('Async: Could not copy text: ', err);
		});
	  }

	function selectionHandler(selection) {
		copyTextToClipboard(selection.selection);
	  }

	  
	function makeTextRenderer() {
		return function textRenderer(textItem) {
			//console.log(textItem.str);
			const text = textItem.str;
			return (
				<SelectionHighlighter
				  text={text}
				  selectionHandler={selectionHandler}
				  customClass="custom-class"
				/>
			  );
		}
	  }

	return <div>

	<Document
      file={props.file} width={props.width} height={props.height}
	  onLoadSuccess={onDocumentLoadSuccess}
    >
		
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page 
		  	scale={props.scale}
		  	width={props.width}
            key={`page_${index + 1}`}
			pageNumber={index + 1}
			customTextRenderer={makeTextRenderer() } 
			renderTextLayer={true}
			
          />
        ),
      )}
    </Document>
			
    </div>
  
}

export default {
	name: 'PDF viewer',
	category: 'Visual',
	getReactComponent() {
		return Wrapper;
	},
	inputProps: {
        file: {type:'string'},
		pageNumber: {type:'number'},
		width: {type: 'number'},
		scale: {type: 'number'}
		
	},
	outputProps: {
			
	}
};



