import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  

  constructor() {}

  ngAfterViewInit(): void {
    emailjs.init("Nbhs3BIADrtWphID2");
  }

  ngOnInit(): void {}

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
        console.log(result.text);
        alert('Votre message a été envoyé avec succès.');
        form.reset();
      }, (error) => {
        console.log(error.text);
        alert('Une erreur s\'est produite lors de l\'envoi de votre message.');
      });
  }
}
