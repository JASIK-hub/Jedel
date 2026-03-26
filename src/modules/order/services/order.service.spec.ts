import { OrderService } from './order.service';
import { Test, TestingModule } from '@nestjs/testing';
import { OrderStatus } from '../enums/order-status.enum';
import { NotFoundError } from 'rxjs';
import { NotFoundException } from '@nestjs/common';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should create order', () => {
    const order = service.createOrder();

    expect(order.status).toBe(OrderStatus.SEARCHING);
    expect(order.id).toBeDefined();
  });

  it('should get order',()=>{
    const order = service.createOrder()
    const result = service.getOrder(order.id)

    expect(result).toEqual(order)
  })

  it('should throw error if order not found',()=>{
    expect(()=>service.getOrder(1)).toThrow(NotFoundException)
  })

  it('should update order status',()=>{
    const order = service.createOrder()
    const updatedOrder = service.updateOrderStatus(order.id)

    expect(updatedOrder.status).toBe(OrderStatus.ASSIGNED)
  })

});
