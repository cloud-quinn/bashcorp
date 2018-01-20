# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"

  config.vm.hostname = "bashcorpdev"

  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"

  config.vm.synced_folder ".", "/vagrant", type: "virtualbox"

  config.vm.provider :virtualbox do |vb|
    vb.name = "BashcorpDev"
    vb.memory = 1024
    vb.cpus = 2
  end

  config.vm.provision "shell", path: "build/devprovision.sh"
end
