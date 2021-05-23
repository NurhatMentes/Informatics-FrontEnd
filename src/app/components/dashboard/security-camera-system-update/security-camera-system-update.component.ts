import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SecurityCameraSystem } from 'src/app/models/securityCameraSystem';
import { SecurityCameraSystemService } from 'src/app/services/security-camera-system.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-security-camera-system-update',
  templateUrl: './security-camera-system-update.component.html',
  styleUrls: ['./security-camera-system-update.component.css']
})
export class SecurityCameraSystemUpdateComponent implements OnInit {

  securityCameraSystems: SecurityCameraSystem[] = [];
  imageBasePath = environment.baseUrl
  productFilter: Number;
  productUpdateForm: FormGroup;
  dataLoaded = false;

  constructor(
    private productService: SecurityCameraSystemService,
    private formBuider: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.updateProductAddForm();
    this.getSecurityCameraSystems()
  }



  updateProductAddForm() {
    this.productUpdateForm = this.formBuider.group({
      securityCameraSystemId: [null, Validators.required],
      cameraName: [null, Validators.required],
      price: [null, Validators.required],
      oldPrice: [null],
      stockQuantity: [null, Validators.required],
      description: [null, Validators.required],
      quickDescription: [null, Validators.required],
      features: [null, Validators.required],
      imagePath: [null],
    })
  }

  update() {
    if (this.productUpdateForm.valid) {
      let model = Object.assign({}, this.productUpdateForm.value);
      this.productService.updateProduct(model).subscribe(response => {
        this.toastrService.success(response.message, "Güncelleme Başarılı!")
        console.log(response.message)
      })
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat!")
    }
  }

  getSecurityCameraSystems() {
    this.productService.getSecurityCameraSystems().subscribe(response => {
      this.securityCameraSystems = response.data
      console.log(response.data)
      this.dataLoaded = true;
    })
  }

  getSelectedProduct(productId: Number) {
    if (this.productFilter == productId)
      return true;
    else
      return false;
  }
}
