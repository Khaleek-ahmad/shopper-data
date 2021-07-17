// import { TestBed } from '@angular/core/testing';
// import { HttpService } from './HttpService';
// import { HttpClientModule } from '@angular/common/http';
// import { CreatePartnerModel, ViewModel } from '../partner/PartnerModels';
// import { AppConfig } from './App.Config';
// import { Constants } from './Constant';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { APP_INITIALIZER } from '@angular/core';

// export function ConfigLoaderTest(configService: AppConfig) {

//     return () => configService.loadConfigStr4Testing();
// }

// describe('HttpSevie', () => {
//     let usersService: HttpService; // Add this

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [HttpService,
//                 AppConfig,
//                 {
//                     provide: APP_INITIALIZER,
//                     useFactory: ConfigLoaderTest,
//                     deps: [AppConfig],
//                     multi: true
//                 }],
//             imports: [HttpClientModule, HttpClientTestingModule]
//         });

//         usersService = TestBed.get(HttpService); // Add this
//     });

//     it('should be created', () => { // Remove inject()
//         expect(usersService).toBeTruthy();
//     });



//     it('insertPartner api working fine', () => {
//         let partnerModel = <CreatePartnerModel>{}
//         let apiServer;
//         let service = TestBed.get(HttpService);
//         let httpTestingController = TestBed.get(HttpTestingController);


//         if (AppConfig.settings)
//             apiServer = AppConfig.settings.apiServer;

//         let url = apiServer[Constants.BASE_URL] + apiServer[Constants.PARTNER][Constants.CREATE_PARTNER];

//         partnerModel.customerId = "1";
//         partnerModel.partnerName = "A";
//         partnerModel.partnerType = "A";
//         partnerModel.parentPartner = {};
//         partnerModel.serviceProvider = { id: 4 };

//         service.postService(partnerModel, url)
//             .subscribe(partnerData => {
//                 console.log("for insertinfg partner chck subscription",partnerData);
//                 expect(partnerData.partnerName).toEqual('A');
//             });

//         const req = httpTestingController.expectOne(url);

//         expect(req.request.method).toEqual('POST');

//         req.flush(partnerModel);
//     });



//     it('returned Observable should match the right data for selectPartner', () => {
     
//         let apiServer;
//         let service = TestBed.get(HttpService);
//         let httpTestingController = TestBed.get(HttpTestingController);

//         if (AppConfig.settings)
//             apiServer = AppConfig.settings.apiServer;
//         let url = apiServer[Constants.BASE_URL] + apiServer[Constants.PARTNER][Constants.LOAD_PARTNER];
//         service.getService(url+ "/121",{})
//             .subscribe(partneData => {
//                 console.log(partneData,"partnerData");
//                 expect(partneData.lastModifiedBy.firstName).toEqual('Raj');
//             });

//         const req = httpTestingController.expectOne(url+ "/121");

//         expect(req.request.method).toEqual('GET');

//     });

// });

