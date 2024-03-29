import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ThemeService } from 'src/app/services/switch-mode/theme.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
  ]);

  isSwitchMode: boolean = false;

  constructor(public themeService: ThemeService) {}

  ngAfterViewInit(): void {
    emailjs.init("Nbhs3BIADrtWphID2");
  }

  ngOnInit(): void {
    const themeSubscription = this.themeService.getIsSwitchMode().subscribe((isSwitchMode: boolean) => {
      this.isSwitchMode = isSwitchMode;
    });
    window.addEventListener('beforeunload', () => {
      themeSubscription.unsubscribe();
    })
  }

  contactName: string = '';
  contactSurname: string = '';
  contactEmail: string = '';
  contactSociety!: string;
  contactMessage: string ='';

  public contactSubmit(form: NgForm){

    
    const formParams = {
      name: form.value.name,
      surname: form.value.surname,
      email: form.value.email,
      society: form.value.society,
      message: form.value.message
    };

    console.log(formParams);

    emailjs.send('service_trvdq6k', 'template_qlk5l6c', formParams, 'Nbhs3BIADrtWphID2')
      .then((result) => {
        console.log(result.text)
        form.reset();
      }, (error) => {
        console.log(error.text);
        alert('Une erreur s\'est produite lors de l\'envoi de votre message.');
      });
  }
}
