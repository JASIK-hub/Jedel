import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderStatus } from '../enums/order-status.enum';

@Injectable()
export class OrdersService {
    private orders: { id: number; status: OrderStatus }[] = [];

    private findOrder(id:number){
        const order = this.orders.find((o) => o.id === id);

        if (!order) {
        throw new NotFoundException(`Order with id ${id} not found`);
        }

        return order;
    }

    public createOrder(){
        const order={id:Date.now(),status:OrderStatus.SEARCHING}
        this.orders.push(order)
        return order
    } 

    public getOrder(id:number){
        return this.findOrder(id)
    }

    private getNextStatus(status:OrderStatus){
        switch(status){
            case OrderStatus.SEARCHING:
                return OrderStatus.ASSIGNED
            case OrderStatus.ASSIGNED:
                return OrderStatus.ON_THE_WAY
            case OrderStatus.ON_THE_WAY:
                return OrderStatus.IN_PROGRESS
            case OrderStatus.IN_PROGRESS:
                return OrderStatus.COMPLETED
            default:
                return OrderStatus.ASSIGNED
        }
    }

    public updateOrderStatus(id:number){
        let order = this.findOrder(id)
        const newStatus = this.getNextStatus(order.status)
        order.status = newStatus
        return order
    }
}
