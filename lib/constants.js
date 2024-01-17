/*!
 * constants.js - constants and helpers for the API
 * Copyright (c) 2024, Jonathan Gonzales (MIT License).
 * https://github.com/dogjg/GPT
 */

'use strict';

/**
 * Environment variables for the CHATGPT Key
 * @default
 */

exports.API_KEY = process.env.API_KEY;

/**
 * Base url of OPENAI 
 * @const {String}
 * @default
 */

exports.URL = 'https://api.openai.com/v1';
