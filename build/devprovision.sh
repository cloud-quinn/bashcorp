echo "⚙     Configuring..."

cd /vagrant
yum update -y -q
yum install epel-release -y -q
yum install wget -y -q

# Add the Yum repo for Yarn (from https://yarnpkg.com/lang/en/docs/install/)
echo "💾     Installing Yarn from https://yarnpkg.com"
wget --quiet https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
yum install yarn -y -q

echo "💾     Installing Docker"
yum install docker -y -q

# Install Azure CLI (https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
echo "💾     Installing Azure command-line tools"
rpm --import https://packages.microsoft.com/keys/microsoft.asc
sh -c 'echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo'
yum check-update
yum install azure-cli -y -q

# Install ACS engine for Azure/Kubernetes interaction https://github.com/Azure/acs-engine
echo "💾     Installing Kubernetes integration for Azure CLI"
rm -drf /var/tmp/acs*
wget --quiet https://github.com/Azure/acs-engine/releases/download/v0.10.0/acs-engine-v0.10.0-linux-amd64.tar.gz -P /var/tmp
tar -xzf /var/tmp/acs-engine-v0.10.0-linux-amd64.tar.gz --directory /var/tmp
cp /var/tmp/acs-engine-v0.10.0-linux-amd64/* /usr/local/bin

# Install Kubectl from https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-via-curl
echo "💾     Installing Kubernetes command line tools"
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
mv ./kubectl /usr/local/bin/kubectl

# Get the repo ready to run using local offline dependencies
echo "💾     Installing packages for repo"
yarn install --silent --offline --non-interactive
echo "💾     Installing WebPack and NodeMon"
yarn global add webpack nodemon --silent --offline --non-interactive

# Move the user to the correct start folder
echo "📁     Setting start folder..."
echo "cd /vagrant" >> /home/vagrant/.bashrc

echo "----------"
echo "✅     All ready.  Do 'vagrant ssh' to start."