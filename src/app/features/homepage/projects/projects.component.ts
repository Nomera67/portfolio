import { Component } from '@angular/core';
import { ProjectsItems } from 'src/app/models/projects-items';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projetList: ProjectsItems[] = [
    {
      name: 'Portfolio',
      description: 'Le portfolio sur lequel vous êtes et qui me permet de mettre en avant mes différents projets passés et à venir',
      picture: '../../../../assets/pictures-portfolio/Portfolio.PNG',
      technologies: 'Angular, TypeScript, JavaScript, SCSS, Github, Flexbox, Grid',
      github: 'https://github.com/Nomera67/portfolio',
      directory: 'https://www.yrdev.fr',
    },
    {
      name: 'Intégration Finsweet',
      description: `L'intégration d'une maquette Figma`,
      picture: '../../../../assets/pictures-portfolio/Finsweet.PNG',
      technologies: 'HTML5, SCSS, JavaScript, Flexbox, Grid',
      github: 'https://github.com/Nomera67/Finsweet-Blog',
      directory: 'https://nomera67.github.io/Finsweet-Blog/',
    },
    {
      name: 'Projet à venir',
      description: '',
      picture: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: '',
      github: '',
      directory: '',
    }
  ]

}
