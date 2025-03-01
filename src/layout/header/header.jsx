import React from 'react'
import { Flex,Box,Button} from '@radix-ui/themes'
import logo from '../../../public/assets/Group 1.png'
import Image from 'next/image'
const header = () => {
  return (
  <Flex asChild>
<div className="flex !justify-between w-full items-center px-16 py-2 bg-white shadow-md">
<Box><Image src={logo}     alt="logo"
        width={100} height={80}
        className="rounded-lg object-cover"/></Box>
 <Flex asChild>
  <div className='!justify-between w-64'>
<Box className='hover:cursor-pointer'>Home</Box>
<Box>About us</Box>
<Box>Brand</Box>
<Box>Blogs</Box>
</div>
 </Flex>
 <Box><Button className='bg-primary' >Contact us</Button></Box>
 </div>
  </Flex>
  )
}

export default header;
