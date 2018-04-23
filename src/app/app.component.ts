import { Component ,OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({

    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit{

    //before loading view --app.comp.html
    constructor(){
        console.log("App Component Created");
        
    }

    //after loading view
    ngOnInit(): void {
        console.log('Call back');
        
    }
    title:string = 'Product app';

   
}