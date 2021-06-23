import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RadioControlValueAccessor, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
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
  this.getOfficeMaterial()

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
