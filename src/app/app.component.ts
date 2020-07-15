import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  animateChild,
  style,
  group,
  animate,
  sequence
} from '@angular/animations';
import * as ParticlesConfig  from './../assets/data/particlesjs-config.json';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        query(':enter', style({ transform: 'translateX(100%)', opacity: 0 }), {
          optional: true
        }),
        sequence([
          group([
            query('@*, :leave', [animateChild()], { optional: true }),
            query(
              ':leave',
              [
                style({ transform: 'translateX(0%)' }),
                animate(
                  '0.8s ease-in-out',
                  style({ transform: 'translateX(-100%)', opacity: 0 })
                )
              ],
              { optional: true }
            ),
            query(
              ':enter',
              [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate(
                  '0.8s ease-in-out',
                  style({ transform: 'translateX(0%)', opacity: 1 })
                )
              ],
              { optional: true }
            ),
            query('@*, :enter', [animateChild()], { optional: true })
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }

  ngOnInit(){
    // particlesJS('particles-js', ParticlesConfig, function() {
    //   console.log('callback - particles.js config loaded');
    // });
    particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 38,
          "density": {
            "enable": true,
            "value_area": 962.0472365193136
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
    })    
  }
}
