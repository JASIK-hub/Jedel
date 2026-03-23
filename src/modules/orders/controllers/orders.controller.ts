import { Controller, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
    constructor( private readonly ordersService:OrdersService ){}
    @Post()
    createOrder(){
        return this.ordersService.createOrder()
    }

    @Get(':id')
    getOrder(@Param('id',ParseIntPipe) id:number){
        return this.ordersService.getOrder(id)
    }

    @Patch(':id')
    updateStatus(@Param('id',ParseIntPipe) id:number ){
        return this.ordersService.updateOrderStatus(id)
    }

}
