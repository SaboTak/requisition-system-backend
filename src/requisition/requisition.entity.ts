import { Entity , Column, PrimaryGeneratedColumn} from 'typeorm'

export enum RequisitionStatus {
    INITIATED = 'INITIATED',
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    APPROVED = 'APPROVED',
    DECLINED = 'DECLINED'
}

export enum RequisitionDepartmentStatus{
    DECANATURA = 'DECANATURA',
    CONTABLE = 'CONTABLE',
    REACTORIA = 'RECTORIA',
    QA = 'QA'
}

@Entity()
export class Requisition {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    tittle : string

    @Column()
    description : string

    @Column()
    observation : string

    @Column()
    image : string

    @Column()
    process : string

    @Column()
    firms: string

    @Column()
    currentDates: string
    
    @Column()
    currentProcess : string

    @Column()
    currentState : RequisitionDepartmentStatus

    @Column()
    status : RequisitionStatus

}
