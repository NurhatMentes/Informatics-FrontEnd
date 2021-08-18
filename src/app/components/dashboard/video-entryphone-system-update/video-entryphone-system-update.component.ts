import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VideoEntryphoneSystem } from 'src/app/models/videoEntryphoneSystem';
import { VideoEntryphoneSystemService } from 'src/app/guards/services/video-entryphone-system.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-entryphone-system-update',
  templateUrl: './video-entryphone-system-update.component.html',
  styleUrls: ['./video-entryphone-system-update.component.css']
})
export class VideoEntryphoneSystemUpdateComponent implements OnInit {


  videoEntryphoneSystems: VideoEntryphoneSystem[] = [];
  imageBasePath = environment.baseUrl
  productFilter: Number;
  productUpdateForm: FormGroup;
  dataLoaded = false;

  constructor(
    private productService: VideoEntryphoneSystemService,
    private formBuider: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.updateProductAddForm();
    this.getSecurityCameraSystems()
  }



  updateProductAddForm() {
    this.productUpdateForm = this.formBuider.group({
      videoEntryphoneSystemsId: [null, Validators.required],
      videoName: [null, Validators.required],
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


  getSecurityCameraSystems() {
    this.productService.getVideoEntryphoneSystems().subscribe(response => {
      this.videoEntryphoneSystems = response.data
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
