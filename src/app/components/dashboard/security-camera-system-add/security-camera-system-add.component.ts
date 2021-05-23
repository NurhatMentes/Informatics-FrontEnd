import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SecurityCameraSystemImageService } from 'src/app/services/security-camera-system-image.service';
import { SecurityCameraSystemService } from 'src/app/services/security-camera-system.service';

@Component({
  selector: 'app-security-camera-system-add',
  templateUrl: './security-camera-system-add.component.html',
  styleUrls: ['./security-camera-system-add.component.css']
})
export class SecurityCameraSystemAddComponent implements OnInit {
  apiUrl = 'https://localhost:44381/api/';
  productAddForm: FormGroup;


  constructor(private formBuider: FormBuilder,
    private productService: SecurityCameraSystemService,
    private productImageService: SecurityCameraSystemImageService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuider.group({
      cameraName: [null, Validators.required],
      price: [null, Validators.required],
      oldPrice: ["0"],
      stockQuantity: [null, Validators.required],
      description: [null, Validators.required],
      quickDescription: [null, Validators.required],
      features: [null, Validators.required],
      imagePath: [null],
    })
  }



  // add() {
  //   if (this.productAddForm.valid) {
  //     let model = Object.assign({}, this.productAddForm.value);
  //     let model2 = Object.assign({}, this.productAddForm.value);

  //     this.productService.addProduct(model).subscribe(response => {
  //       this.productImageService.addProduct(model).forEach(url.arguments())

  //       this.toastrService.success(response.message, "Başarılı!")
  //       console.log(response.message)
  //     })

      
  //   } else {
  //     this.toastrService.error("Formunuz eksik", "Dikkat!")
  //   }
  // }


  add() {
    if (this.productAddForm.valid) {
      let carImageModel = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(carImageModel).subscribe(response => {
        console.log(response);
        this.toastrService.success(response.message, "Başarılı!")
        return true
      }, responseError => {
       
            this.toastrService.error(responseError.error.ErrorMessage, "Doğrulama hatası")
        console.log(responseError);
        return true
      })
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat!")
    }
  }

}
