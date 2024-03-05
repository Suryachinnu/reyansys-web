import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LANDING_PAGE_CONTENT } from 'src/app/app.constants';
export enum Services {
  'CloudServices'= 'Cloud Managed Services',
  'AppContainerization' = 'App Containerization',
  'DataOpsServices' = 'DataOps Services',
  'Observability' = 'Managed Observability and Monitoring'
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {
  public service: Services | string = '';
  public serviceEnum:{[index: string]:any} = Services
  public APP_CONTENT: any = LANDING_PAGE_CONTENT 

  constructor(private router: ActivatedRoute, private route: Router){

  }
  ngOnInit(){
    this.router.params.subscribe(param =>{     
        this.service = param['id'] ?? ''
        if(this.service === ''){
          this.route.navigate(['home'], {relativeTo: this.router})
        }         
    })
  }

  getServiceTitle(service:string){
    return this.serviceEnum[service];
  }

}


