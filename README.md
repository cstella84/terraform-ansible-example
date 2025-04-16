# HCP Terraform with Ansible Example

A no-code HCP Terraform module for deploying application infrastructure with Ansible configuration management.

## Overview

This module demonstrates how to deploy and configure a web application using:
- HCP Packer for creating hardened base AMIs
- HCP Terraform for infrastructure provisioning
- Red Hat Ansible for application configuration and deployment

While the module supports multiple application types (NextJS, React, Express, Flask, Django), the included example specifically deploys a NextJS sample application.

## Architecture

The deployment process follows these steps:

1. **Base Image Creation**: HCP Packer creates a hardened Ubuntu AMI using Ansible
2. **Infrastructure Deployment**: HCP Terraform provisions an EC2 instance using the hardened AMI
3. **Application Configuration**: Ansible configures the instance and deploys the application

## Prerequisites

- AWS account
- HCP account with Packer
- HCP Terraform account for using this as a no-code module
- SSH key pair for connecting to the EC2 instance

## Usage

### 1. Build the Base AMI with HCP Packer

First, build the hardened base image:

```bash
cd packer
packer init .
packer build base-ami.pkr.hcl
```

> **Note**: The Packer template applies security hardening via Ansible during image creation.
> Configure the HCP Packer run task to validate the AMI that will be used by the Terraform module.

### 2. Configure variable sets

Create the following project-scoped variable sets for authentication.
(to be completed)
1. 

### 3. Deploy with Terraform

Publish this module to your HCP Terraform private registry

## Implementation Notes

- This module intentionally clones the repository to access the sample application code, demonstrating Ansible's Git clone functionality rather than using a relative path.
- The no-code module is designed to be published to HCP Terraform Registry.
- The module demonstrates role-based Ansible architecture for different application types.
- Security hardening is applied to the base image using the Ansible playbook in `ansible/packer/hardening.yml`.

## Supported Application Types

The module supports the following application types:
- `nextjs` - Next.js applications (demonstrated in the sample app)
- `react` - React single-page applications
- `express` - Express.js API servers
- `flask` - Python Flask applications
- `django` - Python Django applications

## Directory Structure

```
terraform-ansible-example/
├── main.tf                  # Main Terraform configuration
├── variables.tf             # Input variables
├── outputs.tf               # Output values
├── ansible/
│   ├── deploy/              # Deployment-time Ansible code
│   │   ├── deploy.yml       # Main deployment playbook
│   │   └── roles/           # Application-specific roles
│   └── packer/              # Packer-time Ansible code
│       ├── hardening.yml    # Security hardening playbook
│       └── templates/       # Configuration templates
└── packer/
    └── base-ami.pkr.hcl     # Packer template for AMI creation
```

## License

MIT