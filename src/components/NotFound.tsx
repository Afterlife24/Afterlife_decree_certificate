// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AlertCircle } from 'lucide-react';

// const NotFound: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="text-center">
//         <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate Not Found</h1>
//         <p className="text-gray-600 mb-6">The certificate you're looking for doesn't exist.</p>
//         <Link 
//           to="/" 
//           className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
//         >
//           Go Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;













import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Award } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Company Logo */}
      <div className="w-full bg-white shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Tech Solutions Inc</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-12">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Certificate Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the certificate you're looking for. Please check the URL and try again.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;