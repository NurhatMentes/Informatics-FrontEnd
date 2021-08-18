import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OfficeMaterialService } from 'src/app/guards/services/office-material.service';
import { OfficeMaterialImage } from 'src/app/models/officeMaterialImage';
import { OfficeMaterial } from 'src/app/models/officeMaterial';
import { OfficeMaterialImageService } from 'src/app/guards/services/office-material-image.service';
import { ModalService } from '../_modal';


@Component({
  selector: 'app-office-material-add',
  templateUrl: './office-material-add.component.html',
  styleUrls: ['./office-material-add.component.css']
})
export class OfficeMaterialAddComponent implements OnInit {
  bodyText: string;
  productAddForm: FormGroup;
  imageAddForm: FormGroup;
  officeMaterials: OfficeMaterial[] = [];
  officeMaterialImages: OfficeMaterialImage[] = [];
  isAdded: boolean = false;
  isAdded2: boolean = true;
  productFilter: Number;


  constructor(private formBuilder: FormBuilder,
    private productService: OfficeMaterialService,
    private toastrService: ToastrService,
    private imageService: OfficeMaterialImageService,
    private modalService: ModalService
  ) { }

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

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      officeName: [" ", Validators.required],
      price: [" ", Validators.required],
      oldPrice: ["0"],
      stockQuantity: [" ", Validators.required],
      description: [" ", Validators.required],
      quickDescription: [" ", Validators.required],
      features: [" ", Validators.required],
    })
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

  getSelectedProduct(officeMaterialId: Number) {
    if (this.productFilter == officeMaterialId)
      return true;
    else
      return false;
  }


  getOfficeMaterial() {
    this.productService.getProducts().subscribe(response => {
      this.officeMaterials = response.data
      console.log(response.data)
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
