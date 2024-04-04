import { Component, OnInit } from '@angular/core';
import {TagListImporterService} from "../service/tag-list.importer.service";
import {TagListService} from "../service/tag-list.service";

@Component({
  selector: 'app-tag-list-upload',
  templateUrl: './tag-list-upload.component.html',
  styleUrls: ['./tag-list-upload.component.scss']
})
export class TagListUploadComponent implements OnInit {

  constructor(
    private tagListImportService: TagListImporterService,
    private tagListService: TagListService
  ) {
  }

  ngOnInit(): void {
  }

  uploadFile($event: Event) {
    // console.log(($event.target as any).files[0]); // outputs the first file
    this.readFile(($event.target as any).files[0])
  }

  private readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.onRead(reader.result as string);
    };
    reader.readAsText(file);
  }

  private onRead(fileContent: string)
  {
    const fileData = JSON.parse(fileContent)
    const tagList = this.tagListImportService.importTagList(fileData);
    this.tagListService.setTagList(tagList);
  }

}
