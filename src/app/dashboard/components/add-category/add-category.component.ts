import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../Models/category.model'; 
import { CategoryService } from '../../../services/category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {

  form: FormGroup =  new FormGroup({
    name: new FormControl(),
    image: new FormControl()
}); 
  submitted = false;

  constructor(private formBuilder: FormBuilder,private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        file: ['', Validators.required],
        image: [null]
      }     

    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  uploadFile(event:any) {
    debugger;
    const htmlElement = event.target as HTMLInputElement;
    if(htmlElement !=null && htmlElement.files !=null){
      let file = htmlElement.files[0];
      this.form.patchValue({
        image: file
      });

    }    

     let image = this.form.get('image');

     if(image !=null)
       image.updateValueAndValidity();

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    debugger;

    var formData: any = new FormData();
    const name =this.form.get('name');
    const image =this.form.get('image');
    if(name !=null)
      formData.append("name", name.value);

    if(image !=null)
      formData.append("image", image.value);

    console.log("formData : ",JSON.stringify(formData, null, 2));

    this.categoryService.create(formData)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });


  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
