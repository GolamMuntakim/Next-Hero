import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>Gallary</h1>
          <div>
          {
                [1,2,3,4,5]?.map((img)=>(
                    <Image key={img} src={`/images/${img}.png`} alt="" height="880" width="520"/>
                ))
            }
          </div>
            {/* <Image src="/images/slide1.png" alt="" height="880" width="520"/> */}
        </div>
    );
};

export default page;