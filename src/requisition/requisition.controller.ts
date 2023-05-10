import { Body, Controller, Delete, Get, Param, Patch, Post, Put,Request } from '@nestjs/common';
import { RequisitionService } from './requisition.service';
import { CreateRequisitionDto, UpdateRequisitionDto } from './dto/requisition.dto'

@Controller('requisition')
export class RequisitionController {

    constructor(
        private requisitionService : RequisitionService
    ){}

    @Get()
    getRequisitions(){
        return this.requisitionService.getRequisitions()
    }

    @Get('bydepartment')
    getRequisitionsByUser(@Request() req){        
        return this.requisitionService.getRequisitionsByUser(req.user.username)
    }

    @Get(':id')
    getRequisition(@Param('id') id: number){
        return this.requisitionService.getRequisition(id)
    }

    @Post()
    createRequisition(@Body() newrequisition: CreateRequisitionDto){
        return this.requisitionService.createRequisition(newrequisition.title, newrequisition.description, newrequisition.image, newrequisition.process, newrequisition.currentProcess, newrequisition.currentState)
    }

    @Delete(':id')
    deleteRequisition(@Param('id') id: number){
        return this.requisitionService.deleteRequisition(id)
    }

    @Patch(':id')
    updateRequisition(@Param('id') id: number, @Body() updatedFields: UpdateRequisitionDto){
        return this.requisitionService.updateRequisition(id, updatedFields)
    }

    @Post('declined/:id')
    declinedRequisition(@Param('id') id: number){
        return this.requisitionService.declinedRequisition(id);
    }

    @Post('aproved/:id')
    aprovedRequisition(@Param('id') id: number){
        return this.requisitionService.aprovedRequisition(id);
    }

    @Post('process/:id')
    changeProcessRequisition(@Param('id') id: number){
        return this.requisitionService.changeProcessRequisition(id)
    }

    

}
