/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

// export const CONTAINER_KEY = 'code-challenge/welcome';
//replacing the container key to rename to something simpler 
export const CONTAINER_KEY = 'challenger'

// TODO: Add more action constants if needed
export const DISPATCH_ACTIONS = {
  GET_LUCKY_NUMBER: `${CONTAINER_KEY}/GET_LUCKY_NUMBER`,
  RETURN_LUCKY_NUMBER: `${CONTAINER_KEY}/RETURN_LUCKY_NUMBER`
};
