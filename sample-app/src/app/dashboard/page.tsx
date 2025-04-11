export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 text-white">
        <h1 className="text-3xl font-bold text-center text-green-400 mb-6">Success!</h1>
        <p className="text-lg mb-4">
          Congratulations! This application has been successfully deployed using HashiCorp Packer, Terraform, and Ansible.
        </p>
        <p className="text-lg mb-6">
          Use the navigation menu on the left to explore each step of the deployment process.
        </p>
        <div className="p-4 bg-gray-700 rounded-md">
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Deployment Overview</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-yellow-300">Packer:</strong> Used to create custom machine images</li>
            <li><strong className="text-yellow-300">Terraform:</strong> Used to provision and manage infrastructure</li>
            <li><strong className="text-yellow-300">Ansible:</strong> Used to configure and deploy the application</li>
          </ol>
        </div>
      </div>
    </div>
  );
}