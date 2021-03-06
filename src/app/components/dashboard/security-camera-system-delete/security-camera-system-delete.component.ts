import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SecurityCameraSystem } from 'src/app/models/securityCameraSystem';
import { SecurityCameraSystemService } from 'src/app/services/security-camera-system.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-security-camera-system-delete',
  templateUrl: './security-camera-system-delete.component.html',
  styleUrls: ['./security-camera-system-delete.component.css']
})
export class SecurityCameraSystemDeleteComponent implements OnInit {
  securityCameraSystems: SecurityCameraSystem[] = [];
  imageBasePath = environment.baseUrl
  productFilter: Number;
  productDeleteForm: FormGroup;
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
    this.productDeleteForm = this.formBuider.group({
      securityCameraSystemId: [null, Validators.required],
    })
  }

  delete() {
    if (this.productDeleteForm.valid) {
      let model = Object.assign({}, this.productDeleteForm.value);
      this.productService.deleteProduct(model).subscribe(response => {
        this.toastrService.success(response.message, "Silme Başarılı!")
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
