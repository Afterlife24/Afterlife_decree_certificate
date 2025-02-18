// import React from 'react';
// import { useParams, Navigate } from 'react-router-dom';
// import { Certificate } from '../types';
// import { certificates } from '../data/certificates';
// import { Calendar, Building2, UserRound } from 'lucide-react';

// const CertificateDisplay: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const certificate = certificates.find((cert) => cert.id === id);

//   if (!certificate) {
//     return <Navigate to="/not-found" replace />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="p-8">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Internship Certificate</h1>
//               <p className="text-lg text-gray-600">This is to certify the completion of internship</p>
//             </div>

//             <div className="mb-8">
//               <img 
//                 src={certificate.certificateUrl} 
//                 alt="Certificate" 
//                 className="w-full h-auto rounded-lg shadow-md"
//               />
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <UserRound className="w-6 h-6 text-blue-600" />
//                 <div>
//                   <p className="text-sm text-gray-500">Intern Name</p>
//                   <p className="text-lg font-semibold">{certificate.internName}</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <Building2 className="w-6 h-6 text-blue-600" />
//                 <div>
//                   <p className="text-sm text-gray-500">Company</p>
//                   <p className="text-lg font-semibold">{certificate.companyName}</p>
//                   <p className="text-md text-gray-600">{certificate.position}</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <Calendar className="w-6 h-6 text-blue-600" />
//                 <div>
//                   <p className="text-sm text-gray-500">Duration</p>
//                   <p className="text-lg font-semibold">
//                     {new Date(certificate.startDate).toLocaleDateString()} - {new Date(certificate.endDate).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateDisplay;













import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Certificate } from '../types';
import { certificates } from '../data/certificates';
import { Calendar, Building2, UserRound, Award } from 'lucide-react';

const CertificateDisplay: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const certificate = certificates.find((cert) => cert.id === id);

  if (!certificate) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Company Logo */}



    {/* Company Logo and Right Corner Image */}
        <div className="w-full bg-white shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* Left Side: Logo and Company Name */}
        <div className="flex items-center space-x-2">
          
        <span className="text-2xl font-bold text-gray-800">After Life</span>
        <img 
          src="https://i.postimg.cc/SsvZ6j4n/Robot.png" 
          alt="Company Logo" 
          className="w-12 h-12 object-contain" 
        />
    </div>

    {/* Right Side: Additional Image */}
        <div>
          <img 
            src="https://i.postimg.cc/q7ZYL1XB/msme.png" 
            alt="Right Corner Image" 
            className="w-12 h-12 object-contain" 
          />
        </div>
      </div>  
    </div>


      {/* Certificate Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Certificate Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-8 text-center">
              <h1 className="text-4xl font-bold mb-2">Certificate of Completion</h1>
              <p className="text-blue-100 text-lg">This is to certify that</p>
            </div>

            <div className="p-8">
              {/* Intern Name */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{certificate.internName}</h2>
                <p className="text-lg text-gray-600">has successfully completed the internship as</p>
                <p className="text-2xl font-semibold text-blue-600 mt-2">{certificate.position}</p>
              </div>

              {/* Certificate Image */}
              <div className="mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                  <img 
                    src={certificate.certificateUrl} 
                    alt="Certificate" 
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Company</p>
                    <p className="text-lg font-semibold text-gray-800">{certificate.companyName}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <UserRound className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Position</p>
                    <p className="text-lg font-semibold text-gray-800">{certificate.position}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm md:col-span-2">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Duration</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {new Date(certificate.startDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })} - {new Date(certificate.endDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-12 text-center">
                <div className="w-48 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-4"></div>
                <p className="text-gray-600">This certificate is issued by {certificate.companyName} - UDYAM-AP-10-0095067</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;