import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VideoEntryphoneSystem } from 'src/app/models/videoEntryphoneSystem';
import { VideoEntryphoneSystemImageService } from 'src/app/services/video-entryphone-system-image.service';
import { VideoEntryphoneSystemService } from 'src/app/services/video-entryphone-system.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-video-entryphone-system-add',
  templateUrl: './video-entryphone-system-add.component.html',
  styleUrls: ['./video-entryphone-system-add.component.css']
})
export class VideoEntryphoneSystemAddComponent implements OnInit {
  videoEntryphoneSystems: VideoEntryphoneSystem[] = [];
  productAddForm: FormGroup;
  imageAddForm: FormGroup;
  bodyText: string;
  isAdded: boolean = false;
  isAdded2: boolean = true;
  productFilter: Number;

  constructor(private formBuilder: FormBuilder,
    private productService: VideoEntryphoneSystemService,
    private toastrService: ToastrService,
    private modalService: ModalService,
    private imageService: VideoEntryphoneSystemImageService) { }

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
    this.getVideoEntryphoneSystems();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


  createImageAddForm() {
    this.imageAddForm = this.formBuilder.group({
      videoEntryphoneSystemsId: ['', Validators.required],
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
      formData.append("videoEntryphoneSystemsId", this.imageAddForm.get('videoEntryphoneSystemsId').value);
      this.imageService.updated(formData).subscribe(response => {
        this.toastrService.success(response.message);
      }, error => {
        this.toastrService.error(error.error.message);
      })
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik');
    }
  }

  getSelectedProduct(videoEntryphoneSystemsId: Number) {
    if (this.productFilter == videoEntryphoneSystemsId)
      return true;
    else
      return false;
  }


  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      videoName: [null, Validators.required],
      price: [null, Validators.required],
      oldPrice: ["0"],
      stockQuantity: [null, Validators.required],
      description: [null, Validators.required],
      quickDescription: [null, Validators.required],
      features: [null, Validators.required],
    })
  }

  getVideoEntryphoneSystems() {
    this.productService.getProduct().subscribe(response => {
      this.videoEntryphoneSystems = response.data
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
