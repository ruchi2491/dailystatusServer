export class EmployeeStatus{
    public id:string;
    public statusdate:Date;
    public status:string;

    constructor(id:string,statusdate:Date,status:string){
        this.id=id;
        this.statusdate=statusdate;
        this.status=status;
    }
}
