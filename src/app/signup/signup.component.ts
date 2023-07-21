import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

email: String="";
username: String="";
password:  String="";

constructor(private router: Router, private http: HttpClient) { }
ngOnInit(){
console.log(this.email)};

signup():void{
const data={
email:this.email,
username:this.username,
password:this.password,}
 this.http.post('http://localhost:8080/signup',data, { responseType: 'text' })
      .subscribe(
        response => {

          console.log(response);
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        }
      );
  }

}


