/**
 * api.js - a client for chatgpt.
 * https://github.com/dogjg/GPT
 * Copyright (c) 2024, Jonathan Gonzales (MIT License).
 */

'use strict';

const assert = require('bsert');
const {Client} = require('bcurl');
const {API_KEY, URL} = require('./constants');

/**
 * GPTClient 
 * @alias module:client.GPT
 * @extends {bcurl.Client}
 */

class GPT extends Client {
   /**
    * Create a client that interracts with the GPT API.
    * @constructor
    * @param {Object} options
    */
	
   constructor(options) { 
     super();

     this.opened = false;

     this.options = new GPTOptions(options);
     this.host = this.options.host;
     this.secret = this.options.secret;
 
   }
  
    async open() {
      return this.open();
    }
}

/**
 * GPTOptions
 * @alias module:client.GPTOptions
 */

class GPTOptions { 
   constructor(options) {

   this.host = URL;
   this.secret = API_KEY;

   if (options) 
     this.fromOptions(options);
  }

  /**
   * Inject properties form object.
   * @private
   * @param {Object} options
   * @returns {GPTOptions}
   */

   fromOptions(options) {
     assert(options);

     this.host = options.host;
     this.secret = options.secret;
	
     if (options.host != null) {
       assert(typeof options.host === 'string');
       this.host = options.host;
     }
	 
     if (options.secret != null) {
       assert(typeof options.secret === 'string');
       this.secret = options.secret;
     }
    
     return this;
   }

   static fromOptions(options) {
     return new GPTOptions().fromOptions(options);
   }
}

module.exports = GPT;

