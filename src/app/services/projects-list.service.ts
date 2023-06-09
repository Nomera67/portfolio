import { Injectable } from '@angular/core';
import { ProjectsItems } from '../models/projects-items';

@Injectable({
  providedIn: 'root'
})
export class ProjectsListService {

  constructor() { }

  projetList: ProjectsItems[] = [
    {
      id: 100,
      name: 'Portfolio',
      description: 'Ce portfolio me permet de mettre en avant mes projets réalisés tout en gardant une trace de mon évolution et de mes progrès.',
      picture: '../../../../assets/pictures-portfolio/Portfolio.PNG',
      technologies: 'Angular, TypeScript, JavaScript, SCSS, GitHub',
      github: 'https://github.com/Nomera67/portfolio',
      directory: 'https://www.yrdev.fr',
    },
    {
      id: 101,
      name: 'Art Hover',
      description: 'Art Hover prend une liste aléatoire d\'oeuvres grâce à l\'API du Metropolitan Museum of Art de New York pour les afficher de manière ludique.',
      picture: '../../../../assets/pictures-portfolio/Arthover-light.jpg',
      technologies: 'Angular, TypeScript, API, JavaScript, SCSS, GitHub',
      github: 'https://github.com/Nomera67/art-hover',
      directory: 'https://www.arthover.yrdev.fr/'
    },
    {
      id: 102,
      name: 'Visit Panama',
      description:'Visit Panama permet d\'avoir un aperçu d\'une plateforme dédiée au tourisme au Panama avec plusieurs effets de parallaxe',
      picture: '../../../../assets/pictures-portfolio/Panama-light.jpg',
      technologies: 'Angular, TypeScript, SCSS, GitHub',
      github: 'https://github.com/Nomera67/visit-panama',
      directory: 'https://panama.yrdev.fr/',
    },
    {
      id: 103,
      name: 'Finsweet',
      description: 'Finsweet est l\'intégration simple d\'une maquette Figma.',
      picture: '../../../../assets/pictures-portfolio/Finsweet-light.jpg',
      technologies: 'HTML5, SCSS, JavaScript, Flexbox, Grid',
      github: 'https://github.com/Nomera67/Finsweet-Blog',
      directory: 'https://nomera67.github.io/Finsweet-Blog/',
    },
    {
      id: 104,
      name: 'Projet à venir',
      description: '',
      picture: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: '',
      github: '',
      directory: '',
    }
  ];
}
