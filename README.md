# Citrus Hack 
This is the repository for our official Citrus Hack website, organized by ACM@UCR.

## What is Citrus Hack?
Citrus Hack is Riverside's first student organized hackathon. The purpose of this event is to incite more technological creativity within the undergraduate class and to benefit the tech community as a whole.

## How do I start contributing?

1. Create your github account (duh!)
2. Request write access to the repository. Since you're reading this, I presume you already know who to ask. :P
3. Clone the repository i.e ` git clone https://github.com/citrushack/citrushack.github.io.git`
4. Set up the environment for building our files
    * Install Node.js/npm from [here.](http://nodejs.org/download/)
    * Install Ruby/gem from [here.](https://www.ruby-lang.org/en/installation/)
    * Install Gulp `npm install -g gulp` Might need to run this as superuser if you're on a linux/unix distro.
    * Install SASS, Compass, and Bootstrap `gem install sass compass bootstrap-sass`
5. Move to the root directory of the project and run `npm install` to fetch all the required node packages.
6. Now run `gulp` from the root of the project. This will run our gulp file which will build all our SCSS files and Javascripts. It will continue to run and rebuild any files as you start to modify them.
7. Finally, open `index.html` and view the webpage. Id recommend using some like `python -m SimpleHTTPServer 8080` to host the site for you but its not required.
