/**
 * loopback4-example-shopping
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NewProduct model module.
 * @module model/NewProduct
 * @version 1.1.1
 */
class NewProduct {
    /**
     * Constructs a new <code>NewProduct</code>.
     * (Schema options: { title: &#39;NewProduct&#39;, exclude: [ &#39;productId&#39; ] })
     * @alias module:model/NewProduct
     * @param name {String} 
     * @param price {Number} 
     */
    constructor(name, price) { 
        
        NewProduct.initialize(this, name, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, price) { 
        obj['name'] = name;
        obj['price'] = price;
    }

    /**
     * Constructs a <code>NewProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewProduct} obj Optional instance to populate.
     * @return {module:model/NewProduct} The populated <code>NewProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewProduct();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
NewProduct.prototype['name'] = undefined;

/**
 * @member {Number} price
 */
NewProduct.prototype['price'] = undefined;

/**
 * @member {String} image
 */
NewProduct.prototype['image'] = undefined;

/**
 * @member {String} description
 */
NewProduct.prototype['description'] = undefined;

/**
 * @member {String} details
 */
NewProduct.prototype['details'] = undefined;






export default NewProduct;

