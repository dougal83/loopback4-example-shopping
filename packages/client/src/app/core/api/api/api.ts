export * from './pingController.service';
import {PingControllerService} from './pingController.service';
export * from './shoppingCartController.service';
import {ShoppingCartControllerService} from './shoppingCartController.service';
export * from './userController.service';
import {UserControllerService} from './userController.service';
export * from './userOrderController.service';
import {UserOrderControllerService} from './userOrderController.service';
export const APIS = [
  PingControllerService,
  ShoppingCartControllerService,
  UserControllerService,
  UserOrderControllerService,
];
