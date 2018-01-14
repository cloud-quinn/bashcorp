# BashCorp Ltd. Company Website

## Prerequisites:

  1. Install VirtualBox
  2. Install Vagrant
  3. `vagrant plugin install vagrant-vbguest`
  4. `vagrant plugin install vagrant-proxyconf`

## To develop

A development box with everything needed to minify, lint, test, deploy
and run the site is all set up using `build/Vagrantfile`.  If you need
to configure a proxy server, this is the place to do so.

### 1. Run Vagrant

  1. `vagrant up`
  2. `vagrant ssh`

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
