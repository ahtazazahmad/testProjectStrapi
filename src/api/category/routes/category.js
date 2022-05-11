'use strict';

/**
 * category router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = createCoreRouter('api::category.category',{
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/category',
        handler: 'category.find',
      },
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/category/:id',
        handler: 'category.findOne',
      },
      { // Path defined with a URL parameter
        method: 'PUT',
        path: '/category/:id',
        handler: 'category.update',
      },
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/category/:id',
        handler: 'category.findOne',
      },
      { // Path defined with a URL parameter
        method: 'DELETE',
        path: '/category/:id',
        handler: 'category.findOne',
      }
    ]
  })
// module.exports = createCoreRouter('api::category.category');
