import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VideoEntryphoneSystemService } from 'src/app/services/video-entryphone-system.service';

@Component({
  selector: 'app-video-entryphone-system-add',
  templateUrl: './video-entryphone-system-add.component.html',
  styleUrls: ['./video-entryphone-system-add.component.css']
})
export class VideoEntryphoneSystemAddComponent implements OnInit {


  productAddForm: FormGroup;
  constructor(private formBuider: FormBuilder,
    private productService: VideoEntryphoneSystemService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuider.group({
      videoName: [null, Validators.required],
      price: [null, Validators.required],
      oldPrice: ["0"],
      stockQuantity: [null, Validators.required],
      description: [null, Validators.required],
      quickDescription: [null, Validators.required, Validators.maxLength(350)],
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
