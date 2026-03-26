import { Controller, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
    constructor( private readonly orderService:OrderService ){}
    @Post()
    createOrder(){
        return this.orderService.createOrder()
    }

    @Get(':id')
    getOrder(@Param('id',ParseIntPipe) id:number){
        return this.orderService.getOrder(id)
    }

    @Patch(':id')
    updateStatus(@Param('id',ParseIntPipe) id:number ){
        return this.orderService.updateOrderStatus(id)
    }

}
