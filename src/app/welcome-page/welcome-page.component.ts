import { Component, OnInit } from '@angular/core';
import {ImportService} from "../services/import.service";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(
    private importService: ImportService,
    private dataService: DataService,
    private router: Router
  ) { }

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
    const data = this.importService.mapFileToData(fileData);
    this.dataService.setData(data);
    this.router.navigate(['/list'])
  }
}
