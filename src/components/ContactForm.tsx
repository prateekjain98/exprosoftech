import React, { useState } from 'react';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  phone: string;
  description: string;
  '00NJ4000004WaPG': string; // Interested Services
  '00NJ4000004WaPF': string; // Country
  '00NJ4000004WaPH': string; // Preferred Contact Method
}

const ContactForm: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    phone: '',
    description: '',
    '00NJ4000004WaPG': '',
    '00NJ4000004WaPF': '',
    '00NJ4000004WaPH': ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Hide the form and show success message
    setShowSuccess(true);
    
    // Submit the form to Salesforce
    form.submit();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (showSuccess) {
    return (
      <h2 className="text-green-600 mt-5 text-center">
        Thank you! Your form has been submitted successfully. Our consultant will contact you shortly.
      </h2>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-dark rounded-lg shadow-lg">
      {/* Hidden iframe for form submission */}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} />
      
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>

      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5j00000BcTDI"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="oid" value="00D5j00000BcTDI" />
        <input type="hidden" name="retURL" value="http://" />
        <input type="hidden" name="lead_source" value="Web" />

        <div className="form-group">
          <label htmlFor="first_name" className="block text-sm font-medium text-white mb-1">
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            maxLength={40}
            type="text"
            required
            pattern="^[A-Za-z\s\-]+$"
            title="Only letters, spaces, and hyphens allowed"
            value={formData.first_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name" className="block text-sm font-medium text-white mb-1">
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            maxLength={40}
            type="text"
            required
            pattern="^[A-Za-z\s\-]+$"
            title="Only letters, spaces, and hyphens allowed"
            value={formData.last_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Business Email
          </label>
          <input
            id="email"
            name="email"
            maxLength={80}
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            maxLength={40}
            type="text"
            required
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            maxLength={40}
            type="tel"
            pattern="[0-9]{10,15}"
            title="Phone number must be 10 to 15 digits"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="00NJ4000004WaPG" className="block text-sm font-medium text-white mb-1">
            What Salesforce services are you interested in?
          </label>
          <select
            id="00NJ4000004WaPG"
            name="00NJ4000004WaPG"
            title="Interested Services"
            value={formData['00NJ4000004WaPG']}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--None--</option>
            <option value="Implementation">Implementation</option>
            <option value="Consulting">Consulting</option>
            <option value="Custom Development">Custom Development</option>
            <option value="Integration">Integration</option>
            <option value="Managed Services">Managed Services</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
            Briefly describe your requirement
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>

        <div className="form-group">
          <label htmlFor="00NJ4000004WaPF" className="block text-sm font-medium text-white mb-1">
            Country
          </label>
          <select
            id="00NJ4000004WaPF"
            name="00NJ4000004WaPF"
            title="Country"
            value={formData['00NJ4000004WaPF']}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--None--</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="00NJ4000004WaPH" className="block text-sm font-medium text-white mb-1">
            Preferred Contact Method
          </label>
          <select
            id="00NJ4000004WaPH"
            name="00NJ4000004WaPH"
            title="Preferred Contact Method"
            value={formData['00NJ4000004WaPH']}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--None--</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
        </div>

        <button
          type="submit"
          name="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// Countries array
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
  "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire (Ivory Coast)", "Croatia",
  "Cuba", "Cyprus", "Czech Republic (Czechia)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini (Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine (Observer state)", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan (Limited recognition)", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City (Holy See – Observer state)", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default ContactForm; 