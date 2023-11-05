<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  
<h1 align="center">AZBook</h1>

  <p align="center">
    <br />
    <a href="https://github.com/Therodore99/AZBook"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

AZBook is an e-commerce platform dedicated to book sales. This project has developed the main webpage for the AZBook online bookstore.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* [![JavaScript][JavaScript]][JavaScript-url]
* [![HTML5][HTML5]][HTML5-url]
* [![CSS][CSS]][CSS-url]
* [![node.js][node.js]][node.js-url]
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites
Our web development project use HTML, CSS, JavaScript, Node.js. So it's better to know these techniques before you download the code.

* [Node.js Install Instruction](https://nodejs.org/en/download/package-manager#windows-1)

### Depolyment
After installing Node.js, open your terminal (mac/linux) or command prompt (windows) and run this command: "npm install http-server -g" (put sudo before npm if you are mac/linux users). If http-server installation is complete, go to your project directory by using "cd" command and run command "http-server". It will provide you url(s) to access your project from your browser, you usually can access your project from this address: "http://127.0.0.1:8080".
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### How to play
The program detects the player's actions on the keyboard. When the player presses the up, down, left and right keys, the wizard moves according to the direction. When the player presses the space bar, the wizard fires fireballs. gremlins are destroyed when the fireball touches any part of the gremlins. Players can also press the Tab key to launch a frozen puck. The balls freeze gremlins so they can't move.After 10 seconds (600 frames), the map generates a powerup based on the location specified in the level1.txt file. When wizard touches powerup, its speed immediately increases to 4 pixels per frame for 600 frames. The user can view the remaining time of the acceleration effect through the progress bar in the bottom bar. When used by wizard, powerup regenerates at a random legal location (without any walls) on the current map.

### Win and lose conditions
The current level is completed when the player reaches the exit. If there is another level, that level is then loaded with the player starting in the position defined in the map layout. The player retains the number of lives they had previously. 

If there are no more levels and the player wins, display a screen saying "You win". 

If the player loses all of their lives, display a screen saying "Game over”.

<p align="right">(<a href="#readme-top">back to top</a>)</p>









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: demoImage/GameDemo.png
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: [https://www.java.com/en/](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://www.w3schools.com/html/
[CSS]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.w3schools.com/css/
[node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node.js-url]: https://nodejs.org/en
