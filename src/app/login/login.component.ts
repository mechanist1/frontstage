import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email: String="";

password:  String="";

constructor(private router: Router, private http: HttpClient) { }
ngOnInit(){};

 signin(): void {
    const data2 = {
      password: this.password,
      email: this.email,
    }

    this.http.post('http://localhost:8080/signin', data2, { responseType: 'text' })
      .subscribe(
        response => {
          if (response != "Invalid credentials") {
            localStorage.setItem('token', response);
            console.log("User authenticated successfully");
            console.log("the token received is : ", response);


            this.router.navigateByUrl('/');
          } else {
            console.log(response);
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
