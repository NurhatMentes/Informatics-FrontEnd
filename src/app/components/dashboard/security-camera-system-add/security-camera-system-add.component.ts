import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SecurityCameraSystem } from 'src/app/models/securityCameraSystem';
import { SecurityCameraSystemImageService } from 'src/app/services/security-camera-system-image.service';
import { SecurityCameraSystemService } from 'src/app/services/security-camera-system.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-security-camera-system-add',
  templateUrl: './security-camera-system-add.component.html',
  styleUrls: ['./security-camera-system-add.component.css']
})
export class SecurityCameraSystemAddComponent implements OnInit {
  apiUrl = 'https://localhost:44381/api/';
  productAddForm: FormGroup;
  securityCameraSystems: SecurityCameraSystem[] = [];
  imageAddForm: FormGroup;
  bodyText: string;
  isAdded: boolean = false;
  isAdded2: boolean = true;
  productFilter: Number;
  

  constructor(private formBuilder: FormBuilder,
    private productService: SecurityCameraSystemService,
    private imageService: SecurityCameraSystemImageService,
    private toastrService: ToastrService,
    private modalService: ModalService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.createImageAddForm();
    this.bodyText = 'This text can be updated in modal 1';

    if (this.isAdded == false) {
      this.isAdded2 = true;
    } else {
      this.isAdded2 = false;
    }
  }


  openModal(id: string) {
    this.modalService.open(id);
    this.getSecurityCameraSystems();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


  createImageAddForm() {
    this.imageAddForm = this.formBuilder.group({
      securityCameraSystemId: ['', Validators.required],
      file: [null],
    });
  }


  uploadFile(event: any) {
    const productImage = (event.target as HTMLInputElement).files[0];
    this.imageAddForm.patchValue({
      file: productImage
    });
    this.imageAddForm.get('file').updateValueAndValidity()
  }

  submitForm() {
    if (this.imageAddForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.imageAddForm.get('file').value);
      formData.append("securityCameraSystemId", this.imageAddForm.get('securityCameraSystemId').value);
      this.imageService.updated(formData).subscribe(response => {
        this.toastrService.success(response.message);
      }, error => {
        this.toastrService.error(error.error.message);
      })
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik');
    }
  }

  getSelectedProduct(securityCameraSystemId: Number) {
    if (this.productFilter == securityCameraSystemId)
      return true;
    else
      return false;
  }





  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      cameraName: [null, Validators.required],
      price: [null, Validators.required],
      oldPrice: ["0"],
      stockQuantity: [null, Validators.required],
      description: [null, Validators.required],
      quickDescription: [null, Validators.required],
      features: [null, Validators.required],
    })
  }

  getSecurityCameraSystems() {
    this.productService.getProduct().subscribe(response => {
      this.securityCameraSystems = response.data
      console.log(response.success)
    })
  }

  add() {
    if (this.productAddForm.valid) {
      let model = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(model).subscribe(response => {
        this.toastrService.success(response.message, "Başarılı!")
        this.isAdded = true;
      }, e => {
        this.toastrService.success("Ürün Eklendi. Lütfen Ürün resminide yükleyiniz.");
        this.isAdded = true;
      })
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik');
    }
  }
}
