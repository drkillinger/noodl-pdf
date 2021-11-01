const Noodl = require('@noodl/noodl-sdk');
import Document from './noodl-pdf';


Noodl.defineModule({
    reactNodes: [
    	Document
    ],
    nodes:[
    ],
    setup() {
		console.log('PDF viewer setup');
	}
});

