echo "⚙     Configuring..."

cd /vagrant
yum update -y -q > /dev/null
yum install epel-release -y -q  > /dev/null
yum install wget -y -q  > /dev/null
yum install nodejs -y -q  > /dev/null

# Add the Yum repo for Yarn (from https://yarnpkg.com/lang/en/docs/install/)
echo "💾     1/7 Installing Yarn from https://yarnpkg.com"
wget --quiet https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
yum install yarn -y -q  > /dev/null

echo "💾     2/7 Installing Docker"
yum install docker -y -q  > /dev/null
groupadd docker
usermod -aG docker vagrant
chkconfig docker on

# Install Azure CLI (https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
echo "💾     3/7 Installing Azure command-line tools"
rpm --import https://packages.microsoft.com/keys/microsoft.asc
sh -c 'echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo'
yum check-update  > /dev/null
yum install azure-cli -y -q  > /dev/null

# Install ACS engine for Azure/Kubernetes interaction https://github.com/Azure/acs-engine
echo "💾     4/7 Installing Kubernetes integration for Azure CLI"
rm -drf /var/tmp/acs*
wget --quiet https://github.com/Azure/acs-engine/releases/download/v0.10.0/acs-engine-v0.10.0-linux-amd64.tar.gz -P /var/tmp
tar -xzf /var/tmp/acs-engine-v0.10.0-linux-amd64.tar.gz --directory /var/tmp
cp /var/tmp/acs-engine-v0.10.0-linux-amd64/* /usr/local/bin

# Install Kubectl from https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-via-curl
echo "💾     5/7 Installing Kubernetes command line tools"
curl -LOs https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
mv ./kubectl /usr/local/bin/kubectl
az acs kubernetes install-cli  > /dev/null
cp /vagrant/infrastructure/patches/_docker_utils.py /usr/lib64/az/lib/python2.7/site-packages/azure/cli/command_modules/acr/_docker_utils.py
mkdir /home/vagrant/.kube
mkdir /home/vagrant/.ssh
cp -R /vagrant/build/kube.conf /home/vagrant/.kube/conf
cp -R /vagrant/infrastructure/ssh.conf/* /home/vagrant/.ssh
chown -R vagrant /home/vagrant/.kube
chown -R vagrant /home/vagrant/.ssh

# Get the repo ready to run using local offline dependencies
echo "💾     6/7 Installing packages for repo"
yarn install --silent --offline --non-interactive  > /dev/null
echo "💾     7/7 Installing WebPack and NodeMon"
yarn global add webpack nodemon --silent --offline --non-interactive  > /dev/null


# Move the user to the correct start folder
echo "📁     Setting start folder..."
echo "cd /vagrant" >> /home/vagrant/.bashrc
echo "PATH=\$PATH:~/usr/lib/node_modules/npm" >> /home/vagrant/.bashrc

echo "----------"
echo "✅     All ready.  Do 'vagrant ssh' to start."