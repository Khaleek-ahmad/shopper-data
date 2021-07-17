import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../../services/category.service';//'src/app/services/category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  title = 'fileupload';  
  remark = '';  
  constructor(private httpService: HttpClient,  private categoryService: CategoryService,) { }  
  myFiles: string[] = [];  
    
  sMsg: string = '';  
  StudentIdUpdate: string;  
  token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDFlMWMwNWRkZmM3OWExZTdiYTc5NiIsImlhdCI6MTYyNjM2Nzk2MSwiZXhwIjoxNjI2NDU0MzYxfQ.3uvqsYPJgiXXely56mxJVGT6p0THdNSwj8IvyYTmZkA";
  ngOnInit() {}  
    
  getFileDetails(e) {  
    //console.log (e.target.files);  
    for (var i = 0; i < e.target.files.length; i++) {  
      this.myFiles.push(e.target.files[i]);  
    }  
  }  
  uploadFiles() {  
    debugger;
    const frmData = new FormData();  
    for (var i = 0; i < this.myFiles.length; i++) {  
      frmData.append("fileUpload", this.myFiles[i]);  
      if (i == 0) {  
        frmData.append("remark", this.remark);  
      }  
    }  
    debugger;

    // this.categoryService.create(frmData)
    //       .subscribe(
    //         response => {

    //           console.log(response);
    //           //this.submitted = true;
    //         },
    //         error => {
    //           console.log(error);
    //         });
    const httpOption={headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Baerer'+this.token})}
    this.httpService.post('https://main-shopper-k2vermp6up0tkljs-gtw.qovery.io/api/category', frmData, httpOption).subscribe(  
      data => {  
        debugger;
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.  
        this.sMsg = data as string;  
        console.log(this.sMsg);  
      }  
    );  
  }
}





// export class AddCategoryComponent implements OnInit {

//   form: FormGroup =  new FormGroup({
//     name: new FormControl(),
//     image: new FormControl()
// }); 
//   submitted = false;

//   constructor(private formBuilder: FormBuilder,private categoryService:CategoryService) {}

//   ngOnInit(): void {
//     this.form = this.formBuilder.group(
//       {
//         name: ['', Validators.required],
//         file: ['', Validators.required],
//         image: [null]
//       }     

//     );
//   }
//   get f(): { [key: string]: AbstractControl } {
//     return this.form.controls;
//   }

//   uploadFile(event:any) {
//     debugger;
//     const htmlElement = event.target as HTMLInputElement;
//     if(htmlElement !=null && htmlElement.files !=null){
//       let file = htmlElement.files[0];
//       this.form.patchValue({
//         image: file
//       });

//     }    

//      let image = this.form.get('image');

//      if(image !=null)
//        image.updateValueAndValidity();

//   }

//   onSubmit(): void {
//     this.submitted = true;

//     if (this.form.invalid) {
//       return;
//     }
//     debugger;

//     var formData: any = new FormData();
//     const name =this.form.get('name');
//     const image =this.form.get('image');
//     if(name !=null)
//       formData.append("name", name.value);

//     if(image !=null)
//       formData.append("image", image.value);

//     console.log("formData : ",JSON.stringify(formData, null, 2));

//     this.categoryService.create(formData)
//       .subscribe(
//         response => {
//           console.log(response);
//           this.submitted = true;
//         },
//         error => {
//           console.log(error);
//         });


//   }

//   onReset(): void {
//     this.submitted = false;
//     this.form.reset();
//   }

// }
