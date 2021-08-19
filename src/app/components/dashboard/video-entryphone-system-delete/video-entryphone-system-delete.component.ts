import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VideoEntryphoneSystem } from 'src/app/models/videoEntryphoneSystem';
import { VideoEntryphoneSystemService } from 'src/app/services/video-entryphone-system.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-entryphone-system-delete',
  templateUrl: './video-entryphone-system-delete.component.html',
  styleUrls: ['./video-entryphone-system-delete.component.css']
})
export class VideoEntryphoneSystemDeleteComponent implements OnInit {

  videoEntryphoneSystems: VideoEntryphoneSystem[] = [];
  imageBasePath = environment.baseUrl
  productFilter: Number;
  productDeleteForm: FormGroup;
  dataLoaded = false;

  constructor(
    private productService: VideoEntryphoneSystemService,
    private formBuider: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.deleteProductAddForm();
    this.getSecurityCameraSystems()
  }




  deleteProductAddForm() {
    this.productDeleteForm = this.formBuider.group({
      securityCameraSystemId: [null, Validators.required],
    })
  }

  delete() {
    if (this.productDeleteForm.valid) {
      let model = Object.assign({}, this.productDeleteForm.value);
      this.productService.updateProduct(model).subscribe(response => {
        this.toastrService.success(response.message, "Silme Başarılı!")
        console.log(response.message)
      })
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat!")
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
