# BashCorp Ltd. Company Website

## Prerequisites:

### Note for Windows systems:
You'll probably have an easier time with all this CLI rubbish by enabling the
Windows Subsystem for Linux.  It's baked into Windows 10 and will give you a full
Bash terminal: https://docs.microsoft.com/en-us/windows/wsl/install-win10

  1. Install VirtualBox
     On Windows 10 SSfL, use `apt-get install virtualbox`, for other platforms 
     check https://www.virtualbox.org/wiki/Downloads
  2. Install Vagrant
     On Windows 10 SSfL, use `apt-get install vagrant`, for other platforms 
     check https://www.vagrantup.com/downloads.html

## To develop
A development box with everything needed to minify, lint, test, deploy
and run the site is all set up using `build/Vagrantfile`.  If you need
to configure a proxy server, this is the place to do so.

### 1. Run Vagrant

  1. `vagrant up`
  2. `vagrant rsync-auto` to keep the files in sync
  3. In a new bash/terminal window,  `vagrant ssh`

### 2. Run site

From within a vagrant SSH window, run `npm start` to minify, lint and run on port 3000.  

### 3. Edit files

Edit the files in `src` in your favourite editor.  Changes will automatically
be deployed and should be visible on a refresh- CSS changes will automatically
appear without a refresh.

### 4. View site

You can view the site by going to http://localhost:3000 in your browser.

## To build an image for release:

  1. `vagrant ssh`
  2. `sh build/deploy_images.sh`

You'll need a Docker account with access to the BashCorp Ltd. docker repo.  It'll
ask you for these credentials when you run it.