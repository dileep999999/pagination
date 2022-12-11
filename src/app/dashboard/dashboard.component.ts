import { Component, OnInit } from '@angular/core';
import { APIS } from 'src/api';
import { CommonService } from '../common.service';

@Component({
  selector: 'pt-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  data: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private service: CommonService){

  }

  ngOnInit(): void {
    this.getList();
      
  }
  getList(){
    this.service.getMethod(APIS.DEPT_LIST).subscribe((res: any)=>{
      this.data = res.data.rows;
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  uploadFiles(file: any){
    let data = file.target.files[0];
    this.service.upload(APIS.UPLOAD_FILE,data).subscribe((res:any)=>{
      alert("successfully uploaded");
    },
    (er:any)=>{
      alert("upload failed"+ er);
    }
    )
  }
  
}
