// 3 images

// import React from 'react';

// const MediaGrid = () => {
//     return (
//         <div className="flex flex-wrap justify-center items-center gap-4">
//             {/* Large Media (Left) */}
//             <div className="w-full sm:w-1/2 aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
//                 {/* Replace with your image/video */}
//                 <img
//                     src="https://via.placeholder.com/400x600"
//                     alt="Large Media"
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//             <div className="flex flex-col gap-4">
//                 {/* Small Media (Top Right) */}
//                 <div className="w-32 h-40 sm:w-48 sm:h-60 bg-gray-200 rounded-lg overflow-hidden">
//                     <img
//                         src="https://via.placeholder.com/200x300"
//                         alt="Small Media 1"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Small Media (Bottom Right) */}
//                 <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gray-200 rounded-lg overflow-hidden">
//                     <img
//                         src="https://via.placeholder.com/200x200"
//                         alt="Small Media 2"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MediaGrid;




// 4 images

// import React from 'react';

// const MediaGrid = () => {
//     return (
//         <div className="flex flex-wrap justify-center items-center gap-4">
//             {/* Left Media (Vertical) */}
//             <div className="w-1/4 aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden">
//                 <img
//                     src="https://via.placeholder.com/200x300"
//                     alt="Left Media"
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//             {/* Right Section */}
//             <div className="flex flex-col gap-4">
//                 {/* Top Large Media */}
//                 <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
//                     <img
//                         src="https://via.placeholder.com/300x300"
//                         alt="Top Right Media"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Bottom Row (Two Smaller Images) */}
//                 <div className="flex gap-4">
//                     {/* Bottom Left Media */}
//                     <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gray-200 rounded-lg overflow-hidden">
//                         <img
//                             src="https://via.placeholder.com/200x200"
//                             alt="Small Media 2"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     {/* Bottom Right Media */}
//                     <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg overflow-hidden">
//                         <img
//                             src="https://via.placeholder.com/150x150"
//                             alt="Bottom Right Media"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MediaGrid;





// 5 images

// import React from 'react';

// const MediaGrid = () => {
//     return (
//         <div className="flex flex-col items-center gap-4">
//             {/* Top Row */}
//             <div className="flex gap-4 items-end">
//                 {/* Top Left Media */}
//                 <div className="w-48 h-32 sm:w-64 sm:h-40 bg-gray-200 rounded-lg overflow-hidden">
//                     <img
//                         src="https://via.placeholder.com/300x200"
//                         alt="Top Left Media"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Top Center Media */}
//                 <div className="w-32 h-48 sm:w-40 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
//                     <img
//                         src="https://via.placeholder.com/200x300"
//                         alt="Top Center Media"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>

//             {/* Bottom Row */}
//             <div className="flex gap-4">
//                 {/* Bottom Left Media */}
//                 <div className="w-48 h-32 sm:w-64 sm:h-40 bg-gray-200 rounded-lg overflow-hidden">
//                     <img
//                         src="https://via.placeholder.com/300x200"
//                         alt="Bottom Left Media"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Bottom Center Media */}
//                 <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
//                     <img
//                         src="https://via.placeholder.com/300x200"
//                         alt="Bottom Right Media"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Bottom Right Media */}
//                 <div className="w-48 h-32 sm:w-64 sm:h-40 bg-gray-200 rounded-lg overflow-hidden">
//                     <img
//                         src="https://via.placeholder.com/300x200"
//                         alt="Bottom Right Media"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MediaGrid;

import React from 'react';
import Image from 'next/image';

const MediaGrid = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            {/* Top Row */}
            <div className="flex gap-4 items-end">
                {/* Top Left Media */}
                <div className="relative w-48 h-32 sm:w-64 sm:h-40 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                        src="https://via.placeholder.com/300x200"
                        alt="Top Left Media"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Top Center Media */}
                <div className="relative w-32 h-48 sm:w-40 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                        src="https://via.placeholder.com/200x300"
                        alt="Top Center Media"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-4">
                {/* Bottom Left Media */}
                <div className="relative w-48 h-32 sm:w-64 sm:h-40 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                        src="https://via.placeholder.com/300x200"
                        alt="Bottom Left Media"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Bottom Center Media */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                        src="https://via.placeholder.com/300x200"
                        alt="Bottom Center Media"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Bottom Right Media */}
                <div className="relative w-48 h-32 sm:w-64 sm:h-40 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                        src="https://via.placeholder.com/300x200"
                        alt="Bottom Right Media"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MediaGrid;

