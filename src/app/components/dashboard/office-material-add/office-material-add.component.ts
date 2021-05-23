import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OfficeMaterialService } from 'src/app/services/office-material.service';
import { OfficeMaterialImage } from 'src/app/models/officeMaterialImage';

@Component({
  selector: 'app-office-material-add',
  templateUrl: './office-material-add.component.html',
  styleUrls: ['./office-material-add.component.css']
})
export class OfficeMaterialAddComponent implements OnInit {

  productAddForm: FormGroup;
  officeMaterialImages: OfficeMaterialImage[] = [];

  constructor(private formBuider: FormBuilder,
    private productService: OfficeMaterialService,
    private toastrService: ToastrService) {   }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuider.group({
      officeName: [null, Validators.required],
      price: [null, Validators.required],
      oldPrice: ["0"],
      stockQuantity: [null, Validators.required],
      description: [null, Validators.required],
      quickDescription: [null, Validators.required],
      features: [null, Validators.required],
      imagePath: [null],
    })
  }

  add() {
    if (this.productAddForm.valid) {
      let model = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(model).subscribe(response => {
        this.toastrService.success(response.message, "Başarılı!")
        console.log(response.message)
      })
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat!")
    }
  }

}
