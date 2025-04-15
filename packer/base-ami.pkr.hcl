packer {
  required_plugins {
    amazon = {
      version = ">= 1.0.0"
      source  = "github.com/hashicorp/amazon"
    }
    ansible = {
      version = ">= 1.0.0"
      source  = "github.com/hashicorp/ansible"
    }
  }
}

variable "aws_region" {
  type    = string
  default = "us-west-2"
}

variable "ami_prefix" {
  type    = string
  default = "hardened-base"
}

source "amazon-ebs" "ubuntu" {
  ami_name      = "${var.ami_prefix}-${formatdate("YYYY-MM-DD-hh-mm-ss", timestamp())}"
  instance_type = "t2.micro"
  region        = var.aws_region
  
  source_ami_filter {
    filters = {
      name                = "ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
    }
    most_recent = true
    owners      = ["099720109477"] # Canonical
  }
  
  ssh_username = "ubuntu"
  
  tags = {
    Name        = "Hardened Base Image"
    Environment = "dev"
    Builder     = "Packer"
  }
}

build {
  hcp_packer_registry {
    bucket_name = "base-ubuntu"
    description = "Base Ubuntu AMI with security hardening"

    bucket_labels = {
      "os" = "ubuntu"
    }
  }

  name = "hardened-ubuntu"
  sources = [
    "source.amazon-ebs.ubuntu"
  ]
  
  provisioner "ansible" {
    playbook_file = "../ansible/packer/hardening.yml"
  }
}