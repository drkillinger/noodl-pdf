import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

//import { pdfjs } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.min.js`;


export default {
	name: 'PDF viewer Page',
	category: 'Visual',
	getReactComponent() {
		return Page;
	},
	inputProps: {
        file: {type:'string'},
        pageNumber: {type:'number'}
	},
	outputProps: {
		onClick: {type: 'signal'}
	}
};



