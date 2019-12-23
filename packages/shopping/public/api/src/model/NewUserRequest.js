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
 * The NewUserRequest model module.
 * @module model/NewUserRequest
 * @version 1.1.1
 */
class NewUserRequest {
    /**
     * Constructs a new <code>NewUserRequest</code>.
     * @alias module:model/NewUserRequest
     * @param email {String} 
     * @param password {String} 
     */
    constructor(email, password) { 
        
        NewUserRequest.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['email'] = email;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>NewUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUserRequest} obj Optional instance to populate.
     * @return {module:model/NewUserRequest} The populated <code>NewUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUserRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
NewUserRequest.prototype['id'] = undefined;

/**
 * @member {String} email
 */
NewUserRequest.prototype['email'] = undefined;

/**
 * @member {String} firstName
 */
NewUserRequest.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
NewUserRequest.prototype['lastName'] = undefined;

/**
 * @member {String} password
 */
NewUserRequest.prototype['password'] = undefined;






export default NewUserRequest;

