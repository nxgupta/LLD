class Student{
  public name: string;
  public address: string;
  public email: string;
  public batch: string;
  public psp: number
  protected state: string = "Active";

  constructor(name: string, address: string="SCALER VERSE") {
    this.name = name;
    this.address = address;
  }
  
  pauseCourse(newState: string):void { 
    this.state = newState;
  }

  changeBatch(newBatch: string):void {
    this.batch = newBatch;
  }
  
}

let Neer = new Student('neer', 'hyd');
