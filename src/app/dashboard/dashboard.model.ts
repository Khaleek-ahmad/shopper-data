export interface DashboardModel{
    filter:DashboardModelSub;
    status:string;
    orderBy:string;
    sortBy:string;
    start:number;
    size:number;
    total:number;
  }
  
  export interface DashboardModelSub{
    roleName:string;
    partnerName:string;
    url:string;
    status:string;
    downloadFromDate:string;
    downloadToDate:string;
    taskName:string;
  }