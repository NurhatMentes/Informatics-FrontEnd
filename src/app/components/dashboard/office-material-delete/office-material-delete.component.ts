import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OfficeMaterial } from 'src/app/models/officeMaterial';
import { OfficeMaterialService } from 'src/app/guards/services/office-material.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-office-material-delete',
  templateUrl: './office-material-delete.component.html',
  styleUrls: ['./office-material-delete.component.css']
})
export class OfficeMaterialDeleteComponent implements OnInit {

  officeMaterials: OfficeMaterial[] = [];
  imageBasePath = environment.baseUrl
  productFilter: Number;
  productDeleteForm: FormGroup;
  dataLoaded = false;

  constructor(
    private productService: OfficeMaterialService,
    private formBuider: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.deleteProductAddForm();
    this.getOfficeMaterial()
  }



  deleteProductAddForm() {
    this.productDeleteForm = this.formBuider.group({
      officeMaterialId: [null, Validators.required],
    })
  }

  delete() {
    if (this.productDeleteForm.valid) {
      let model = Object.assign({}, this.productDeleteForm.value);
      this.productService.deleteProduct(model).subscribe(response => {
        this.toastrService.info(response.message, "Silme Başarılı!")
        console.log(response.message)
        window.location.reload();
      },e => {
        this.toastrService.success("Ürünü Silme Başarılı!");
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
