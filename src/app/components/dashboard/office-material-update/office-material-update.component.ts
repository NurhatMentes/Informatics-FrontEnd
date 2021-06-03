import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RadioControlValueAccessor, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OfficeMaterial } from 'src/app/models/officeMaterial';
import { OfficeMaterialImageService } from 'src/app/services/office-material-image.service';
import { OfficeMaterialService } from 'src/app/services/office-material.service';
import { environment } from 'src/environments/environment';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-office-material-update',
  templateUrl: './office-material-update.component.html',
  styleUrls: ['./office-material-update.component.css']
})
export class OfficeMaterialUpdateComponent implements OnInit {

  officeMaterials: OfficeMaterial[] = [];
  imageBasePath = environment.baseUrl
  productFilter: Number;
  productUpdateForm: FormGroup;
  dataLoaded = false;
  bodyText: string;
  imageAddForm: FormGroup;


  
  constructor(
    private productService: OfficeMaterialService,
    private formBuider: FormBuilder,
    private toastrService: ToastrService,
    private imageService: OfficeMaterialImageService,
    private modalService: ModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateProductAddForm();
    this.createImageAddForm();
    this.getOfficeMaterial()
  }



  openModal(id: string) {
    this.modalService.open(id);
    this.getOfficeMaterial();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


  createImageAddForm() {
    this.imageAddForm = this.formBuilder.group({
      officeMaterialId: ['', Validators.required],
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
      formData.append("officeMaterialId", this.imageAddForm.get('officeMaterialId').value);
      this.imageService.updated(formData).subscribe(response => {
        this.toastrService.success(response.message);
      }, error => {
        this.toastrService.error(error.error.message);
      })
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik');
    }
  }



  updateProductAddForm() {
    this.productUpdateForm = this.formBuider.group({
      officeMaterialId: [null, Validators.required],
      officeName: [null, Validators.required],
      price: [null, Validators.required],
      oldPrice: [null],
      stockQuantity: [null, Validators.required],
      description: [null, Validators.required],
      quickDescription: [null, Validators.required],
      features: [null, Validators.required],
    })
  }

  update() {
    if (this.productUpdateForm.valid) {
      let model = Object.assign({}, this.productUpdateForm.value);
      this.productService.updateProduct(model).subscribe(response => {
        this.toastrService.success(response.message, "Güncelleme Başarılı!")
        console.log(response.message)
      }, e => {
        this.toastrService.success("Ürün Güncelleme Başarılı!.");
      })
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik');
    }
  }

  getOfficeMaterial() {
    this.productService.getOfficeMaterial().subscribe(response => {
      this.officeMaterials = response.data
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
