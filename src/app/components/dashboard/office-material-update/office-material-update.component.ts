import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OfficeMaterial } from 'src/app/models/officeMaterial';
import { OfficeMaterialService } from 'src/app/services/office-material.service';
import { environment } from 'src/environments/environment';

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
  
  constructor(
    private productService: OfficeMaterialService,
    private formBuider: FormBuilder,
    private toastrService: ToastrService) { }

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
